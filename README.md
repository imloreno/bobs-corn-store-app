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

## 🌟 About

Bob's Corn Store is a full-stack e-commerce platform specializing in premium corn kernels. The application provides a seamless shopping experience with user authentication, product browsing, detailed product information, and a secure checkout process with payment confirmation.

## ✨ Features

- **User Authentication**

  - User registration with form validation
  - Secure login/logout functionality
  - Session management

- **Product Catalog**

  - Browse premium corn products
  - Detailed product pages with descriptions and features
  - Product statistics (customers, followers, satisfaction rate)
  - High-quality product images

- **Shopping & Checkout**

  - Product selection with pricing
  - Secure checkout flow
  - Order confirmation and details
  - Payment processing with debit card
  - Order success/failure feedback

- **Modern UI/UX**
  - Responsive design
  - Clean and intuitive interface
  - Real-time form validation
  - Loading states and error handling

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

5. **Run Prisma migrations**

   ```bash
   pnpm prisma migrate dev
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
│   ├── (auth)/              # Authentication pages
│   │   ├── login/           # Login page and constants
│   │   └── register/        # Registration page and constants
│   ├── api/                 # API routes
│   │   ├── auth/            # Authentication endpoints
│   │   └── health/          # Health check endpoint
│   ├── products/            # Product pages
│   │   └── [id]/            # Dynamic product routes
│   │       ├── checkout/    # Checkout flow
│   │       └── page.tsx     # Product detail page
│   ├── service/             # Business logic services
│   ├── ui/
│   │   ├── components/      # Reusable UI components
│   │   ├── features/        # Feature components
│   │   ├── lib/             # Utility functions
│   │   ├── styles/          # Global styles
│   │   └── types/           # TypeScript type definitions
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── lib/
│   └── api.ts               # API client configuration
├── prisma/
│   ├── schema.prisma        # Database schema
│   └── generated/           # Generated Prisma Client
├── server/
│   ├── config/              # Server configuration
│   ├── services/            # Server-side services
│   └── types/               # Server type definitions
├── public/                  # Static assets
│   ├── products/            # Product images
│   └── temp/                # Design mockups
├── middleware.ts            # Next.js middleware
├── docker-compose.yaml      # Docker configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
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

# Database
pnpm prisma generate  # Generate Prisma Client
pnpm prisma db push   # Push schema changes to database
```

## 🎨 UI/UX Design

### WIP.
