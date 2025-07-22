const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite-react/**/*.js",
        ".flowbite-react\\class-list.json"
    ],
  safelist: [
    ...Array.from({ length: 13 }, (_, i) => `col-start-${i + 1}`),
    ...Array.from({ length: 13 }, (_, i) => `col-end-${i + 1}`),
    ...Array.from({ length: 13 }, (_, i) => `row-start-${i + 1}`),
    ...Array.from({ length: 13 }, (_, i) => `row-end-${i + 1}`),
    "object-cover", "z-0", "z-10", "z-20", "z-30", "w-full", "h-full", "animate-bounce"
  ],
  theme: {
	screens: {
		'sm': '640px',    // min-width: 640px
		'md': '768px',    // min-width: 768px (iPad starts here)
		'lg': '1301px',   // min-width: 1301px
	  },
  	extend: {
  		colors: {
			mainBg: '#FFFFFF',
			main:'#BC3030',
			secondary:'#F9888A',
			mainButton:'#F9888A',
			nav: '#FFFFFF',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [flowbiteReact],
};
