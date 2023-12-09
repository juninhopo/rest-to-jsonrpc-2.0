"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
test('return restToJSONRPC is correctly', () => {
    const result = (0, src_1.restToJSONRPC)({
        id: 'test123',
        params: {
            test: 'oi',
            test2: 'oi2',
        },
        path: '/test/ping',
    });
    expect(result).toStrictEqual({
        method: 'test_ping',
        jsonrpc: '2.0',
        params: {
            test: 'oi',
            test2: 'oi2',
        },
        id: 'test123',
    });
});
