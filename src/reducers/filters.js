//reducer filters

const initStateFiltersReducer = {
  text: '',
  sortBy: 'date'    //filter sort by 'date' or 'amount'
}

const filtersReducer = (state = initStateFiltersReducer, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default filtersReducer