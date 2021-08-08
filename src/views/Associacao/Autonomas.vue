<template>
    <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
    <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
    <Navbar v-if="!mobileMode" class="navbar" />
    <div v-if="!activatedNavbar" class="pageContent">
      <div class="setores">
        <ul class="indice">
          <!-- <i class="fa fa-arrow-circle-down" aria-hidden="true"><span>SETORES</span></i> -->
          <div>
            <h1>Secção Autónoma da Comunicação</h1>
            <li v-for="setor in SAComunicacao" :key="setor.id"><a @click="(nomeDoSetor = setor.nome) && (descricao = setor.descricao) && (contacto = setor.contacto) && (coordenador1 = setor.coordenador1) && (coordenador1Img = getImgURL(setor.img1)) && (fb1 = setor.fb1) && (coordenador2 = setor.coordenador2) && (coordenador2Img = getImgURL(setor.img2)) && (fb2 = setor.fb2) && (coordenador3 = setor.coordenador3) && (coordenador3Img = getImgURL(setor.img3)) && (fb3 = setor.fb3) && (coordenador4 = setor.coordenador4) && (coordenador4Img = getImgURL(setor.img4)) && (fb4 = setor.fb4)" >
              <i :class="setor.icon"></i>
              <p>{{ setor.nome }}</p>
            </a></li>
            <h1>Secção Autónoma Desportiva</h1>
            <li v-for="setor in SADesportiva" :key="setor.id"><a @click="(nomeDoSetor = setor.nome) && (descricao = setor.descricao) && (contacto = setor.contacto) && (coordenador1 = setor.coordenador1) && (coordenador1Img = getImgURL(setor.img1)) && (fb1 = setor.fb1) && (coordenador2 = setor.coordenador2) && (coordenador2Img = getImgURL(setor.img2)) && (fb2 = setor.fb2) && (coordenador3 = setor.coordenador3) && (coordenador3Img = getImgURL(setor.img3)) && (fb3 = setor.fb3) && (coordenador4 = setor.coordenador4) && (coordenador4Img = getImgURL(setor.img4)) && (fb4 = setor.fb4)" >
              <i :class="setor.icon"></i>
              <p>{{ setor.nome }}</p>
              </a></li>
          </div>
        </ul>
        <Setor v-if="nomeDoSetor" :nomeDoSetor="nomeDoSetor"
        :coordenador1="coordenador1"
        :coordenador1Img="coordenador1Img"
        :fb1="fb1"
        :coordenador2="coordenador2"
        :coordenador2Img="coordenador2Img"
        :fb2="fb2"
        :coordenador3="coordenador3"
        :coordenador3Img="coordenador3Img"
        :fb3="fb3"
        :coordenador4="coordenador4"
        :coordenador4Img="coordenador4Img"
        :fb4="fb4"
        :descricao="descricao"
        :contacto="contacto"
         ></Setor>
      </div>
      <Footer />
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';
import NavbarMobile from '@/components/NavbarMobile.vue';
import ScrollToTopButton from '@/components/ScrollToTopButton.vue';
import Footer from '@/components/Footer.vue';
import Setor from '@/components/Setor.vue';

