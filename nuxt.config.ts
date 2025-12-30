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
        src: [
          '@/assets/fonts/Poppins/Poppins-Black.ttf',
          '@/assets/fonts/Poppins/Poppins-BlackItalic.ttf',
          '@/assets/fonts/Poppins/Poppins-Bold.ttf',
          '@/assets/fonts/Poppins/Poppins-BoldItalic.ttf',
          '@/assets/fonts/Poppins/Poppins-ExtraBold.ttf',
          '@/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf',
          '@/assets/fonts/Poppins/Poppins-ExtraLight.ttf',
          '@/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf',
          '@/assets/fonts/Poppins/Poppins-Italic.ttf',
          '@/assets/fonts/Poppins/Poppins-Light.ttf',
          '@/assets/fonts/Poppins/Poppins-LightItalic.ttf',
          '@/assets/fonts/Poppins/Poppins-Medium.ttf',
          '@/assets/fonts/Poppins/Poppins-MediumItalic.ttf',
          '@/assets/fonts/Poppins/Poppins-Regular.ttf',
          '@/assets/fonts/Poppins/Poppins-SemiBold.ttf',
          '@/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf',
          '@/assets/fonts/Poppins/Poppins-Thin.ttf',
          '@/assets/fonts/Poppins/Poppins-ThinItalic.ttf',
        ],
      },
    ],
  },

  nitro: {
    preset: 'bun',
  },
});
