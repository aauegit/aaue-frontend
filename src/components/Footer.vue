<template>
    <footer>
		<ul class="ulContainer">
            <div class="aaue">
                <img src="@/assets/aaueLogoBranco.png" alt="">
                <p>A Associação Académica da Universidade de Évora é responsável por potenciar o teu envolvimento e desenvolvimento académicos.Podes contar com a AAUE para o teu desenvolvimento pessoal e profissional!</p> 
            </div>
            <div class="contactInfo">
                <li class="title">Contacta-nos!</li>
                <li>
                    <a href="https://goo.gl/maps/hMu13iR5NiM2">
                    <i class="fas fa-map-marker-alt icon" aria-hidden="true"><span>Morada</span></i>
                    <p>Rua Diogo Cão nº 21, 7000-872 Évora</p>
                    </a>
                    
                </li>
                <li>
                    <a href="mailto:geral@aaue.pt">
                        <i class="fas fa-envelope icon" aria-hidden="true"><span>Email</span></i>
                        <p>geral@aaue.pt</p>
                    </a>
                </li>
                <li>
                    <a href="tel:+351266098003">
                        <i class="fas fa-phone icon" aria-hidden="true"><span>Telefone</span></i>
                        <p>+ 351 266 09 80 03</p>
                    </a>
                </li>
            </div>
            <div class="socials">
                <li class="title">Eventos</li>
                <li>
                    <a class="icon" id="queima" href="http://queima.aaue.pt/" target="_blank">
                        <i class="fas fa-music"></i>
                        <p>Queima das Fitas</p> 
                    </a>
                </li>
                <li>
                    <a class="icon" id="queima" href="http://queima.aaue.pt/" target="_blank">
                        <i class="fas fa-music"></i>
                        <p>ExpoEstudante</p> 
                    </a>
                </li>
            </div>
            <ul class="plataformas">
                <li class="title">Plataformas</li>
                <li>
                    <a class="icon" id="alojamento" href="https://alojamento.aaue.pt/" target="_blank">
                        <i class="fas fa-home"></i>
                        <p>Portal do Alojamento</p>
                    </a>
                </li>
                <li>
                    <a class="icon" id="reitor" href="http://torneioreitor.aaue.pt/" target="_blank">
                        <i class="fas fa-futbol"></i>
                        <p>Desporto</p> 
                    </a>
                </li>
                <li>
                    <a class="icon" id="reitor" href="http://torneioreitor.aaue.pt/" target="_blank">
                        <i class="fas fa-futbol"></i>
                        <p>Rádio HECLEM</p> 
                    </a>
                </li>
            </ul>
		</ul>
        <ul class="socialMedia">
             <li>
                <a class="icon" id="facebook" href="https://www.facebook.com/AAUEvora" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                </a>
            </li>
            <li>
                <a class="icon" id="instagram" href="https://www.instagram.com/aauevora/" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
            </li>
            <li>
                <a class="icon" id="twitter" href="https://twitter.com/AAUEvora" target="_blank">
                    <i class="fab fa-twitter"></i>
                </a>
             </li>  
			<li>
                <a class="icon" id="linkedin" href="https://www.linkedin.com/company/associa%C3%A7%C3%A3o-acad%C3%A9mica-da-universidade-de-%C3%A9vora/" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </li>
        </ul>
        <p class="rights">© AAUE 2021 | TODOS OS DIREITOS RESERVADOS</p>
		
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
	color: $textColor;
	background-color: $backgroundColor;
	padding: 50px;

    .ulContainer {
        display: flex;
        justify-content: space-around;
        padding-bottom: 40px;
        margin-bottom: 15px;
        border-bottom: 2px solid #9c9c9c4f;

        .aaue {
            display: flex;
            flex-direction: column;
            width: 23%;

            img {
                width: 300px;
                margin-bottom: 30px;
                opacity: 0.9;            
            }

            p {
                opacity: 0.9;
            }
        }

        .contactInfo {
            display: flex;
            flex-direction: column;


            .title {
                color: $textColor;
                opacity: 0.9;
                font-size: 30px;
                margin: 0;
            }

            li {
                margin: 10px 8px;
                
                a {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    color: $textColor;
                    margin-right: 10px;

                    i {
                        font-size: 20px;
                        margin-bottom: 3px;

                        span {
                            font-family: 'Roboto', sans-serif;
                            font-weight: 400;
                            font-size: 20px;
                            padding-left: 10px;
                        }
                    }
                }

                &:nth-child(3) a {
                    width: 105px;
                }

                &:nth-child(4) a {
                    width: 140px;
                }

                .icon {
                    display: flex;
                    justify-content: center;
                   
                }
            }
        }
    }

   
    .socials,
    .plataformas {
        display: flex;
        flex-direction: column;

        .title {
            font-size: 30px;
            color: $textColor;
            opacity: 0.9;
        }

        .icon {
            display: flex;
            align-items: center;
            text-align: center;
            color: $textColor;
            font-size: 20px;
            margin: 5px 0 5px 0;

            i {
                margin: 10px 10px 0 0;
                font-size: 24px;

            }

            p {
                text-transform: uppercase;
                color: $textColor;
                margin: 10px 0 0 0;
                font-size: 16px;
                transition: color 0.2s ease-in;
            }
        }
    }

    .socialMedia {
        display: flex;
        justify-content: center;

        i {
            font-size: 20px;
            transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
            color: $textColor;
            margin: 30px;
            padding: 15px;
            border-radius: 50%;
            border: 1px solid $textColor;

            &:hover {
                transform: translateY(-5px);
            }
        }
    }

    p {
        font-size: 16px;
    }

    .rights {
        text-align: center;
        font-size: 12px;
        opacity: 0.7;
        margin-bottom: 0;
    }
}
@media (max-width: 700px){
	footer {
		padding: 80px 15px;
	}
}
</style>