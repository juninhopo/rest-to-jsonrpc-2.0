export type RestToJSONRPCInput = {
    path: string;
    id: string;
    params: any;
};
export type JSONRPCReturn = {
    method: any;
    jsonrpc: string;
    params: any;
    id: string;
};
export declare const restToJSONRPC: (body: RestToJSONRPCInput) => JSONRPCReturn;
export declare const sum: (a: number, b: number) => number;
