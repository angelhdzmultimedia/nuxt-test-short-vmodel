// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { transformShortVmodel } from '@vue-macros/short-vmodel'
import vue from '@vitejs/plugin-vue'

export default defineNuxtConfig({
  ssr: false,
  /*  vite: {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            nodeTransforms: [
              transformShortVmodel({
                prefix: '$',
              }),
            ],
          },
        },
      }),
    ],
  }, */
  modules: ['@vue-macros/nuxt'],
})
