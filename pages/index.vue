<template>
  <section class="container">
    <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
    <nuxt-link class="button" to="/demo" style="margin-left:10px;">
      Demo page
    </nuxt-link>
    <nuxt-link class="button" to="/login" style="margin-left:10px;">
      Login page
    </nuxt-link>
    <div style="text-align:center;margin-top:10px;">
      <button class="button" @click="logout">
        Logout
      </button>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  methods: {
    logout () {
      axios.post('/logout').then(res => {
        let data = res.data
        if (data.success) {
          this.$router.push('/login')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    console.log(this.$store.state)
  }
}
</script>

<style scoped>
.title
{
  margin: 50px 0;
}
</style>
