//action creators filters

//set search text
export const setSearchText = (text) => ({
  type: 'SET_SEARCH_TEXT',
  text
})

//sort by date
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

//sort by amount
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})