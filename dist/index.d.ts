type RestToJSONRPCInput = {
    path: string;
    id: string;
    params: any;
};
type JSONRPCReturn = {
    method: any;
    jsonrpc: string;
    params: any;
    id: string;
};
declare function restToJSONRPC(body: RestToJSONRPCInput): JSONRPCReturn;

export { type JSONRPCReturn, type RestToJSONRPCInput, restToJSONRPC };
