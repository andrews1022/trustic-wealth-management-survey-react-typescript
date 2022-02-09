const theme = {
	mediaQueries: {
		desktopHD: 'only screen and (max-width: 1920px)',
		desktopMedium: 'only screen and (max-width: 1680px)',
		desktopSmall: 'only screen and (max-width: 1440px)',
		laptop: 'only screen and (max-width: 1366px)',
		laptopSmall: 'only screen and (max-width: 1280px)',
		tabletLandscape: 'only screen and (max-width: 1024px)',
		tabletMedium: 'only screen and (max-width: 900px)',
		tabletPortrait: 'only screen and (max-width: 768px)',
		mobileXLarge: 'only screen and (max-width: 640px)',
		mobileLarge: 'only screen and (max-width: 576px)',
		mobileMedium: 'only screen and (max-width: 480px)',
		mobileSmall: 'only screen and (max-width: 415px)',
		mobileXSmall: 'only screen and (max-width: 375px)',
		mobileTiny: 'only screen and (max-width: 325px)'
	},
	shades: {
		white: '#fff',
		black: '#000'
	},
	greys: {
		whiteSmoke: '#eee'
	},
	colors: {
		supernova: '#fcb332',
		niagara: '#20a08b',
		lochmara: '#2d5ca7',
		purpleHeart: '#4834ae',
		gulfBlue: '#384160'
	},
	fonts: {
		lato: "'Lato', sans-serif",
		playfair: "'Playfair Display', serif"
	},
	fontWeights: {
		thin: 100,
		extraLight: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semiBold: 600,
		bold: 700,
		extraBold: 800,
		black: 900
	},
	fontSizes: {
		small: 'clamp(1rem, 5vw, 1.75rem)',
		medium: 'clamp(1.5rem, 5vw, 2.5rem)',
		large: 'clamp(2rem, 5vw, 3rem)'
	}
};

export default theme;
