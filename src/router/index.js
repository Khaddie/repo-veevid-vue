import Vue from 'vue'
import VueRouter from 'vue-router'

// Pages existantes sur le site
import Home from '@/views/Home.vue'
import About from '../views/About.vue'
import CGU from '../views/CGU.vue'
import CGV from '../views/CGV.vue'
import Profil from "@/components/Profil";
import Concours from '../views/Concours.vue'
import Contact from '../views/Contact.vue'
import Custom from '../views/Custom.vue'
import FAQ from '../views/FAQ.vue'
import Livraisons from '../views/Livraisons.vue'
import Mentions from '../views/Mentions.vue'
import Plan from '../views/Plan.vue'
import Register from "@/components/Register";
import Connexion from "@/views/Connexion";
import NewformShoes from "@/components/NewformShoes";
import NotFound from "@/components/NotFound";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/newformshoes',
        name: 'NewformShoes',
        component: NewformShoes
    },

    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/conditions-generales-utilisation',
        name: 'CGU',
        component: CGU
    },
    {
        path: '/conditions-generales-de-ventes',
        name: 'CGV',
        component: CGV
    },
    {
        path: '/profil',
        name: 'Profil',
        component: Profil
    },
    {
        path: '/concours',
        name: 'Concours',
        component: Concours
    },
    {
        path: '/connexion',
        name: 'Connexion',
        component: Connexion
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/custom',
        name: 'Custom',
        component: Custom
    },
    {
        path: '/foire-aux-questions',
        name: 'FAQ',
        component: FAQ
    },
    {
        path: '/livraisons-et-retours',
        name: 'Livraisons',
        component: Livraisons
    },
    {
        path: '/mentions-legales',
        name: 'Mentions',
        component: Mentions
    },
    {
        path: '/plan-du-site',
        name: 'Plan du site',
        component: Plan
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


axios.get("https://veevid.khadijaboudjemline.fr/wp-json/wp/v2/pages/7")
    .then(function (reponse) {
        let Home = reponse.data
        console.log(Home);

        let ZoneReassurance = Home.acf.reassurance;
        ZoneReassurance.forEach(function (titre) {
            console.log("Icone :", titre.icn_reinsurance)
            console.log("Titre :", titre.title_reinsurance)
            console.log("Texte :", titre.text_reinsurance)
            console.log("ESPACE");
        })
    })

export default router
