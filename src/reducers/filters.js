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
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    default:
      return state
  }
}

export default filtersReducer