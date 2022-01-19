<template>
  <div>
    <div class="c-presentation " >
      <div class="c-presentation__texte col-l-5 col-12">
        <h1 class="title -huge" v-for="chaussure in donnees">{{chaussure.titre}}</h1>
        <h1 class="title -huge"> dans l’air !</h1>
          <p>
            Découvre la paire Veevid fraîchement crée pour allier ta personnalité et ton style ! Disponible
            uniquement en pré-commande, personnalise tes futures baskets à ton image.</p>

          <button class="button-txt-arrow -present">
            <a href="#">Je personnalise !</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.246 14.728">
              <path class="pointe"
                    d="M19.082,6.657a1,1,0,0,1,0,1.414l-6.364,6.364A1,1,0,1,1,11.3,13.021l5.657-5.657L11.3,1.707A1,1,0,1,1,12.718.293Z"
                    fill="#333" />
              <rect class="barre" y="6.364" width="18" height="2" fill="#333" />
            </svg>
          </button>
          <button class="button-txt-arrow -secondary -present">
            <a href="#">Découvrir</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.246 14.728">
              <path class="pointe"
                    d="M19.082,6.657a1,1,0,0,1,0,1.414l-6.364,6.364A1,1,0,1,1,11.3,13.021l5.657-5.657L11.3,1.707A1,1,0,1,1,12.718.293Z"
                    fill="#333" />
              <rect class="barre" y="6.364" width="18" height="2" fill="#333" />
            </svg>
          </button>

      </div>
      <div class="c-presentation__shoes col-l-7 col-12">
        <img src="./../assets/shoes/sneaker2.png" alt="">
      </div>

    </div>



