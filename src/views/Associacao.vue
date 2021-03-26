<template>
    <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
    <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
    <Navbar v-if="!mobileMode" class="navbar" />
    <div v-if="!activatedNavbar" class="pageContent">
      <div class="setores">
        <ul class="indice">
          <!-- <i class="fa fa-arrow-circle-down" aria-hidden="true"><span>SETORES</span></i> -->
          <div>
            <li v-for="setor in setores" :key="setor.id"><a @click="(nomeDoSetor = setor.nome) && (descricao = setor.descricao) && (contacto = setor.contacto) && (coordenador1 = setor.coordenador1) && (coordenador1Img = getImgURL(setor.img1)) && (fb1 = setor.fb1) && (coordenador2 = setor.coordenador2) && (coordenador2Img = getImgURL(setor.img2)) && (fb2 = setor.fb2) && (coordenador3 = setor.coordenador3) && (coordenador3Img = getImgURL(setor.img3)) && (fb3 = setor.fb3) && (coordenador4 = setor.coordenador4) && (coordenador4Img = getImgURL(setor.img4)) && (fb4 = setor.fb4)" >
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
         />
      </div>
      <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import NavbarMobile from '../components/NavbarMobile.vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
import Setor from '../components/Setor.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'Associacao',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      setores: [
        {id: 0, nome: "AAUE TV", icon: "fas fa-tv", coordenador1: "Alexandra Gomes",fb1: "https://www.facebook.com/alexandra.gomes.1654", img1: 'aauetv/alexandragomes.webp', coordenador2: "Beatriz Ferreira", fb2: "https://www.facebook.com/profile.php?id=100009935898406", img2: 'aauetv/beatrizferreira.webp', coordenador3: "Inês Marcos", fb3: "https://www.facebook.com/ines.marcos.18", img3: 'aauetv/inesmarcos.webp', descricao: "A AAUE TV, enquanto membro integrante da Secção Autónoma de Comunicação, é responsável pela cobertura das atividades realizadas pela AAUE. O registo fotográfico e videográfico é fundamental no papel da vida académica pois, posteriormente, poder-se-á recordar todos os momentos. Para além de documentar os eventos, realiza material para promoção e divulga os eventos através da multimédia.", contacto: "tv@aaue.pt"},
        {id: 1, nome: "Ação Social e Integração", icon: "fas fa-users", coordenador1: "Filipa Calvinho", fb1: "https://www.facebook.com/filipa.calvinho", img1: 'acaosocial/filipacalvinho.webp', coordenador2: "Guilherme Silva",  fb2: "https://www.facebook.com/gui.silva.5059", img2: 'acaosocial/guilhermesilva.webp', coordenador3: "Margarida Caraças",  fb3: "https://www.facebook.com/anamargarida.caracas", img3: 'acaosocial/margaridacaracas.webp', descricao: "Este setor é de importância extrema devido à sua ligação de proximidade tanto com a Academia tanto com a comunidade eborense. Dada a situação pandémica atual, que atinge todos, mas que a sua problemática é ainda mais acentuada nos mais vulneráveis, o seu papel tornou-se ainda mais relevante devido às dimensões que engloba como é o caso da solidariedade, inclusão e a integração. Assim, a prioridade deste setor é atenuar as desigualdades sociais sentidas pelos estudantes, promovendo a sua integração não só no meio académico como dentro da comunidade eborense.", contacto: "a.social.integracao@aaue.pt" },
        {id: 2, nome: "Administração", icon: "fas fa-users-cog", coordenador1: "Joana Martins", fb1: "https://www.facebook.com/joana.martins.984", img1: 'administracao/joanamartins.webp', coordenador2: "Marganida Janota",  fb2: "https://www.facebook.com/margarida.janota.3", img2: 'administracao/margaridajanota.webp', coordenador3: "Maria Borges",  fb3: "https://www.facebook.com/mariamargarida.borges.7", img3: 'administracao/mariaborges.webp', descricao: "Este setor tem como responsabilidades a organização e gestão de todo o património móvel e imóvel da AAUE. Compromete-se com a organização e manutenção de estruturas que apoiam o bom funcionamento desta Associação Académica como é o caso do arquivo, do Cordovil e da Sala dos Núcleos. Ainda, coopera de forma próxima e permanente com a presidência e os restantes setores da AAUE.", contacto: "administracao@aaue.pt"},
        {id: 3, nome: "Apoio aos Núcleos", icon: "fas fa-ticket-alt", coordenador1: "André Antunes", fb1: "https://www.facebook.com/AFreitasAntunes", img1: 'apoioaosnucleos/andreantunes.webp', coordenador2: "Carminho Chichorro",  fb2: "https://www.facebook.com/carmo.sousachichorro", img2: 'apoioaosnucleos/carminhochichorro.webp', coordenador3: "Marisa Chuva",  fb3: "https://www.facebook.com/marisaapchuva", img3: 'apoioaosnucleos/marisachuva.webp', descricao: "Este setor visa articular a comunicação entre a AAUE, os núcleos de estudantes, as tunas, os grupos académicos e a Universidade de Évora. Assim, o seu principal objetivo é responder às necessidades dos núcleos assim como dos seus projetos, procurando ir ao encontro das necessidades e interesses específicos dos estudantes do curso ou cursos que representam. Finalmente, procura dar continuidade à atividades relacionadas com a formação de gestão de um núcleo para garantir assim o seu bom funcionamento, manutenção e inovação.", contacto: "a.nucleos@aaue.pt"},
        {id: 5, nome: "Cidadania, Sustentabilidade \n e Empreendedorismo", icon: "fas fa-school", coordenador1: "André Marreiros", fb1: "https://www.facebook.com/andre.marreiros.54", img1: 'cidadania/andremarreiros.webp', coordenador2: "Beatriz Conceição",  fb2: "https://www.facebook.com/profile.php?id=100039498361478", img2: 'cidadania/beatrizconceicao.webp', coordenador3: "Luís Carvalho",  fb3: "https://www.facebook.com/Lcarvalhof92", img3: 'cidadania/luiscarvalho.webp', descricao: "Nasceu de uma crescente necessidade de complementar a oferta local para garantir aos estudantes da Academia uma maior aptidão que facilita a sua entrada no mercado de trabalho, tanto por via profissional como via empreendedora. Tem o intuito de trabalhar em prol do desenvolvimento e aquisição de novas competências associadas às três referidas áreas ao nível local devido a estas se encontrarem pouco exploradas. ", contacto: "cidadania@aaue.pt????"},
        {id: 6, nome: "Comunicação", icon: "fas fa-mail-bulk", coordenador1: "Carolina Tapada", fb1: "https://www.facebook.com/carolina.tapada", img1: 'comunicacao/carolinatapada.webp', coordenador2: "Catarina Costa", fb2: "https://www.facebook.com/profile.php?id=100002069906938",  img2: 'comunicacao/catarinacosta.webp', coordenador3: "Filipa Serrano", fb3: "https://www.facebook.com/profile.php?id=100011631603712",  img3: 'comunicacao/filipaserrano.webp', descricao: "A Comunicação desempenha um papel fundamental na ligação dos estudantes da Academia com a AAUE, primando pela partilha de toda a informação à Associação. Compromete-se a equipa a trabalhar em prol da sua organização e produtividade, estabelecendo ligações cruciais com os restantes setores por meio de facilitar o acesso à informação e interligação entre a AAUE, a Academia e a cidade de Évora, divulgando os acontecimentos relacionados com a AAUE e o Mundo.", contacto: "comunicacao@aaue.pt"},
        {id: 7, nome: "Cultural", icon: "fas fa-calendar-alt", coordenador1: "Diogo Ribeiro", fb1: "https://www.facebook.com/diogo.ribeiro.1422409", img1: 'cultural/diogoribeiro.webp', coordenador2: "Marco Conceição", fb2: "https://www.facebook.com/marco.sadaconceicao", img2: 'cultural/marcoconceicao.webp', coordenador3: "Pedro Sapinho", fb3: "https://www.facebook.com/pedro.sapinho.92", img3: 'cultural/pedrosapinho.webp', descricao: "O setor Cultural considera a cultura uma parte fundamental da identidade de um país, ainda mais na situação pandémica vigente. Assim, este setor procura o seu enriquecimento através da dinamização e realização de atividades dentro deste âmbito, naturalmente adaptadas à situação corrente. Ainda, pretende uma difusão da diversidade cultural abrangida pela Academia, de forma a criar uma ligação entre os estudantes e a comunidade. ", contacto: "cultural@aaue.pt"},
        {id: 9, nome: "Divulgação", icon: "fas fa-newspaper", coordenador1: "Bárbara Santos", fb1: "https://www.facebook.com/barbara.santos.7923", img1: 'divulgacao/barbarasantos.webp', coordenador2: "Joana Lachica", fb2: "https://www.facebook.com/joana.lachica", img2: 'divulgacao/joanalachica.webp', descricao: "A Divulgação executa uma das tarefas fundamentais na operacionalização da AAUE, sendo-lhe incumbida toda a publicação de conteúdo essencial, de modo, a inteirar toda a comunidade estudantil da atividade da AAUE. Numa visão geral desta equipa, o poder de interação, transparência e interajuda são palavras-chave para o sucesso e, por isso, terá o compromisso de usufruir das redes sociais - Facebook, Instagram e Twitter.", contacto: "divulgacao@aaue.pt"},
        {id: 10, nome: "Financeiro", icon: "fas fa-euro-sign", coordenador1: "Bruno Simões", fb1: "https://www.facebook.com/bruno.simoes.777", img1: 'financeiro/brunosimoes.webp', coordenador2: "Catarina Vidigal", fb2: "https://www.facebook.com/catarina.vidigal",  img2: 'financeiro/catarinavidigal.webp', coordenador3: "Maria Eduarda Santos", fb3: "https://www.facebook.com/eduarda.santos.79230305",  img3: 'financeiro/mariaeduardasantos.webp', descricao: "Desempenha um papel fulcral na estrutura da AAUE, tendo como ocupação o registo e análise dos processos monetários da Associação, de forma a garantir transparência e eficiência. Pretende dar continuidade ao forte investimento na organização e controlo dos recursos económicos da AAUE de forma a assegurar uma maior articulação e colaboração para com os restantes setores a que dizem respeito a organização logística e financeira.", contacto: "financeira@aaue.pt"},
        {id: 11, nome: "Imagem", icon: "fas fa-images", coordenador1: "Ana Raquel Gouveia", fb1: "https://www.facebook.com/ana.raquel.900388", img1: 'imagem/anaraquelgouveia.webp', coordenador2: "Ana Sofia Ricardo", fb2: "https://www.facebook.com/ana.sofia.142892", img2: 'imagem/anasofiaricardo.webp', coordenador3: "Andreia Adoa", fb3: "https://www.facebook.com/andreiaadoa", img3: 'imagem/andreiaadoa.webp', coordenador4: "Sara Condeça", fb4: "https://www.facebook.com/sara.condeca.22", img4: "imagem/saracondeca.webp", descricao: "A Imagem é responsável pela identidade visual e gráfica da AAUE, assim como dos seus eventos e projetos. A correlação entre o design e a comunicação, passada através da imagem desempenha um papel fundamental na elaboração do conteúdo gráfico a disponibilizar pela AAUE, procurando garantir uma comunicação eficaz e apelativa entre a AAUE e a comunidade estudantil.", contacto: "imagem@aaue.pt"},
        {id: 12, nome: "Informática", icon: "fas fa-laptop-code", coordenador1: "Francisco Rodrigues", fb1: "https://www.facebook.com/francisco.rodrigues.94651", img1: 'informatica/franciscorodrigues.webp', coordenador2: "Ion Chirica", fb2: "https://www.facebook.com/officialdayumdrops", img2: 'informatica/ionchirica.webp', coordenador3: "Tiago Costa", fb3: "https://www.facebook.com/tiagoagcosta/", img3: 'informatica/tiagocosta.webp', descricao: "O Setor de Informática tem como objetivo o bom funcionamento na gestão de informação e no domínio do conteúdo em formato digital, de forma a facilitar as tarefas dos recursos humanos, proporcionando-se assim formas de trabalho mais eficientes. Cabe ao setor o papel de administração e manutenção do website da AAUE, que pode ser visitado por todos os utilizadores que pretendam tirar proveito dos serviços do mesmo, facilitando o acesso a toda a informação disponibilizada.", contacto: "informativa@aaue.pt"},
        {id: 13, nome: "Política Educativa", icon: "fas fa-balance-scale"},
        {id: 14, nome: "Protocolos e Parcerias", icon: "fas fa-handshake"},
        {id: 15, nome: "SAFA", icon: "fas fa-truck-moving"},
        {id: 16, nome: "Saúde", icon: "fas fa-heartbeat"},
        {id: 17, nome: "SOL", icon: "fas fa-box"},
        {id: 18, nome: "GAPE", icon: "fas fa-user-shield", coordenador1: "Joana Nogueira", fb1: "https://www.facebook.com/joananogueira715", img1: 'gape/joananogueira.webp', coordenador2: "Patrícia Casanova", fb2: "https://www.facebook.com/tita.casanova2", img2: 'gape/patriciacasanova.webp', coordenador3: "", fb3: "", img3: "", coordenador4: "", fb4: "", img4: "", descricao: "O Gabinete de Apoio ao Estudante nasce da necessidade de resposta imediata, assertiva e de confiança a todas as questões dos estudantes. É função do GAPE apoiar e auxiliar os estudantes nesse sentido, através das redes sociais da AAUE.", contacto: "gape@aaue.pt"},
      ],
      membros: { 

        gape: 
          {nomeDoSetor: "", coordenador1: "", fb1: "", img1: '', coordenador2: "", fb2: "", img2: '', descricao: "", contacto: ""}
        ,
      },
      nomeDoSetor: "Informática",
      coordenador1: 'Francisco Rodrigues',
      coordenador1Img: this.getImgURL('informatica/franciscorodrigues.webp'),
      fb1: "https://www.facebook.com/francisco.rodrigues.94651",
      coordenador2: "Ion Chirica",
      coordenador2Img: this.getImgURL('informatica/ionchirica.webp'),
      fb2: "https://www.facebook.com/officialdayumdrops",
      coordenador3: "Tiago Costa",
      coordenador3Img: this.getImgURL('informatica/tiagocosta.webp'),
      fb3: "https://www.facebook.com/tiagoagcosta/",
      coordenador4: "",
      coordenador4Img: "",
      fb4: "",
      descricao: "O Setor de Informática tem como objetivo o bom funcionamento na gestão de informação e no domínio do conteúdo em formato digital, de forma a facilitar as tarefas dos recursos humanos, proporcionando-se assim formas de trabalho mais eficientes. Cabe ao setor o papel de administração e manutenção do website da AAUE, que pode ser visitado por todos os utilizadores que pretendam tirar proveito dos serviços do mesmo, facilitando o acesso a toda a informação disponibilizada.",
      contacto: "informativa@aaue.pt",
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
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
   methods: {
    getImgURL(image: String) {
      return require('../assets/membros/' + image);
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

.setores {
  display: flex;

  .indice {
    margin: 150px 0 0 30px;
    display: flex;
    flex-direction: row;
    text-align: left;
    min-width: 35%;
    font-size: 10px;
    
    i {
      font-size: 30px;
    
      span {
        font-family: sans-serif;
        margin-left: 10px;
        letter-spacing: 5px;
      }

    }

    li a {
      opacity: 1;
      display: flex;
      justify-content: left;
      align-items: center;
      font-size: 10px;
      color: #555;
      padding: 0px 10px 20px 10px;
      max-width: 65%;


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
          background-color:  #6d1112;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
      }
    }
  } 
}




</style>