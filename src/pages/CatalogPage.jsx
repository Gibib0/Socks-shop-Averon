import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
// ================================
import api from '../api/api.js'
import useFavoritesStore from '../features/store/favoritesStore.js';
import useCartStore from '../features/store/cartStore.js';
import { useTranslation } from 'react-i18next'

const CatalogPage = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search')?.trim() || ''

	const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(30)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const { t } = useTranslation()

  const getTitle = () => {
    if (searchQuery) return `Search: "${searchQuery}"`
    switch(category?.toLowerCase()) {
      case 'men': return t("Man's")
      case 'women': return t("Woman's")
      case 'kids': return t("Kid's")
      case 'new': return t("New!")
      default: return t("All socks")
    }
  }

  useEffect(() => {
    useFavoritesStore.getState().fetchFavorites()
    useCartStore.getState().fetchCart()
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await api.get('/products')
        setProducts(response.data)
      } catch (error) {
        console.error('Loading error:', error)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const filteredProducts = products.filter(product => {
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

    const matchesCategory = !category ||
    product.category?.toLowerCase() === category.toLowerCase()

    return matchesSearch && matchesPrice && matchesCategory;
  })

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <p className="text-3xl text-gray-400">{t("Nothing is found by search")}</p>
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