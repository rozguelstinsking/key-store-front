let nextTodoId = 0

export const incrementByOne = text => ({
  type: 'INC',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
