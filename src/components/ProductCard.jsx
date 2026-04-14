import {Heart} from 'lucide-react'
import {Link} from 'react-router-dom'
// ==============================
import useCartStore from '../features/store/cartStore'
import useFavoritesStore from '../features/store/favoritesStore'
import { useTranslation } from 'react-i18next'

const ProductCard = ({product}) => {
	const {cart, addToCart} = useCartStore()
	const {favorites, toggleFavorite} = useFavoritesStore()

	const isInCart = cart.some(item => item.id === product.id)
	const isFavorited = favorites.some(item => item.id === product.id)

	const { t } = useTranslation()

	const handleAddToCart = (e) => {
		e.preventDefault()
		e.stopPropagation()
		addToCart(product)
	}

	const handleToggleFavorite = (e) => {
		e.preventDefault()
		e.stopPropagation()
		toggleFavorite(product)
	}

	return (
		<Link to={`/item/${product.id}`} className='group block bg-white border border-gray-200 hover:border-gray-400 transition-all'>
			<div className='relative bg-gray-100 aspect-square flex items-center justify-center overflow-hidden'>
				{product.image ? (
    			<img 
      			src={product.image} 
      			alt={product.name}
      			className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      			onError={(e) => {
        			e.target.onerror = null;
        			e.target.src = "https://via.placeholder.com/400x400?text=No+Image"; // fallback
      			}}
    			/>
  			) : (
    			<div className="text-7xl text-gray-300">🧦</div>
  			)}

				<button 
          onClick={handleToggleFavorite}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:scale-110 transition-transform z-10"
        >
          <Heart 
            size={22} 
            className={isFavorited 
              ? "fill-red-500 text-red-500" 
              : "text-gray-600 hover:text-red-500"
            } 
          />
        </button>
			</div>

			<div className='p-5'>
				<h3 className="font-medium text-base mb-2 line-clamp-2">{product.name}</h3>
				<p className="text-2xl font-semibold mb-5">€{product.price.toFixed(2)}</p>

				<button 
          onClick={handleAddToCart}
          className={`w-full py-3.5 text-sm font-medium transition-all ${
            isInCart 
              ? 'bg-green-600 text-white' 
              : 'bg-black hover:bg-gray-900 text-white'
          }`}
        >
          {isInCart ? t('inCart') : t('addToCart')}
        </button>
			</div>
		</Link>
	)
}

export default ProductCard