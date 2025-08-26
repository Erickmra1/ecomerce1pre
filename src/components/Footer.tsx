import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl text-foreground">EcoShop</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sua loja online de confiança. Os melhores produtos com 
              os melhores preços e entrega rápida em todo o Brasil.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Produtos</h3>
            <div className="space-y-3">
              <Link to="/eletronicos" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Eletrônicos
              </Link>
              <Link to="/moda" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Moda & Estilo
              </Link>
              <Link to="/casa" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Casa & Jardim
              </Link>
              <Link to="/esportes" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Esportes
              </Link>
              <Link to="/ofertas" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Ofertas
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Suporte</h3>
            <div className="space-y-3">
              <Link to="/ajuda" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Central de Ajuda
              </Link>
              <Link to="/contato" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Fale Conosco
              </Link>
              <Link to="/rastreamento" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Rastrear Pedido
              </Link>
              <Link to="/trocas" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Trocas & Devoluções
              </Link>
              <Link to="/garantia" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Garantia
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Receba ofertas exclusivas e novidades em primeira mão.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Seu email" 
                className="bg-background/50 border-border"
              />
              <Button variant="default" className="w-full">
                Inscrever-se
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-3 w-3" />
                contato@ecoshop.com
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-3 w-3" />
                (11) 9999-9999
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                São Paulo, SP
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 EcoShop. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              Termos de Uso
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};