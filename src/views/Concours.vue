<template>
    <div>
        <!-- INTRO -->
        <div class="concours">
            <h3 class="concours_titre title">
                <span>{{ donnees.acf.titre_concours }}</span>
            </h3>
            <p class="concours_hashtag"> {{ donnees.acf.subtitle_concours }}</p>
            <h3 class="concours_soustitre"> {{ donnees.acf.content_concours }}</h3>
        </div>

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

        <!-- BANDEAU CONCOURS -->
        <div class="row -center-step bandeauconcours">
            <div class="col-12 col-md-4 col-l-3">
                <div class="c-step">
                    <div class="c-step__number">1</div>
                    <p class="c-step__text">{{ donnees.acf.rule_1 }}</p>
                </div>
            </div>
            <div class="col-12 col-md-4 col-l-3">
                <div class="c-step">
                    <div class="c-step__number">2</div>
                    <p class="c-step__text">{{ donnees.acf.rule_2 }}</p>
                </div>
            </div>
            <div class="col-12 col-md-4 col-l-3">
                <div class="c-step">
                    <div class="c-step__number">3</div>
                    <p class="c-step__text">{{ donnees.acf.rule_3 }}</p>
                </div>
            </div>
        </div>
        
        <!-- DEBUT ZONE IMG TXT -->
        <section class="zone_imgtxt">
            <!-- Image + wave -->
            <div class="zone_imgtxt__img i1">
            <img class="zone_imgtxt__photo" src="@/assets/img/concours.png">
            <img class="zone_imgtxt__waves" src="@/assets/draw/waves1.png">
            </div>
            <!-- Texte + bouton -->
            <div class="zone_imgtxt__right">
                <div class="zone_imgtxt__txt">
                    <p class="imgtxt_txt">{{ donnees.acf.text_explanation }}</p>
                    <p class="imgtxt_txt">{{ donnees.acf.text_explanation2 }}</p>
                    <p class="imgtxt_txt">{{ donnees.acf.text_explanation3 }}</p>
                    <p class="imgtxt_txt">{{ donnees.acf.text_explanation4 }}</p>
                    <p class="imgtxt_txt">{{ donnees.acf.text_explanation5 }}</p>
                </div>

                <button class="button-txt b1">
                    <router-link to="/custom">{{ donnees.acf.button_participation }}</router-link>
                </button>
            </div>
        </section>

        <Footer />

    </div>
    
</template>

<script>

import Footer from "@/components/Footer";
export default {
    name: "Concours",
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
        .get("https://veevid.khadijaboudjemline.fr/wp-json/wp/v2/pages/117")
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

.bandeauconcours{
    padding:3rem 0;
}

//haut de page
 .concours{
     margin: 5rem 10rem;
     @include small-down{
         margin:5rem 2rem;
     }

     &_titre{
         margin-bottom:2rem;
     }
     &_hashtag{
         font-size:26px;
         margin-bottom:2rem;
     }
     &_soustitre{
         font-size: 26px;
         font-weight:bold;
     }

 }

//txt_img
.b1{width:50%;
    @include small-down{
         width:auto;
    }
}
.i1{width:55%!important;}

//vote
.vote{
    margin: 5rem 10rem 50rem 10rem;
    @include small-down{
         margin:5rem 2rem;
     }
}

 
</style>