import { getVehicles } from '../../api/request.js';

export default {
  state: {
    items: [],
    item: {},
    error: false,
    filterOption: ['whatever'],
    selectOption: 'whatever'
  },
  mutations: {
    updateItems(state, items) {
      state.items = items;
    },
    updateItem(state, targetName) {
      if (state.items.length > 0) {
        state.item = state.items.find(i => i.name == targetName);
      }
    },
    requestReturnError(state, error) {
      state.error = error;
    },
    updateSelectOption(state, payload) {
      state.selectOption = payload;
    },
    updateFilterOption(state, payload) {
      state.filterOption = [...state.filterOption, ...payload];
    }
  },
  actions: {
    fetchItems: async (ctx) => {
      try {
        const res = await getVehicles();
        const items = res;
        const option = [];
        for (let item of items) {
          if (!option.includes(item.type)) {
            option.push(item.type);
          }
        }
        ctx.commit('requestReturnError', false),
        ctx.commit('updateItems', items),
        ctx.commit('updateFilterOption', option)
      }
      catch (error) {
        ctx.commit('requestReturnError', true)
      }
    },
    selectSearchOption: ({ commit }, payload) => {
      commit('updateSelectOption', payload)
    }
  },
  getters: {
    allItems: (state) => {
      if (state.selectOption === 'whatever') {
        return state.items
      } else {
        return state.items.filter(item => item.type === state.selectOption)
      }
    },
    selectedItem: (state) => {
      return state.item
    },
    isError: (state) => {
      return state.error
    },
    filterOptions: (state) => {
      return state.filterOption
    },
    selectFilterOption: (state) => {
      return state.selectOption;
    },
  }
}