<template>
    <footer>
		<ul class="ulContainer">
            <div class="aaue">
                <img src="@/assets/aaueLogoBranco.png" alt="">
                <p>Cada um de vós é AAUE. Cada um de vós representa a AAUE. A AAUE é isto, estudantes que trabalham, lutam e dão a cara. A AAUE é quem tenta encontrar a melhor solução para a maioria dos estudantes</p> 
            </div>
            <div class="pages">
                <ul class="ulPages">
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
                    <a href="https://goo.gl/maps/hMu13iR5NiM2">
                    <i class="fas fa-map-marker-alt icon" aria-hidden="true"></i>
                    <p>Rua Diogo Cão nº 21 <br> 7000-872 Évora</p>
                    </a>
                    
                </li>
                <li>
                    <a href="mailto:geral@aaue.pt">
                        <i class="fas fa-envelope icon" aria-hidden="true"></i>
                        <p>geral@aaue.pt</p>
                    </a>
                </li>
                <li>
                    <a href="tel:+351266098003">
                        <i class="fas fa-phone icon" aria-hidden="true"></i>
                        <p>+ 351 266 09 80 03</p>
                    </a>
                </li>
            </div>
            <div class="socials">
                <div class="icons">
                    <li>
                        <a class="icon" id="alojamento" href="https://alojamento.aaue.pt/" target="_blank">
                            <i class="fas fa-home"></i>
                            <p>Portal do Alojamento</p>
                        </a>
                    </li>
                    <li>
                        <a class="icon" id="reitor" href="http://torneioreitor.aaue.pt/" target="_blank">
                            <i class="fas fa-futbol"></i>
                             <p>Torneio do Reitor</p> 
                        </a>
                    </li>
                    <li>
                        <a class="icon" id="queima" href="http://queima.aaue.pt/" target="_blank">
                            <i class="fas fa-music"></i>
                            <p>Queima das Fitas</p> 
                        </a>
                    </li>
                    <li>
                        <a class="icon" id="facebook" href="https://www.facebook.com/AAUEvora" target="_blank">
                            <i class="fab fa-facebook-square"></i>
                             <p>@AAUEvora</p> 
                        </a>
                    </li>
                    <li>
                        <a class="icon" id="instagram" href="https://www.instagram.com/aauevora/" target="_blank">
                            <i class="fab fa-instagram"></i>
                             <p>@aauevora</p> 
                        </a>
                    </li>
			        <li>
                        <a class="icon" id="linkedin" href="https://www.linkedin.com/company/associa%C3%A7%C3%A3o-acad%C3%A9mica-da-universidade-de-%C3%A9vora/" target="_blank">
                            <i class="fab fa-linkedin-in"></i>
                            <p>LinkedIn</p> 
                        </a>
                    </li>  
                </div>
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
$backgroundColor: #171717;

footer {
	display: flex;
	flex-direction: column;
    justify-content: space-around;
	color: $textColor;
	background-color: $backgroundColor;
	padding-top: 30px;

    .ulContainer {
        display: flex;
        margin-bottom: 25px;
        font-size: 32px;
        justify-content: space-around;

        .aaue {
            display: flex;
            flex-direction: column;
            width: 20%;

            img {
                margin-bottom: 30px;
            }
        }

        .pages {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .ulPages {
                display: flex;
                flex-direction: column;
                justify-content: center;


                a {
                    color: $textColor;
                    font-size: 20px;
                }
            }

            
        }

        .contactInfo {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 30px;

            h1 {
                color: $textColor;
                opacity: 0.9;
                font-size: 30px;
            }

            li {
                display: flex;
                flex-direction: row;
                align-items: center;
                height: 35px;
                margin: 10px 8px;

                a {
                    display: flex;
                    align-items: center;
                    color: $textColor;
                    margin-right: 10px;

                    i {
                        margin-right: 10px;
                    }
                }

                .icon {
                    display: flex;
                    justify-content: center;
                   
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
                .fa-fax {
                    color:#ffc0cb;
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
        justify-content: center;

        .icons {
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: $textColor;

            .icon {
                display: flex;
                align-items: center;
                text-align: center;
                color: $textColor;
                font-size: 20px;
                margin: 5px 0 5px 0;

                i {
                    margin: 10px 10px 0 0;
                    font-size: 30px;
                }

                p {
                    text-transform: uppercase;
                    color: $textColor;
                    margin: 10px 0 0 0;
                    transition: color 0.2s ease-in;
                }
            }

            #alojamento:hover,
            #alojamento:hover p {
                color: #d80b0b;
            }

            #reitor:hover,
             #reitor:hover p {
                color: #6db66d;
            }

            #queima:hover,
            #queima:hover p {
                color: #e7c137;
            }

            #instagram:hover,
             #instagram:hover p {
                color: #8a3ab9;
            }

            #facebook:hover,
            #facebook:hover p {
                color: #3b5998;
            }

            #linkedin:hover,
            #linkedin:hover p {
                color: #2867B2;
            }

        }
    }

    p{
        font-size: 16px;

    }
}
@media (max-width: 700px){
	footer {
		padding: 80px 15px;
	}
}
</style>