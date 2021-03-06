const URL = 'https://guarded-cliffs-67673.herokuapp.com/api/v1'
export const fetchAccounts = () => {
    return (dispatch) => {
      dispatch({
        type: 'LOADING'
      })

      return fetch(`${URL}/twitter_accounts`)
      .then(resp => resp.json())
      .then(result => {
        let payload = result
        dispatch({
          type: 'LOAD_ACCOUNTS',
          payload
        })
      })
    }
  }

export const clearErrors = () => {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_ERRORS',
    })
  }
}


export const fetchAccount1 = (id) => {


    return (dispatch) => {
      return fetch(`${URL}/twitter_accounts/${id}`)
      .then(resp => resp.json())
      .then(result => {
        let payload = result
        dispatch({
          type: 'LOAD_ACCOUNT1',
          payload
        })
      })
    }
  }


export const fetchAccount2 = (id) => {

    return (dispatch) => {
      return fetch(`${URL}/twitter_accounts/${id}`)
      .then(resp => resp.json())
      .then(result => {
        let payload = result
        dispatch({
          type: 'LOAD_ACCOUNT2',
          payload
        })
      })
    }
  }

  export const addAccount = (handle) => {
    return (dispatch) => {
      dispatch({
        type: 'LOADING'
      })

      return fetch(`${URL}/twitter_accounts`, {
          method: 'POST',
          headers: {Accept: 'application/json',
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            'handle': handle
          })
        })
        .then(resp => resp.json())
        .then(result => {
          dispatch({
            type: 'ADD_ACCOUNT',
            payload: result
          })
        })
      }
    }
