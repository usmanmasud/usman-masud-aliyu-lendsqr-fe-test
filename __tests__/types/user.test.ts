import { User } from '@/types/user'

describe('User Type Validation', () => {
  const validUser: User = {
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

  // Positive scenarios
  it('validates user with all required fields', () => {
    expect(validUser.id).toBeDefined()
    expect(validUser.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    expect(['Active', 'Inactive', 'Pending', 'Blacklisted']).toContain(validUser.status)
    expect(['Male', 'Female']).toContain(validUser.gender)
  })

  it('validates guarantor structure', () => {
    expect(validUser.guarantor).toBeDefined()
    expect(validUser.guarantor.fullName).toBeDefined()
    expect(validUser.guarantor.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  })

  // Negative scenarios
  it('handles invalid status values', () => {
    const invalidStatuses = ['active', 'ACTIVE', 'disabled', '']
    invalidStatuses.forEach(status => {
      expect(['Active', 'Inactive', 'Pending', 'Blacklisted']).not.toContain(status)
    })
  })

  it('handles invalid gender values', () => {
    const invalidGenders = ['male', 'MALE', 'Other', '']
    invalidGenders.forEach(gender => {
      expect(['Male', 'Female']).not.toContain(gender)
    })
  })

  it('validates account balance is number', () => {
    expect(typeof validUser.accountBalance).toBe('number')
    expect(validUser.accountBalance).toBeGreaterThanOrEqual(0)
  })

  it('validates tier is valid number', () => {
    expect(typeof validUser.tier).toBe('number')
    expect(validUser.tier).toBeGreaterThan(0)
  })
})