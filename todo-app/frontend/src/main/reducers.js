import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todo: () => ({
    description: 'ler livro',
    list: [{
      _id: 1,
      description: 'Pagar fatura do cartão',
      done: true
    }, {
      _id: 2,
      description: 'Reunião com a equipeás 10h00',
      done: false      
    }, {
      _id: 3,
      description: 'Consulta médica na terça depois do almoço',
      done: false      
    }]
  })
})

export default rootReducer;