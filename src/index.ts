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

export const getChannel = () => 'https://youtube.com/juninhopo'

export const getRepository = () => 'https://github.com/juninhopo'

export const sum = (a: number, b: number) => a + b

export const restToJSONRPC = (body: RestToJSONRPCInput): JSONRPCReturn => {
  const method = body.path.replace(/\//g, '_').substring(1)

  const result = {
    method,
    jsonrpc: '2.0',
    params: body.params,
    id: body.id,
  }

  return result
}
