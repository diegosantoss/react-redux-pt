import axios from 'axios';

const BASE_URL = 'http://localhost:3003/api';

export function getSummary(){
  return dispatch => {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`);
    return request.then(resp => dispatch(
      {type: 'BILLING_SUMMARY_FETCH', payload: resp.data}
      )
    );
  }
}