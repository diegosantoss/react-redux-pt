const express = require('express');

module.exports = function(server){
  
  // define url base
  const router = express.Router();
  server.use('/api', router);

  //rotas ciclo de pagamento

  const BillingCycle = require('../api/billingCycle/billingCycleService');
  BillingCycle.register(router, '/billingCycles');

}