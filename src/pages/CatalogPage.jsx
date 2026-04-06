import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
// ==============================
import {ArrowUp} from 'lucide-react'
// ============================== 
import ProductCard from "../components/ProductCard";

const CatalogPage = () => {
	const {category} = useParams()
	const [showScrollTop, setShowScrollTop] = useState(false)

	const [priceRange, setPriceRange] = useState(50)

	const getTitle = () => {
		switch(category?.toLowerCase()) {
			case 'men': return "Man's socks"
			case 'women': return "Woman's socks"
			case 'kids': return "Kid's socks"
			case 'new': return "New!"
			default: return 'All socks'
		}
	}

	const scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'})
	}
	
	useEffect(() => {
		const handleScroll = () => setShowScrollTop(window.scrollY > 400)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const products = [
    { id: 1, name: "Classic Black Socks", price: 4.99 },
    { id: 2, name: "Striped Summer Socks", price: 6.50 },
    { id: 3, name: "Wool Warm Socks", price: 12.99 },
    { id: 4, name: "Funny Pattern Socks", price: 5.99 },
    { id: 5, name: "Pink Cute Socks", price: 7.50 },
    { id: 6, name: "Luxury Silk Socks", price: 18.99 },
    { id: 7, name: "Kids Dinosaur Socks", price: 3.99 },
    { id: 8, name: "Cartoon Socks Pack", price: 9.99 },
  ]

	const filteredProducts = products.filter(p => p.price <= priceRange)

	return (
		<div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-gray-200 py-5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">{getTitle()}</h1>
        </div>
      </div>

      <div className="sticky top-[118px] z-40 bg-white border-b py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-8 mb-3">
              <span className="text-sm font-medium text-gray-600">Price up to:</span>
              <span className="text-xl font-semibold text-black">€{priceRange}</span>
            </div>

            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full max-w-md accent-black cursor-pointer"
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
            <p className="text-3xl text-gray-400">No products found</p>
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
	)
}

export default CatalogPage