<!--Presentation 2 pour mobile -->
    <div class="c-presentation2 ">
      <div class="c-presentation__titre">
        <h1 class="title -huge">Il y a du nouveau</h1>
        <h1 class="title -huge"> dans l’air !</h1>
        <div class="c-presentation2__shoes col-l-7 col-12">
          <img src="./../assets/shoes/sneaker2.png" alt="">
        </div>

      </div>

      <div class="c-presentation2__texte">
      <p>
        Découvre la paire Veevid <br>fraîchement crée pour allier <br>ta personnalité et ton style !</p>

        <button class="button-txt-arrow -present -buttonmob">
          <a href="#">Je personnalise !</a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.246 14.728">
            <path class="pointe"
                  d="M19.082,6.657a1,1,0,0,1,0,1.414l-6.364,6.364A1,1,0,1,1,11.3,13.021l5.657-5.657L11.3,1.707A1,1,0,1,1,12.718.293Z"
                  fill="#333" />
            <rect class="barre" y="6.364" width="18" height="2" fill="#333" />
          </svg>
        </button>
        <button class="button-txt-arrow -secondary -present -buttonmob">
          <a href="#">Découvrir</a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.246 14.728">
            <path class="pointe"
                  d="M19.082,6.657a1,1,0,0,1,0,1.414l-6.364,6.364A1,1,0,1,1,11.3,13.021l5.657-5.657L11.3,1.707A1,1,0,1,1,12.718.293Z"
                  fill="#333" />
            <rect class="barre" y="6.364" width="18" height="2" fill="#333" />
          </svg>
        </button>

      </div>

    </div>
    <!--FIN Presentation 2 pour mobile -->

    <button class="button-fixed">
      <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18.7647 17.0626H4.52941C4.33529 17.0626 4.14117 16.9313 4.01176 16.8001C3.88235 16.6688 3.88235 16.4063 3.94706 16.2094L5.17647 13.0594L3.94706 1.3125H0V0H4.52941C4.85294 0 5.11176 0.262501 5.17647 0.590627L6.47059 13.0594C6.47059 13.1907 6.47059 13.2563 6.40588 13.3875L5.5 15.7501H19.4118L18.7647 17.0626Z"
            fill="#333333" />
        <path
            d="M5.95298 13.7814L5.69416 12.4689L20.7059 9.31889V3.93763H5.17651V2.62512H21.353C21.7412 2.62512 22 2.88762 22 3.28137V9.84389C22 10.172 21.8059 10.4345 21.4824 10.5001L5.95298 13.7814Z"
            fill="#333333" />
        <path
            d="M19.4117 21C17.9882 21 16.8235 19.8188 16.8235 18.375C16.8235 16.9313 17.9882 15.75 19.4117 15.75C20.8352 15.75 22 16.9313 22 18.375C22 19.8188 20.8352 21 19.4117 21ZM19.4117 17.0625C18.7 17.0625 18.1176 17.6531 18.1176 18.375C18.1176 19.0969 18.7 19.6875 19.4117 19.6875C20.1235 19.6875 20.7058 19.0969 20.7058 18.375C20.7058 17.6531 20.1235 17.0625 19.4117 17.0625Z"
            fill="#333333" />
        <path
            d="M3.8823 21C2.45877 21 1.29407 19.8188 1.29407 18.375C1.29407 16.9313 2.45877 15.75 3.8823 15.75C5.30583 15.75 6.47054 16.9313 6.47054 18.375C6.47054 19.8188 5.30583 21 3.8823 21ZM3.8823 17.0625C3.17054 17.0625 2.58818 17.6531 2.58818 18.375C2.58818 19.0969 3.17054 19.6875 3.8823 19.6875C4.59407 19.6875 5.17642 19.0969 5.17642 18.375C5.17642 17.6531 4.59407 17.0625 3.8823 17.0625Z"
            fill="#333333" />
      </svg>
      <a href="#">Pré-commander</a>
      <a href="#">ma paire !</a>
    </button>

    <section>
      <div class="_SectionImage">
        <div class="_SectionTexteImage">
          <div class="__SectionTexte">
            <p>Ta paire Vee ONE NAWAKA </p>
            <p>DISPONIBLE </p>
            <p><strong>EN PRE-COMMANDE!</strong></p>
            <p>LANCEMENT <strong class="_SectionTexteCouleur">LE 5 MARS 2022</strong></p>
          </div>
          <div class="__SectionImage"></div>
        </div>
      </div>
    </section>

    <div class="c-box ">
      <div class="c-box__cadeau col-l-2 ">
        <h4>On a un petit cadeau pour toi !</h4>
        <p>Plonge dans l’univers Veevid avec la boîte à chaussures en édition limitée pour les 200 premières
          pré-commandes. Elle sera ajoutée automatiquement à ta commande une fois ton achat validé. Rien de plus
          facile !

          Fabriquées en matériaux recyclés, Veevid souhaite te proposer des sneakers uniques et de qualité
          accompagnés de leur boîte pensée pour la planète.</p>
        <button class="button-txt-arrow -secondary">
          <a href="#">En savoir plus</a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.246 14.728">
            <path class="pointe"
                  d="M19.082,6.657a1,1,0,0,1,0,1.414l-6.364,6.364A1,1,0,1,1,11.3,13.021l5.657-5.657L11.3,1.707A1,1,0,1,1,12.718.293Z"
                  fill="#333" />
            <rect class="barre" y="6.364" width="18" height="2" fill="#333" />
          </svg>
        </button>
        <div>

        <div class="c-box__cadeau col-l-5">
        <img src="@/assets/icons/ico-heart-empty.svg" alt="">
      </div>
        </div>


        <div class="c-box__cadeau col-l-5">
        <img src="@/assets/icons/ico-heart-empty.svg" alt="">
      </div>

    </div>


<div class="c-concoursaccueil">
  <img src="@/assets/draw/flower.png" alt="">
  <p>Jeu Concours</p>
  <p>#VeevidCustom</p>
  <p>Avis aux sneakers addict : une paire de NDP personnalisé ton goût <br>à remporter pour une paire achetée ! </p>
  <button class="button-txt-arrow -secondary -present">
    <a href="#">Découvrir</a>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.246 14.728">
      <path class="pointe"
            d="M19.082,6.657a1,1,0,0,1,0,1.414l-6.364,6.364A1,1,0,1,1,11.3,13.021l5.657-5.657L11.3,1.707A1,1,0,1,1,12.718.293Z"
            fill="#333" />
      <rect class="barre" y="6.364" width="18" height="2" fill="#333" />
    </svg>
  </button>