export default defineComponent({
  name: 'Setores',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      SAComunicacao: [
        {id: 1, nome: "AAUE TV", icon: "fas fa-tv", coordenador1: "Alexandra Gomes",fb1: "https://www.facebook.com/alexandra.gomes.1654", img1: 'SAComunicacao/aauetv/alexandragomes.webp', coordenador2: "Beatriz Ferreira", fb2: "https://www.facebook.com/profile.php?id=100009935898406", img2: 'SAComunicacao/aauetv/beatrizferreira.webp', coordenador3: "Inês Marcos", fb3: "https://www.facebook.com/ines.marcos.18", img3: 'SAComunicacao/aauetv/inesmarcos.webp', descricao: "A AAUE TV, enquanto membro integrante da Secção Autónoma de Comunicação, é responsável pela cobertura das atividades realizadas pela AAUE. O registo fotográfico e videográfico é fundamental no papel da vida académica pois, posteriormente, poder-se-á recordar todos os momentos. Para além de documentar os eventos, realiza material para promoção e divulga os eventos através da multimédia.", contacto: "tv@aaue.pt"},
        {id: 2, nome: "Comunicação", icon: "fas fa-mail-bulk", coordenador1: "Carolina Tapada", fb1: "https://www.facebook.com/carolina.tapada", img1: 'SAComunicacao/comunicacao/carolinatapada.webp', coordenador2: "Catarina Costa", fb2: "https://www.facebook.com/profile.php?id=100002069906938",  img2: 'SAComunicacao/comunicacao/catarinacosta.webp', coordenador3: "Filipa Serrano", fb3: "https://www.facebook.com/profile.php?id=100011631603712",  img3: 'SAComunicacao/comunicacao/filipaserrano.webp', descricao: "A Comunicação desempenha um papel fundamental na ligação dos estudantes da Academia com a AAUE, primando pela partilha de toda a informação à Associação. Compromete-se a equipa a trabalhar em prol da sua organização e produtividade, estabelecendo ligações cruciais com os restantes setores por meio de facilitar o acesso à informação e interligação entre a AAUE, a Academia e a cidade de Évora, divulgando os acontecimentos relacionados com a AAUE e o Mundo.", contacto: "comunicacao@aaue.pt"},
        {id: 3, nome: "Divulgação", icon: "fas fa-newspaper", coordenador1: "Bárbara Santos", fb1: "https://www.facebook.com/barbara.santos.7923", img1: 'SAComunicacao/divulgacao/barbarasantos.webp', coordenador2: "Joana Lachica", fb2: "https://www.facebook.com/joana.lachica", img2: 'SAComunicacao/divulgacao/joanalachica.webp', descricao: "A Divulgação executa uma das tarefas fundamentais na operacionalização da AAUE, sendo-lhe incumbida toda a publicação de conteúdo essencial, de modo, a inteirar toda a comunidade estudantil da atividade da AAUE. Numa visão geral desta equipa, o poder de interação, transparência e interajuda são palavras-chave para o sucesso e, por isso, terá o compromisso de usufruir das redes sociais - Facebook, Instagram e Twitter.", contacto: "divulgacao@aaue.pt"},
        {id: 4, nome: "Imagem", icon: "fas fa-images", coordenador1: "Ana Raquel Gouveia", fb1: "https://www.facebook.com/ana.raquel.900388", img1: 'SAComunicacao/imagem/anaraquelgouveia.webp', coordenador2: "Ana Sofia Ricardo", fb2: "https://www.facebook.com/ana.sofia.142892", img2: 'SAComunicacao/imagem/anasofiaricardo.webp', coordenador3: "Andreia Adoa", fb3: "https://www.facebook.com/andreiaadoa", img3: 'SAComunicacao/imagem/andreiaadoa.webp', coordenador4: "Sara Condeça", fb4: "https://www.facebook.com/sara.condeca.22", img4: "SAComunicacao/imagem/saracondeca.webp", descricao: "A Imagem é responsável pela identidade visual e gráfica da AAUE, assim como dos seus eventos e projetos. A correlação entre o design e a comunicação, passada através da imagem desempenha um papel fundamental na elaboração do conteúdo gráfico a disponibilizar pela AAUE, procurando garantir uma comunicação eficaz e apelativa entre a AAUE e a comunidade estudantil.", contacto: "imagem@aaue.pt"},
        {id: 5, nome: "GAPE", icon: "fas fa-user-shield", coordenador1: "Joana Nogueira", fb1: "https://www.facebook.com/joananogueira715", img1: 'SAComunicacao/gape/joananogueira.webp', coordenador2: "Patrícia Casanova", fb2: "https://www.facebook.com/tita.casanova2", img2: 'SAComunicacao/gape/patriciacasanova.webp', coordenador3: "", fb3: "", img3: "", coordenador4: "", fb4: "", img4: "", descricao: "O Gabinete de Apoio ao Estudante nasce da necessidade de resposta imediata, assertiva e de confiança a todas as questões dos estudantes. É função do GAPE apoiar e auxiliar os estudantes nesse sentido, através das redes sociais da AAUE.", contacto: "gape@aaue.pt"},
      ],
      SADesportiva: [
        {id: 1, nome: "Desportiva", icon: "fas fa-futbol", coordenador1: "Eduardo Dias", fb1: "https://www.facebook.com/eduardo.dias.39982", img1: 'SADesporto/desportiva/eduardoDias.webp', coordenador2: "Inácia Nunes", fb2: "https://www.facebook.com/innacia", img2: 'SADesporto/desportiva/inaciaNunes.webp', coordenador3: "João Alcântara", fb3: "https://www.facebook.com/joao.alcantara.58", img3: "SADesporto/desportiva/joaoAlcantara.webp", coordenador4: "Sofia Jarreta", fb4: "https://www.facebook.com/sofia.jarretaa", img4: "SADesporto/desportiva/sofiaJarreta.webp", descricao: "O desporto é uma atividade de lazer e competição saudável, pela qual apela a boas práticas. Por estas razões, apresenta-se como desígnio da Secção Autónoma Desportiva que a Academia reúna todos os esforços em prol da promoção, da qualidade de vida e bem-estar, não só dos estudantes, como também dos habitantes da cidade de Évora. Considera-se fundamental promover momentos de atividade física, diversão, entretenimento e, ao mesmo tempo, o espírito de competição amigável entre os estudantes.", contacto: "desportiva@aaue.pt"},
      ],
      nomeDoSetor: "",
      coordenador1: "",
      coordenador1Img: "",
      fb1: "",
      coordenador2: "",
      coordenador2Img: "",
      fb2: "",
      coordenador4: "",
      coordenador4Img: "",
      fb4: "",
      descricao: "",
      contacto: "",
      coordenador3: "",
      coordenador3Img: "",
      fb3: "",
    }
  },

  components: {
    Navbar,
    NavbarMobile,
    ScrollToTopButton,
    Setor,
    Footer,
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeMount() {
    this.nomeDoSetor = this.SAComunicacao[0].nome;
    this.coordenador1 = this.SAComunicacao[0].coordenador1;
    this.coordenador1Img = this.getImgURL(this.SAComunicacao[0].img1);
    this.fb1 = this.SAComunicacao[0].fb1;
    this.coordenador2 = this.SAComunicacao[0].coordenador2;
    this.coordenador2Img = this.getImgURL(this.SAComunicacao[0].img2);
    this.fb2 = this.SAComunicacao[0].fb2;
    this.coordenador3 = "Inês Marcos";
    this.coordenador3Img = this.getImgURL('SAComunicacao/aauetv/inesmarcos.webp');
    this.fb3 = "https://www.facebook.com/ines.marcos.18";
    this.coordenador4 = "";
    this.coordenador4Img = "";
    this.fb4 = "";
    this.descricao = this.SAComunicacao[0].descricao;
    this.contacto = this.SAComunicacao[0].contacto;
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
   methods: {
    getImgURL(image: String) {
        return require('@/assets/membros/' + image);
    },
    scrollToElement(destination: string) {
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

$specialColor: #155781;

.setores {
  display: flex;
  padding-bottom: 100px;

  .indice {
    margin: 75px 0 0 30px;
    display: flex;
    flex-direction: row;
    text-align: left;
    min-width: 35%;
    font-size: 10px;

    h1 {
      margin-top: 15px;
      margin-bottom: 15px;
    }

    li a {
      opacity: 1;
      display: flex;
      justify-content: left;
      align-items: center;
      font-size: 10px;
      color: #555;
      padding: 0px 10px 20px 10px;

      i {
        font-size: 20px;
        padding: 15px;
        border-radius: 50%;
        background-color: #18191A;
        color: white;
      }

      p {
        position: relative;
        margin-left: 10px;
        font-size: 20px;

        &:hover {
          scale: 0.98;
          &:before {
            color: #000000;
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }
      
        &::before {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color:  $specialColor;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
      }
    }
  } 
}

.setor {
  margin-top: 75px;
  height: auto;
}

</style>