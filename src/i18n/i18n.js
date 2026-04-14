import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
	en: {
		translation: {
			// Header
      "SOKKEN LOKKEN": "SOKKEN LOKKEN",
      "Search...": "Search...",

      // Navigation
      "Man's": "Man's",
      "Woman's": "Woman's",
      "Kid's": "Kid's",
      "New!": "New!",

      // Footer
      "Categories": "Categories",
      "Service": "Service",
      "Contact": "Contact",
      "Phone": "Phone",
      "Email": "Email",
      "Our shop": "Our shop",
      "Payment methods": "Payment methods",
      "Shipping & return": "Shipping & return",
      "General terms & conditions": "General terms & conditions",
      "Our new socks": "Our new socks",
      "rights": "© 2026 SOKKEN LOKKEN, rights reserved.",
      "footerPhrase": "Some phrase",

			// Catalog
			"Nothing is found by search": "Nothing is found by search",
			"addToCart": "+ Add to cart",
			"inCart": "In cart",
			"loading": "Loading...",
    	"All socks": "All socks"
		}
	},

	nl: {
		translation: {
			// Header
			"SOKKEN LOKKEN": "SOKKEN LOKKEN",
      "Search...": "Zoeken...",
			// Navigation
      "Man's": "Heren",
      "Woman's": "Dames",
      "Kid's": "Kinderen",
      "New!": "Nieuw!",
			// Footer
      "Categories": "Categorieën",
      "Service": "Service",
      "Contact": "Contact",
      "Phone": "Telefoon",
      "Email": "E-mail",
      "Our shop": "Onze winkel",
      "Payment methods": "Betaalmethoden",
      "Shipping & return": "Verzending & retour",
      "General terms & conditions": "Algemene voorwaarden",
      "Our new socks": "Onze nieuwe sokken",
      "rights": "© 2026 SOKKEN LOKKEN, alle rechten voorbehouden.",
      "footerPhrase": "Een of andere uitdrukking",

			// Catalog
			"Nothing is found by search": "Niets gevonden op uw zoekopdracht",
			"addToCart": "+ Toevoegen aan winkelwagen",
			"inCart": "In winkelwagen",
			"loading": "Laden...",
    	"All socks": "Alle sokken"
		}
	}
}

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: 'en',
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false
		}
	})

export default i18n;