"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.restToJSONRPC = void 0;
var restToJSONRPC = function (body) {
    var method = body.path.replace(/\//g, '_').substring(1);
    var result = {
        method: method,
        jsonrpc: '2.0',
        params: body.params,
        id: body.id,
    };
    return result;
};
exports.restToJSONRPC = restToJSONRPC;
var sum = function (a, b) { return a + b; };
exports.sum = sum;
