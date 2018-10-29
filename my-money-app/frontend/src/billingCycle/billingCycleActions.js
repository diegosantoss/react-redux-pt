import axios from 'axios';

const BASE_URL = 'http://localhost:3003/api';

export function getList(){
  return dispatch => {
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return request.then(resp => dispatch({
      type: 'BILLING_CYCLES_FETCHED', 
      payload: resp.data
    }))
  }
}

export function create(values){
  return dispatch => {
    return axios.post(`${BASE_URL}/billingCycles`, values)
    .then(resp => dispatch(getList()))
    .then(resp => dispatch({
      type: 'TEMP'
    }))
  }
}