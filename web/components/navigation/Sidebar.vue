<template>
  <sidebar-menu :menu="menu" width="300px" theme="white-theme"
  width-collapsed="0" :collapsed="!navIsOpen" :rtl="true"
  :disable-hover="true" :class="navIsOpen ? '' : '-mr-4'"
  @toggle-collapse="handleToggleCollapse"
  @item-click="handleItemClicked">
    <span slot="dropdown-icon" class="text-2xl text-blue">&#8227;</span>
    <span slot="toggle-icon">x</span>
  </sidebar-menu>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      menu: [
        {
          href: '/',
          title: 'HOME •',
          hiddenOnCollapse: true
        },
        {
          href: '/videos',
          title: 'VIDEOS •',
          hiddenOnCollapse: true
        },
        {
          href: '/resources',
          title: 'RECURSOS •',
          hiddenOnCollapse: true
        },
        {
          href: '/workshops',
          title: 'TALLERES •',
          hiddenOnCollapse: true
        },
        {
          href: '/collaborators',
          title: 'COLABORADORES •',
          hiddenOnCollapse: true
        },
        {
          href: '/join',
          title: 'ÚNETE •',
          hiddenOnCollapse: true
        }
      ]
    }
  },
  computed: mapState([ 'navIsOpen' ]),
  methods: {
    handleToggleCollapse() {
      this.$store.commit('toggleNav')
    },
    handleItemClicked() {
      this.$store.commit('toggleNav')
    }
  }
}
</script>

<style>
  .v-sidebar-menu.vsm_expanded, .v-sidebar-menu.vsm_expanded.vsm--toggle-btn {
    @apply border-l border-blue text-right !important;
  }
  .v-sidebar-menu.vsm_collapsed, .v-sidebar-menu.vsm_expanded, .vsm--toggle-btn {
    @apply bg-white text-blue text-xl !important;
  }
  .v-sidebar-menu .vsm--toggle-btn {
    order: -1;
  }
  .v-sidebar-menu .vsm--mobile-item, {
    display: none;
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }
  .vsm--link {
    @apply py-2 !important;
  }
  .vsm--title {
    @apply text-blue font-bold text-4xl font-MissionGothicBold;
  }
  .v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1 {
    @apply bg-gray-light text-blue !important;
  }
  .v-sidebar-menu .vsm--dropdown>.vsm--list {
    @apply bg-gray-light !important;
  }
  .v-sidebar-menu .vsm--dropdown>.vsm--list .vsm--link {
    @apply py-1 !important;
  }
  .v-sidebar-menu .vsm--dropdown>.vsm--list .vsm--title {
    @apply mr-4 font-MissionGothic text-orange !important;
  }
  .v-sidebar-menu .vsm--link:hover {
    @apply bg-gray !important;
  }
  .v-sidebar-menu .vsm--link.vsm--link_exact-active {
    @apply bg-blue !important;
  }
  .v-sidebar-menu .vsm--link.vsm--link_exact-active .vsm--title {
    @apply text-white !important;
  }
</style>
