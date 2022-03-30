<template>
  <div>
    <div class="englo">
      <div class="c-connexion col-l-7 col-12">
        <h1 class="title">Connecte-toi !</h1>
        <p>Connecte-toi pour pouvoir <br>commander ta paire ! </p>
        <div class="c-connexion__contenu ">
          <form class="formco" @submit="submit">
            <div class="inputchamp">
              <input placeholder="Ton identifiant" id="username" type="text" v-model="form.username">
            </div>
            <div class="inputchamp">
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
    <Footer/>

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
  left: 50%;
  img {
    width: 80%;
  }
  @include small-down() {
    display: none;
  }
}



.englo {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 5%;
  margin-top: 5%;

  @include small-down() {
    text-align: center;
    padding: 15%;
  }
}

.title {
  font-size: pxToRem(34);

}

.c-connexion {

  &__contenu{

  }
  p {
    margin: pxToRem(10) 0;
    font-size: pxToRem(16);
    line-height: pxToRem(28);
    @include small-down() {
      margin: pxToRem(20) 0;
    }
  }

}

.formco{

  .inputchamp{
    width: 50%;
   input{
     border-radius: pxToRem(10);
     border: 0.7px $orange solid;
   }
  }

  justify-content: center;
  @include small-down() {
    width: 100%;
  }

  input {
    padding: pxToRem(20);

    margin-bottom: pxToRem(5);
    text-align: left;
  }

  input[type="submit"] {
    margin-top: pxToRem(10);
    @include small-down() {
      width: 10%;
      margin-top: pxToRem(20);
    }
  }
}

</style>
