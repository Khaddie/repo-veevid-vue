<template>
  <div>
<div class="c-profil">
  <h1 class="-tiny">Bienvenue sur ton compte {{user.displayName}}!</h1>
  <button class="button-txt" v-if="$store.state.user.authToken" @click="$store.commit('removeUser')">Déconnexion</button>

</div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Profil",

  data() {
    return {
      form: {
        username: null,
        password: null,
      },
      success: false,
      error: false,
      errorMessage: null
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    submit(event) {
      event.preventDefault()
      axios.post('https://veevid.khadijaboudjemline.fr/wp-json/jwt-auth/v1/token', {
        username: this.form.username,
        password: this.form.password
      }).then(response => {
        if (response.status === 200) {
          console.log(response)
          this.$store.commit('setUser', {
            userid: response.data.data.id,
            username: response.data.data.displayName,
            email: response.data.data.email,
            authToken: response.data.data.token,
          })
          console.log(response)
        }
      }).catch(error => {
        console.log('Error LOG : ', error)
        this.error = true
        this.success = false
      })
    }

  }
}


</script>

<style lang="scss">
h1{
  text-align: center;
  font-size: pxToRem(18);
}

.c-profil{

  margin-top: 10%;
}

</style>
