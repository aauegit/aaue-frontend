import { createStore } from "vuex";

const URL = "https://aaue-blogs.onrender.com/api/getAllBlogposts";
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
    isNoticiasLoading: true,
  },

  // Syncronous
  mutations: {
    setCurrentNoticia(state, payload) {
      state.currentNoticia = payload;
    },
    setAllNoticias(state, payload) {
      state.noticias = payload;
    },
    setNoticiasLoadingState(state, payload) {
      state.isNoticiasLoading = payload;
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
        `https://aaue-blogs.onrender.com/api/getBlogpost/${payload}`,
        requestOptions
      );
      const currentNoticia = await noticia.json();
      state.commit("setCurrentNoticia", currentNoticia);
    },
    setNoticiasLoadingState(state, payload) {
      state.commit("setNoticiasLoadingState", false);
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
    getIsNoticiasLoading(state) {
      return state.isNoticiasLoading;
    },
  },
});
