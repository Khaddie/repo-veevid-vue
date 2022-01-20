<template>

    <header class="c-header">

      <p>Bonjour,{{user.displayName}}</p>


      <div class="c-header__logo">
      <router-link to="/">
        <img src="@/assets/logo/Logo_base.svg">
      </router-link>
      </div>
      <nav class="nav">

        <ul class="c-header__list">
          <router-link to="/custom">
            <li>Vee One Nawaka </li>
          </router-link>
          <router-link to="/about">
            <li>Il était une fois Veevid</li>
          </router-link>
          <router-link to="/jeu-concours">
            <li>Jeu concours</li>
          </router-link>
          <router-link to="/contact">
            <li>
              <button class="button-txt">Contactez-nous</button>
            </li>
          </router-link>

          <li><a href=""> <img src="@/assets/icons/ico-heart-empty.svg" alt=""></a></li>
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
