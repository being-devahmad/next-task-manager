# Task Manager Application

This is a feature-rich **Task Manager Application** built with modern web technologies, including **Next.js 15**, **Shadcn UI**, **Auth.js v5**, **Prisma**, and **PostgreSQL**. This application provides a secure and scalable way to manage tasks efficiently.

---

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Environment Variables](#environment-variables)
6. [Database Setup](#database-setup)
7. [Running the Application](#running-the-application)
8. [Folder Structure](#folder-structure)
9. [Contributing](#contributing)
10. [License](#license)

---

## Technologies Used

- **[Next.js 15](https://nextjs.org/)**: Framework for building server-rendered React applications.
- **[Shadcn UI](https://ui.shadcn.dev/)**: Component library with Tailwind CSS integration for a beautiful UI.
- **[Auth.js v5](https://authjs.dev/)**: Authentication library for secure login and session management.
- **[Prisma](https://www.prisma.io/)**: Type-safe ORM for database interactions.
- **[PostgreSQL](https://www.postgresql.org/)**: Robust relational database system.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for custom designs.

---

## Features

- **User Authentication**: Sign up, sign in, and sign out using Google OAuth and credentials (email/password).
- **Task Management**: Create, update, delete, and mark tasks as completed.
- **Dashboard**: A personalized user dashboard to manage tasks.
- **Protected Routes**: Access control using Auth.js to restrict certain routes to authenticated users only.
- **Responsive Design**: Beautiful UI built with Tailwind CSS and Shadcn UI components.

---

## Prerequisites

Make sure you have the following installed:

- **Node.js (v16 or higher)**: [Download here](https://nodejs.org/)
- **PostgreSQL Database**: [Download here](https://www.postgresql.org/download/)
- **Git**: [Download here](https://git-scm.com/downloads)

---

## Installation

Follow these steps to get started with the application:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   npm install

   ```

2. \*\*Set up environment variables

# Database Configuration

DATABASE_URL=postgresql://username:password@localhost:5432/task_manager_db

# Google OAuth Credentials (for Google Authentication)

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# NextAuth Secret (for signing tokens)

NEXTAUTH_SECRET=your-random-generated-secret
Set Up the Database: Run the following Prisma commands to generate the Prisma Client and apply migrations:

bash
Copy
Edit
npx prisma generate
npx prisma migrate dev --name init

