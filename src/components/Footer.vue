<template>
    <footer>
		<ul>
            <li>
                <a href="https://goo.gl/maps/hMu13iR5NiM2"><i class="fa fa-map-marker icon" aria-hidden="true"></i></a>
                <p>Rua Diogo Cão nº 21 7000-872 Évora</p>
            </li>
            <li>
                <a href="mailto:geral@aaue.pt"><i class="fa fa-envelope icon" aria-hidden="true"></i></a>
                <p><router-link :to="{ name: 'Contactos' }">Contacta-nos!</router-link></p>
            </li>
            <li>
                <a href="tel:+351266098003"><i class="fa fa-phone icon" aria-hidden="true"></i></a>
                <p>+ 351 266 09 80 03</p>
            </li>
            <div class="socials">
                <div class="icons">
                    <li><a class="icon" id="facebook" href="https://www.facebook.com/AAUEvora"><i class="fa fa-facebook-square"></i></a></li>
                    <li><a class="icon" id="instagram" href="https://www.instagram.com/aauevora/"><i class="fa fa-instagram"></i></a></li>
			        <li><a class="icon" id="linkedin" href="https://www.linkedin.com/company/associa%C3%A7%C3%A3o-acad%C3%A9mica-da-universidade-de-%C3%A9vora/"><i class="fa fa-linkedin-square"></i></a></li>  
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
        li {
            display: flex;
            flex-direction: column;
            height: 35px;
            background-color: #333;
            margin: 0 8px;
            border-radius: 15px;
            box-shadow: -2px -2px 3px rgba(255,255,255,0.05) , 2px 2px 3px rgba(0,0,0,0.2);

            .icon {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            & .fa-phone {
                color:#89CFF0;
            }
            & .fa-map-marker {
                color:#e96656;
            }
            & .fa-envelope {
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
    .socials {
        display: flex;
        flex-direction: column;
        background-color: #171717;

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