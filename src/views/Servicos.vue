<template>
  <div class="pageContent">
    <section class="servicos">
      <div class="copiaki">
        <img src="@/assets/servicos/copiaki.png" alt="" />
        <div class="serviceContent">
          <p class="morada">
            <span>Morada: </span>Rua Romão Ramalho, Nº 59, 7000-631 Évora
          </p>
          <p class="contacto"><span>Contacto: </span>926 453 981</p>
          <ul class="servico">
            <span>Serviços: </span>
            <li>- Cópias</li>
            <li>- Impressões</li>
            <li>- Encadernações</li>
            <li>- Venda de material escolar</li>
            <li>- Venda de emblemas académicos</li>
          </ul>
          <p class="horario">
            <span>Horário: </span>9:00 – 13:00 | 14:00 – 19:00 (fechado: Sábado
            e Domingo)
          </p>
        </div>
        <a href="https://www.facebook.com/copiakiue/" target="_blank"
          ><i class="fab fa-facebook-square"></i
        ></a>
      </div>
      <div class="vidaAcademica" v-if="aberto">
        <img src="@/assets/servicos/vidaacademica.png" alt="" />
        <div class="serviceContent">
          <p class="morada">
            <span>Morada: </span>Rua Diogo Cão, Nº 21, 7000-872 Évora
          </p>
          <p class="contacto"><span>Contacto: </span>916 674 103</p>
          <ul class="servico">
            <span>Produtos: </span>
            <li>- Trajes Académicos</li>
            <li>- Emblemas e Pins</li>
            <li>- Brindes</li>
            <li>- Pijamas Cirúrgicos e Batas</li>
            <li>- Vestuário diverso</li>
          </ul>
          <p class="horario">
            <span>Horário: </span>11:00 – 15:00 | 16:00 – 20:00 (fechado: Sábado
            e Domingo)
          </p>
        </div>
        <div class="links">
          <a href="hhttps://www.facebook.com/loja.v.academica/" target="_blank"
            ><i class="fab fa-facebook-square" aria-hidden="true"></i
          ></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Servicos",
  data() {
    return {
      aberto: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.pageContent {
  padding-top: 0px;
}

.servicos {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 15vh;
  padding-bottom: 100px;

  .vidaAcademica,
  .copiaki {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    img {
      width: 300px;
      margin-bottom: 0px;
    }

    .serviceContent {
      align-items: normal;
      margin: 0px 0 25px 0;
      padding: 25px;

      p,
      ul {
        margin-bottom: 25px;
      }

      li {
        margin: 5px 0 5px 0;
      }

      span {
        font-weight: bold;
      }
    }

    a {
      opacity: 1;
    }

    .fa-facebook-square {
      font-size: 50px;
      margin-bottom: 25px;
      color: #3b5998;
      transition: transform 0.2s ease-in;

      &:hover {
        transform: scale(1.1);
      }
    }

    .fa-shopping-cart {
      font-size: 50px;
      margin-bottom: 25px;
      color: #e96656;
      margin-left: 75px;
      transition: transform 0.2s ease-in;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
