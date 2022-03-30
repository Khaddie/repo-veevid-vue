<template>
  <div>
    <div class="profil">
      <div v-if="shoes.length" class="shoes-list"></div>
      <h1>Liste des chaussures</h1>
      <div v-for="shoe in shoes" :key="shoe.id">
        <img :src="shoe.acf.image_url" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Profil",
  data(){
    return{
      shoes:[],
    }
  },
  created() {
    axios.get(`https://veevid.khadijaboudjemline.fr/wp-json/wp/v2/shoes?author=${this.$store.state.user.id}`)
        .then(response=>{
          console.log(response.data);
          this.shoes = response.data;
        })
        .catch(error=>{
          console.log(error);
        })
  }
}


</script>

<style lang="scss">

.profil{
  text-align: center;
  display: flex}

</style>
