<template>
    <div v-if="!activatedNavbar" class="pageContent">
        <section class="login" v-if="!loggedIn">
                <form >
                    <img src="@/assets/aaueLogo.png" alt="">
                    <label>Username</label>
                    <input type="text" required>
                    <label>Password</label>
                    <input type="password" required>
                    <button @click="loggedIn = !loggedIn">Iniciar Sessão</button>
                </form>
        </section>
        <section class="previewer" v-if="loggedIn">
            <div class="markdown">
                <header>
                    <h1>MARKDOWN</h1>
                    <select name="opçoes" id="opçoes">
                        <option value="criar">Criar</option>
                        <option value="editar">Editar</option>
                    </select>
                    <button>Postar</button>
                </header>
                
                <textarea v-model="text" placeholder="type something"></textarea>
            </div>
            <div class="preview">
                <header>
                    <h1>Preview</h1>
                </header>
                
                <VueMarkdownIt :source="text" :breaks="true" :html="true" class="previewArea" />
            </div>
        </section>

    </div>
  
</template>

<script>
import { defineComponent } from 'vue';
import VueMarkdownIt from 'vue3-markdown-it';


export default defineComponent({
  name: 'Template',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      loggedIn: true,
      text: `
# Dia Nacional do Estudante
---

#### Publicado a 12 de Abril
<br>

<img src="https://aaue.pt/wp-content/uploads/2021/03/pombita.png" width="300px" height="300px" />
<br>
<br>

<p style="text-align: justify; line-height: 20px;">No Dia Nacional do Estudante o foco e atenção principal é para com os estudantes. O Dia Nacional do Estudante, apesar do seu cariz político, deve servir para um momento de reflexão, um momento de oportunidade e um momento de esperança. Nos últimos anos, a instrumentalização constante deste dia transformou-o em apenas mais um dia normal de reuniões políticas e bandeiras fantasma de promessas vazias.</p> 
<br>

<p style="text-align: justify; line-height: 20px;">Este ano o panorama não é muito diferente e, por consequência da pandemia, não será possível marcar o dia com um momento de união e reivindicação. Por consequência do próprio sistema, será apenas mais um dia de reuniões, debates e cortesias.</p> 
<br>

<p style="text-align: justify; line-height: 20px;">A Associação Académica da Universidade de Évora preparou, atempadamente, o Dia Nacional do Estudante com uma série de atividades e ações, tentando compensar o momento e contribuir significativamente para a formação académica e social dos estudantes da academia eborense. Por não se rever nos sistemas, artimanhas e geringonças do “parecer bem para existir e ser ouvido”, a AAUE não atenderá ao convite de algumas estruturas para a reunião com o Ministro da Ciência, Tecnologia e Ensino Superior, Prof. Dr. Manuel Heitor, que se realiza no Porto.</p>  
<br>

<p style="text-align: justify; line-height: 20px;">Acreditando que existem outros 364 dias e que o foco constante do Sr. Ministro é de facto o Ensino Superior, a AAUE coloca-se ao dispor do mesmo para as mais diversas reuniões e ocasiões ao longo ano.</p>  
<br>

<p style="text-align: justify; line-height: 20px;">Ainda assim, a Associação Académica da Universidade de Évora deixa o presente manifesto em nota de imprensa, na esperança de que as preocupações sejam efetivamente preocupações e não apenas temas de conversa.</p>  
<br>

<p style="text-align: justify; line-height: 20px;">A pandemia veio, sem sombra de dúvida, provar que a formação, o ensino e a ciência estão na base de uma sociedade considerada evoluída e desenvolvida. No entanto, a pandemia veio também revelar as fragilidades de um sistema degradado, envelhecido, com métodos pedagógicos e de avaliação desajustados à realidade do século XXI. Apesar dos dados do Ministério da Ciência, Tecnologia e Ensino Superior revelarem um aumento na frequência do Ensino Superior, o último relatório Education at a Glance veio revelar uma diferença de 5 pontos percentuais entre Portugal e os países da OCDE, relativamente à inscrição numa instituição de ensino superior da população entre os 20 e os 24 anos.</p>  
<br>

<p style="text-align: justify; line-height: 20px;">A pandemia colocou ainda, e já referida pela AAUE, uma instabilidade financeira nos agregados familiares que se poderá traduzir num aumento das taxas de abandono e desistência escolar. Da propina ao alojamento, do material escolar às taxas e emolumentos, da bolsa à incerteza, o estudante do ensino superior “sobrevive” com dificuldades constantes, e as fragilizações provocadas pela COVID-19 e consecutivos confinamentos acentuam as suas dificuldades. Estes estudantes enfrentam ainda uma agravante da sua saúde mental, já conhecida no meio e ignorada ano após ano, revelando-se agora o problema real. As incertezas, como as provocadas pelo artigo 259o do Orçamento de Estado, vêm ainda contribuir mais para a agravante destas situações crónicas.</p>  
<br>

<p style="text-align: justify; line-height: 20px;">Urgem-se então medidas de diagnóstico, acompanhamento, identificação e resolução. A AAUE defende uma posição proativa e nunca reativa. É essencial a promoção do desenvolvimento pessoal e académico, hábitos saudáveis e de um ensino superior com metodologias enquadradas e adequadas.</p>  
<br>

<p style="text-align: justify; line-height: 20px;">Hoje celebra-se mais um Dia Nacional do Estudante. Que o dia de hoje sirva para garantir o regresso à atividade letiva em segurança, traçar efetivamente as prioridades de quem regula o ensino superior e meios adjuntos, e definir de uma vez o papel essencial do estudante na sociedade, pois o estudante é o seu presente e o seu futuro.</p>  
<br>

<p style="text-align: justify; line-height: 20px;">Por último, a Associação Académica da Universidade de Évora quer destacar a destreza e resiliência dos estudantes, não só aos da Universidade de Évora, mas de todo o país. A capacidade de assinalar o dia de hoje revela um espírito de insatisfação, necessário à evolução do sistema. A todos os estudantes, o nosso maior obrigado.</p>  
<br>

**Évora, 24 de março de 2021**
<br>

**O Presidente da Direção da AAUE,**
<br>

Henrique Gil
      
        `,
    }
  },
  components: {
    VueMarkdownIt,
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
   methods: {
    getImgURL(image) {
        return require('../assets/' + image);
    },
    scrollToElement(destination) {
      const element = document.querySelector(destination);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    },
    handleScroll () {
      window.pageYOffset >= 250 ? this.isAtTop = false : this.isAtTop = true;
    },
    handleResize () {
      this.mobileMode = window.innerWidth <= 1015;

      if(!this.mobileMode) {
        this.activatedNavbar = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>

body {
    background-color: #f7f7f7;
}

.login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        padding: 50px;
        border-radius: 10px;
        box-shadow: -7px -7px 20px 0px #fff9,
        -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002,
        4px 4px 5px 0px #0001,
        inset 0px 0px 0px 0px #fff9,
        inset 0px 0px 0px 0px #0001,
        inset 0px 0px 0px 0px #fff9,
        inset 0px 0px 0px 0px #0001;

        label {
            margin-top: 30px;
        }

        input {
            margin: 10px 0 0px 0;
            padding: 10px;

            &:focus {
                background-color: #f7f7f7;
            }
        }

        button {
            margin-top: 20px;
            border: 1px solid #e96656;
            border-radius: 18px;
            padding: 20px 40px 20px 40px;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: all 0.1s ease-in;
                    

             &:hover {
                color: white;
                background-color: #e96656;
                cursor: pointer;
            }
        }
    }
}

.previewer {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .markdown {
        height: 95vh;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-right: 1px solid #e0e0e0;

        header {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-bottom: 25px;

            select {
                font-size: 16px;
                text-transform: uppercase;
                letter-spacing: 2px;
                padding: 10px 20px 10px 20px;
                border-radius: 5px;

                option {
                    border-radius: 5px;
                }
            }

            button {
                border: 1px solid #e96656;
                border-radius: 18px;
                padding: 10px 40px 10px 40px;
                text-transform: uppercase;
                letter-spacing: 2px;
                transition: all 0.1s ease-in;
        
                &:hover {
                    color: white;
                    background-color: #e96656;
                    cursor: pointer;
                }
            }
        }

        textarea {
            height: 80%;
            width: 90%;
            padding: 10px;
            resize: none;
        }
    }

    .preview {
        height: 95vh;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

         header {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-bottom: 40px;

            h1 {
                width: 100%;
                text-align: left;
                margin-left: 40px;
            }
        }

        .previewArea {
            height: 80%;
            width: 90%;
            padding: 10px;
            background-color: white;
            border: 1px solid black;
            overflow-X: hidden;
            overflow-Y: auto;


        }
    }
}

</style>