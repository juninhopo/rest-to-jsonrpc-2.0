"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restToJSONRPC = exports.sum = exports.getRepository = exports.getChannel = void 0;
var getChannel = function () { return 'https://youtube.com/juninhopo'; };
exports.getChannel = getChannel;
var getRepository = function () { return 'https://github.com/juninhopo'; };
exports.getRepository = getRepository;
var sum = function (a, b) { return a + b; };
exports.sum = sum;
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
