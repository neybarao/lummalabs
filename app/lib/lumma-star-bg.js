/* eslint-disable */
/*!
 * LummaStarBG — background WebGL2 de partículas em forma de estrela (Lumma Labs)
 *
 * Uso:
 *   <div class="hero" style="position:relative">
 *     <canvas id="lumma-bg" style="position:absolute;inset:0;width:100%;height:100%"></canvas>
 *     ...conteúdo do header...
 *   </div>
 *   (inclua este arquivo e depois, no seu JS:)
 *     const bg = new LummaStarBG(document.getElementById('lumma-bg'), { theme: 'dark' });
 *     bg.set({ size: 0.7, x: 0.65 });   // muda qualquer opção em tempo real
 *     bg.destroy();                     // remove listeners e libera a GPU
 *
 * O canvas acompanha o tamanho do elemento pai/CSS. O mouse é lido na janela inteira,
 * então o texto do header pode ficar por cima do canvas sem bloquear a interação.
 */
(function (global) {
  'use strict';

  var DEFAULTS = {          // padrão = config aprovada para o header do site (11/11/2026)
    theme: 'dark',        // 'dark' | 'light'
    palette: 'lumma',     // 'lumma' (verde → neutro) | 'verde' | 'mono'
    transparent: false,   // true = não pinta o fundo (usa o fundo do seu header)
    pointSize: 2.5,       // tamanho dos pontos em px CSS
    density: 1,           // multiplicador da quantidade de pontos (0.3 a 2.5)
    size: 1.4,            // diâmetro da estrela em fração do menor lado da tela
    x: 0.73,               // posição horizontal do centro (0 = esquerda, 1 = direita)
    y: 0.61,               // posição vertical do centro (0 = topo, 1 = base)
    depth: 0.09,          // volume 3D (0 = chapado)
    noise: 0.015,          // deformação orgânica da borda
    interaction: 0.1,       // força da reação ao mouse (0 desliga)
    speed: 1,             // velocidade da animação
    tilt: 0.5,              // balanço/rotação 3D (0 desliga)
    spin: 3,              // giro contínuo no próprio eixo, em graus por segundo
    particles: 0.65,         // partículas espalhadas pela tela (0 desliga, até 3)
    particleSize: 2.4,    // tamanho das partículas em px CSS
    maxDpr: 2,            // limite de pixel ratio (performance)
    path: null            // opcional: outro "d" de SVG (padrão = símbolo da Lumma)
  };

  var THEMES = {
    dark: {
      bg: '#0A0A0A', hi: '#FFFFFF', dust: '#F5F5F5', alpha: 0.9, additive: true,
      palettes: { lumma: ['#50F160', '#F5F5F5'], verde: ['#50F160', '#3BD44A'], mono: ['#F5F5F5', '#9A9A96'] }
    },
    light: {
      bg: '#FFFFFF', hi: '#000000', dust: '#6B6B68', alpha: 0.85, additive: false,
      palettes: { lumma: ['#127A20', '#0A0A0A'], verde: ['#127A20', '#3BD44A'], mono: ['#000000', '#6B6B68'] }
    }
  };

  // ---------- forma da estrela: contorno oficial do símbolo Lumma (SVG 449×428) ----------
  var LUMMA_STAR_PATH = 'M277.108 154.33L417.549 129.394C422.166 128.575 424.474 128.165 426.48 128.686C428.248 129.144 429.846 130.103 431.084 131.447C432.488 132.972 433.213 135.201 434.663 139.66L446.054 174.679C447.506 179.141 448.231 181.372 447.993 183.433C447.782 185.248 447.053 186.965 445.891 188.376C444.573 189.977 442.463 191.003 438.243 193.054L309.953 255.402L377.086 381.234C379.294 385.371 380.398 387.44 380.523 389.51C380.633 391.333 380.215 393.15 379.319 394.742C378.303 396.549 376.406 397.928 372.612 400.685L342.835 422.33C339.04 425.089 337.142 426.468 335.109 426.878C333.318 427.238 331.46 427.075 329.759 426.406C327.829 425.648 326.202 423.958 322.947 420.579L224.005 317.845L125.091 420.579C121.838 423.959 120.211 425.648 118.281 426.407C116.58 427.075 114.723 427.239 112.932 426.879C110.899 426.47 109.001 425.092 105.206 422.335L75.4014 400.683C71.6068 397.927 69.7094 396.548 68.6921 394.742C67.7957 393.149 67.3773 391.333 67.4872 389.509C67.612 387.439 68.7155 385.37 70.9225 381.231L138.026 255.402L9.78969 193.052C5.57232 191.002 3.46364 189.977 2.14627 188.376C0.985398 186.965 0.255849 185.25 0.0450242 183.435C-0.194222 181.376 0.530031 179.146 1.97854 174.685L13.3512 139.668C14.8 135.207 15.5244 132.976 16.9284 131.45C18.1656 130.105 19.7643 129.146 21.5329 128.687C23.5399 128.166 25.8491 128.576 30.4674 129.396L170.871 154.33L190.541 13.1046C191.188 8.45939 191.511 6.13679 192.627 4.38908C193.61 2.84899 195.016 1.62502 196.677 0.863819C198.562 0 200.907 0 205.597 0H242.411C247.101 0 249.447 0 251.332 0.864052C252.993 1.62546 254.4 2.84975 255.382 4.39019C256.498 6.1383 256.821 8.46139 257.467 13.1076L277.108 154.33Z';

  // converte um "d" de SVG (M L H V C Q Z, absolutos ou relativos; só o 1º subcaminho) em polilinha
  function flattenPath(d) {
    var tok = d.match(/[MLHVCQZmlhvcqz]|-?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?/g) || [];
    var pts = [], i = 0, cmd = '', x = 0, y = 0, sx = 0, sy = 0, started = false;
    function num() { return parseFloat(tok[i++]); }
    while (i < tok.length) {
      if (/[A-Za-z]/.test(tok[i])) cmd = tok[i++];
      var rel = cmd === cmd.toLowerCase(), C = cmd.toUpperCase();
      if (C === 'Z') { if (started) break; continue; }
      if (C === 'M') {
        if (started) break;
        x = (rel ? x : 0) + num(); y = (rel ? y : 0) + num(); sx = x; sy = y;
        pts.push(x, y); started = true; cmd = rel ? 'l' : 'L';
      } else if (C === 'L') {
        x = (rel ? x : 0) + num(); y = (rel ? y : 0) + num(); pts.push(x, y);
      } else if (C === 'H') {
        x = (rel ? x : 0) + num(); pts.push(x, y);
      } else if (C === 'V') {
        y = (rel ? y : 0) + num(); pts.push(x, y);
      } else if (C === 'C' || C === 'Q') {
        var ox = rel ? x : 0, oy = rel ? y : 0, c1x = ox + num(), c1y = oy + num(), c2x, c2y;
        if (C === 'C') { c2x = ox + num(); c2y = oy + num(); }
        var ex = ox + num(), ey = oy + num();
        for (var k = 1; k <= 12; k++) {
          var t = k / 12, u = 1 - t, px, py;
          if (C === 'C') {
            px = u*u*u*x + 3*u*u*t*c1x + 3*u*t*t*c2x + t*t*t*ex;
            py = u*u*u*y + 3*u*u*t*c1y + 3*u*t*t*c2y + t*t*t*ey;
          } else {
            px = u*u*x + 2*u*t*c1x + t*t*ex;
            py = u*u*y + 2*u*t*c1y + t*t*ey;
          }
          pts.push(px, py);
        }
        x = ex; y = ey;
      } else { i++; }
    }
    // remove ponto final duplicado do fechamento
    var n = pts.length;
    if (n > 4 && Math.abs(pts[0] - pts[n - 2]) < 1e-6 && Math.abs(pts[1] - pts[n - 1]) < 1e-6) pts.length = n - 2;
    return pts;
  }

  // contorno centralizado no centroide, eixo Y para cima, raio máximo = 1, reamostrado por comprimento
  function buildContour(d, samples) {
    var raw = flattenPath(d), n = raw.length / 2, i, A = 0, cx = 0, cy = 0;
    for (i = 0; i < n; i++) {
      var x0 = raw[i * 2], y0 = raw[i * 2 + 1], x1 = raw[((i + 1) % n) * 2], y1 = raw[((i + 1) % n) * 2 + 1];
      var cr = x0 * y1 - x1 * y0; A += cr; cx += (x0 + x1) * cr; cy += (y0 + y1) * cr;
    }
    A *= 0.5; cx /= (6 * A); cy /= (6 * A);
    var maxR = 0, poly = [];
    for (i = 0; i < n; i++) {
      var px = raw[i * 2] - cx, py = -(raw[i * 2 + 1] - cy);
      poly.push(px, py); maxR = Math.max(maxR, Math.hypot(px, py));
    }
    for (i = 0; i < poly.length; i++) poly[i] /= maxR;
    var tmp = { pts: poly, n: n, cum: [0] }, L = 0;
    for (i = 1; i <= n; i++) {
      var j = i % n;
      L += Math.hypot(poly[j * 2] - poly[(i - 1) * 2], poly[j * 2 + 1] - poly[(i - 1) * 2 + 1]);
      tmp.cum.push(L);
    }
    tmp.length = L;
    var pts = [];
    for (i = 0; i < samples; i++) { var p = contourAt(tmp, (i / samples) * L); pts.push(p[0], p[1]); }
    var cum = [0]; L = 0;
    for (i = 1; i <= samples; i++) {
      var k = i % samples;
      L += Math.hypot(pts[k * 2] - pts[(i - 1) * 2], pts[k * 2 + 1] - pts[(i - 1) * 2 + 1]);
      cum.push(L);
    }
    return { pts: pts, cum: cum, length: L, n: samples };
  }
  function contourAt(c, u) {
    u = ((u % c.length) + c.length) % c.length;
    var lo = 0, hi = c.n;
    while (hi - lo > 1) { var m = (lo + hi) >> 1; if (c.cum[m] <= u) lo = m; else hi = m; }
    var t = (u - c.cum[lo]) / Math.max(1e-9, c.cum[lo + 1] - c.cum[lo]);
    var a = lo, b = (lo + 1) % c.n;
    return [c.pts[a * 2] + (c.pts[b * 2] - c.pts[a * 2]) * t,
            c.pts[a * 2 + 1] + (c.pts[b * 2 + 1] - c.pts[a * 2 + 1]) * t];
  }

  // anéis concêntricos (mais densos perto da borda) + "poeira" solta na borda
  function buildGeometry(contour, density) {
    var rings = Math.max(12, Math.round(64 * Math.sqrt(density)));
    var perLen = 92 * Math.sqrt(density);
    var base = [], rnd = [], i, j, p;
    function push(x, y, s) { base.push(x, y, s); rnd.push(Math.random(), Math.random(), Math.random(), Math.random()); }
    for (i = 0; i < rings; i++) {
      var t = (i + 1) / rings;
      var s = 0.03 + 0.97 * (1 - Math.pow(1 - t, 1.9));
      var n = Math.max(8, Math.round(contour.length * s * perLen));
      var phase = Math.random();
      for (j = 0; j < n; j++) {
        p = contourAt(contour, ((j + phase) / n) * contour.length);
        push(p[0] * s, p[1] * s, s);
      }
    }
    var dust = Math.round((base.length / 3) * 0.16);
    for (i = 0; i < dust; i++) {
      var g = (Math.random() + Math.random() + Math.random() - 1.5) / 1.5; // ~gaussiana
      var sd = 1 + g * 0.05;
      p = contourAt(contour, Math.random() * contour.length);
      push(p[0] * sd, p[1] * sd, Math.min(sd, 1));
    }
    return { base: new Float32Array(base), rnd: new Float32Array(rnd), count: base.length / 3 };
  }

  // ---------- shaders ----------
  var NOISE = [
    'vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}',
    'vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}',
    'vec4 permute(vec4 x){return mod289(((x*34.0)+10.0)*x);}',
    'vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}',
    'float snoise(vec3 v){',
    ' const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);',
    ' vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);',
    ' vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);',
    ' vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;',
    ' i=mod289(i);',
    ' vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));',
    ' float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx;',
    ' vec4 j=p-49.0*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);',
    ' vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);',
    ' vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);',
    ' vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));',
    ' vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;',
    ' vec3 q0=vec3(a0.xy,h.x); vec3 q1=vec3(a0.zw,h.y); vec3 q2=vec3(a1.xy,h.z); vec3 q3=vec3(a1.zw,h.w);',
    ' vec4 nr=taylorInvSqrt(vec4(dot(q0,q0),dot(q1,q1),dot(q2,q2),dot(q3,q3)));',
    ' q0*=nr.x; q1*=nr.y; q2*=nr.z; q3*=nr.w;',
    ' vec4 m=max(0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;',
    ' return 105.0*dot(m*m,vec4(dot(q0,x0),dot(q1,x1),dot(q2,x2),dot(q3,x3)));',
    '}'
  ].join('\n');

  var VS = [
    '#version 300 es',
    'precision highp float;',
    'in vec3 aBase; in vec4 aRand;',
    'uniform float uTime, uClock, uScale, uPointSize, uDpr, uNoise, uDepth, uForce, uMR, uSpin;',
    'uniform vec2 uRes, uCenter, uMouse, uTilt;',
    'uniform vec4 uRip[8];',
    'uniform vec3 uColA, uColB, uHi;',
    'uniform float uAlpha;',
    'out vec4 vColor;',
    NOISE,
    'void main(){',
    '  vec2 p2 = aBase.xy; float s = aBase.z;',
    '  float len = length(p2); vec2 dir = len > 1e-4 ? p2/len : vec2(0.0,1.0);',
    '  float n1 = snoise(vec3(p2*1.6, uTime*0.16));',
    '  float n2 = snoise(vec3(p2*4.2+7.3, uTime*0.27));',
    '  float rim = pow(s, 3.0);',
    '  p2 += dir * (n1*0.65 + n2*0.35) * uNoise * (0.35 + 0.65*s);',
    '  p2 += dir * (aRand.x-0.5) * 0.035 * rim;',
    '  float ca = cos(uSpin), sa = sin(uSpin);',
    '  p2 = vec2(p2.x*ca - p2.y*sa, p2.x*sa + p2.y*ca);',
    '  float z = sqrt(max(0.0, 1.0 - s*s)) * uDepth + n1*0.06*uDepth;',
    '  vec3 p = vec3(p2, z);',
    '  float cx = cos(uTilt.y), sx = sin(uTilt.y);',
    '  p = vec3(p.x, p.y*cx - p.z*sx, p.y*sx + p.z*cx);',
    '  float cy = cos(uTilt.x), sy = sin(uTilt.x);',
    '  p = vec3(p.x*cy + p.z*sy, p.y, -p.x*sy + p.z*cy);',
    '  float f = 3.2 / (3.2 - p.z);',
    '  vec2 sp = uCenter + vec2(p.x, -p.y) * f * uScale;',
    '  float glow = 0.0;',
    // mouse: empurra e embaralha os pontos perto do cursor
    '  vec2 dm = sp - uMouse; float dl = length(dm) + 1e-4; vec2 nd = dm/dl;',
    '  float fall = exp(-dl*dl/(uMR*uMR));',
    '  float sw = snoise(vec3(aBase.xy*5.0, uTime*1.4));',
    '  sp += (nd*(0.5+0.5*aRand.w) + vec2(-nd.y, nd.x)*sw*0.7) * fall * uForce * uMR * 0.6;',
    '  glow += fall * uForce;',
    // ondas que se espalham a partir do rastro do mouse
    '  for (int i = 0; i < 8; i++) {',
    '    vec4 r = uRip[i]; float age = uClock - r.z;',
    '    if (r.w <= 0.0 || age < 0.0 || age > 3.0) continue;',
    '    vec2 dr = sp - r.xy; float dd = length(dr) + 1e-4;',
    '    float front = age * uMR * 2.4;',
    '    float band = (dd - front) / (uMR * 0.3);',
    '    float w = exp(-band*band) * exp(-age*1.3) * r.w;',
    '    sp += dr/dd * cos(band*2.6) * w * uMR * 0.2;',
    '    glow += w * 0.9;',
    '  }',
    '  vec2 ndc = sp / uRes * 2.0 - 1.0;',
    '  gl_Position = vec4(ndc.x, -ndc.y, 0.0, 1.0);',
    '  gl_PointSize = uPointSize * uDpr * (0.55 + 0.9*aRand.y) * f * (1.0 + glow*0.6);',
    '  float t = clamp(dot(p.xy, normalize(vec2(0.3, 1.0))) * 0.5 + 0.5, 0.0, 1.0);',
    '  vec3 col = mix(uColB, uColA, smoothstep(0.05, 0.95, t));',
    '  col = mix(col, uHi, clamp(rim*0.35*aRand.z + glow*0.55, 0.0, 1.0));',
    '  float a = uAlpha * (0.12 + 0.88*pow(s, 2.6)) * (0.45 + 0.55*aRand.z) * clamp(f*0.9, 0.0, 1.2);',
    '  a = clamp(a + glow*0.35, 0.0, 1.0);',
    '  vColor = vec4(col, a);',
    '}'
  ].join('\n');

  // partículas soltas pela tela: derivam devagar, cintilam, têm parallax e reagem ao mouse/ondas
  var VS_AMB = [
    '#version 300 es',
    'precision highp float;',
    'in vec4 aP; in vec4 aR;',
    'uniform float uTime, uClock, uSize, uDpr, uForce, uMR, uOpacity;',
    'uniform vec2 uRes, uMouse, uPar;',
    'uniform vec4 uRip[8];',
    'uniform vec3 uColA, uColB;',
    'out vec4 vColor;',
    NOISE,
    'void main(){',
    '  float z = aP.z;',
    '  vec2 q = fract(aP.xy + vec2(0.0, -uTime * 0.006 * (0.3 + z)));',
    '  vec2 sp = q * uRes;',
    '  float m = min(uRes.x, uRes.y);',
    '  sp += vec2(snoise(vec3(aP.xy*3.0, uTime*0.05 + aP.w*10.0)), snoise(vec3(aP.xy*3.0 + 11.0, uTime*0.05 + aP.w*10.0))) * m * 0.03;',
    '  sp -= uPar * m * 0.05 * (0.2 + z);',
    '  float glow = 0.0;',
    '  vec2 dm = sp - uMouse; float dl = length(dm) + 1e-4; vec2 nd = dm/dl;',
    '  float fall = exp(-dl*dl/(uMR*uMR*1.4));',
    '  float sw = snoise(vec3(aP.xy*9.0, uTime*1.4));',
    '  sp += (nd*(0.5+0.5*aR.w) + vec2(-nd.y, nd.x)*sw*0.8) * fall * uForce * uMR * 0.7;',
    '  glow += fall * uForce;',
    '  for (int i = 0; i < 8; i++) {',
    '    vec4 r = uRip[i]; float age = uClock - r.z;',
    '    if (r.w <= 0.0 || age < 0.0 || age > 3.0) continue;',
    '    vec2 dr = sp - r.xy; float dd = length(dr) + 1e-4;',
    '    float band = (dd - age * uMR * 2.4) / (uMR * 0.3);',
    '    float w = exp(-band*band) * exp(-age*1.3) * r.w;',
    '    sp += dr/dd * cos(band*2.6) * w * uMR * 0.25;',
    '    glow += w;',
    '  }',
    '  vec2 ndc = sp / uRes * 2.0 - 1.0;',
    '  gl_Position = vec4(ndc.x, -ndc.y, 0.0, 1.0);',
    '  gl_PointSize = uSize * uDpr * (0.45 + 1.1*z) * (1.0 + glow*0.8);',
    '  float tw = 0.55 + 0.45 * sin(uTime * (0.6 + aR.x*1.8) + aP.w * 6.2831);',
    '  vec3 col = mix(uColB, uColA, step(0.68, aR.y));',
    '  float a = uOpacity * (0.12 + 0.6*z) * tw;',
    '  vColor = vec4(col, clamp(a + glow*0.4, 0.0, 1.0));',
    '}'
  ].join('\n');

  var FS = [
    '#version 300 es',
    'precision highp float;',
    'in vec4 vColor; out vec4 outColor;',
    'void main(){',
    '  float d = length(gl_PointCoord - 0.5);',
    '  float m = smoothstep(0.5, 0.22, d);',
    '  float a = vColor.a * m;',
    '  if (a < 0.003) discard;',
    '  outColor = vec4(vColor.rgb * a, a);',
    '}'
  ].join('\n');

  function hexToRgb(h) {
    h = h.replace('#', '');
    if (h.length === 3) h = h.split('').map(function (c) { return c + c; }).join('');
    var n = parseInt(h, 16);
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
  }
  function compile(gl, type, src) {
    var sh = gl.createShader(type);
    gl.shaderSource(sh, src); gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh));
    return sh;
  }

  // ---------- classe ----------
  function LummaStarBG(canvas, opts) {
    this.canvas = canvas;
    this.opts = Object.assign({}, DEFAULTS, opts || {});
    this.gl = canvas.getContext('webgl2', { antialias: false, alpha: true, premultipliedAlpha: true });
    if (!this.gl) { canvas.classList.add('no-webgl2'); this.supported = false; return; }
    this.supported = true;
    this.reduced = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.contour = buildContour(this.opts.path || LUMMA_STAR_PATH, 1600);
    this.mouse = { x: -9999, y: -9999, sx: -9999, sy: -9999, lastT: 0, inside: false };
    this.force = 0; this.targetForce = 0;
    this.ripples = new Float32Array(32); this.ripIdx = 0; this.lastRip = 0;
    this.time = 0; this.clock = 0; this.spinA = 0; this.tiltX = 0; this.tiltY = 0; this.parX = 0; this.parY = 0;
    this.visible = true;
    this._initGL();
    this._buildBuffers();
    this._bind();
    this._resize();
    this._last = performance.now();
    this._raf = requestAnimationFrame(this._frame.bind(this));
  }

  LummaStarBG.DEFAULTS = DEFAULTS;
  LummaStarBG.THEMES = THEMES;
  LummaStarBG.LUMMA_STAR_PATH = LUMMA_STAR_PATH;

  LummaStarBG.prototype._initGL = function () {
    var gl = this.gl;
    var prog = gl.createProgram();
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VS));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    this.prog = prog;
    this.loc = {};
    var names = ['uTime', 'uClock', 'uScale', 'uPointSize', 'uDpr', 'uNoise', 'uDepth', 'uForce', 'uMR', 'uSpin',
      'uRes', 'uCenter', 'uMouse', 'uTilt', 'uRip', 'uColA', 'uColB', 'uHi', 'uAlpha'];
    for (var i = 0; i < names.length; i++) this.loc[names[i]] = gl.getUniformLocation(prog, names[i]);
    this.vao = gl.createVertexArray();
    this.bBase = gl.createBuffer();
    this.bRnd = gl.createBuffer();
    gl.bindVertexArray(this.vao);
    var aBase = gl.getAttribLocation(prog, 'aBase'), aRand = gl.getAttribLocation(prog, 'aRand');
    gl.bindBuffer(gl.ARRAY_BUFFER, this.bBase);
    gl.enableVertexAttribArray(aBase); gl.vertexAttribPointer(aBase, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.bRnd);
    gl.enableVertexAttribArray(aRand); gl.vertexAttribPointer(aRand, 4, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);

    // programa das partículas soltas
    var ap = gl.createProgram();
    gl.attachShader(ap, compile(gl, gl.VERTEX_SHADER, VS_AMB));
    gl.attachShader(ap, compile(gl, gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(ap);
    if (!gl.getProgramParameter(ap, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(ap));
    this.ampProg = ap; this.aloc = {};
    var an = ['uTime', 'uClock', 'uSize', 'uDpr', 'uForce', 'uMR', 'uOpacity', 'uRes', 'uMouse', 'uPar', 'uRip', 'uColA', 'uColB'];
    for (i = 0; i < an.length; i++) this.aloc[an[i]] = gl.getUniformLocation(ap, an[i]);
    this.AMB_MAX = 6000;
    var dP = new Float32Array(this.AMB_MAX * 4), dR = new Float32Array(this.AMB_MAX * 4);
    for (i = 0; i < this.AMB_MAX; i++) {
      dP[i * 4] = Math.random(); dP[i * 4 + 1] = Math.random();
      dP[i * 4 + 2] = Math.pow(Math.random(), 1.8); // maioria pequena/distante, poucas grandes/próximas
      dP[i * 4 + 3] = Math.random();
      dR[i * 4] = Math.random(); dR[i * 4 + 1] = Math.random(); dR[i * 4 + 2] = Math.random(); dR[i * 4 + 3] = Math.random();
    }
    this.ambVao = gl.createVertexArray();
    this.bAP = gl.createBuffer(); this.bAR = gl.createBuffer();
    gl.bindVertexArray(this.ambVao);
    var lP = gl.getAttribLocation(ap, 'aP'), lR = gl.getAttribLocation(ap, 'aR');
    gl.bindBuffer(gl.ARRAY_BUFFER, this.bAP); gl.bufferData(gl.ARRAY_BUFFER, dP, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(lP); gl.vertexAttribPointer(lP, 4, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.bAR); gl.bufferData(gl.ARRAY_BUFFER, dR, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(lR); gl.vertexAttribPointer(lR, 4, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);
  };

  LummaStarBG.prototype._buildBuffers = function () {
    var gl = this.gl, g = buildGeometry(this.contour, Math.max(0.2, this.opts.density));
    gl.bindBuffer(gl.ARRAY_BUFFER, this.bBase); gl.bufferData(gl.ARRAY_BUFFER, g.base, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.bRnd); gl.bufferData(gl.ARRAY_BUFFER, g.rnd, gl.STATIC_DRAW);
    this.count = g.count;
    this._builtDensity = this.opts.density;
  };

  LummaStarBG.prototype._bind = function () {
    var self = this;
    this._onMove = function (e) {
      var r = self.canvas.getBoundingClientRect();
      var x = e.clientX - r.left, y = e.clientY - r.top, now = performance.now();
      self.mouse.inside = x >= 0 && y >= 0 && x <= r.width && y <= r.height;
      if (self.mouse.x > -9000) {
        var dt = Math.max(8, now - self.mouse.lastT);
        var v = Math.hypot(x - self.mouse.x, y - self.mouse.y) / dt * 1000; // px/s
        self.targetForce = Math.max(self.targetForce, Math.min(1, v / 900));
        if (self.mouse.inside && v > 250 && now - self.lastRip > 130) {
          self._ripple(x, y, Math.min(1, v / 1500) * 0.85);
          self.lastRip = now;
        }
      } else { self.mouse.sx = x; self.mouse.sy = y; }
      self.mouse.x = x; self.mouse.y = y; self.mouse.lastT = now;
    };
    this._onDown = function (e) {
      var r = self.canvas.getBoundingClientRect();
      var x = e.clientX - r.left, y = e.clientY - r.top;
      if (x >= 0 && y >= 0 && x <= r.width && y <= r.height) { self._ripple(x, y, 1.2); self.targetForce = 1; }
    };
    global.addEventListener('pointermove', this._onMove, { passive: true });
    global.addEventListener('pointerdown', this._onDown, { passive: true });
    this._ro = new ResizeObserver(function () { self._resize(); });
    this._ro.observe(this.canvas);
    if ('IntersectionObserver' in global) {
      this._io = new IntersectionObserver(function (en) { self.visible = en[0].isIntersecting; });
      this._io.observe(this.canvas);
    }
  };

  LummaStarBG.prototype._ripple = function (x, y, strength) {
    if (this.reduced || this.opts.interaction <= 0) return;
    var i = this.ripIdx * 4;
    this.ripples[i] = x; this.ripples[i + 1] = y; this.ripples[i + 2] = this.clock;
    this.ripples[i + 3] = strength * this.opts.interaction;
    this.ripIdx = (this.ripIdx + 1) % 8;
  };

  LummaStarBG.prototype._resize = function () {
    var dpr = Math.min(global.devicePixelRatio || 1, this.opts.maxDpr);
    var w = this.canvas.clientWidth || 1, h = this.canvas.clientHeight || 1;
    this.w = w; this.h = h; this.dpr = dpr;
    this.canvas.width = Math.round(w * dpr); this.canvas.height = Math.round(h * dpr);
  };

  LummaStarBG.prototype.set = function (opts) {
    Object.assign(this.opts, opts || {});
    if (!this.supported) return this;
    if (opts && 'density' in opts && opts.density !== this._builtDensity) this._buildBuffers();
    if (opts && 'maxDpr' in opts) this._resize();
    if (opts && 'path' in opts) { this.contour = buildContour(this.opts.path || LUMMA_STAR_PATH, 1600); this._buildBuffers(); }
    return this;
  };

  LummaStarBG.prototype._frame = function (now) {
    this._raf = requestAnimationFrame(this._frame.bind(this));
    var dt = Math.min(0.05, (now - this._last) / 1000); this._last = now;
    if (!this.visible || document.hidden) return;
    var o = this.opts, gl = this.gl;
    var speed = o.speed * (this.reduced ? 0.3 : 1);
    this.time += dt * speed; this.clock += dt;
    this.spinA += dt * (o.spin * Math.PI / 180) * (this.reduced ? 0 : 1);

    // força do mouse: sobe quando mexe, decai quando para
    this.targetForce *= Math.pow(0.06, dt);
    if (this.mouse.inside) this.targetForce = Math.max(this.targetForce, 0.18); // presença leve no hover
    this.force += (this.targetForce - this.force) * (1 - Math.pow(0.0005, dt));
    this.mouse.sx += (this.mouse.x - this.mouse.sx) * (1 - Math.pow(0.0001, dt));
    this.mouse.sy += (this.mouse.y - this.mouse.sy) * (1 - Math.pow(0.0001, dt));

    // balanço 3D suave + parallax leve com o mouse
    var mx = this.mouse.x > -9000 ? (this.mouse.x / this.w - 0.5) : 0;
    var my = this.mouse.y > -9000 ? (this.mouse.y / this.h - 0.5) : 0;
    var tx = (Math.sin(this.time * 0.21) * 0.22 + mx * 0.35) * o.tilt;
    var ty = (Math.cos(this.time * 0.17) * 0.14 + my * 0.25) * o.tilt;
    var k = 1 - Math.pow(0.02, dt);
    this.tiltX += (tx - this.tiltX) * k; this.tiltY += (ty - this.tiltY) * k;
    this.parX += (mx - this.parX) * k; this.parY += (my - this.parY) * k;

    var theme = THEMES[o.theme] || THEMES.dark;
    var pal = theme.palettes[o.palette] || theme.palettes.lumma;
    var minSide = Math.min(this.w, this.h);

    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    if (o.transparent) gl.clearColor(0, 0, 0, 0);
    else { var bg = hexToRgb(theme.bg); gl.clearColor(bg[0], bg[1], bg[2], 1); }
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    if (theme.additive) gl.blendFunc(gl.ONE, gl.ONE);
    else gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    // partículas soltas (desenhadas antes, ficam "atrás" da estrela)
    var ambN = Math.min(this.AMB_MAX, Math.round(o.particles * this.w * this.h / 1800));
    if (ambN > 0) {
      var A = this.aloc;
      gl.useProgram(this.ampProg);
      gl.uniform1f(A.uTime, this.time);
      gl.uniform1f(A.uClock, this.clock);
      gl.uniform1f(A.uSize, o.particleSize);
      gl.uniform1f(A.uDpr, this.dpr);
      gl.uniform1f(A.uForce, this.force * o.interaction);
      gl.uniform1f(A.uMR, minSide * 0.2);
      gl.uniform1f(A.uOpacity, theme.additive ? 0.8 : 0.9);
      gl.uniform2f(A.uRes, this.w, this.h);
      gl.uniform2f(A.uMouse, this.mouse.sx, this.mouse.sy);
      gl.uniform2f(A.uPar, this.parX, this.parY);
      gl.uniform4fv(A.uRip, this.ripples);
      gl.uniform3fv(A.uColA, hexToRgb(pal[0]));
      gl.uniform3fv(A.uColB, hexToRgb(theme.dust));
      gl.bindVertexArray(this.ambVao);
      gl.drawArrays(gl.POINTS, 0, ambN);
      gl.bindVertexArray(null);
    }

    gl.useProgram(this.prog);
    var L = this.loc;
    gl.uniform1f(L.uTime, this.time);
    gl.uniform1f(L.uClock, this.clock);
    gl.uniform1f(L.uScale, o.size * minSide * 0.5);
    gl.uniform1f(L.uPointSize, o.pointSize);
    gl.uniform1f(L.uDpr, this.dpr);
    gl.uniform1f(L.uNoise, o.noise);
    gl.uniform1f(L.uDepth, o.depth);
    gl.uniform1f(L.uForce, this.force * o.interaction);
    gl.uniform1f(L.uMR, minSide * 0.2);
    gl.uniform1f(L.uSpin, this.spinA);
    gl.uniform2f(L.uRes, this.w, this.h);
    gl.uniform2f(L.uCenter, this.w * o.x, this.h * o.y);
    gl.uniform2f(L.uMouse, this.mouse.sx, this.mouse.sy);
    gl.uniform2f(L.uTilt, this.tiltX, this.tiltY);
    gl.uniform4fv(L.uRip, this.ripples);
    gl.uniform3fv(L.uColA, hexToRgb(pal[0]));
    gl.uniform3fv(L.uColB, hexToRgb(pal[1]));
    gl.uniform3fv(L.uHi, hexToRgb(theme.hi));
    gl.uniform1f(L.uAlpha, theme.alpha);
    gl.bindVertexArray(this.vao);
    gl.drawArrays(gl.POINTS, 0, this.count);
    gl.bindVertexArray(null);
  };

  LummaStarBG.prototype.destroy = function () {
    cancelAnimationFrame(this._raf);
    global.removeEventListener('pointermove', this._onMove);
    global.removeEventListener('pointerdown', this._onDown);
    if (this._ro) this._ro.disconnect();
    if (this._io) this._io.disconnect();
    if (this.gl) {
      this.gl.deleteBuffer(this.bBase); this.gl.deleteBuffer(this.bRnd);
      this.gl.deleteVertexArray(this.vao); this.gl.deleteProgram(this.prog);
      this.gl.deleteBuffer(this.bAP); this.gl.deleteBuffer(this.bAR);
      this.gl.deleteVertexArray(this.ambVao); this.gl.deleteProgram(this.ampProg);
    }
  };

  global.LummaStarBG = LummaStarBG;
})(typeof window !== 'undefined' ? window : this);
