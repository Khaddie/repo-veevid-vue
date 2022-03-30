<template>
    <div>
        <div class="mentions">
            <h2 class="mentions_mltitre title -tiny">{{ donnees.acf.title_ML }}</h2>
            <h3 class="mentions_mlbold">{{ donnees.acf.soustitre_ml1 }}</h3>
            <p class="mentions_mltexte"> {{ donnees.acf.text_ml1 }} </p>

            <h3 class="mentions_mlbold">{{ donnees.acf.soustitre_ml2 }}</h3>
            <p class="mentions_mltexte"> {{ donnees.acf.text_ml2 }} </p>

            <h3 class="mentions_mlbold">{{ donnees.acf.soustitre_ml3 }}</h3>
            <p class="mentions_mltexte"> {{ donnees.acf.text_ml3 }} </p>

            <h3 class="mentions_mlbold">{{ donnees.acf.soustitre_ml4 }}</h3>
            <p class="mentions_mltexte"> {{ donnees.acf.text_ml4 }} </p>

            <h3 class="mentions_mlbold">{{ donnees.acf.soustitre_ml5 }}</h3>
            <p class="mentions_mltexte"> {{ donnees.acf.text_ml5 }} </p>

            <h3 class="mentions_mlbold">{{ donnees.acf.soustitre_ml6 }}</h3>
            <p class="mentions_mltexte"> {{ donnees.acf.text_mmmmmmmmmmm }} </p>

            <h3 class="mentions_mlbold">{{ donnees.acf.soustitre_ml7 }}</h3>
            <p class="mentions_mltexte"> {{ donnees.acf.text_ml7 }} </p>
                
        </div>

    <Footer />


    </div>
    
</template>

<script>
 import Footer from "@/components/Footer";
    export default {
    name: "Mentions",
    components: { Footer },

     data() {
        return {
            donnees: {
                acf: {
                titre: "",
                reassurance: [],
                },
            }
        };             
    },

    created() {
        axios
        .get("https://veevid.khadijaboudjemline.fr/wp-json/wp/v2/pages/163")
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

.mentions{
    margin: 5rem 5rem;
    
    &_mltitre{
        margin-bottom:3rem;
    }

    &_mlbold{
        font-weight:600;
        margin-bottom:1rem;
    }

    &_mltexte{
        line-height:40px;
        margin-bottom:2rem;
    }
}
 
</style>