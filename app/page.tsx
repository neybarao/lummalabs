import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MessageSquare,
  Clock,
  Zap,
  TrendingUp,
  CheckCircle2,
  Search,
  Settings,
  Bot,
  GraduationCap,
  Headphones,
  ArrowRight,
  Stethoscope,
  Briefcase,
  Store,
  Dumbbell,
  Truck,
  Users
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Logo/Brand */}
            <div className="inline-block">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              <Image
                  src="/lumma-logo.svg"
                  alt="Lumma Labs - Automação com Inteligência Artificial"
                  width={200}
                  height={80}
                  priority
                  className="h-[120px] w-auto"
                />
              </h1>
              <Badge variant="secondary" className="text-sm font-normal">
              Atendimento Automatizado com IA no WhatsApp
              </Badge>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
              Automação de Atendimento com IA no WhatsApp — Rápida, Humana e Escalável
            </h2>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforme seu atendimento em uma operação automatizada que responde em segundos, funciona 24/7 e mantém o tom humano da sua marca.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base font-semibold h-12 px-8"
                aria-label="Iniciar automação do WhatsApp"
              >
                Quero automatizar meu WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base h-12 px-8"
                aria-label="Ver demonstração de funcionamento"
              >
                Ver como funciona
              </Button>
            </div>

            {/* Trust Badge */}
            <p className="text-sm text-muted-foreground pt-4">
              Implementação completa em poucos dias.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-24 bg-background" aria-labelledby="problem-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 id="problem-heading" className="text-3xl sm:text-4xl font-bold text-foreground">
              Seu atendimento está fazendo você perder clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Clock, text: "Respostas lentas espantam oportunidades" },
              { icon: MessageSquare, text: "Conversas acumuladas viram caos" },
              { icon: Zap, text: "Atendimento fora do horário? Impossível" },
              { icon: Users, text: "Perguntas repetidas consomem tempo e energia" },
              { icon: TrendingUp, text: "Falta padronização = experiência ruim" }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-destructive/10 p-3 flex-shrink-0" aria-hidden="true">
                      <item.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed pt-2">
                      {item.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl sm:text-2xl font-semibold text-foreground max-w-3xl mx-auto">
              Você não precisa contratar mais pessoas. Só precisa automatizar do jeito certo.
            </p>
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Solution Section */}
      <section className="py-16 sm:py-24 bg-secondary/20" aria-labelledby="solution-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 id="solution-heading" className="text-3xl sm:text-4xl font-bold text-foreground">
              Atenda como um humano — só que muito mais rápido
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              A Lumma Labs cria automações inteligentes que integram IA + WhatsApp para eliminar tarefas manuais, melhorar a experiência do cliente e aumentar conversões.
            </p>
            <div className="inline-block bg-accent/20 border-2 border-accent rounded-lg px-6 py-4 mt-4">
              <p className="text-lg font-semibold text-foreground">
                Automação que não parece robô. IA treinada para falar como você.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-background" aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 id="benefits-heading" className="text-3xl sm:text-4xl font-bold text-foreground">
              Benefícios diretos para o seu negócio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Atendimento 24/7",
                description: "Seu negócio nunca mais para"
              },
              {
                icon: Zap,
                title: "Respostas imediatas",
                description: "Nada de filas de espera"
              },
              {
                icon: MessageSquare,
                title: "Menos repetição",
                description: "Adeus perguntas iguais todo dia"
              },
              {
                icon: TrendingUp,
                title: "Mais vendas",
                description: "Clientes atendidos rápido compram mais"
              },
              {
                icon: Bot,
                title: "IA humanizada",
                description: "Linguagem alinhada à sua marca"
              },
              {
                icon: CheckCircle2,
                title: "Processos padronizados",
                description: "Atendimento consistente, sempre"
              }
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="rounded-lg bg-accent/20 w-fit p-3 mb-2" aria-hidden="true">
                    <benefit.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-secondary/20" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-foreground">
              O que entregamos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              {
                icon: Search,
                title: "Diagnóstico Estratégico",
                description: "Mapeamos todo seu fluxo de atendimento e descobrimos gargalos."
              },
              {
                icon: Settings,
                title: "Implementação Completa",
                description: "Integrações, lógica da IA, fluxos e testes."
              },
              {
                icon: Bot,
                title: "Automações Prontas",
                description: "Agendamentos, dúvidas frequentes, vendas, suporte e follow-up inteligente."
              },
              {
                icon: GraduationCap,
                title: "Treinamento",
                description: "Sua equipe aprende a operar e evoluir todo o sistema."
              },
              {
                icon: Headphones,
                title: "Suporte",
                description: "Acompanhamento contínuo para garantir performance."
              }
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="space-y-4">
                  <div className="mx-auto rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center" aria-hidden="true">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="text-base font-semibold h-12 px-8"
              aria-label="Falar com especialista"
            >
              Quero falar com um especialista
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 bg-background" aria-labelledby="how-it-works-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl font-bold text-foreground">
              Como funciona
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Reunião inicial",
                description: "Alinhamos objetivo e necessidades"
              },
              {
                step: "2",
                title: "Desenho dos fluxos",
                description: "Criamos a jornada do atendimento"
              },
              {
                step: "3",
                title: "Implementação com IA",
                description: "Automação ativa e testada"
              },
              {
                step: "4",
                title: "Treinamento + suporte",
                description: "Sua equipe pronta para operar"
              }
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-accent">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    <div
                      className="rounded-full bg-accent text-foreground w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0"
                      aria-label={`Passo ${item.step}`}
                    >
                      {item.step}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Target Audience Section */}
      <section className="py-16 sm:py-24 bg-secondary/20" aria-labelledby="target-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 id="target-heading" className="text-3xl sm:text-4xl font-bold text-foreground">
              Para quem é
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ideal para negócios que dependem de atendimento para vender:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            {[
              { icon: Stethoscope, label: "Clínicas e consultórios" },
              { icon: Briefcase, label: "Prestadores de serviço" },
              { icon: Store, label: "Lojas físicas" },
              { icon: Dumbbell, label: "Academias" },
              { icon: Truck, label: "Delivery" },
              { icon: Users, label: "Profissionais liberais" },
              { icon: Store, label: "Negócios locais" }
            ].map((target, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <div className="mx-auto rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-3" aria-hidden="true">
                    <target.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground leading-tight">
                    {target.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold text-foreground">
              Se você atende pelo WhatsApp, essa solução é para você.
            </p>
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Trust Section */}
      <section className="py-16 sm:py-24 bg-background" aria-labelledby="trust-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 id="trust-heading" className="text-3xl sm:text-4xl font-bold text-foreground">
              Por que confiar na Lumma Labs?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mesmo sendo uma empresa nova, trabalhamos com processos sólidos, IA treinada e automações projetadas para resultados imediatos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              "Linguagem da IA treinada com sua personalidade",
              "Fluxos inteligentes focados em conversão",
              "Execução rápida e prática",
              "Resultado real no dia a dia, não teoria"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                <p className="text-foreground font-medium text-lg">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 space-y-4">
            <p className="text-muted-foreground text-lg">
              Você não compra um chatbot.
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-foreground">
              Você compra eficiência.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-secondary/20 to-background" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Pronto para automatizar seu atendimento com IA?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vamos criar uma automação personalizada, eficiente e humanizada — feita sob medida para o seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base font-semibold h-12 px-8"
                aria-label="Iniciar automação do WhatsApp"
              >
                Quero automatizar meu WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base h-12 px-8"
                aria-label="Chamar no WhatsApp"
              >
                Chamar no WhatsApp
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              Resposta em até 1 hora.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-4">
            <p className="text-lg font-semibold text-foreground">
              Lumma Labs • Automação • Inteligência Artificial • Atendimento
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Lumma Labs. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
