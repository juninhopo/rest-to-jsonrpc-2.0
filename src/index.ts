import { TypedJSONRPCClient } from 'json-rpc-2.0'

export type RestToJSONRPCInput = {
  path: string
  id: string
  params: any
}

export type JSONRPCReturn = {
  method: any
  jsonrpc: string
  params: any
  id: string
}

export function restToJSONRPC(body: RestToJSONRPCInput): JSONRPCReturn {
  const result = {
    method: body.path,
    jsonrpc: '2.0',
    params: body.params,
    id: body.id,
  }

  return result
}
