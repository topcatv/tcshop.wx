<style scoped>

</style>
<template>
  <div>
    haha
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: '',
      toast: false,
      state: true,
      form: {
        userName: '',
        password: '',
      },
    }
  },
  components: {
  },
  mounted: () => {
    document.title = '首页'
  },
  methods: {
    /* eslint no-console: "off" */
    login() {
      console.log('login')
    },
    regist() {
      window.location.href = '/regist'
    },
  },
}
</script>
