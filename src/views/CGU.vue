<template>
            <div class="mentions">
                <h2 class="mentions_mltitre title -tiny">{{ donnees.acf.title_cgu }}</h2>
                <p class="mentions_mltexte"> {{ donnees.acf.text_cgu }} </p>

               
                <Footer />
            </div>
</template>

<script>
import Footer from "@/components/Footer";
    export default {
    name: "CGU",
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
        .get("https://veevid.khadijaboudjemline.fr/wp-json/wp/v2/pages/157")
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
 
</style>