export type LummaStarBGOptions = {
  theme?: "dark" | "light";
  palette?: "lumma" | "verde" | "mono";
  transparent?: boolean;
  pointSize?: number;
  density?: number;
  size?: number;
  x?: number;
  y?: number;
  depth?: number;
  noise?: number;
  interaction?: number;
  speed?: number;
  tilt?: number;
  spin?: number;
  particles?: number;
  particleSize?: number;
  maxDpr?: number;
  path?: string | null;
};

export interface LummaStarBGInstance {
  supported: boolean;
  set(opts: LummaStarBGOptions): LummaStarBGInstance;
  destroy(): void;
}

declare global {
  interface Window {
    LummaStarBG?: new (canvas: HTMLCanvasElement, opts?: LummaStarBGOptions) => LummaStarBGInstance;
  }
}
