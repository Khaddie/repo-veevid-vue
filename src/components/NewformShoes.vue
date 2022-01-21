<template>
  <div>
    <div style="margin: 50px;">
      <div class="canvas">
        <img src="@/assets/img/shoestest.jpg" alt="">
      </div>
      <button @click="saveShoeHandler">Sauvegarder ma chaussure</button>
    </div>

    <p v-if="shoeCreated" style="color: #42b983;">Ta chaussure est créé ! Tu peux la voir
      <router-link to="/compte">ICI</router-link>
    </p>

  </div>
</template>

<script>
import axios from "axios";
import domtoimage from "dom-to-image-more"

export default {
  name: "NewformShoes",
  data() {
    return {
      shoeName: '',
      shoeCreated: false,
      error: false,
    }
  },
  methods: {
    saveShoeHandler() {
      // First, we need to get an image of the finalized shoe
      // When getScreenShot() has finished his job, sendImageToWPMediaLibrary() will be executed
      this.getScreenShot(this.sendImageToWPMediaLibrary)
    },
    /**
     * Take a screen of a node in DOM
     * Thanks to dom-to-image-more, return an image as a Blob format (log it if curious)
     * @param callback
     */
    getScreenShot(callback) {
      domtoimage
          .toBlob(document.querySelector('.canvas'))
          .then((image) => {
            callback(image)

          })
    },
    /**
     * Send Image through WP API
     * @param {file} image - Image file
     */
    sendImageToWPMediaLibrary(image) {

      axios.post('https://veevid.khadijaboudjemline.fr/wp-json/wp/v2/media', image,
          {
            headers: {
              'Content-Disposition': `attachment; filename="${this.$store.state.user.displayName}.jpg"`,
              'Authorization': `Bearer ${this.$store.state.user.authToken}`
            }
          })
          .then(response => {
            // If we get an id in the response data,
            // it means that an actual image has been saved
            // into the WP media library
            if (response.data.id) {
              // Now that the image has been saved,
              // we can create the post shoe

              // IMPORTANT !
              // since the URL of the image freshly registered in the
              // WP Media library can be found in the response (check the response log)
              // We can simply use it and save it into a URL or Text ACF field
              // HOWEVER that's not really the good way to do it, but hey, it works balec
              this.createShoe(response.data.source_url)
            }
          })
    },
    /**
     * Create/Save the shoe as a Post type Shoe
     * @param imageURL - URL of the image freshly generated
     */
    createShoe(imageURL) {

      axios.post('https://veevid.khadijaboudjemline.fr/wp-json/wp/v2/shoes',
          {
            "status": "publish",
            "title": this.$store.state.user.displayName,
            'fields': {
              'image_url': imageURL
            }
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.$store.state.user.authToken}`
            }
          })
          .then(response => {
            console.log('SHOE IS CREATED', response)
            this.shoeCreated = true
          })
    }
  }
}
</script>

<style lang="scss" scoped>
.canvas {
  background-color: white;
  margin: 0;
}

button {
  background-color: #2c3e50;
  color: white;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
}
</style>
