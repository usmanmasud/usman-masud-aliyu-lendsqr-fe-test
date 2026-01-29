import { render, screen } from '@testing-library/react'
import StatsCard from '@/components/StatsCard'

describe('StatsCard', () => {
  // Positive scenarios
  it('renders with string value', () => {
    render(<StatsCard title="Users" value="2,453" />)
    expect(screen.getByText('Users')).toBeInTheDocument()
    expect(screen.getByText('2,453')).toBeInTheDocument()
  })

  it('renders with number value', () => {
    render(<StatsCard title="Active Users" value={1234} />)
    expect(screen.getByText('Active Users')).toBeInTheDocument()
    expect(screen.getByText('1234')).toBeInTheDocument()
  })

  it('renders with icon', () => {
    const icon = <span data-testid="test-icon">📊</span>
    render(<StatsCard title="Stats" value={100} icon={icon} />)
    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
  })

  // Negative scenarios
  it('renders with zero value', () => {
    render(<StatsCard title="Empty" value={0} />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('renders with empty string value', () => {
    render(<StatsCard title="Empty" value="" />)
    expect(screen.getByText('Empty')).toBeInTheDocument()
  })

  it('renders without icon', () => {
    render(<StatsCard title="No Icon" value={100} />)
    expect(screen.getByText('No Icon')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
  })
})