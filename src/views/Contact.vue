<template>

    <div>
        <div class="contact_titre">
        <h2 class=" title "> {{ donnees.acf.title_contact }}</h2>
        </div>
            <form class="form" @submit.prevent="submit">

                <div class="id">
                    <div class="champs champnom">
                        <label class="labelname">Nom*</label>
                        <input class="input" placeholder="Doe" v-model="name" />
                    </div>

                    <div class="champs">
                        <label class="labelname">Prénom*</label>
                        <input class="input" placeholder="John" v-model="surname" />
                    </div>
                </div>

                <div class="champs">
                    <label class="labelname">Adresse Email*</label>
                    <input class="input" placeholder="johndoe@xxxx.com" v-model="email" />
                </div>

                <div class="champs">
                <label class="labelname">Message*</label>
                <textarea class="input inputmessage" placeholder="Écris ici ton message ! :)" v-model="message"></textarea>
                </div>

                <button type="submit" class="button-txt-arrow -present -buttonmob submit">
                    <a href="#">Envoyer</a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.246 14.728">
                        <path
                        class="pointe"
                        d="M19.082,6.657a1,1,0,0,1,0,1.414l-6.364,6.364A1,1,0,1,1,11.3,13.021l5.657-5.657L11.3,1.707A1,1,0,1,1,12.718.293Z"
                        fill="#333"
                        />
                        <rect class="barre" y="6.364" width="18" height="2" fill="#333" />
                    </svg>
                    </button>
            </form>
        <div class="localisation">
            <iframe class="localisation_carte" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.9220170254875!2d6.793923815869195!3d47.51090990257629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479216e5a7704daf%3A0x49625157ea3f395a!2s37%20Rue%20Georges%20Clemenceau%2C%2025200%20Montb%C3%A9liard!5e0!3m2!1sfr!2sfr!4v1648409081758!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="localisation_loctexte">
                <p class="localisation_texte1">{{ donnees.acf.title_adress }}</p>
                <p class="localisation_texte2">{{ donnees.acf.text_contactAdress }}</p>
                <p>{{ donnees.acf.text_contacttel }} </p>
            </div>
        </div>

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

        <Footer />

    </div>
</template>

<script>
    import Footer from "@/components/Footer";
    export default {
    name: "Contact",
    components: { Footer },

     data() {
        return {
            name: "",
            surname: "",
            email: "",
            message: "",

            donnees: {
                acf: {
                titre: "",
                reassurance: [],
                },
            }
        };             
    },

    computed: {
        formValid() {
        const { name, surname, email, message } = this;
        return (
            name.length > 0 &&
            surname.length > 0 &&
            /(.+)@(.+){2,}.(.+){2,}/.test(email) &&
            message.length > 0
        );
        },
    },

    methods: {
        onReset() {
        this.name = "";
        this.surname = "";
        this.email = "";
        this.message = "";
        },

        submit() {
        if (!this.formValid) {
            return;
        }

        if (!localStorage.getItem("messages")) {
            localStorage.setItem("messages", JSON.stringify([]));
        }

        const messages = JSON.parse(localStorage.getItem("messages"));
        const { name, surname, email, message } = this;
        messages.push({
            name,
            surname,
            email,
            message,
        });

        localStorage.setItem("messages", JSON.stringify(messages));
        },
    },

     created() {
        axios
        .get("https://veevid.khadijaboudjemline.fr/wp-json/wp/v2/pages/110")
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
.contact_titre{ 
    margin: 5rem 29rem;
    display: flex;
    justify-content: center;
    @include small-down(){
        margin: 2rem 3.3rem;
    }
}

.form{
    display: flex;
    flex-direction: column;
    margin:auto;
    @include small-down(){
        width: auto;
        margin: 3rem 0.5rem;
    }
}

.champs{
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 100%;
    @include small-down(){
        width: 90%;
    }
}

.champnom{
    margin-right:2rem;
}

.labelname{
    margin-bottom:0.5rem;

}
.id{
    display: flex; 
    flex-direction: row;
    @include small-down(){
        flex-direction: column;
    }
}

.input{
    width: 100%;
    border-radius: 5px;
    border-color: $orange;
    padding:0.5rem;
    border:0.15rem solid $orange;
}

.inputmessage{
    height:10rem;
}

.submit{
    width:15%;
    @include small-down(){
        width: auto;
    }
}

.localisation{
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin:3rem 17rem;
    @include small-down(){
        display: flex;
        flex-direction: column;
        margin: 2rem 1rem;
    }


    &_carte{
        border: 0px;
        margin-right: 2rem;
        @include small-down(){
            border: 0px;
            width: auto;
        }
    }

    &__loctexte{
        @include small-down(){
            margin-top: 3rem;
        align-items: center;
        }
    }

    &_texte1{
        font-weight: 700;
        margin-bottom: 1rem;
    }

    &_texte2{
        margin-bottom: 1rem;
    }

}


</style>