module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img-md':
          "linear-gradient(to right, rgba(243, 244, 246, 1), rgba(243, 244, 246, 0)), url('https://images.pexels.com/photos/7692693/pexels-photo-7692693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        'bg-img':
        "linear-gradient(to right, rgba(243, 244, 246, 0.8), rgba(243, 244, 246, 0.3)), url('https://images.pexels.com/photos/7692693/pexels-photo-7692693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
      },
      borderRadius: {
        '50': '50px',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}