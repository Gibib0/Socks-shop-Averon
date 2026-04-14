import { create } from "zustand";
import api from '../../api/api'

const useFavoritesStore = create((set, get) => ({
	favorites: [],

	fetchFavorites: async () => {
		try {
			const res = await api.get('/favorites')
			set({favorites: res.data})
		} catch (error) {
			console.error('Failed to load favorites:', error)
		}
	},

	toggleFavorite: async (product) => {
		const {favorites} = get()
		const exists = favorites.some(item => item.id === product.id)
		
		try {
			if (exists) {
				await api.delete(`/favorites/${product.id}`)
			} else {
				await api.post('/favorites', product)
			}
			await get().fetchFavorites()
		} catch (error) {
			console.error('Error toggling favorite', error);
		}
	},

	removeFavorite: async (id) => {
		try {
			await api.delete(`/favorites/${id}`)
			await get().fetchFavorites()
		} catch (error) {
			console.error('Error removing favorite', error);
		}
	}
}))

export default useFavoritesStore