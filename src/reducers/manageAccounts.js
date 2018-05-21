export default function manageAccounts (
  state ={
    accounts: [],
    account1: {},
    account2: {},
    loading: false,
    errors: []
  },
  action
){
  switch (action.type) {
    case 'LOAD_ACCOUNTS':
    return {
      ...state,
      accounts: action.payload,
      loading: !state.loading
    }

  case 'LOADING':
    return {
      ...state,
      loading: !state.loading
    }

  case 'LOAD_ACCOUNT1':
    return {
      ...state,
      account1: {
        account: action.payload.account,
        personality: action.payload.personality,
        needs: action.payload.needs,
        values: action.payload.values,
        consumption_preferences: action.payload.consumption_preferences,
        avatar: action.payload.avatar
    }
  }

  case 'LOAD_ACCOUNT2':
    return {
      ...state,
      account2: {
        account: action.payload.account,
        personality: action.payload.personality,
        needs: action.payload.needs,
        values: action.payload.values,
        consumption_preferences: action.payload.consumption_preferences,
        avatar: action.payload.avatar
    }
  }

  case 'ADD_ACCOUNT':
  if (Object.keys(action.payload).includes('errors')){
    return {
      ...state,
      errors: [...state.errors, action.payload.errors],
      loading: !state.loading
    }
  }
  else {
    return {
      ...state,
      accounts: [...state.accounts, action.payload.account],
      loading: !state.loading
    }
  }

  case 'CLEAR_ERRORS':
    return {
      ...state,
      errors: []
    }

  default:
  return state

 }
}
