import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-pattern opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            {/* Badge */}
            <Badge className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20 transition-smooth">
              <Sparkles className="h-3 w-3 mr-1" />
              Novidades toda semana
            </Badge>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Descubra o
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-primary-foreground">
                  Futuro das Compras
                </span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-xl">
                Os melhores produtos com os melhores preços. Entrega rápida, 
                qualidade garantida e atendimento excepcional.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Zap className="h-4 w-4 text-warning" />
                <span className="text-sm font-medium">Entrega expressa</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Shield className="h-4 w-4 text-success" />
                <span className="text-sm font-medium">Compra segura</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                className="group"
              >
                Explorar Produtos
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary"
              >
                Ver Ofertas
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">50k+</div>
                <div className="text-sm text-primary-foreground/70">Produtos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">1M+</div>
                <div className="text-sm text-primary-foreground/70">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">99%</div>
                <div className="text-sm text-primary-foreground/70">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:mt-0 mt-8 animate-float">
            <div className="relative z-10">
              {/* Placeholder for hero image - we'll generate this */}
              <div className="aspect-square bg-primary-foreground/10 rounded-2xl backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center">
                <div className="text-6xl">🛍️</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-warning/20 rounded-full blur-xl animate-pulse-glow" />
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-success/20 rounded-full blur-lg animate-pulse-glow" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};