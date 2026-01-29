import axios from 'axios'
import { fetchUsers } from '@/services/users.service'
import { User } from '@/types/user'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Users Service', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('fetchUsers', () => {
    // Positive scenarios
    it('fetches users successfully', async () => {
      const mockUsers: User[] = [
        {
          id: '1',
          organization: 'Test Org',
          username: 'testuser',
          email: 'test@example.com',
          phoneNumber: '1234567890',
          dateJoined: '2023-01-01',
          status: 'Active',
          hasLoan: false,
          hasSavings: true,
          fullName: 'Test User',
          bvn: '12345678901',
          gender: 'Male',
          maritalStatus: 'Single',
          children: '0',
          typeOfResidence: 'Apartment',
          levelOfEducation: 'Bachelor',
          employmentStatus: 'Employed',
          sectorOfEmployment: 'Tech',
          durationOfEmployment: '2 years',
          officeEmail: 'test@company.com',
          monthlyIncome: '100000',
          loanRepayment: '0',
          twitter: '@test',
          facebook: 'test',
          instagram: '@test',
          guarantor: {
            fullName: 'Guarantor Name',
            phoneNumber: '0987654321',
            email: 'guarantor@example.com',
            relationship: 'Friend'
          },
          accountBalance: 50000,
          accountNumber: '1234567890',
          bankName: 'Test Bank',
          tier: 1
        }
      ]

      mockedAxios.get.mockResolvedValue({ data: mockUsers })
      const result = await fetchUsers()
      expect(result).toEqual(mockUsers)
      expect(mockedAxios.get).toHaveBeenCalledWith('https://mocki.io/v1/dd530b0e-ab21-4954-be9c-1ded3812e74e')
    })

    it('fetches empty array', async () => {
      mockedAxios.get.mockResolvedValue({ data: [] })
      const result = await fetchUsers()
      expect(result).toEqual([])
    })

    // Negative scenarios
    it('handles network error', async () => {
      mockedAxios.get.mockRejectedValue(new Error('Network Error'))
      await expect(fetchUsers()).rejects.toThrow('Network Error')
    })

    it('handles 404 error', async () => {
      mockedAxios.get.mockRejectedValue({ response: { status: 404 } })
      await expect(fetchUsers()).rejects.toMatchObject({ response: { status: 404 } })
    })

    it('handles 500 server error', async () => {
      mockedAxios.get.mockRejectedValue({ response: { status: 500 } })
      await expect(fetchUsers()).rejects.toMatchObject({ response: { status: 500 } })
    })

    it('handles timeout error', async () => {
      mockedAxios.get.mockRejectedValue({ code: 'ECONNABORTED' })
      await expect(fetchUsers()).rejects.toMatchObject({ code: 'ECONNABORTED' })
    })
  })
})