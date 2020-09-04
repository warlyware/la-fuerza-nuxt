<template>
  <div class="uppercase">
    <nuxt-link v-if="button.internalLink && button.internalLink.length"
    :to="localePath(button.internalLink)">
      {{button.text[locale]}}
    </nuxt-link>
    <a v-else :href="sanitizeLink(button.externalLink)"
    :target="button.newWindow ? '_blank': ''">
      {{button.text[locale]}}
    </a>
  </div>
</template>

<script>
import sanitizeLink from '~/lib/sanitizeLink'

export default {
  props: {
    button: {
      required: true,
      type: Object
    }
  },
  computed: {
    locale() { return this.$i18n.locale },
  },
  methods: {
    sanitizeLink(link) {
      return sanitizeLink(link)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
