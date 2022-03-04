<template>

    <header class="c-header">

      <p>Bonjour,{{user.displayName}}</p>


      <div class="c-header__logo">
      <router-link to="/">
        <img src="@/assets/logo/Logo_base.svg">
      </router-link>
      </div>
      <nav>
        <button class="menubtn" v-on:click="menuclick">
      <span>
      </span>
        </button>
        <div class="menu" style="display: none" ref="menu" v-on:click="menuclick">
          <div class="image">
            <div data-project-no="1" class="item item--1 w-100" style=" opacity: 1; z-index: 89;">
              <img class="imgmenu w-100" src="" alt="Portfolio Khadija Boudjemline">
            </div>
          </div>
          <div class="list">
            <ul v-on:click="fermeture">
              <router-link to="/Logofolio">
                <li>Logofolio</li>
              </router-link>
              <router-link to="/Sitesweb">
                <li ref="fermli">Sites Web</li>
              </router-link>
              <router-link to="/Creations">
                <li>Créations graphiques</li>
              </router-link>
              <router-link to="/Apropos">
                <li>À propos</li>
              </router-link>

              <router-link to="/Contact">
                <li>Contact</li>
              </router-link>
            </ul>
          </div>
        </div>
      </nav>

      <nav class="nav">

        <ul class="c-header__list">
          <router-link to="/custom">
            <li>Vee One Nawaka </li>
          </router-link>
          <router-link to="/about">
            <li>Il était une fois Veevid</li>
          </router-link>
          <router-link to="/concours">
            <li>Jeu concours</li>
          </router-link>
          <router-link to="/contact">
            <li>
              <button class="button-txt">Contactez-nous</button>
            </li>
          </router-link>
          <router-link to="/newformshoes">
            <li>
              <button class="button-txt">SHOES</button>
            </li>
          </router-link>
          <router-link to="/profil">
          <li><img src="@/assets/icons/ico-heart-empty.svg" alt=""></li>
          </router-link>

          <router-link to="/register">
          <li><a href=""> <img src="@/assets/icons/ico-profil.svg" alt=""></a></li>
          </router-link>
          <router-link to="/connexion">
          <li><a href=""> <img src="@/assets/icons/ico-basket-empty.svg" alt=""></a></li>
          </router-link>
        </ul>
      </nav>
    </header>
</template>

<script>

export default {
  name: "Header",
computed:{
    user(){
      return this.$store.state.user
    },
}
}
</script>
<style lang="scss">
body {
  margin-top: 0;
}

.c-header {
  background-position: right bottom -35%;
  height: pxToRem(126);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    margin-left: pxToRem(78);
    width: 100%;
    @include medium-only() {
      width: 12%;
      margin-left: pxToRem(20);
    }
  }

  &__list {
    margin-right: pxToRem(78);
    list-style: none;
    display: flex;
    font-size: pxToRem(18);
    font-weight: bold;
    justify-content: space-between;
    align-items: center;
    @include medium-only() {
      margin: 0.875rem;
    }
  }

  li {
    margin: pxToRem(18);

    @include medium-only() {
      margin: 0.7rem;
    }
  }

  li > a {
    text-decoration: none;
    color: $gris;
  }

  a:hover {
    color: $orange;
  }
}
</style>
