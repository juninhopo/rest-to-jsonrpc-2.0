"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  restToJSONRPC: () => restToJSONRPC
});
module.exports = __toCommonJS(src_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  restToJSONRPC
});
//# sourceMappingURL=index.js.map