</div>

      <section class="c-reassurancev1">

        <div class="c-reassurancev1__img">
          <img class="c-reassurancev1__photo" src="@/assets/img/reassurance.png">
          <img class="c-reassurancev1__waves" src="@/assets/draw/waves1.png">
        </div>


        <div class="c-reassurancev1__main">
          <div class="c-reassurancev1__sousmain1">
            <section class="c-reassurancev1__bloc">
              <img class="c-reassurancev1__iconerea1" src="@/assets/icons/ico-pay.png" alt="">
              <p class="c-reassurance__textrea"><b>Paiement</b><br> 100% sécurisé</p>
            </section>

            <section class="c-reassurancev1__bloc">
              <img class="c-reassurancev1__iconerea1" src="@/assets/icons/ico-truck.png" alt="">
              <p class="c-reassurance__textrea"><b>Livraison gratuite</b> <br> dès 100€ d'achat</p>
            </section>
          </div>

          <div class="c-reassurancev1__sousmain2">
            <section class="c-reassurancev1__bloc">
              <img class="c-reassurancev1__iconerea1" src="@/assets/icons/ico-basket-all.png" alt="">
              <p class="c-reassurance__textrea"><b>Point de fidélité</b> <br> à chaque achat !</p>
            </section>

            <section class="c-reassurancev1__bloc">
              <img class="c-reassurancev1__iconerea1" src="@/assets/icons/ico-paycards.png" alt="">
              <p class="c-reassurance__textrea"><b>Moyen de paiement</b> <br> diversifiés</p>
            </section>
          </div>
        </div>

      </section>

    </div>

    <Footer />
  </div>
</template>

<script>

import Footer from "@/components/Footer";
export default {
  name: 'Home',
  components: {Footer},
  data() {
    return {
      donnees: [],
    }
  },
  created() {
    axios.get('https://veevid.khadijaboudjemline.fr/wp-json/wp/v2/pages/7')
        .then(function (response) {
          console.log(response.data);
          this.donnees = response.data;
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        })
  }
}
</script>
<style lang="scss">

.c-concoursaccueil{
  padding: 5%;
  text-align: center;
  background-color: #FFF1E2;
  img{
    width: 5%;
  }
}
.c-presentation2{

  margin: pxToRem(10);

  &__texte{

      font-size: pxToRem(20);
      line-height: pxToRem(25);
    text-align: center;



  }

  &__shoes {
    width: 100%;
    position: relative;
    display: inline-block;
    z-index: -999;
    margin-top: 10%;

    &:after {
      content: "";
      background: no-repeat url("~@/assets/draw/waves_mobile.svg");
      background-position: left top;
      width: 100%;
      height: 100%;
      display: inline-block;
      position: absolute;
      z-index: -1;
      bottom:0px;
      right: 0px;
    }

    img {
      width: 95%;
      align-self: center;
    }
  }
  @include large-up(){
    display: none;
  }

}

.c-presentation {
  @include large-up(){

    justify-content: center;
    display: flex;
    flex-direction: row;
    margin-left: 5%;

    &__shoes {
      width: 100%;
      position: relative;
      display: inline-block;
      z-index: -999;

      &:after {
        content: "";
        background: no-repeat url("~@/assets/draw/vagues.svg");
        background-position: right bottom;
        width: 100%;
        height: 100%;
        display: inline-block;
        position: absolute;
        z-index: -1;
        bottom: 50px;
        right: 0;
      }

      img {
        width: 95%;
        align-self: center;
      }
    }
    &__texte {
      line-height: 150%;
      align-self: center;
      flex-wrap: wrap;
      margin-left: 5%;
    }
    &__button {
      display: flex;
      flex-direction: column;
      width: auto;
    }
  }

  @include small-down() {
    display: none;
  }

}
</style>
