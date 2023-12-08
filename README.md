# rest-to-jsonrpc-2.0

Receive the paths REST.

```json
  {
    path,
    id,
    params
  }
```

Return to JSONRPC.

```js
{
    method: 'test_ping',
    jsonrpc: '2.0',
    params: {
      test: 'oi',
      test2: 'oi2',
    },
    id: 'test123',
  }
```

Your path the route is a method by server side.

Method in server side.

```js
type Methods = {
  test_ping(params: { x: string }): string,
}
```
