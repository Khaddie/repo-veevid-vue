<template>
<div>
    <!-- ZONE TITRE TXT -->
    <div class="intro"> 
        <!-- SCSS disponible en bas du fichier -->
        <h1 class="intro__title">
            <span>{{ donnees.acf.title_about }}</span>
        </h1>
        <p class="intro__txt">{{ donnees.acf.text_presentation }}</p>
        <p class="intro__txt">{{ donnees.acf.text_presentation2 }}</p>
    </div>

    <!-- ZONE IMG TXT -->
    <section class="zone_imgtxt">
        <!-- Image + wave -->
        <div class="zone_imgtxt__img">
          <img class="zone_imgtxt__photo" src="@/assets/img/apropos.png">
          <img class="zone_imgtxt__waves" src="@/assets/draw/waves1.png">
        </div>
        <!-- Texte + bouton -->
        <div class="zone_imgtxt__right">
            <div class="zone_imgtxt__txt">
                <p class="imgtxt_txt">{{ donnees.acf.text_histoire }}</p>
                <p class="imgtxt_txt">{{ donnees.acf.text_histoire2 }}</p>
                <p class="imgtxt_txt">{{ donnees.acf.text_histoire3 }}</p>
            </div>
        </div>
    </section>

    <!-- ZONE CONCOURS -->
    <section class="c-concoursaccueil">
      <img src="@/assets/draw/flower.png" alt="" />
      <p class="c-concoursaccueil__titre">{{ donnees.acf.title_concours }}</p> 
      <p class="c-concoursaccueil__hashtag">{{ donnees.acf.subtitle_concours }}</p>
      <p class="c-concoursaccueil__text"> {{ donnees.acf.text_concours }} </p>
      <button class="button-txt -secondary -concours">
        <router-link to="/concours">
          <p class="c-concoursaccueil__textb -lien">{{ donnees.acf.button_more }}</p>
        </router-link>
      </button>
    </section>
    <!-- FIN ZONE CONCOURS -->

    <!-- BOUTON FIXE -->
    <button class="button-fixed">
        <router-link to="/custom">
            <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M18.7647 17.0626H4.52941C4.33529 17.0626 4.14117 16.9313 4.01176 16.8001C3.88235 16.6688 3.88235 16.4063 3.94706 16.2094L5.17647 13.0594L3.94706 1.3125H0V0H4.52941C4.85294 0 5.11176 0.262501 5.17647 0.590627L6.47059 13.0594C6.47059 13.1907 6.47059 13.2563 6.40588 13.3875L5.5 15.7501H19.4118L18.7647 17.0626Z"
                fill="#333333"
                />
                <path
                d="M5.95298 13.7814L5.69416 12.4689L20.7059 9.31889V3.93763H5.17651V2.62512H21.353C21.7412 2.62512 22 2.88762 22 3.28137V9.84389C22 10.172 21.8059 10.4345 21.4824 10.5001L5.95298 13.7814Z"
                fill="#333333"
                />
                <path
                d="M19.4117 21C17.9882 21 16.8235 19.8188 16.8235 18.375C16.8235 16.9313 17.9882 15.75 19.4117 15.75C20.8352 15.75 22 16.9313 22 18.375C22 19.8188 20.8352 21 19.4117 21ZM19.4117 17.0625C18.7 17.0625 18.1176 17.6531 18.1176 18.375C18.1176 19.0969 18.7 19.6875 19.4117 19.6875C20.1235 19.6875 20.7058 19.0969 20.7058 18.375C20.7058 17.6531 20.1235 17.0625 19.4117 17.0625Z"
                fill="#333333"
                />
                <path
                d="M3.8823 21C2.45877 21 1.29407 19.8188 1.29407 18.375C1.29407 16.9313 2.45877 15.75 3.8823 15.75C5.30583 15.75 6.47054 16.9313 6.47054 18.375C6.47054 19.8188 5.30583 21 3.8823 21ZM3.8823 17.0625C3.17054 17.0625 2.58818 17.6531 2.58818 18.375C2.58818 19.0969 3.17054 19.6875 3.8823 19.6875C4.59407 19.6875 5.17642 19.0969 5.17642 18.375C5.17642 17.6531 4.59407 17.0625 3.8823 17.0625Z"
                fill="#333333"
                />
            </svg>
            <router-link to="/custom">Pré-commander</router-link>
            <router-link to="/custom">ma paire !</router-link>
        </router-link>
    </button>

    <!-- VALEURS PAGE A PROPOS -->
    <section class="nos-valeurs">
        <div class="title-valeurs">
            <h2 class="title -tiny">{{ donnees.acf.title_valeurs }}</h2> 
        </div>
        <section class="c-valeurs">
            <div class="row">
                <div class="col-12 col-md-6 c-valeurs__col">
                    <div class="c-valeur">
                        <div class="c-valeur__content">
                            <h3 class="c-valeur__title">{{ donnees.acf.subtitle_transparence }}</h3>
                            <p class="c-valeur__text">{{ donnees.acf.text_transparence }}</p>
                        </div> 
                    </div>
                    <div class="c-valeur">
                        <div class="c-valeur__content">
                            <h3 class="c-valeur__title">{{ donnees.acf.subtitle_genderless }}</h3>
                            <p class="c-valeur__text"> {{ donnees.acf.text_genderless }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 c-valeurs__col">
                    <div class="c-valeur">
                        <div class="c-valeur__content">
                            <h3 class="c-valeur__title">{{ donnees.acf.subtitle_share }}</h3>
                            <p class="c-valeur__text">{{ donnees.acf.text_share }}</p>
                        </div>
                    </div>
                    <div class="c-valeur">
                        <div class="c-valeur__content">
                            <h3 class="c-valeur__title">{{ donnees.acf.subtitle_quality }}</h3>
                            <p class="c-valeur__text">{{ donnees.acf.text_qualite }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <!-- FIN VALEURS PAGE A PROPOS -->

    <!-- ZONE NEXSLETTER -->
    <section>
        <img class="newsletter-img" src="@/assets/draw/newsletter_fond2.png">
        <img class="newsletter-img_mobile" src="@/assets/draw/newsletter_fond_mobile.png">

        <section class="c-newsletter">
            <div class="c-newsletter__left">
                <h2 class="c-newsletter__h2"> {{ donnees.acf.titile }} </h2>
                <p class="c-newsletter__text"> {{donnees.acf.text_newsletter}} </p>
            </div>

            <div class="c-newsletter__right"> 
                <input class="c-newsletter__input" type="text" id="name" name="name" placeholder="Ton petit prénom" >
                <input class="c-newsletter__input" type="text" id="name" name="name" placeholder="Et une adresse-mail ;)" size="35">
                <button class="button-txt c-newsletter__btn">
                    <a href="#">{{donnees.acf.button_Newsletter}}</a>
                </button>
            </div>
        </section>
    </section>
    <!-- FIN ZONE NEWSLETTER --> 

    <Footer />

</div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: "About",
  components: { Footer },
  data() {
    return {
      donnees: {
          acf: {
             
          }
      },
    };
  },

  created() {
    axios
      .get("https://veevid.khadijaboudjemline.fr/wp-json/wp/v2/pages/136")
      .then(
        function (response) {
          console.log("LOG ICI", response.data);
          this.donnees = response.data;
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>


<style lang="scss">
 
.intro{
    max-width: 768px;
    text-align: center;
    margin: 6% auto;
    display: block;
    @media screen and (max-width: 780px) {
        max-width: 500px;
    }
    @media screen and (max-width: 520px) {
        max-width: 320px;
    }
    &__title{
        text-transform: uppercase;
        line-height: pxToRem(45);
        color: $gris;
        position: relative;
        display: inline-block;
        font-weight: 800;
        span {
            position: relative;
            z-index: 2;
            font-size: pxToRem(45);
            font-family: $font;
            @include small-down() {
                font-size: pxToRem(25);
            }
        }
        // TRAIT BLEU
        &::before {
            content: "";
            width: 100%;
            height: pxToRem(10);
            background-color: $bleuMain;
            display: inline-block;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: -5;
        }
    }
    &__txt{
        margin: pxToRem(24) 0px;
        line-height: pxToRem(24);
        color: $gris;
        font-size: pxToRem(18);
        &:nth-of-type(2){
            margin-bottom: 0px;
        }
        @include small-down() {
            font-size: pxToRem(14);
            line-height: pxToRem(20);
        }
    }
}

// Zone Newsletter

.newsletter-img{
    width:100%;
    height:auto;
    margin-bottom:-1%;
        @include  small-down() {
            display:none;
        }
}

.newsletter-img_mobile{
    width:100%;
    height:auto;
    margin-bottom:-1%;
        @include medium-up() {
            display:none;
        }
}

.c-newsletter{
    display: flex;
    flex-direction: row;
    padding: 0 15rem 5rem 15rem;
    background-color: $beige;
    @include  small-down() {
        flex-direction: column;
        align-items: stretch;
        padding: 2rem 3rem 5rem 3rem;
    }

    &__text{
        font-size:15px;
        line-height: 1.8rem;
        @include  small-down() {
            margin: 0;
        }
    }

    &__h2{
        font-size:26px;
        font-weight:800;
        margin-bottom:2rem;
        
    }

    &__right{
        width:50%;
        margin: 0 8rem 0 0rem;
        display:flex;
        flex-direction: column;
        align-items:flex-end;
        @include  small-down() {
            flex-direction:column;
            width:100%;
            margin:0;
        }

    }
    &__left{
        width:50%;
        margin: 0 8rem 0 8rem;
        @include  small-down() {
            width: 100%;
            margin: 0;
        }
    }

    &__input{
        padding:0.2rem 0.5rem 0.2rem 1.2rem;
        height: 2rem;
        width:85%;
        margin-top: 1.5rem;
        border: 0px;
        @include  small-down() {
            width:100%;
        }
    }

    &__btn{
        width:10rem;
        margin-top: 1.5rem;
        @include  small-down() {

        }
    }
}

//fin Zone Newsletter



</style>  