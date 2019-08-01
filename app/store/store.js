import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

function dateParse(date){
  let timestamp = date.substring(0, date.indexOf('+'));
  let offset = date.substring(date.indexOf('+'));
  let newDate = new Date(timestamp*1000+(offset * 36000));
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  if(day < 9) day = '0' + day;
  if(month < 9) month = '0' + month;
  return day + '.' + month + '.' + newDate.getFullYear();
}

let store = new Vuex.Store({
  state: {
    data: false,
    error: false
  },
  actions: {
    getData(context) {
      axios.get('/api', {})
        .then((response) => {
          context.commit('setData', response.data.tarifs);
        })
        .catch((error) => {
          context.commit('setError', error);
        });
    }
  },
  mutations: {
    setData(state, data) {
      state.data = data.map(element => {
        let min = Infinity;
        let max = 0;
        element.tarifs.forEach(tarif => {
          let num = tarif.price / tarif.pay_period;
          tarif.new_payday = dateParse(tarif.new_payday);
          if(num > max) max = num;
          if(num < min) min = num;
        });
        element.tarifs.sort((a, b) => a.ID > b.ID ? 1 : -1);
        element.priceMax = max;
        element.price = min + ' - ' + max;
        return element;
      });
    },
    setError (state, data) {
      state.error = data;
    }
  }
});

export default store;
