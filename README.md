# Pokemon Center Management System 🏥

A Next.js application for managing Pokemon healing appointments and treatment rooms. The system allows trainers to register their Pokemon for treatment and tracks their healing progress through different treatment rooms.

This is a project for the Web Development course at the National University of Colombia.

## Features

- User authentication for Pokemon trainers
- Pokemon registration system
- Real-time treatment room management
- Drag and drop interface for Pokemon management
- Automatic health restoration tracking
- Dark/Light theme support

## Tech Stack

- **Framework:** Next.js 15
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** BetterAuth
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Drag and Drop:** @formkit/drag-and-drop

## Local Development Setup

1. Clone the repository:

```bash
git clone https://github.com/Flying-Spaghetti-Monster69/pokecenter
cd pokecenter
```

2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables:

```bash
cp .env.example .env
```

4. Configure your `.env` file with:

```
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
BETTER_AUTH_SECRET=...
BETTER_AUTH_URL=http://localhost:3000
```

5. Run database migrations:

```bash
npx prisma migrate dev
```

6. Start the development server:

```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
pokecenter/
├── app/              # Next.js app router pages
├── components/       # Reusable UI components
├── prisma/          # Database schema and migrations
├── public/          # Static assets
└── utils/           # Helper functions and constants
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request
