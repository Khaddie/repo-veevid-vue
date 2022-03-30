<template>
  <div>
    <div class="c-presentation">
      <div class="c-presentation__texte col-l-5 col-12">
        <h1 class="title -huge">{{ donnees.acf.titre }}</h1>
        <h1 class="title -huge">{{ donnees.acf.titre1 }}</h1>
        <p> {{ donnees.acf.subtitle }} </p> 

        <button class="button-txt-arrow -present">
          <router-link to="/custom"> {{ donnees.acf.button_perso }}</router-link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.246 14.728">
            <path
              class="pointe"
              d="M19.082,6.657a1,1,0,0,1,0,1.414l-6.364,6.364A1,1,0,1,1,11.3,13.021l5.657-5.657L11.3,1.707A1,1,0,1,1,12.718.293Z"
              fill="#333"
            />
            <rect class="barre" y="6.364" width="18" height="2" fill="#333" />
          </svg>
        </button>

        <button class="button-txt-arrow -secondary -present">
          <router-link to="/about"> {{ donnees.acf.button_discovering }}</router-link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.246 14.728">
            <path
              class="pointe"
              d="M19.082,6.657a1,1,0,0,1,0,1.414l-6.364,6.364A1,1,0,1,1,11.3,13.021l5.657-5.657L11.3,1.707A1,1,0,1,1,12.718.293Z"
              fill="#333"
            />
            <rect class="barre" y="6.364" width="18" height="2" fill="#333" />
          </svg>
        </button>
      </div>
      
      <div class="c-presentation__shoes col-l-7 col-12">
        <img src="@/assets/shoes/sneaker2.png"/>
      </div>
    </div>

    <!--Presentation 2 pour mobile -->
    <div class="c-presentation2">
      <div class="c-presentation__titre">
        <h1 class="title -huge">{{ donnees.acf.titre }}</h1>
        <h1 class="title -huge">{{ donnees.acf.titre1 }}</h1>
        <div class="c-presentation2__shoes col-l-7 col-12">
          <img :src="donnees.acf.img_shoe.url" alt="" />
        </div>
      </div>

      <div class="c-presentation2__texte">
        <p>{{ donnees.acf.subtitle }}</p>

        <button class="button-txt-arrow -present buttonmob">
          <router-link to="/custom"> {{ donnees.acf.button_perso }}</router-link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.246 14.728">
            <path
              class="pointe"
              d="M19.082,6.657a1,1,0,0,1,0,1.414l-6.364,6.364A1,1,0,1,1,11.3,13.021l5.657-5.657L11.3,1.707A1,1,0,1,1,12.718.293Z"
              fill="#333"
            />
            <rect class="barre" y="6.364" width="18" height="2" fill="#333" />
          </svg>
        </button>

        <button class="button-txt-arrow -secondary -present buttonmob">
          <router-link to="/about"> {{ donnees.acf.button_discovering }}</router-link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.246 14.728">
            <path
              class="pointe"
              d="M19.082,6.657a1,1,0,0,1,0,1.414l-6.364,6.364A1,1,0,1,1,11.3,13.021l5.657-5.657L11.3,1.707A1,1,0,1,1,12.718.293Z"
              fill="#333"
            />
            <rect class="barre" y="6.364" width="18" height="2" fill="#333" />
          </svg>
        </button>
      </div>
    </div>
    <!--FIN Presentation 2 pour mobile -->

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

    <!-- BANDEAU PRECOMMANDE -->
    <section>
      <div class="bandeau">
        <div class="bandeau_TexteImage">
          <div class="bandeau_Texte">
            <p class="bandeau_bold">{{ donnees.acf.title_banner }}</p>
            <p class="bandeau_bold">{{ donnees.acf.title2_banner }}</p>
            <p class="bandeau_boldb">{{ donnees.acf.title_banner3 }}</p>
            <p class="bandeau_TexteCouleur">{{ donnees.acf.subtitle_banner }}</p>
          </div>
          <div class="bandeau_Image"></div>
        </div>
      </div>
    </section>
    <!-- FIN BANDEAU PRECOMMANDE -->

    <!-- ZONE BOITE -->
    <section class="c-box">
        <div class="c-box_div">
            <img class="c-box_stamp" src="@/assets/draw/stamp.png">

            <div class="c-box_cadeau">
                <h4 class="c-box_title title -tiny">{{ donnees.acf.titlebox_h3 }}</h4>
                <p class="c-box_texte">{{ donnees.acf.text_box }} </p>

                <button class="button-txt-arrow -secondary">
                    <router-link to="/custom"> {{ donnees.acf.button_preorder }} </router-link>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.246 14.728">
                        <path
                        class="pointe"
                        d="M19.082,6.657a1,1,0,0,1,0,1.414l-6.364,6.364A1,1,0,1,1,11.3,13.021l5.657-5.657L11.3,1.707A1,1,0,1,1,12.718.293Z"
                        fill="#333"
                        />
                        <rect class="barre" y="6.364" width="18" height="2" fill="#333" />
                    </svg>
                </button>
            </div>
        </div>

        <div  class="c-box_img">
            <img class="c-box_img1" :src="donnees.acf.img_box1.url" alt="" />
            <img class="c-box_img2" :src="donnees.acf.img_box2.url" alt="" />
        </div>

    </section>
    <!-- FIN ZONE BOITE -->

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

    <!-- ZONE DE REASURANCE -->
    <section class="zone_imgtxt">
      <div class="zone_imgtxt__img">
        <img class="zone_imgtxt__photo" src="@/assets/img/reassurance.png" />
        <img class="zone_imgtxt__waves" src="@/assets/draw/waves1.png" />
      </div>

      <div class="zone_imgtxt__main">
        <div class="zone_imgtxt__sousmain1">
          <section
            v-for="(reassurance, index) in donnees.acf.reassurance.slice(0, 2)"
            :key="reassurance.title_reinsurance"
            class="zone_imgtxt__bloc"
          >
            <img
              class="zone_imgtxt__iconerea1"
              :src="require(`@/assets/icons/reassurance/${index}.png`)"
              alt=""
            />
            <p class="zone_imgtxt__textreab">
              {{ reassurance.title_reinsurance }}
            </p>
            <p class="zone_imgtxt__textrea">
              {{ reassurance.text_reinsurance }}
            </p>
          </section>
        </div>

        <div class="zone_imgtxt__sousmain2">
          <section
            v-for="(reassurance, index) in donnees.acf.reassurance.slice(2, 4)"
            :key="reassurance.title_reinsurance"
            class="zone_imgtxt__bloc"
          >
            <img
              class="zone_imgtxt__iconerea1"
              :src="require(`@/assets/icons/reassurance/${index + 2}.png`)"
              alt=""
            />
            <p class="zone_imgtxt__textreab">
              {{ reassurance.title_reinsurance }}
            </p>
            <p class="zone_imgtxt__textrea">
              {{ reassurance.text_reinsurance }}
            </p>
          </section>
        </div>
      </div>
    </section>
    <!-- FIN ZONE DE REASSURANCE -->

    <!-- ZONE INSTAGRAM -->
    <section class="c-insta">

        <div class="c-insta_text">
            <h2 class="c-insta_tag title -tiny">
            <span>{{ donnees.acf.title_h3 }}</span>
            </h2>
            <p class="c-insta_p">{{ donnees.acf.subtitle_insta }}</p>
            <a href="#"><b>{{ donnees.acf.Link_insta }}</b></a>
        </div>

        <section class="zone_imgtxt__bloc" > 
      
            <flickity class="flickity " ref="flickity" :options="flickityOptions"> 
                               
                <div class="carousel-cell">
                <img class="c-insta_imggallerie" src="@/assets/img/insta1.png" alt="" />
                </div>

                <div class="carousel-cell">
                <img class="c-insta_imggallerie" src="@/assets/img/insta2.png" alt="" />
                </div>

                <div class="carousel-cell">
                <img class="c-insta_imggallerie" src="@/assets/img/insta3.png" alt="" />
                </div>

                <div class="carousel-cell">
                <img class="c-insta_imggallerie" src="@/assets/img/insta4.png" alt="" />
                </div>

                <div class="carousel-cell">
                <img class="c-insta_imggallerie" src="@/assets/img/insta5.png" alt="" />
                </div>
                
                <div class="carousel-cell">
                <img class="c-insta_imggallerie" src="@/assets/img/insta6.png" alt="" />
                </div>
            </flickity>
        </section>

    </section>
    <!-- FIN ZONE INSTAGRAM -->

    <!-- ZONE NEWSLETTER -->
    <section>
      <img class="newsletter-img" src="@/assets/draw/newsletter_fond2.png" />
      <img
        class="newsletter-img_mobile"
        src="@/assets/draw/newsletter_fond_mobile.png"
      />

      <section class="c-newsletter">
        <div class="c-newsletter__left">
          <h2 class="c-newsletter__h2">{{ donnees.acf.titile }}</h2>
          <p class="c-newsletter__text">{{ donnees.acf.text_newsletter }}</p>
        </div>

        <div class="c-newsletter__right">
          <input
            class="c-newsletter__input"
            type="text"
            id="name"
            name="name"
            placeholder="Ton petit prénom"
          />
          <input
            class="c-newsletter__input"
            type="text"
            id="name"
            name="name"
            placeholder="Et une adresse-mail ;)"
            size="35"
          />
          <button class="button-txt c-newsletter__btn">
            <a href="#">{{ donnees.acf.button_Newsletter }}</a>
          </button>
        </div>
      </section>
    </section>
    <!-- FIN ZONE NEWSLETTER -->

    <Footer  />
  </div>
