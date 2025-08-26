import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Truck, Shield, Headphones, CreditCard } from "lucide-react";

// Mock data for featured products
const featuredProducts = [
  {
    id: "1",
    name: "Smartphone XYZ Pro Max",
    price: 2999.99,
    originalPrice: 3499.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    rating: 4.8,
    reviews: 128,
    category: "Eletrônicos",
    isOnSale: true,
    isBestSeller: true,
    stock: 15
  },
  {
    id: "2",
    name: "Tênis Esportivo Runner Pro",
    price: 299.90,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    rating: 4.6,
    reviews: 89,
    category: "Esportes",
    stock: 8
  },
  {
    id: "3",
    name: "Headphone Wireless Premium",
    price: 899.99,
    originalPrice: 1199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    rating: 4.9,
    reviews: 256,
    category: "Eletrônicos",
    isOnSale: true,
    stock: 23
  },
  {
    id: "4",
    name: "Relógio Smart Watch Elite",
    price: 1299.99,
    originalPrice: 1699.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    rating: 4.7,
    reviews: 134,
    category: "Eletrônicos",
    isOnSale: true,
    isBestSeller: true,
    stock: 12
  }
];

const categories = [
  { name: "Eletrônicos", icon: "📱", count: "2.5k+ produtos" },
  { name: "Moda", icon: "👕", count: "1.8k+ produtos" },
  { name: "Casa", icon: "🏠", count: "3.2k+ produtos" },
  { name: "Esportes", icon: "⚽", count: "1.1k+ produtos" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Entrega Rápida</h3>
                <p className="text-sm text-muted-foreground">Receba em casa em até 2 dias úteis</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-semibold">Compra Segura</h3>
                <p className="text-sm text-muted-foreground">Seus dados protegidos</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto">
                  <Headphones className="h-6 w-6 text-warning" />
                </div>
                <h3 className="font-semibold">Suporte 24/7</h3>
                <p className="text-sm text-muted-foreground">Atendimento sempre disponível</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-price/10 rounded-full flex items-center justify-center mx-auto">
                  <CreditCard className="h-6 w-6 text-price" />
                </div>
                <h3 className="font-semibold">Parcelamento</h3>
                <p className="text-sm text-muted-foreground">Em até 12x sem juros</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Explore por Categoria
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Encontre exatamente o que você procura navegando pelas nossas categorias
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <div 
                  key={category.name}
                  className="group bg-card border border-border rounded-lg p-6 text-center hover:shadow-elegant hover:border-primary/20 transition-smooth cursor-pointer"
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-smooth">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Produtos em Destaque
                </h2>
                <p className="text-muted-foreground">
                  Os mais procurados pelos nossos clientes
                </p>
              </div>
              <Button variant="outline" className="group">
                Ver Todos
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <Badge className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                <Star className="h-3 w-3 mr-1" />
                Ofertas Exclusivas
              </Badge>
              
              <h2 className="text-3xl font-bold text-primary-foreground">
                Não perca nenhuma promoção!
              </h2>
              
              <p className="text-primary-foreground/80 text-lg">
                Inscreva-se e receba ofertas especiais, lançamentos e cupons de desconto
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                />
                <Button 
                  variant="secondary" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Inscrever-se
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
