// src/index.ts
function restToJSONRPC(body) {
  const method = body.path.replace(/\//g, "_").substring(1);
  const result = {
    method,
    jsonrpc: "2.0",
    params: body.params,
    id: body.id
  };
  return result;
}
export {
  restToJSONRPC
};
//# sourceMappingURL=index.mjs.map