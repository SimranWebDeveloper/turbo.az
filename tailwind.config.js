/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // yeni nese yazmaq
  theme: {
    container: {
      center: true,

    },

 // olan seyleri ozellesdirmek
    extend: {
      screens: {
        'lg': '1010px', // Örnek olarak "xl" kesim noktasını 1280px yapın
      }
    },
    
  },
  plugins: [],
}

// umumi propertini deyisirik