// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],

  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: '@/components/ui',
  },

  colorMode: {
    classSuffix: '',
  },

  fonts: {
    families: [
      {
        name: 'Poppins',
        provider: 'local',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        src: '@/assets/fonts/Poppins/*.ttf',
      },
    ],
  },

  nitro: {
    preset: 'bun',
  },
});
