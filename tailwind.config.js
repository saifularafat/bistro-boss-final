/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* Font Family */
      fontFamily: {
        Cinzel :['Cinzel', 'serif'],
        Inter :['Inter', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif']
      },
      
      /* custom color */
      colors: {
        titleColor: '#151515', 
        descColor: '#444444', 
        PopularColor: '#737373', 
        subTitle_color: '#D99904', 
        btn_color: '#BB8506', 
        btn_text: '#1F2937', 
        login_btn: '#D1A054B2', 
      },
      /* background image */
      backgroundImage: {
        'login_img': "url('./src/assets/others/authentication.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}