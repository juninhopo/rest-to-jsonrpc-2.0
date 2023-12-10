import * as jsonrpc from './index'

const restToJson = jsonrpc.restToJSONRPC({
  id: 'darlan',
  params: {
    test: 'oi',
    aiai: 'filipe',
  },
  path: '/filipe/teste',
})
console.log(restToJson)
