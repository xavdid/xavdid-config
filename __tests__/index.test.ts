import { readZapUrl } from '../src/index'

test('reading creds', () => {
  expect(readZapUrl('tv')).toBeTruthy()
})
