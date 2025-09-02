import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Heart, ShoppingCart, Plus, Minus } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

// Mock product data - em uma aplicação real, isso viria de uma API
const mockProducts = [
  {
    id: "1",
    name: "Smartphone Ultra Pro Max 256GB",
    price: 2899.99,
    originalPrice: 3299.99,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 2847,
    category: "Eletrônicos",
    isOnSale: true,
    isBestSeller: true,
    stock: 15,
    description: "O smartphone mais avançado da categoria, com câmera profissional de 108MP, processador de última geração e bateria que dura o dia todo. Perfeito para quem busca performance e qualidade.",
    features: [
      "Tela AMOLED 6.7\" 120Hz",
      "Câmera tripla 108MP + 12MP + 5MP",
      "Processador Snapdragon 8 Gen 2",
      "256GB de armazenamento",
      "Bateria 5000mAh com carregamento rápido",
      "Resistente à água IP68"
    ],
    specifications: {
      "Sistema Operacional": "Android 14",
      "Processador": "Snapdragon 8 Gen 2",
      "Memória RAM": "12GB",
      "Armazenamento": "256GB",
      "Tela": "6.7\" AMOLED 120Hz",
      "Câmera Principal": "108MP",
      "Bateria": "5000mAh",
      "Conectividade": "5G, Wi-Fi 6E, Bluetooth 5.3"
    }
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  // Em uma aplicação real, você faria uma chamada à API aqui
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];

  const handleAddToCart = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    addToCart(product, quantity);
    setIsLoading(false);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
          <span>/</span>
          <Link to="/produtos" className="hover:text-primary transition-smooth">Produtos</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/produtos">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar aos produtos
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden border-0 shadow-card">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isOnSale && (
                      <Badge variant="destructive" className="bg-sale text-sale-foreground font-bold text-lg px-3 py-1">
                        -{discountPercentage}%
                      </Badge>
                    )}
                    {product.isBestSeller && (
                      <Badge className="bg-warning text-warning-foreground font-semibold">
                        Best Seller
                      </Badge>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 right-4 h-10 w-10 bg-background/90 hover:bg-background"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                  >
                    <Heart className={cn(
                      "h-5 w-5 transition-smooth",
                      isWishlisted ? "fill-current text-destructive" : "text-muted-foreground"
                    )} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category */}
            <div className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
              {product.category}
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-foreground">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < Math.floor(product.rating)
                          ? "fill-warning text-warning"
                          : "text-muted-foreground"
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} avaliações)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-price">
                  R$ {product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    R$ {product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <div className="text-sm text-success">
                  Você economiza R$ {(product.originalPrice - product.price).toFixed(2)}
                </div>
              )}
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2">
              <div className={cn(
                "w-3 h-3 rounded-full",
                product.stock > 10 ? "bg-success" : product.stock > 0 ? "bg-warning" : "bg-destructive"
              )} />
              <span className="text-sm">
                {product.stock > 10 ? "Em estoque" : 
                 product.stock > 0 ? `Apenas ${product.stock} unidades restantes` : 
                 "Fora de estoque"}
              </span>
            </div>

            <Separator />

            {/* Quantity Selector */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantidade:</span>
                <div className="flex items-center border border-border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-r-none"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="w-16 h-10 flex items-center justify-center border-x border-border">
                    {quantity}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-l-none"
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                onClick={handleAddToCart}
                disabled={product.stock === 0 || isLoading}
                variant="cart"
                size="lg"
                className="w-full"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Adicionando...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Adicionar ao Carrinho - R$ {(product.price * quantity).toFixed(2)}
                  </div>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="border-0 shadow-card">
          <CardContent className="p-6">
            {/* Tab Navigation */}
            <div className="flex border-b border-border mb-6">
              <Button
                variant="ghost"
                className={cn(
                  "rounded-none border-b-2 border-transparent px-6 py-3",
                  activeTab === "description" && "border-primary text-primary"
                )}
                onClick={() => setActiveTab("description")}
              >
                Descrição
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "rounded-none border-b-2 border-transparent px-6 py-3",
                  activeTab === "specifications" && "border-primary text-primary"
                )}
                onClick={() => setActiveTab("specifications")}
              >
                Especificações
              </Button>
            </div>

            {/* Tab Content */}
            {activeTab === "description" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Sobre o produto</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Principais características</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Especificações técnicas</h3>
                <div className="grid gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-border last:border-0">
                      <span className="font-medium">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;