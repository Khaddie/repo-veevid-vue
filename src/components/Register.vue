<template>
  <div>



    <div class="englo">
      <div class="c-connexion col-l-7 col-12">
        <h1 class="title">Inscris-toi !</h1>
        <p>Inscris-toi pour faire parti de la #veevidfamily ! </p>
        <div class="c-connexion__contenu ">
          <form class="formco" @submit="submit">
            <div class="inputchamp">
              <input placeholder="Ton identifiant" id="username" type="text" v-model="form.username">
            </div>
            <div class="inputchamp">
              <input placeholder="Ton e-mail" type="email" id="email" v-model="form.email">
            </div>
            <div class="inputchamp">
              <input placeholder="Ton mot de passe" type="password" id="password" v-model="form.password">
            </div>

            <input class="button-txt" type="submit" value="Je m'inscris ! ">
          </form>

        </div>


        <div v-if="success">
          <p style="color: green;">Votre inscription est réussi !</p>
        </div>

        <div v-if="error">
          <p style="color: red;">{{ errorMessage }}</p>
        </div>

      </div>
      <div class="col-5 shoesco">
        <img src="./../assets/shoes/sneaker2.png" alt="" />
      </div>
      <!--<form @submit="submitShoe">
         <p>JE CREE </p>
         <div>
           <label for="displayName">Modèle</label>
           <input id="displayName" v-model="form.username" type="text">
         </div>
         <input type="submit" value="submit">
       </form>-->
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name:'Register',
  data() {
    return {
      form: {
        username: null,
        email: null,
        password: null,
      },
      success: false,
      error: false,
      errorMessage: null
    }
  },
  methods: {
    submit(event) {
      event.preventDefault()
      axios.post('https://veevid.khadijaboudjemline.fr/wp-json/wp/v2/users/register', {
        username: this.form.username,
        email: this.form.email,
        password: this.form.password
      }).then(response => {
        if (response.status === 200) {
          this.success = true
          this.error = false
        }
      }).catch(error => {
        console.log('Error LOG : ', error.response)
        this.errorMessage = error.response.data.message
        this.error = true
        this.success = false
      })
    }


  }
}
</script>

<style lang="scss">
.shoesco{
  position: absolute;
  left: 60%;
}
.englo {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 5%;

  @include small-down() {
    text-align: center;
    padding: 15%;
  }
}
form {


  div {
    display: flex;

    label {
      width: 200px;
    }

    input {
      width: 100%;
    }
  }
}
</style>
