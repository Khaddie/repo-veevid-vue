<template>
<div>

  <div class="menurespon" ref="root">
    <div class="iconmobile">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo/Logo_base.svg" alt="Logo Khadija Boudjemline">
        </router-link>
      </div>
      <div class="icoo">
        <router-link to="/">
          <img src="@/assets/icons/ico-heart-empty.svg" alt="">
        </router-link>
      </div>
      <div class="icoo2">
        <router-link to="/">
          <img src="@/assets/icons/ico-profil.svg" alt="">
        </router-link>
      </div>
      <div class="icoo3">
        <router-link to="/">
          <img src="@/assets/icons/ico-basket-empty.svg" alt="">
        </router-link>
      </div>
    </div>
    <nav>
      <button class="menubtn" v-on:click="menuclick">
      <span>
      </span>
      </button>

      <div class="menuo" style="display: none" ref="menu" v-on:click="menuclick">
        <div class="image">
          <div data-project-no="1" class="item item--1 w-100" style=" opacity: 1; z-index: 89;">
            <img class="imgmenu w-100" src="@/assets/logo/Logo_base.svg" alt="Portfolio Khadija Boudjemline">
          </div>
        </div>
        <div class="list">
          <ul v-on:click="fermeture">
            <router-link to="/custom">
              <li>Vee One Nawaka</li>
            </router-link>
            <router-link to="/concours">
              <li ref="fermli">Jeu concours</li>
            </router-link>
            <router-link to="/about">
              <li>Il était une fois Veevid</li>
            </router-link>
            <router-link to="/contact">
              <li>À propos</li>
            </router-link>

            <router-link to="/Contact">

              <button class="button-txt-arrow">Contactez-nous</button>
            </router-link>
            <router-link to="/Contact">
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
  </div>


   <!--<div class="menumob">
     <div class="menubtn" v-on:click="menuclick" >
       <img src="@/assets/icons/menu.png" alt="" />
     </div>
     <div class="menubtn" v-on:click="menuclick" >
       <img src="@/assets/logo/Logo_base.svg" alt="" />
     </div>
   </div>
  </div>
  <div class="listmobile" ref="menu" v-on:click="menuclick">

    <div>
      <ul class="listmenu" v-on:click="fermeture">
        <li>Vee One Nawaka</li>

        <li>Il était une fois Veevid</li>

        <li>Jeu concours</li>

        <li>Contactez-nous</li>
      </ul>
    </div>
  </div>-->
  <header class="header" id="header">
    <nav class="navbar container">
      <router-link to="/">
      <img class="imgicon" src="@/assets/logo/Logo_base.svg">
      </router-link>
      <div class="menu" id="menu">
        <ul class="menu-list">
          <li class="menu-item menu-link" >
              <router-link to="/custom">
              <span class="menu-name">Vee One Nawaka</span>
              </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/concours">
              <span class="menu-name">Jeu concours</span>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/about">
              <span class="menu-name">Il était une fois Veevid</span>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/contact">
              <button class="button-txt-arrow">Contactez-nous</button>
            </router-link>
          </li>
          <li class="menu-item ">
            <router-link to="/newformshoes">
              <img src="@/assets/icons/ico-heart-empty.svg" alt="">
            </router-link>
          </li>
          <li class="menu-item ">
            <router-link to="/connexion">
              <img src="@/assets/icons/ico-profil.svg" alt="">
            </router-link>
          </li>
          <li class="menu-item ">
            <router-link to="/connexion">
              <img src="@/assets/icons/ico-basket-empty.svg" alt="">
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
    <!--<header class="c-header">
      <p>Bonjour,{{user.displayName}}</p>
      <button v-if="$store.state.user.authToken" @click="$store.commit('removeUser')">Déconnexion</button>
      <div class="c-header__logo">
      <router-link to="/">
        <img src="@/assets/logo/Logo_base.svg">
      </router-link>
      </div>

      <div ref="root">
        <div class="menubtn" v-on:click="menuclick" >
          <img src="@/assets/icons/menu.png" alt="" />
        </div>
      </div>



      <nav class="nav" >

        <ul class="c-header__list" >
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

          <router-link to="/connexion">
          <li><a href=""> <img src="@/assets/icons/ico-profil.svg" alt=""></a></li>
          </router-link>
          <router-link to="/connexion">
          <li><a href=""> <img src="@/assets/icons/ico-basket-empty.svg" alt=""></a></li>
          </router-link>
        </ul>
      </nav>
    </header>-->


</div>
</template>

<script>

export default {
  name: "Header",
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    menuclick: function (event) {
      if (this.$root.$el.classList.toggle('menu-open')) {
        this.$refs["menu"].style.display='block';
      } else {
        this.$refs["menu"].style.display = 'none';
      }
      },
  fermeture: function (fermer) {
    this.$refs["menup"].style.display = 'none';

  },
}
}
</script>
<style lang="scss">
.imgicon{
  width: 45%;
}

