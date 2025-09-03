# Commerce Nova Web - E-commerce Moderno

## Sobre o Projeto

**Commerce Nova Web** é uma plataforma de e-commerce moderna e responsiva, desenvolvida com as mais recentes tecnologias web. O projeto oferece uma experiência de compra completa com design elegante, funcionalidades avançadas e performance otimizada.

## ✨ Funcionalidades

- 🛍️ **Catálogo de Produtos**: Navegação intuitiva com filtros por categoria e preço
- 🔍 **Busca Avançada**: Sistema de pesquisa em tempo real
- 🛒 **Carrinho de Compras**: Gerenciamento completo de itens
- 📱 **Design Responsivo**: Otimizado para desktop, tablet e mobile
- 🎨 **Interface Moderna**: Design system consistente com Tailwind CSS
- ⭐ **Avaliações**: Sistema de rating e reviews
- 💳 **Checkout Seguro**: Processo de compra simplificado
- 🚀 **Performance**: Carregamento rápido e otimizado

## 🛠 Tecnologias Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Roteamento**: React Router DOM
- **Estado**: Context API + React Hooks
- **Ícones**: Lucide React
- **Deploy**: Vercel / Netlify

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

```bash
# 1. Clone o repositório
git clone <URL_DO_SEU_REPOSITORIO>

# 2. Entre no diretório do projeto
cd commerce-nova-web

# 3. Instale as dependências
npm install

# 4. Execute o projeto em modo de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📂 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── Header.tsx      # Cabeçalho da aplicação
│   ├── Footer.tsx      # Rodapé
│   ├── ProductCard.tsx # Card de produto
│   └── HeroSection.tsx # Seção hero da homepage
├── contexts/           # Contextos do React
│   └── CartContext.tsx # Gerenciamento do carrinho
├── hooks/             # Hooks customizados
│   └── useSearch.tsx  # Hook para busca de produtos
├── pages/             # Páginas da aplicação
│   ├── Index.tsx      # Homepage
│   ├── Products.tsx   # Listagem de produtos
│   ├── ProductDetail.tsx # Detalhes do produto
│   └── Cart.tsx       # Página do carrinho
├── lib/               # Utilitários
└── styles/            # Estilos globais
```

## 🎨 Design System

O projeto utiliza um design system consistente baseado em:

- **Cores**: Sistema de cores semânticas
- **Tipografia**: Hierarquia tipográfica clara
- **Componentes**: Biblioteca shadcn/ui customizada
- **Animações**: Transições suaves e micro-interações
- **Responsividade**: Mobile-first approach

## 🛒 Funcionalidades Implementadas

### ✅ Concluídas
- [x] Homepage com hero section
- [x] Catálogo de produtos com filtros
- [x] Sistema de busca
- [x] Carrinho de compras
- [x] Página de detalhes do produto
- [x] Design responsivo
- [x] Sistema de avaliações
- [x] Gerenciamento de estoque

### 🔄 Em Desenvolvimento
- [ ] Autenticação de usuários
- [ ] Integração com Supabase
- [ ] Sistema de pagamento (Stripe)
- [ ] Painel administrativo
- [ ] Histórico de pedidos
- [ ] Sistema de cupons

## 📱 Como Editar o Código

### **Usando Editor de Código**
1. Clone o repositório
2. Use VS Code ou seu editor favorito
3. Faça suas alterações localmente
4. Commit e push para o repositório

### **Estrutura de Desenvolvimento**
1. Navegue até o arquivo desejado
2. Faça suas alterações
3. Teste localmente com `npm run dev`
4. Commit suas mudanças

## 🚀 Deploy

### Deploy com Vercel
1. Conecte seu repositório no Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Deploy com Netlify
1. Conecte seu repositório no Netlify
2. Configure build command: `npm run build`
3. Publish directory: `dist`

## 📞 Suporte

Para dúvidas ou sugestões:
- Abra uma issue no GitHub
- Entre em contato através do e-mail

---

Desenvolvido com ❤️ para Commerce Nova Web