//reducer filters

const initStateFiltersReducer = {
  text: '',
  sortBy: 'date'    //filter sort by 'date' or 'amount'
}

const filtersReducer = (state = initStateFiltersReducer, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return {
        ...state,
        text: action.text
      }
    default:
      return state
  }
}

export default filtersReducer