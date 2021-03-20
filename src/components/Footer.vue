<template>
    <footer>
		<ul>
            <div class="aaue">
                <div>
                   <img src="@/assets/aaueLogo.png" alt="">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora molestiae quibusdam id, tempore temporibus eos commodi esse voluptates qui adipisci.</p> 
                </div>
                <ul class="pages">
                    <li><router-link class="navLinks" to="/">Home</router-link></li>
                    <li><router-link class="navLinks" :to="{ name: 'Noticias' }">Notícias</router-link></li>
                    <li><router-link class="navLinks" :to="{ name: 'Discursos' }">Discursos</router-link></li>
                    <li><router-link class="navLinks" :to="{ name: 'Eventos' }">Eventos</router-link></li>
                    <li><router-link class="navLinks" :to="{ name: 'Associacao' }">Associação</router-link></li>
                    <li><router-link class="navLinks" :to="{ name: 'Servicos' }">Serviços</router-link></li>
                    <li><router-link class="navLinks" :to="{ name: 'Contactos' }">Contactos</router-link></li>
                </ul>
            </div>
            <div class="contactInfo">
                <h1>Contacta-nos!</h1>
                <li>
                    <a href="https://goo.gl/maps/hMu13iR5NiM2"><i class="fas fa-map-marker-alt icon" aria-hidden="true"></i></a>
                    <p>Rua Diogo Cão nº 21 <br> 7000-872 Évora</p>
                </li>
                <li>
                    <a href="mailto:geral@aaue.pt"><i class="fas fa-envelope icon" aria-hidden="true"></i></a>
                    <p><router-link :to="{ name: 'Contactos' }">geral@aaue.pt</router-link></p>
                </li>
                <li>
                    <a href="tel:+351266098003"><i class="fas fa-phone icon" aria-hidden="true"></i></a>
                    <p>+ 351 266 09 80 03</p>
                </li>
            </div>
            <div class="socials">
                <div class="icons">
                    <li><a class="icon" id="facebook" href="https://www.facebook.com/AAUEvora"><i class="fab fa-facebook-square"></i></a></li>
                    <li><a class="icon" id="instagram" href="https://www.instagram.com/aauevora/"><i class="fab fa-instagram"></i></a></li>
			        <li><a class="icon" id="linkedin" href="https://www.linkedin.com/company/associa%C3%A7%C3%A3o-acad%C3%A9mica-da-universidade-de-%C3%A9vora/"><i class="fab fa-linkedin-in"></i></a></li>  
                </div>
                <p class="moto">2021 ©</p>
		        <p>Copyright AAUE</p>
            </div>
		</ul>
		
	</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Footer',
});
</script>

<style lang="scss">

$textColor: #f7f7f7;

footer {
	display: flex;
	flex-direction: column;
	color: #fff;
	background-color: #272727;
	padding: 60px 0;

    ul{
        display: flex;
        margin-bottom: 25px;
        font-size: 32px;
        justify-content: space-around;

        .aaue {
            display: flex;
            width: 40%;

            .pages {
                display: flex;
                flex-direction: column;

                a {
                    color: $textColor;
                    font-size: 20px;
                }
            }
        }

        .contactInfo {
            width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
                color: $textColor;
                font-size: 30px;
            }

            li {
                display: flex;
                flex-direction: row;
                align-items: center;
                height: 35px;
                margin: 10px 8px;

                a {
                    color: white;
                    margin-right: 10px
                }

                .icon {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .fa-phone {
                    color:#89CFF0;
                }
                .fa-map-marker-alt {
                    color:#e96656;
                }
                .fa-envelope {
                    color:#90EE90;
                }
                &:hover {
                    scale: 1.2;
                    
                    & #instagram {
                        color: #c13584;
                    }
                    & #facebook {
                        color: #3b5998;
                    }
                    & #linkedin {
                        color: #2867B2;
                    }
                }
                &:first-child{
                    margin-left: 0;	
                }
                &:last-child{
                    margin-right: 0;	
                }
            }
        }
    }

   
    .socials {
        display: flex;
        flex-direction: column;
        background-color: #171717;
        width: 25%;

        .icons {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    }
    p{
        text-transform: uppercase;
        font-size: 14px;
        color: rgba(255,255,255,0.6);
        color: #f5f5f5d2;
        margin-bottom: 10px;

    }
    .moto {
            font-size: 16px;
        }
}
@media (max-width: 700px){
	footer {
		padding: 80px 15px;
	}
}
</style>