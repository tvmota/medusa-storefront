// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-medusa', '@nuxtjs/google-fonts'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800, 900]
    }
  },
  devServer: {
    port: 8000
  },
})
