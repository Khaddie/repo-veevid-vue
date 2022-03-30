<template>
    <div>
        <div class="plan">
            <h2 class="plan_plantitre title -tiny">{{ donnees.acf.title_plan }}</h2>
            <router-link to="/home" class="plan_plantexte"> {{ donnees.acf.Link_Plan1}} </router-link>
            <router-link to="/custom" class="plan_plantexte"> {{ donnees.acf.Link_Plan2}} </router-link>
            <router-link to="/about" class="plan_plantexte"> {{ donnees.acf.Link_Plan3}} </router-link>
            <router-link to="/concours" class="plan_plantexte"> {{ donnees.acf.Link_Plan4}} </router-link>
            <router-link to="/contact" class="plan_plantexte"> {{ donnees.acf.Link_Plan5}} </router-link>
            <router-link to="/connexion" class="plan_plantexte"> {{ donnees.acf.Link_Plan6}} </router-link>
            <router-link to="/register" class="plan_plantexte"> {{ donnees.acf.Link_Plan7}} </router-link>
            <router-link to="/mentions" class="plan_plantexte"> {{ donnees.acf.Link_Plan8}} </router-link>
            <router-link to="/cgu" class="plan_plantexte"> {{ donnees.acf.Link_Plan9}} </router-link>
            <router-link to="/cgv" class="plan_plantexte"> {{ donnees.acf.Link_Plan10}}</router-link>
            <router-link to="/plan" class="plan_plantexte"> {{ donnees.acf.Link_Plan11}}</router-link>
            <router-link to="/about" class="plan_plantexte"> {{ donnees.acf.Link_Plan12}}</router-link>
            <router-link to="/about" class="plan_plantexte"> {{ donnees.acf.Link_Plan13}}</router-link>
            <router-link to="/about" class="plan_plantexte"> {{ donnees.acf.Link_Plan14}}</router-link>
        </div>
        <Footer />
    </div>
</template>

<script>
 import Footer from "@/components/Footer";
    export default {
    name: "plan",
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
        .get("https://veevid.khadijaboudjemline.fr/wp-json/wp/v2/pages/188")
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

.plan{
    margin:5rem 20rem;
    display:flex;
    flex-direction: column;;

    &_plantitre{
        margin-bottom:2rem;
        width:30%;
    }

    &_plantexte{
        margin-bottom:2rem;
    }
}
 
</style>