<template>
    <div class="setor">
        <!-- <div class="nomeDoSetor">
            <h1> Informática </h1>
        <hr>
        </div> -->
        <div class="infoSetor">
            <div class="textSetor">
                <h1>Informática</h1>
                <hr>
                <p>O Setor de Informática é o setor responsável por servir os utilizadores do Website da Associação Académica da Universidade de Évora, através de um contínuo estudo e consequente melhoria das informações e conhecimentos do meio digital que aplicam na manutenção dos serviços informáticos da AAUE. Torna-se também uma mais-valia para os recursos humanos e para a própria Associação Académica ao inovarem nas suas formas de divulgação.</p>
                <h2>Contacto: <span>informativa@aaue.pt</span></h2>
            </div>
            <div class="coordenador">
                <img src="@/assets/membros/informatica/franciscoRodrigues.jpg" alt="">
                <a href="https://www.facebook.com/francisco.rodrigues.94651" target="_blank">Francisco Rodrigues</a>
            </div>
            <div class="coordenador">
                <img src="@/assets/membros/informatica/ionChirica.jpg" alt="">
                <a href="https://www.facebook.com/officialdayumdrops" target="_blank">Ion Chirica</a>
            </div>
            <div class="coordenador">
                <img src="@/assets/membros/informatica/tiagoCosta.jpg" alt="">
                <a href="https://www.facebook.com/tiagoagcosta/" target="_blank">Tiago Costa</a>
            </div>
            
        </div>
    </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Setor',
});
</script>

<style lang="scss" scoped>

.setor {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .nomeDoSetor {
        text-align: left;
        width: 80%;
        margin-bottom: 20px;
    }

    .infoSetor {
        display: flex;
        justify-content: center;
        width: 80%;

        .coordenador {
            display: flex;
            flex-direction: column;        
            align-items: center;

            img {
            height: 300px;
            margin-bottom: 10px;
            margin-left: 5px;
            }

            a {
                color: #e96656;
            }
        }

        

        .textSetor {
            text-align: justify;
            margin-right: 110px;

            p {
                margin: 30px 0 30px 0;
                font-size: 20px;
            }

            h2 {
                font-size: 20px;
            }

            span {
                font-weight: 100;
            }
        }
        
    }
}

</style>