</template>

<script>

import Footer from "@/components/Footer";
import Flickity from "vue-flickity";

export default {
  name: "Home",
  components: { Footer , Flickity },
 
  data() {
    return {
      donnees: {
        acf: {
          titre: "",
          reassurance: [],
          galerie_insta: []
        },
      },

      flickityOptions: {
        initialIndex: 7,
        prevNextButtons: true,
        contain: true,
        wrapAround: true,
        freeScroll: true,
      },
    };
  },

        created() {            
            axios.get("https://veevid.khadijaboudjemline.fr/wp-json/wp/v2/pages/7")
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
}
    
</script>


<style lang="scss">

// Zone 1 
.c-presentation2 {

 .c-presentation2__texte > button{
   margin: 0.5rem 0;
 }

  &__texte {
    font-size: pxToRem(16);
    line-height: pxToRem(25);
    text-align: center;
    margin: 10%;
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
      bottom: 0px;
      right: 0px;
    }

    img {
      width: 95%;
      align-self: center;
    }
  }
  @include large-up() {
    display: none;
  }
}
.c-presentation {
  @include large-up() {
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

//Zone Bandeau Precommande
.bandeau{
    display: flex;
    background-image: url("~@/assets/draw/pattern.png");
    background-size: cover;
    height: $section-h;
    padding: 3rem 0;
    @include small-down(){
        margin: 10rem 0;
        padding: 6rem 0;
    }
     
    &_TexteImage{
        width: 80%;
        margin: auto;
        display: flex;
        @include small-down(){
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    } 

    &_Texte{
        text-align: center;
        background: white;
        width: 257px;
        border: 5px solid #00ffe0;
        border-radius: 30px 0px;
        margin: auto;
        padding: 1.5rem;
        line-height: 1.5625rem; 
    } 

    &_bold{
        font-weight:700;
    }

    &_boldb{
        font-weight:900;
        margin-bottom:2rem;
    }

    &_TexteCouleur{
        color:$orange;
        font-weight:900;
    }
    
    &_Image{
        background-image: url("~@/assets/draw/waves.png");
        background-size: cover;
        width: 140px;
        height: 210px; 
        @include small-down(){
            width: 120px;
            height: 180px;
            margin-top: 1.5rem;
        }
    }
}

// Zone Box
.c-box {
    display: flex;
    flex-direction: row;
    margin: 10rem 10rem;
    justify-content: center;
    @include small-down() {
        display: flex;
        flex-direction: column;
        margin: 4rem 1rem;
        justify-content: center;
    }
  
    &_stamp{
        width: 12%;
        margin-bottom: 3rem;
        padding-left: 3rem;
        @include small-down (){
            width: 20%;
            margin-bottom: 1rem;
            padding-left: 3rem;
        }
    }

    &_cadeau {
        padding: 0 3rem 0 3rem;
        @include small-down (){
            padding: 0 3rem 3rem 3rem;
        }
    }

    &_div{
        display: flex;
        flex-direction: column;
        width: 49%;
        @include small-down (){
            display: flex;
            flex-direction: column;
            width:auto;
        }
    }

    &_title{
        margin-bottom:3rem;
    }

    &_texte{
        line-height: 1.5rem;
        margin-bottom:3rem;
    }

    &_img{
        display: flex;
        flex-direction: row;
        @include small-down (){
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 3rem;
        }
    }

    &_img1{
        width: 50%;
        margin-right: 2rem;
        height:75%;
        @include small-down (){
            width: 75%;
            margin-right: 0;
            margin-bottom: 2rem;
        }
    }

    &_img2{
        width: 50%;
        height:75%;
        @include small-down (){
            width: 75%;
        }
    }
}

// Zone Concours
.c-concoursaccueil {
  padding: 3%;
  line-height: pxToRem(30);
  @include small-down (){
      padding: 3rem 0.5rem;
  }

  text-align: center;
  background-color: #fff1e2;

  &__titre {
    font-size: pxToRem(36);
    font-weight: 800;
  }
  &__hashtag {
    font-size: pxToRem(25);
    line-height: pxToRem(50);
  }
  &__text {
    font-size: pxToRem(18);
    margin:1rem 25rem 1rem 25rem;
    @include small-down(){
        margin:0;
    }

    &.-lien {
      font-weight: 700;
    }
  }
  img {
    width: 5%;
  }
}
.button-txt {
  &.-concours {
    margin-top: pxToRem(10);
  }
}

// Zone de réassurance
.zone_imgtxt {
  @include zone_imgtxt;
  &__main {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    justify-content: center;
    @include small-down() {
      border: 0.5rem solid $bleuSecond;
      padding: 15%;
    }
  }

  &__iconerea1 {
    width: 10vw;
    height: auto;
    margin: auto;
    @include medium-only() {
      width: 10vw;
      height: auto;
    }
    @include small-down() {
      width: pxToRem(120);
      height: auto;
    }
  }

  &__textrea {
    text-align: center;
  }

  &__textreab {
    font-weight: 700;
    text-align: center;
  }

  &__sousmain1 {
    width: 65%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 11%;
    @include small-down() {
      flex-direction: column;
      align-items: center;
    }
  }

  &__sousmain2 {
    width: 65%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @include small-down() {
      flex-direction: column;
      align-items: center;
    }
  }

  &__bloc {
    display: flex;
    flex-direction: column;
  }
}

// Zone Instagram
.c-insta {
    margin:5% 10% 2% 10%;

    &_imggallerie {
        width: 100%;
    }

    &_text{
        margin-bottom:2rem;
    }

    &_p {
        font-size: 1.5rem;
        margin: 10px 0;
        letter-spacing: pxToRem(1);
    }

    b {
        color: $orange;
        font-weight: bold;
    }
}
.carousel-cell {
  width: 20%;
  margin-right: 10px;
  counter-increment: gallery-cell;
    @include small-down(){
        width:75%;
      }
}
.flickity-viewport{
    height:400px;
    @include small-down(){
        height:285px!important;
    }
}
.flickity-prev-next-button.next{
    right:-68px;
    @include small-down(){
        right:-25px;;
    }
}
.flickity-prev-next-button.previous{
    left:-68px;
    @include small-down(){
        left:-25px;;
    }
}
.flickity-button{
    background:$beige;
    color:$orange;
}
.flickity-page-dots .dot{
    background: $orange;
}

// Zone Newsletter
.newsletter-img {
  width: 100%;
  height: auto;
  margin-bottom: -1%;
  @include small-down() {
    display: none;
  }
}
.newsletter-img_mobile {
  width: 100%;
  height: auto;
  margin-bottom: -1%;
  @include medium-up() {
    display: none;
  }
}
.c-newsletter {
  display: flex;
  flex-direction: row;
  padding: 0 15rem 5rem 15rem;
  background-color: $beige;
  @include small-down() {
    flex-direction: column;
    align-items: stretch;
    padding: 2rem 3rem 5rem 3rem;
  }

  &__text {
    font-size: 15px;
    line-height: 1.8rem;
    @include small-down() {
      margin: 0;
    }
  }

  &__h2 {
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  &__right {
    width: 50%;
    margin: 0 8rem 0 0rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @include small-down() {
      flex-direction: column;
      width: 100%;
      margin: 0;
    }
  }
  &__left {
    width: 50%;
    margin: 0 8rem 0 8rem;
    @include small-down() {
      width: 100%;
      margin: 0;
    }
  }

  &__input {
    padding: 0.2rem 0.5rem 0.2rem 1.2rem;
    height: 2rem;
    width: 85%;
    margin-top: 1.5rem;
    border: 0px;
    @include small-down() {
      width: 100%;
    }
  }

  &__btn {
    width: 10rem;
    margin-top: 1.5rem;
    @include small-down() {
    }
  }
}

</style>
