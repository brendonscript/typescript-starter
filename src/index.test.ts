import { getMessage } from './index'

describe('getMessage()', () => {
  it('should return the correct message when called', () => {
    expect(getMessage()).toBe('Hello World')
  })

  it('should be true', () => {
    expect(true).toBe(true)
  })
})
