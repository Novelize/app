// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      "vue/no-multiple-template-root": "off",
      "vue/attribute-hyphenation":     "off",
      "vue/require-default-prop":      "off",
    },
  })
