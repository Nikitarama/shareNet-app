import { createStore } from 'vuex';
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();
import axios from 'axios';
import router from '../routes/index.js';

const shareNetURL = `https://api.sharenet.co.za/api/v1/px2/spots`;


export default createStore({
  state: {
    spots: null,
  },
  getters: {
    spots: state => {
      return state.spots;
    },
  },
  mutations: {
    setSpots(state, spots) {
      state.spots = spots;
    },
  },
  actions: {
    async getSpots( {commit} ) {
      const res = await axios.get( `${shareNetURL}` );
      console.log(res.data.spots);
      if (res.data.spots){
        commit('setSpots', res.data.spots);
      } else {
        commit('An error has occured');
      } 
    },
//   modules: {
//     spots,
//   }
}
});
