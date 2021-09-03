import tailwindModule from '../src'

export default {
  css: [
    {
      src: './global-order-1.css',
      lang: 'css'
    },
    {
      src: './global-order-2.css',
      lang: 'css'
    }
  ],
  buildModules: [
    tailwindModule
  ],
  components: true,
  tailwindcss: {
    jit: true,
    exposeConfig: true,
    injectPosition: 0
  }
}
