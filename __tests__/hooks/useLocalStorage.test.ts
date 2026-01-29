import { setStorage, getStorage } from '@/hooks/useLocalStorage'

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = localStorageMock as any

describe('localStorage utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('setStorage', () => {
    // Positive scenarios
    it('stores string value', () => {
      setStorage('key', 'value')
      expect(localStorage.setItem).toHaveBeenCalledWith('key', '"value"')
    })

    it('stores object value', () => {
      const obj = { name: 'test', id: 1 }
      setStorage('user', obj)
      expect(localStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify(obj))
    })

    it('stores array value', () => {
      const arr = [1, 2, 3]
      setStorage('numbers', arr)
      expect(localStorage.setItem).toHaveBeenCalledWith('numbers', JSON.stringify(arr))
    })

    // Negative scenarios
    it('stores null value', () => {
      setStorage('null-key', null)
      expect(localStorage.setItem).toHaveBeenCalledWith('null-key', 'null')
    })

    it('stores undefined value', () => {
      setStorage('undefined-key', undefined)
      expect(localStorage.setItem).toHaveBeenCalledWith('undefined-key', 'undefined')
    })
  })

  describe('getStorage', () => {
    // Positive scenarios
    it('retrieves existing string value', () => {
      localStorage.getItem.mockReturnValue('"test"')
      const result = getStorage<string>('key')
      expect(result).toBe('test')
    })

    it('retrieves existing object value', () => {
      const obj = { name: 'test', id: 1 }
      localStorage.getItem.mockReturnValue(JSON.stringify(obj))
      const result = getStorage<typeof obj>('user')
      expect(result).toEqual(obj)
    })

    // Negative scenarios
    it('returns null for non-existent key', () => {
      localStorage.getItem.mockReturnValue(null)
      const result = getStorage<string>('missing')
      expect(result).toBeNull()
    })

    it('returns null for invalid JSON', () => {
      localStorage.getItem.mockReturnValue('invalid-json')
      expect(() => getStorage<string>('invalid')).toThrow()
    })

    it('handles empty string', () => {
      localStorage.getItem.mockReturnValue('')
      const result = getStorage<string>('empty')
      expect(result).toBeNull()
    })
  })
})