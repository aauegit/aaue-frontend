import { createStore } from "vuex";

const URL = "https://blogposting-api.herokuapp.com/api/getAllBlogposts";
const requestOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export default createStore({
  state: {
    noticias: [],
    currentNoticia: {},
  },

  // Syncronous
  mutations: {
    setCurrentNoticia(state, payload) {
      state.currentNoticia = payload;
    },
    setAllNoticias(state, payload) {
      state.noticias = payload;
    },
  },
  // Asyncronous
  actions: {
    async setAllNoticias(state, payload) {
      const news = await fetch(URL, requestOptions);
      const allNews = await news.json();
      state.commit("setAllNoticias", allNews);
    },
    async setCurrentNoticia(state, payload) {
      const noticia = await fetch(
        `https://blogposting-api.herokuapp.com/api/getBlogpost/${payload}`,
        requestOptions
      );
      const currentNoticia = await noticia.json();
      state.commit("setCurrentNoticia", currentNoticia);
    },
  },
  modules: {},
  getters: {
    getCurrentNoticia(state) {
      return state.currentNoticia;
    },
    getAllNoticias(state) {
      return state.noticias;
    },
  },
});
