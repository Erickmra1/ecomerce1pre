import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, Grid, List, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useSearch } from "@/hooks/useSearch";

// Mock data
const mockProducts = [
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
    name: "Camiseta Premium Cotton",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    rating: 4.4,
    reviews: 67,
    category: "Moda",
    stock: 45
  },
  {
    id: "5",
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
  },
  {
    id: "6",
    name: "Mochila Executiva Couro",
    price: 449.90,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    rating: 4.5,
    reviews: 92,
    category: "Acessórios",
    stock: 18
  }
];

const categories = ["Todos", "Eletrônicos", "Moda", "Esportes", "Acessórios"];
const sortOptions = [
  { value: "relevance", label: "Mais Relevantes" },
  { value: "price-low", label: "Menor Preço" },
  { value: "price-high", label: "Maior Preço" },
  { value: "rating", label: "Melhor Avaliado" },
  { value: "newest", label: "Mais Recente" }
];

export default function Products() {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("relevance");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const { searchTerm, setSearchTerm, filteredProducts: searchedProducts, isSearching } = useSearch(mockProducts);

  // Handle search from URL params
  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      setSearchTerm(searchQuery);
    }
  }, [searchParams, setSearchTerm]);

  const filteredProducts = searchedProducts.filter(product => 
    selectedCategory === "Todos" || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <span>Home</span>
          <span>/</span>
          <span className="text-foreground">Produtos</span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Nossos Produtos
            </h1>
            <div className="flex flex-col gap-1">
              {isSearching && (
                <p className="text-sm text-muted-foreground">
                  Resultados para "{searchTerm}"
                </p>
              )}
              <p className="text-muted-foreground">
                Encontrados {filteredProducts.length} produtos
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant={viewMode === "grid" ? "default" : "outline"} 
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button 
              variant={viewMode === "list" ? "default" : "outline"} 
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-4 w-4" />
                <h3 className="font-semibold">Filtros</h3>
              </div>
              
              <Separator className="mb-4" />
              
              {/* Categories */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Categorias</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="text-primary"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <Separator className="my-4" />
              
              {/* Price Range */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Faixa de Preço</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="text-primary" />
                    <span className="text-sm">Até R$ 100</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="text-primary" />
                    <span className="text-sm">R$ 100 - R$ 500</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="text-primary" />
                    <span className="text-sm">R$ 500 - R$ 1000</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="text-primary" />
                    <span className="text-sm">Acima de R$ 1000</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort and View Options */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex flex-wrap gap-2">
                {["Em Oferta", "Mais Vendidos", "Novidades"].map((filter) => (
                  <Badge key={filter} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth">
                    {filter}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <SortAsc className="h-4 w-4 text-muted-foreground" />
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-background border border-border rounded-md px-3 py-1 text-sm"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products */}
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    className={viewMode === "list" ? "flex-row" : ""}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    Nenhum produto encontrado
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Tente ajustar sua busca ou explorar nossas categorias
                  </p>
                </div>
              )}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Carregar Mais Produtos
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}