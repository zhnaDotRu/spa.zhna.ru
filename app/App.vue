<template>
  <div class="app">
    <router-view v-if="$store.state.data"></router-view>
    <p v-if="$store.state.error">{{$store.state.error}}</p>
    <p v-if="!$store.state.data">Loading...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  created() {
    this.$store.dispatch('getData');
  }
}
</script>
