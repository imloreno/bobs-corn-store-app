# Bob's Corn Store 🌽

A modern e-commerce web application for selling premium corn products. Built with Next.js 15, React 19, and TypeScript, featuring a beautiful UI, user authentication, product catalog, and secure checkout flow.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Database Setup](#database-setup)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [UI Components & Design System](#ui-components--design-system)
- [Authentication & Security](#authentication--security)
- [API Endpoints](#api-endpoints)
- [Architecture Overview](#architecture-overview)
- [Development Tools](#development-tools)
- [Code Organization](#code-organization)
- [Deployment](#deployment)
- [UI/UX Features](#uiux-features)
- [Product Catalog](#product-catalog)

## 🌟 About

Bob's Corn Store is a full-stack e-commerce platform specializing in premium corn kernels. The application provides a seamless shopping experience with user authentication, product browsing, detailed product information, and a secure checkout process with payment confirmation.

![Screenshot](https://raw.githubusercontent.com/imloreno/bobs-corn-store-app/refs/heads/main/snap-screen.png)

### You can access to the design in PDF format [here](https://github.com/imloreno/bobs-corn-store-app/blob/main/figma-design.pdf)

## ✨ Features

- **User Authentication**

  - User registration with email and password
  - Secure login/logout functionality
  - Session-based authentication with HTTP-only cookies
  - Protected routes using Next.js middleware
  - Form validation with Zod schemas
  - Real-time input validation feedback

- **Product Catalog**

  - Browse premium corn products
  - Dynamic product pages with detailed descriptions
  - Product statistics (customers, followers, satisfaction rate)
  - High-quality product images
  - Three product offerings: Premium, Just, and Whole Kernels
  - Server-side product data fetching

- **Shopping & Checkout**

  - Product selection with pricing
  - Secure checkout flow
  - Order details summary
  - Debit card payment interface
  - Order confirmation and creation
  - Success/failure feedback with error handling
  - Order persistence to database

- **Modern UI/UX**

  - Fully responsive design (mobile, tablet, desktop)
  - Clean and intuitive interface
  - Real-time form validation
  - Loading states and skeleton loaders
  - Error handling with user-friendly messages
  - Smooth animations and transitions
  - Accessibility features (ARIA labels, keyboard navigation)
  - Modern component library with Shadcn UI

- **Technical Features**

  - Server-Side Rendering (SSR) with Next.js
  - API rate limiting for security
  - Optimized database queries with Prisma
  - Type-safe development with TypeScript
  - State management with TanStack Query and Zustand
  - Docker containerization for PostgreSQL
  - Environment-based configuration
  - Health check endpoint for monitoring

## 🛠 Technology Stack

### Frontend

- **Next.js 15.5.5** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Hook Form 7.65** - Form management
- **Zod 4.1** - Schema validation
- **TanStack Query 5.90** - Data fetching and caching
- **Zustand 5.0** - State management
- **Axios 1.12** - HTTP client

### Backend

- **Next.js API Routes** - Serverless API endpoints
- **Prisma 6.17** - ORM for database management
- **PostgreSQL 16** - Database

### UI Components

- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Icons** - Additional icons
- **Class Variance Authority** - Component variants

### Development Tools

- **Turbopack** - Fast bundler for Next.js
- **Docker Compose** - Container orchestration

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher)
- **pnpm** (v8 or higher) - `npm install -g pnpm`
- **Docker** and **Docker Compose** (for database)
- **PostgreSQL 16** (if not using Docker)

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd bobs-corn-store-frontend
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5555/bobscorn?schema=public"

   # PostgreSQL (for Docker)
   POSTGRES_USER=user
   POSTGRES_PASSWORD=password
   POSTGRES_DB=bobscorn
   ```

4. **Start the database**

   ```bash
   docker-compose up -d
   ```

5. **Run Prisma Push**

   ```bash
   pnpm prisma db push
   ```

6. **Generate Prisma Client**

   ```bash
   pnpm prisma generate
   ```

## 🏃 Running the Application

### Development Mode

Start the development server with Turbopack:

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

1. Build the application:

   ```bash
   pnpm build
   ```

2. Start the production server:
   ```bash
   pnpm start
   ```

## 📁 Project Structure

```
bobs-corn-store-frontend/
├── app/
│   ├── (auth)/                    # Authentication pages
│   │   ├── login/                 # Login page with form constants
│   │   │   ├── constants/         # Login form configuration
│   │   │   ├── login.module.css   # Login page styles
│   │   │   └── page.tsx           # Login page component
│   │   └── register/              # Registration page with form constants
│   │       ├── constants/         # Register form configuration
│   │       ├── register.module.css # Register page styles
│   │       └── page.tsx           # Registration page component
│   ├── api/                       # API routes (Next.js Route Handlers)
│   │   ├── auth/                  # Authentication endpoints
│   │   │   ├── login/             # POST - User login
│   │   │   ├── logout/            # POST - User logout
│   │   │   └── register/          # POST - User registration
│   │   ├── health/                # GET - Health check endpoint
│   │   └── order/                 # POST - Order creation
│   ├── products/                  # Product pages
│   │   └── [id]/                  # Dynamic product routes
│   │       ├── checkout/          # Checkout flow
│   │       │   ├── components/    # Checkout-specific components
│   │       │   │   ├── ConfirmButtonSection.tsx # Order confirmation
│   │       │   │   └── OrderDetails.tsx # Order details display
│   │       │   ├── hooks/         # Checkout hooks
│   │       │   └── page.tsx       # Checkout page
│   │       └── page.tsx           # Product detail page
│   ├── service/                   # Business logic services
│   │   └── products.ts            # Product service functions
│   ├── ui/
│   │   ├── components/            # Reusable UI components
│   │   │   ├── pixelPerfect/      # Development tools
│   │   │   ├── Product/           # Product card component
│   │   │   ├── ui/                # Shadcn UI components
│   │   │   │   ├── button.tsx     # Button component
│   │   │   │   ├── form.tsx       # Form component
│   │   │   │   ├── input.tsx      # Input component
│   │   │   │   ├── input-group.tsx # Input group component
│   │   │   │   ├── label.tsx      # Label component
│   │   │   │   └── textarea.tsx   # Textarea component
│   │   │   ├── DebitCard.tsx      # Debit card component
│   │   │   ├── Header.tsx         # Header component
│   │   │   ├── Icon.tsx           # Icon wrapper component
│   │   │   ├── Menu.tsx           # Menu component
│   │   │   ├── Stats.tsx          # Statistics component
│   │   │   └── Text.tsx           # Text component
│   │   ├── features/              # Feature components
│   │   │   ├── LogoutButton.tsx   # Logout functionality
│   │   │   └── Products.tsx       # Products listing
│   │   ├── lib/                   # Utility functions
│   │   │   └── utils.ts           # Helper utilities
│   │   ├── styles/                # Global styles
│   │   │   └── globals.css        # Global CSS
│   │   └── types/                 # TypeScript type definitions
│   │       ├── product.d.ts       # Product types
│   │       └── text.d.ts          # Text component types
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Home page
├── lib/
│   ├── api.ts                     # API client configuration (Axios)
│   ├── cookies/
│   │   └── client.ts              # Client-side cookie utilities
│   ├── hooks/
│   │   └── useCreateOrder.ts      # Order creation hook (TanStack Query)
│   └── providers/
│       └── QueryProvider.tsx      # TanStack Query provider
├── prisma/
│   ├── schema.prisma              # Database schema
│   └── generated/                 # Generated Prisma Client
│       └── prisma-client/         # Prisma client files
├── server/
│   ├── config/
│   │   └── db.ts                  # Database configuration
│   ├── services/                  # Server-side services
│   │   ├── orderService.ts        # Order management
│   │   ├── rateLimitService.ts    # Rate limiting
│   │   ├── sessionService.ts      # Session management
│   │   └── user.ts                # User management
│   ├── types/                     # Server type definitions
│   │   ├── dto/                   # Data Transfer Objects
│   │   │   ├── api.d.ts           # API types
│   │   │   ├── login.d.ts         # Login types
│   │   │   └── order.d.ts         # Order types
│   │   └── user.d.ts              # User types
│   └── utils/                     # Server utilities
│       ├── cookies.ts             # Server cookie utilities
│       └── errors.ts              # Error handling utilities
├── public/                        # Static assets
│   ├── products/                  # Product images
│   │   ├── just-kernels.png
│   │   ├── premium-kernels.png
│   │   └── whole-kernels.png
│   ├── corns.png                  # Logo/branding
│   └── favicon.ico                # Site favicon
├── components.json                # Shadcn UI configuration
├── dev.env                        # Development environment template
├── docker-compose.yaml            # Docker configuration
├── middleware.ts                  # Next.js middleware (auth protection)
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies and scripts
├── pnpm-workspace.yaml            # PNPM workspace configuration
├── postcss.config.mjs             # PostCSS configuration
└── tsconfig.json                  # TypeScript configuration
```

## 🗄️ Database Setup

### Using Docker (Recommended)

The project includes a `docker-compose.yaml` file for easy database setup:

```bash
docker-compose up -d
```

This will start a PostgreSQL 16 container on port `5555`.

### Database Schema

The application uses Prisma with the following models:

- **User** - User accounts with authentication
- **Product** - Corn products with details and pricing
- **ProductOrder** - Order records linking users and products

![Screenshot](https://raw.githubusercontent.com/imloreno/bobs-corn-store-app/refs/heads/main/database_schema.png)

To view the database schema:

```bash
pnpm prisma studio
```

## 🔐 Environment Variables

Create a `.env` file with the following variables:

```env
# Database Connection
DATABASE_URL="postgresql://user:password@localhost:5555/bobscorn?schema=public"

# PostgreSQL (Docker)
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=bobscorn

# Application (optional)
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 📜 Available Scripts

```bash
# Development
pnpm dev              # Start development server with Turbopack

# Build
pnpm build            # Create production build with Turbopack

# Production
pnpm start            # Start production server

# Database Management
pnpm prisma generate  # Generate Prisma Client
pnpm prisma db push   # Push schema changes to database
pnpm prisma studio    # Open Prisma Studio (database GUI)

# Seed Database (run after db push)
docker exec -i bobscorn_store_db psql -U user -d bobscorn < prisma/seed.sql

# Docker
docker-compose up -d  # Start PostgreSQL database
docker-compose down   # Stop PostgreSQL database
docker-compose logs   # View database logs
```

## 🎨 UI Components & Design System

This project uses **Shadcn UI** with Radix UI primitives for accessible, customizable components.

### Configuration

The Shadcn UI setup is configured in `components.json`:

- **Style**: New York
- **Base Color**: Neutral
- **CSS Variables**: Enabled
- **Icon Library**: Lucide React
- **Global CSS**: `app/ui/styles/globals.css`

### Available Components

- **Button** - Multiple variants (default, destructive, outline, ghost, link)
- **Form** - Form wrapper with React Hook Form integration
- **Input** - Text input with validation states
- **Input Group** - Grouped input fields
- **Label** - Form labels
- **Textarea** - Multi-line text input

### Custom Components

- **DebitCard** - Payment card display component
- **Header** - Navigation header with user menu
- **Icon** - Icon wrapper component
- **Menu** - Navigation menu
- **Product** - Product card with image and details
- **Stats** - Statistics display (customers, followers, satisfaction)
- **Text** - Typography component with variants

## 🔒 Authentication & Security

- **Session-based authentication** with HTTP-only cookies
- **Protected routes** using Next.js middleware
- **Rate limiting** on API endpoints
- **Password hashing** and secure storage
- **Form validation** with Zod schemas
- **CSRF protection** through same-origin policies

## 🛣️ API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Products & Orders

- `POST /api/order` - Create new order
- `GET /api/health` - Health check endpoint

### Data Flow

1. Client makes requests using Axios
2. TanStack Query manages caching and state
3. Next.js API routes handle business logic
4. Prisma ORM interacts with PostgreSQL
5. Response sent back to client

## 🏗️ Architecture Overview

### Frontend Architecture

- **Next.js App Router** - File-based routing with React Server Components
- **Client Components** - Interactive UI with React hooks
- **Server Components** - Data fetching and SEO optimization
- **API Layer** - Axios client with interceptors
- **State Management** - TanStack Query for server state, Zustand for client state
- **Form Handling** - React Hook Form with Zod validation

### Backend Architecture

- **API Routes** - Serverless functions in Next.js
- **Services Layer** - Business logic separation
  - User Service - User management
  - Order Service - Order processing
  - Session Service - Session management
  - Rate Limit Service - API throttling
- **Database Layer** - Prisma ORM with PostgreSQL
- **Middleware** - Authentication and route protection

## 🧪 Development Tools

- **Turbopack** - Next-generation bundler (faster than Webpack)
- **TypeScript** - Full type safety across the stack
- **Prisma Studio** - Visual database browser
- **Docker Compose** - Containerized PostgreSQL
- **Hot Module Replacement** - Instant updates during development
- **Pixel Perfect Tool** - UI alignment helper (dev mode)

## 📝 Code Organization

### Path Aliases

TypeScript path aliases for cleaner imports:

```typescript
@/app/*           # App directory
@/lib/*           # Library utilities
@/server/*        # Server-side code
@/ui/*            # UI components and styles
@/prisma/*        # Prisma client
```

### Component Structure

Components follow a consistent structure:

```
ComponentName/
├── index.tsx              # Component logic
├── component.module.css   # Component styles
└── constants/             # Component constants
```

## 🚀 Deployment

### Environment Setup

Ensure all environment variables are set for production:

```env
DATABASE_URL="your-production-database-url"
NEXT_PUBLIC_API_URL="your-production-domain"
```

### Build Process

```bash
# Install dependencies
pnpm install

# Generate Prisma Client
pnpm prisma generate

# Build the application
pnpm build

# Start production server
pnpm start
```

### Production Considerations

- Set `NODE_ENV=production`
- Use a managed PostgreSQL instance (e.g., Supabase, Railway, Neon)
- Configure proper CORS settings
- Enable HTTPS/SSL
- Set up proper logging and monitoring
- Configure rate limiting for API routes

## 🎨 UI/UX Features

- **Responsive Design** - Mobile-first approach
- **Modern Aesthetics** - Clean, professional interface
- **Smooth Animations** - CSS transitions and animations
- **Loading States** - Skeleton loaders and spinners
- **Error Handling** - User-friendly error messages
- **Form Validation** - Real-time feedback
- **Toast Notifications** - Success/error notifications
- **Accessibility** - ARIA labels and keyboard navigation

## 📚 Product Catalog

The store offers three premium corn kernel products:

1. **Premium Kernels** - Highest quality corn
2. **Just Kernels** - Standard quality corn
3. **Whole Kernels** - Complete corn kernels

Each product includes:

- Detailed description
- Customer statistics
- Follower count
- Satisfaction rate
- High-quality product images
- Secure checkout process
