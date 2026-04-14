import {create} from 'zustand'
import api from '../../api/api'

const useCartStore = create((set, get) => ({
	cart: [],

	fetchCart: async () => {
    try {
      const res = await api.get('/cart')
      set({ cart: res.data })
    } catch (error) {
      console.error('Error loading cart', error)
    }
  },

	addToCart: async (product) => {
		const {cart} = get()
		const existing = cart.find(item => item.id === product.id)

		try {
			if (existing) {
				await api.patch(`/cart/${existing.id}`, {
					quantity: existing.quantity + 1
				})
			} else {
				await api.post('/cart', {...product, quantity: 1})
			}
			await get().fetchCart()
		} catch (error) {
			console.error('Error adding to cart', error);
		}
	},

	removeFromCart: async (id) => {
		try {
			await api.delete(`/cart/${id}`)
			await get().fetchCart()
		} catch (error) {
			console.error('Error removing from cart', error);
		}
	},

	updateQuantity: async (id, quantity) => {
		try {
			await api.patch(`/cart/${id}`, {quantity: Math.max(1, quantity)})
			await get().fetchCart()
		} catch (error) {
			console.error('Error updating quantity', error);
		}
	},

	clearCart: async () => {
		try {
			const {cart} = get()
			await Promise.all(cart.map(item => api.delete(`cart/${item.id}`)))
			set({cart: []})
		} catch (error) {
			console.error('Error clearing cart', error);
		}
	}
}))

export default useCartStore