.menumob{
  display: flex;
  flex-direction: row-reverse;
  img{
    width: 100%;
  }
}
#header{
  background: no-repeat url("~@/assets/draw/forme_header.svg");
  background-position: right bottom 30%;
  height: pxToRem(126);
  display: flex;
  justify-content: space-between;
  align-items: center;


  @include small-down(){
display: none;
  }
}
// Elements
.container {
  max-width: 75rem;
  height: auto;
  margin: 0 auto;
  padding: 0 1.25rem;
}


// Header
.header {

  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 100;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  margin: 0 auto;
}

a{
  text-decoration: none;
  color: black;
  font-weight: 900;
  font-family: $font;
}

.menu {
/*  position: fixed;
  left: 0;
  bottom: 0;
  display: grid;
  align-content: center;
  width: 100%;
  height: 3.5rem;
  padding: 0 1rem;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background: var(--color-white);
  box-shadow: var(--shadow-medium);*/

  &-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  &-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;

    &.is-active {
      position: relative;
      color: var(--color-teal-800);
      transition: all 0.35s ease;
    }
  }

  &-icon {
    font-size: 1.35rem;
    line-height: 1;
    color: inherit;
  }

  &-name {
    display: none;
    font-family: $font;
    font-weight: 600;
  }
}

// Responsive Media Query Breakpoint
@media only screen and (min-width: 360px) {
  .menu {
    &-name {
      display: block;
      visibility: visible;
    }
  }
}

@media only screen and (min-width: 576px) {
  .menu {
    &-list {
      justify-content: center;
      column-gap: 2rem;
    }
  }
}

@media only screen and (min-width: 768px) {
  .header {
    background: var(--color-white);
    box-shadow: var(--shadow-medium);
    transition: all 0.35s ease-in-out;
  }

  .menu {
    position: relative;
    top: 0;
    right: 0;
    width: auto;
    height: auto;
    background: none;
    box-shadow: none;

    &-link {
      &.is-active::before {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        width: 2rem;
        height: 2px;
        border: none;
        outline: none;
        background: var(--color-teal-800);
      }

      &:hover {
        color: var(--color-teal-800);
        transition: all 0.35s ease;
      }
    }

    &-icon {
      display: none;
      visibility: hidden;
    }


  }
}




.menu-open nav::before {
  transform: scale(50);
  z-index: 3;
}
.menuo ul {
  list-style: none;
  color: #DBBCA8;

}

.menurespon{

  .image, .list {
    height: 100%;
  }

  .image {
    position: relative;
  }

  .item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    opacity: 0;
  }

  .list {
    margin-top: 20%;
    padding: 20px;
  }


  a{
    text-decoration: none;
    color: black;
  }
  a:hover{
    text-decoration: none;
    color: black;
  }
  .menuo a:hover {
    opacity: .4;
    text-decoration: none;
    color: #DBBCA8;
  }


  /**FIN*/
  nav {

    width: 70px;
    height: 70px;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  nav::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    background: white;
    border-radius: 100%;
    transition: transform 400ms ease;
    z-index: 10;

  }

  nav::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background: transparent;
    border-radius: 50%;
    transition: transform 400ms ease-in;
    z-index: 40;
  }

  nav:hover::after {
    transform: scale(1.2);
  }

  .menubtn {
    width: 40px;
    height: 40px;
    position: absolute;
    z-index: 140;
    border: none;
    top: 17px;
    left: 14px;
    border-radius: 50px;
    box-shadow: #DBBCA8;
    background-image: url("~@/assets/icons/ico-menu.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
    background-color: transparent;
  }

  .menubtn::before {
    content: '';
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;


  }



  .menuo {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: white;
    z-index: 20;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }



  .image {
    display: none;
  }

  .list {
    margin-top: 40%;
  }

  .menuo li {
    font-size: 20px;
    margin-bottom: pxToRem(50);
    font-family: $font;
    font-weight: 300;
  }

  .menurespon a {
    transition: opacity 300ms ease;
    width: fit-content;
    font-size: 35px;
    margin-bottom: 10px;
    text-decoration: none;
    color: black;
  }

  .logo img{
    width: 30%;
    margin: 15% -18%;
  }

  .iconmobile{
    display: flex;
    justify-content: right;
    flex-direction: row;
  }

.icoo{
  position: absolute;
  top: 45px;
  right: 22%;
  z-index: 999;
}
  .icoo2{
    position: absolute;
    top: 45px;
    right: 30%;
    z-index: 999;
  }
  .icoo3{
    position: absolute;
    top: 45px;
    right: 38%;
    z-index: 999;
  }

  display: none;
  @include small-down(){
    display: block;
  }
}
#app > div:nth-child(2) > section.c-concoursaccueil{
  display: none;
}
</style>
