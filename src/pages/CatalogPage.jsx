import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const CatalogPage = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

	const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(30);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const getTitle = () => {
    if (searchQuery) return `Search: "${searchQuery}"`
    switch(category?.toLowerCase()) {
      case 'men': return "Man's socks";
      case 'women': return "Woman's socks";
      case 'kids': return "Kid's socks";
      case 'new': return "New!";
      default: return "All socks";
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allProducts = [
    { id: 1, name: "Classic Black Socks", price: 4.99 },
    { id: 2, name: "Striped Summer Socks", price: 6.50 },
    { id: 3, name: "Wool Warm Socks", price: 12.99 },
    { id: 4, name: "Funny Pattern Socks", price: 5.99 },
    { id: 5, name: "Pink Cute Socks", price: 7.50 },
    { id: 6, name: "Luxury Silk Socks", price: 18.99 },
    { id: 7, name: "Kids Dinosaur Socks", price: 3.99 },
    { id: 8, name: "Cartoon Socks Pack", price: 9.99 },
    { id: 9, name: "Classic White Socks", price: 4.50 },
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    
    return matchesSearch && matchesPrice;
  })

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight">{getTitle()}</h1>
        </div>
      </div>

      <div className="sticky top-[118px] z-40 bg-white border-b py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="flex items-center gap-4 bg-white px-6 py-3 rounded shadow-sm border">
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value) || 0)}
              className="w-20 bg-gray-100 border border-gray-300 rounded text-center py-2 text-sm font-medium focus:outline-none"
            />
            <span className="text-gray-500 font-medium">to</span>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value) || 30)}
              className="w-20 bg-gray-100 border border-gray-300 rounded text-center py-2 text-sm font-medium focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-28">
            <p className="text-3xl text-gray-400">Nothing is found by search</p>
          </div>
        )}
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black hover:bg-gray-800 text-white p-4 rounded-full shadow-xl z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default CatalogPage;