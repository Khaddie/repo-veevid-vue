<template>
<div>
    <!-- ZONE TITRE TXT -->
    <div class="intro"> 
        <!-- SCSS disponible en bas du fichier -->
        <h1 class="intro__title">
            <span>A propos</span>
        </h1>
        <p class="intro__txt">Veevid est une marque de chaussure streetwear unisexe basée à Montbéliard. Fondée en 2021 par Khadija Boudjemline, Camélia Siong, Khaly Thiam et Mathilde Vauquieres d’un intérêt commun pour l’univers de la sneakers et de la mode.</p>
        <p class="intro__txt">Avec la volonté de réunir le prêt-à-porter et l’unicité de chaque pièce, les créateurs de Veevid désirent proposer aux personnes avec un style unique la possibilité d’exprimer leur personnalité à travers des chaussures créées sur mesure.</p>
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
                <p class="imgtxt_txt">Veevid est une petite équipe de 5 personnes travaillant à plein temps dans ses bureaux à Montbéliard.</p>
                <p class="imgtxt_txt">Nos produits sont fabriqués dans les usines d’Eisenach en Allemagne. Des visites régulières sont organisées pour toujours améliorer la qualité et le confort de nos chaussures. </p>
                <p class="imgtxt_txt">Sur le plan stylistique, les sneakers Veevid permettent à leur porteurs d’adopter leur propre style tout en étant très distinctif. Leur durabilité et leur confort les rendent idéales pour la vie de tous les jours comme pour les grandes occasions.</p>
            </div>
        </div>
    </section>

    <!-- BANDEAU CTA CONCOURS -->
    <div class="c-concoursaccueil">
        <img src="@/assets/draw/flower.png" alt="">
        <p class="c-concoursaccueil__titre">Jeu Concours</p>
        <p class="c-concoursaccueil__hashtag">#VeevidCustom</p>
        <p class="c-concoursaccueil__text">Avis aux sneakers addict : une paire de Vee One Nawaka personnalisée <br>à ton goût à remporter pour une paire achetée ! </p>
        <button class="button-txt -secondary -concours ">
            <router-link to="/jeu-concours">
            <p class="c-concoursaccueil__text -lien">En savoir plus</p>
            </router-link>
        </button>
    </div>

    <!-- BOUTON FIXE -->
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

    <!-- VALEURS PAGE A PROPOS -->
    <section class="nos-valeurs">
        <div class="title-valeurs">
            <h2 class="title -tiny">Nos valeurs</h2> 
        </div>
        <section class="c-valeurs">
            <div class="row">
                <div class="col-12 col-md-6 c-valeurs__col">
                    <div class="c-valeur">
                        <div class="c-valeur__content">
                            <h3 class="c-valeur__title">TRANSPARENCE</h3>
                            <p class="c-valeur__text">Veevid tient à rester transparent sur la provenance de tous ses produits. La marque veut permettre à ses clients d’acheter en toute conscience en respectant leur éthique et leurs valeurs. Nos chaussures sont toutes produites en Europe et leurs composants sont importés d’Asie dans le respect du commerce équitable. </p>
                        </div> 
                    </div>
                    <div class="c-valeur">
                        <div class="c-valeur__content">
                            <h3 class="c-valeur__title">QUALITÉ</h3>
                            <p class="c-valeur__text"> Une grande attention est porté sur la qualité et les détails de nos produits. Chaque paire personnalisées passe dans des machines contrôlées régulièrement dans nos usines situés à Eisenach. </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 c-valeurs__col">
                    <div class="c-valeur">
                        <div class="c-valeur__content">
                            <h3 class="c-valeur__title">GENDERLESS</h3>
                            <p class="c-valeur__text">Veevid propose des chaussures sans différenciation de genre. Il n’y a aucune limite dans la création de chaussures personnalisées chez Veevid. La marque veut que ses utilisateurs se sentent libre dans leur créativité. </p>
                        </div>
                    </div>
                    <div class="c-valeur">
                        <div class="c-valeur__content">
                            <h3 class="c-valeur__title">PARTAGE</h3>
                            <p class="c-valeur__text">Veevid veut partage le style unique de ses clients en proposant des looks et inspirations pour toujours plus de créations. En plus des posts instagram, la marque se veut généreuse en proposant régulièrement concours et codes promo. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</div>

<!-- FIN VALEURS PAGE A PROPOS -->
</template>

<script>
export default {
    name: "About"
}
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


</style>  