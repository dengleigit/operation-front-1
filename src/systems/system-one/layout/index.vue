<template>
  <div>
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <layout-main />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import LayoutMain from './components/LayoutMain'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    LayoutMain
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
