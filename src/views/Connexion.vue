<template>
  <div>
    <div class="englo">
      <div class="c-connexion col-l-7 col-12">
        <h1 class="title">Connecte-toi !</h1>
        <p>Connecte-toi pour pouvoir <br>commander ta paire ! </p>
        <div class="c-connexion__contenu ">
          <form @submit="submit">
            <div>
              <input placeholder="Ton identifiant" id="username" type="text" v-model="form.username">
            </div>
            <div>
              <input placeholder="Ton mot de passe" type="password" id="password" v-model="form.password">
            </div>

            <input class="button-txt" type="submit" value="Je me connecte !">
          </form>
        </div>


        <div v-if="success">
          <p style="color: green;">Votre connexion est réussi !</p>
        </div>

        <div v-if="error">
          <p style="color: red;">{{ errorMessage }}</p>
        </div>
      </div>
      <div class="col-5 shoesco">
        <img src="./../assets/shoes/sneaker2.png" alt=""/>
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
  name: 'Connexion',
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

.shoesco {
  position: absolute;
  left: 60%;

  @include small-down() {
    display: none;
  }
}

img {

  width: 50%;
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

.title {
  font-size: pxToRem(34);

}

.c-connexion {
  p {
    margin: pxToRem(10) 0;
    font-size: pxToRem(16);
    line-height: pxToRem(28);
    @include small-down() {
      margin: pxToRem(20) 0;
    }
  }

}

form {
  width: 50%;
  justify-content: center;
  @include small-down() {
    width: 100%;
  }

  input {
    padding: 5%;
    width: 50%;
    text-align: center;
    margin-bottom: pxToRem(5);
  }

  input[type="submit"] {
    margin-top: pxToRem(10);
    @include small-down() {
      width: 100%;
      margin-top: pxToRem(20);
    }
  }
}

</style>
