const INITIAL_VALUE = {
  description: 'ler livros',
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
    done: true      
  }, {
    _id: 4,
    description: 'Refazendo o curso agora pegando no código',
    done: false      
  }]
}

export default (state = INITIAL_VALUE, action) => {
  switch(action.type){
    case 'DESCRIPTION_CHANGED':
      return {...state, description: action.payload}
    default:
      return state
  }
}