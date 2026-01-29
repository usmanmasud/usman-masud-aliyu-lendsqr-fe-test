import { User } from '@/types/user'

export const mockUser: User = {
  id: '1',
  organization: 'Lendsqr',
  username: 'testuser',
  email: 'test@example.com',
  phoneNumber: '08012345678',
  dateJoined: '2023-01-01T00:00:00.000Z',
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
  sectorOfEmployment: 'Technology',
  durationOfEmployment: '2 years',
  officeEmail: 'test@company.com',
  monthlyIncome: '₦200,000',
  loanRepayment: '₦40,000',
  twitter: '@testuser',
  facebook: 'testuser',
  instagram: '@testuser',
  guarantor: {
    fullName: 'John Guarantor',
    phoneNumber: '08087654321',
    email: 'guarantor@example.com',
    relationship: 'Friend'
  },
  accountBalance: 200000,
  accountNumber: '9876543210',
  bankName: 'GTBank',
  tier: 1
}

export const mockUsers: User[] = [
  mockUser,
  {
    ...mockUser,
    id: '2',
    username: 'inactiveuser',
    status: 'Inactive',
    hasLoan: true,
    hasSavings: false
  },
  {
    ...mockUser,
    id: '3',
    username: 'pendinguser',
    status: 'Pending',
    accountBalance: 0
  }
]

export const createMockUser = (overrides: Partial<User> = {}): User => ({
  ...mockUser,
  ...overrides
})