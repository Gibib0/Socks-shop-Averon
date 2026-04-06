import {Heart} from 'lucide-react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const ProductCard = ({product}) => {
	const [isFavorited, setIsFavorited] = useState(false)
	const [isInCart, setIsInCart] = useState(false)

	const handleFavorite = (e) => {
		e.preventDefault()
		setIsFavorited(!isFavorited)
	}

	const handleAddToCart = (e) => {
    e.preventDefault()
    setIsInCart(true)
    console.log('Added to cart:', product)
  }

	return (
		<Link to={`/item/${product.id}`} className='group block bg-white border border-gray-200 hover:border-gray-400 transition-all'>
			<div className='relative bg-gray-200 aspect-square flex items-center justify-center overflow-hidden'>
				<div className='text-7x1 text-gray-300'>🧦</div>

				<button
					onClick={handleFavorite}
					className='absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:scale-110 transitiob-transform z-10'
				>
					<Heart 
						size={20}
						className={isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'}
					/>
				</button>
			</div>

			<div className='p-5'>
				<h3 className='font-medium text-base mb-2'>{product.name}</h3>
				<p className='text-2xl font-semibold mb-5'>{product.price.toFixed(2)} €</p>

				<button 
          onClick={handleAddToCart}
          className={`w-full py-3.5 text-sm font-medium transition-all ${
            isInCart 
              ? 'bg-green-600 text-white' 
              : 'bg-black hover:bg-gray-900 text-white'
          }`}
        >
          {isInCart ? 'In cart' : '+ Add to cart'}
        </button>
			</div>
		</Link>
	)
}

export default ProductCard