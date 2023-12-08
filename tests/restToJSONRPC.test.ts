import { restToJSONRPC } from '../src'

test('return restToJSONRPC is correctly', () => {
  const result = restToJSONRPC({
    id: 'test123',
    params: {
      test: 'oi',
      test2: 'oi2',
    },
    path: '/test/ping',
  })
  expect(result).toStrictEqual({
    method: 'test_ping',
    jsonrpc: '2.0',
    params: {
      test: 'oi',
      test2: 'oi2',
    },
    id: 'test123',
  })
})
