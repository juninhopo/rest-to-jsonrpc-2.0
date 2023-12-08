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
  const method = body.path.replace(/\//g, '_').substring(1)

  const result = {
    method,
    jsonrpc: '2.0',
    params: body.params,
    id: body.id,
  }

  return result
}
