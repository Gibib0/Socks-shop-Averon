import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Heart, ShoppingCart, Search } from 'lucide-react'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentLang, setCurrentLang] = useState('en')
  const location = useLocation()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  const changeLanguage = (lang) => {
    setCurrentLang(lang)
    console.log(`Language has been changed to: ${lang}`)
  }

	const getActiveCategory = () => {
    const path = location.pathname;
    if (path.includes('/catalog/men')) return 'men';
    if (path.includes('/catalog/women')) return 'women';
    if (path.includes('/catalog/kids')) return 'kids';
    if (path.includes('/catalog/new')) return 'new';
    return null;
  }

	const activeCategory = getActiveCategory()

  return (
    <header className="bg-white sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link to="/" className="flex items-center">
              <img 
                src="/src/assets/AveronLogo.png" 
                alt="Averon Logo" 
                className="h-11 w-auto"
              />
            </Link>

            <Link 
              to="/" 
              className="font-bold text-3xl tracking-tighter"
              style={{ fontFamily: "'Montserrat Subrayada', sans-serif" }}
            >
              AVERON
            </Link>

            <form onSubmit={handleSearch} className="w-80">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full bg-gray-100 border border-gray-200 rounded-2xl py-2 pl-12 pr-5 text-base focus:outline-none focus:border-gray-400 transition-colors"
                />
                <Search className="absolute left-5 top-2.5 text-gray-400" size={20} />
              </div>
            </form>
          </div>

          <div className="flex items-center gap-7">
            <div className="flex items-center gap-1.5 text-sm font-medium">
              <span 
                onClick={() => changeLanguage('en')}
                className={`cursor-pointer transition-colors ${currentLang === 'en' ? 'font-bold text-black' : 'text-gray-500 hover:text-black'}`}
              >
                EN
              </span>
              <span className="text-gray-300 mx-0.5">/</span>
              <span 
                onClick={() => changeLanguage('nl')}
                className={`cursor-pointer transition-colors ${currentLang === 'nl' ? 'font-bold text-black' : 'text-gray-500 hover:text-black'}`}
              >
                NL
              </span>
            </div>

            <Link to="/favorites" className="hover:text-red-500 transition-colors">
              <Heart size={24} strokeWidth={2.3} />
            </Link>

            <Link to="/cart" className="relative hover:text-black transition-colors">
              <ShoppingCart size={24} strokeWidth={2.3} />
            </Link>

            <Link to="/profile">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                <img 
                  src="https://via.placeholder.com/128" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-center h-14 text-base font-medium text-gray-700">
            <Link 
              to="/catalog/men"
              className={`px-15 py-4 transition-all ${
                activeCategory === 'men' 
                  ? 'bg-gray-200 font-semibold' 
                  : 'hover:bg-gray-100'
              }`}
            >
              Man's
            </Link>
            <Link 
              to="/catalog/women"
              className={`px-15 py-4 transition-all ${
                activeCategory === 'women' 
                  ? 'bg-gray-200 font-semibold' 
                  : 'hover:bg-gray-100'
              }`}
            >
              Woman's
            </Link>
            <Link 
              to="/catalog/kids"
              className={`px-15 py-4 transition-all ${
                activeCategory === 'kids' 
                  ? 'bg-gray-200 font-semibold' 
                  : 'hover:bg-gray-100'
              }`}
            >
              Kid's
            </Link>
            <Link 
              to="/catalog/new"
              className={`px-15 py-4 transition-all ${
                activeCategory === 'new' 
                  ? 'bg-gray-200 font-semibold' 
                  : 'hover:bg-gray-100'
              }`}
            >
              New!
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header