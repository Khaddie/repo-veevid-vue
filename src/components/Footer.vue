<template>
  <div>
    <footer>
      <div class="footer">
        <div class="footer__menu">

          <ul class="col-2-md col-1-sm center">
            <li>Veevid</li>
            <li>
              <p>10 rue Charles Gomis, <br>
              <p> 25200 Montbéliard</p>
            </li>
            <li> <button class="button-ico-txt">
              <svg xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.79641 0C5.3548 0 4.91909 0.158922 4.556 0.448869L4.50365 0.475075L4.47747 0.502125L1.83874 3.22324L1.86492 3.2486C1.47774 3.60055 1.20341 4.05947 1.07657 4.56739C0.949731 5.07531 0.976065 5.60947 1.15225 6.10243C1.15563 6.10919 1.14887 6.12187 1.15225 6.12863C1.86829 8.1794 3.69894 12.1389 7.2741 15.718C10.8628 19.3107 14.8703 21.0707 16.8529 21.8467H16.8791C17.3759 22.0111 17.9069 22.0439 18.4202 21.942C18.9335 21.8401 19.4117 21.6069 19.8083 21.2651L22.4732 18.5972C23.1723 17.8973 23.1723 16.6817 22.4732 15.9818L19.0433 12.5481L19.0162 12.4948C18.3171 11.7949 17.0775 11.7949 16.3775 12.4948L14.6887 14.1855C13.4213 13.5759 12.2556 12.7741 11.2326 11.8084C9.85035 10.4871 9.14443 8.96809 8.88436 8.37382L10.5731 6.68317C11.2824 5.97309 11.2951 4.79132 10.5461 4.09477L10.5723 4.06772L10.4938 3.9891L7.1162 0.502125L7.09002 0.47592L7.03683 0.448869C6.68637 0.16239 6.24884 0.0040603 5.79641 0ZM5.79641 1.69066C5.86544 1.69467 5.93088 1.72279 5.98134 1.77012L9.35891 5.23005L9.43828 5.30951C9.43153 5.30275 9.48726 5.39235 9.38509 5.49464L7.2741 7.60796L6.87808 7.97821L7.06385 8.5057C7.06385 8.5057 8.03321 11.1051 10.0716 13.0502L10.2565 13.2083C12.218 15.0012 14.5308 15.9818 14.5308 15.9818L15.0586 16.2202L17.5656 13.7095C17.7108 13.565 17.6838 13.565 17.829 13.7095L21.286 17.172C21.4312 17.3166 21.4312 17.2641 21.286 17.4087L18.6996 19.9979C18.3112 20.3318 17.8983 20.4012 17.4077 20.2363C15.4943 19.4831 11.7764 17.8483 8.46132 14.5303C5.12005 11.1845 3.37554 7.39071 2.73633 5.54874C2.60714 5.20469 2.69918 4.69665 2.99978 4.43882L3.05213 4.38556L5.61234 1.77096C5.66223 1.72369 5.72702 1.69529 5.79557 1.69066H5.79641Z"
                    fill="#333333" />
              </svg>
              <a href="#">Appelle-nous</a>
            </button></li>

            <li> <button class="button-ico-txt -secondary">
              <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.2118 0H1.78327C1.34867 0 0.997559 0.345312 0.997559 0.772727V16.2273C0.997559 16.6547 1.34867 17 1.78327 17H22.2118C22.6464 17 22.9976 16.6547 22.9976 16.2273V0.772727C22.9976 0.345312 22.6464 0 22.2118 0ZM21.2297 2.67557V15.2614H2.76542V2.67557L2.08774 2.15639L3.05269 0.936932L4.10359 1.74105H19.894L20.9449 0.936932L21.9098 2.15639L21.2297 2.67557ZM19.894 1.73864L11.9976 7.77557L4.10113 1.73864L3.05024 0.934517L2.08528 2.15398L2.76296 2.67315L11.1505 9.08679C11.3917 9.27109 11.6884 9.37113 11.9939 9.37113C12.2993 9.37113 12.5961 9.27109 12.8373 9.08679L21.2297 2.67557L21.9074 2.15639L20.9424 0.936932L19.894 1.73864Z" fill="#333333"/>
              </svg>
              <router-link to="/contact"> Contacte-nous</router-link>
            </button>
            </li>

          </ul>
          <ul class="col-2-md col-1-sm">
            <li>
                À propos
            </li>

            <li>
              <router-link to="/">Accueil</router-link>
            </li>

            <li>
              <router-link to="/custom">Vee One Nawaka</router-link>
            </li>

            <li>
              <router-link to="/about">Il était une fois Veevid</router-link>
            </li>
          </ul>


          <ul class="col-4-md col-1-sm ">
            <li><img src="./../assets/logo/Logo_base.svg" alt=""></li>

          </ul>
          <ul class="col-2-md col-1-sm">
            <li>Mais aussi</li>
            <li>
              <router-link to="/connexion">Mon compte</router-link>
            </li>
            <li>
              <router-link to="/">Blog</router-link>
            </li>
            <li>
              <router-link to="/">FAQ</router-link>
            </li>
          </ul>

          <ul class="col-2-md col-1-sm">
            <li>
              <p>Livraison et retours</p>
            </li>

            <li>
              <router-link to="/mentions-legales">Mentions Légales</router-link>
            </li>

            <li>
              <router-link to="/conditions-generales-de-ventes">CGV</router-link>
            </li>

            <li>
              <router-link to="/conditions-generales-utilisation">CGU</router-link>
            </li>

            <li>
              <router-link to="/plan-du-site">Plan du site</router-link>
            </li>
          </ul>
        </div>

        <div class="footer__infos">
          <p>Veevid est une marque de sneakers fraîchement implantée en Bourgogne <br>Franche-Comté. Notre
            objectif : créer LA paire unique à TON image à travers <br>des motifs, textures & couleurs variés.
            Prends place dans l'univers Veevid !</p>
          <ul>

          </ul>
          <p class="copyright">Copyright © 2021 Veevid. Tous droits réservés.</p>

        </div>

      </div>

    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">

</style>
