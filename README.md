# Lendsqr Frontend Test

A modern user management dashboard built with Next.js 14, TypeScript, and SCSS. This project demonstrates a complete user management system with authentication, data visualization, and responsive design.

## Features

### Authentication

- Login page with email/password fields
- Password visibility toggle
- Local storage-based authentication
- Protected dashboard routes

### User Management Dashboard

- **User Statistics**: Display total users, active users, users with loans, and users with savings
- **User Table**: Paginated table with filtering and sorting capabilities
- **User Actions**: View, blacklist, and activate user accounts
- **User Details**: Comprehensive user profile pages
- **Responsive Design**: Mobile-first approach with sidebar navigation

### Data Management

- External API integration for user data
- Local storage utilities for data persistence
- TypeScript interfaces for type safety
- Mock data support for development

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: SCSS/Sass
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard pages
│   │   ├── users/        # User management pages
│   │   └── layout.tsx    # Dashboard layout
│   ├── login/            # Authentication page
│   └── globals.scss      # Global styles
├── components/            # Reusable UI components
│   ├── Header.tsx        # Navigation header
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── StatsCard.tsx     # Statistics display card
│   ├── TableHeader.tsx   # Filterable table headers
│   └── UserActions.tsx   # User action dropdown
├── hooks/                # Custom React hooks
│   └── useLocalStorage.ts # Local storage utilities
├── services/             # API service layer
│   └── users.service.ts  # User data fetching
├── types/                # TypeScript type definitions
│   └── user.ts          # User interface definitions
├── styles/               # Global SCSS files
│   └── _variables.scss   # SCSS variables
└── __tests__/            # Test files
    ├── components/       # Component tests
    ├── hooks/           # Hook tests
    └── services/        # Service tests
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd usman-masud-aliyu-lendsqr-fe-test
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

### Login

1. Navigate to `/login`
2. Enter any email and password (authentication is mocked)
3. Click "LOG IN" to access the dashboard

### Dashboard

- View user statistics on the main dashboard
- Navigate to "Users" to see the user management table
- Use filters to search and sort users
- Click on any user row to view detailed information
- Use the action menu (⋮) to perform user actions

## Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Build & Deploy

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm start
```

### Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Styling

The project uses SCSS with a modular approach:

- Global styles in `app/globals.scss`
- Component-specific styles co-located with components
- SCSS variables in `styles/_variables.scss`
- Responsive design with mobile-first approach

## API Integration

User data is fetched from: `https://mocki.io/v1/dd530b0e-ab21-4954-be9c-1ded3812e74e`

The API service is abstracted in `services/users.service.ts` for easy modification and testing.

## Configuration

### TypeScript

- Strict mode enabled
- Path aliases configured (`@/*` maps to project root)
- Next.js plugin integration

### Jest

- jsdom test environment
- Module name mapping for path aliases
- Setup file for testing utilities

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is part of a frontend assessment test.

## Links

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [SCSS Documentation](https://sass-lang.com/documentation/)
- [Lucide React Icons](https://lucide.dev/)
