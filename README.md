# Pokemon Center Management System 🏥

A Next.js application for managing Pokemon healing appointments and treatment rooms. The system allows trainers to register their Pokemon for treatment and tracks their healing progress through different treatment rooms.

This is a project for the Web Development course at the National University of Colombia.

## 👥 Members

- Felipe Garzon Melguizo
- José Manuel Castro Balbín
- Juan Esteban Yela Benavides
- Alejandro Aristizábal Pérez
- Juan David Moreno Arias

## 🚀 Features

- User authentication for Pokemon trainers
- Pokemon registration system
- Real-time treatment room management
- Drag and drop interface for Pokemon management
- Automatic health restoration tracking
- Dark/Light theme support

## 💻 Tech Stack

- **Framework:** Next.js 15
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** BetterAuth
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Drag and Drop:** @formkit/drag-and-drop

## Try out the project ‼️

If you don't want to run it in your machine visit the website at https://pokecenter.vercel.app/ to see it online (recommended)

### Testing accounts

to see the enfermera and entrenador pages without creating an account you can use these testing accounts

#### Enfermera

- **Email**: joy69@gmail.com
- **Password**: pokecenter123

#### Entrenador

- **Email**: pokeballs69@gmail.com
- **Password**: pikachu123

## 📋 Requirements to run the project

> [!IMPORTANT]
> before continuing, make sure you have these installed:

- **Node.js** (version 18 or newer) ✅
- **npm/bun/pnpm** (latest version) ✅

## 🚀 Development Setup

> [!TIP]
> Follow these steps to set up the project locally:

**1.** Clone the repository:

```bash
git clone https://github.com/Flying-Spaghetti-Monster69/pokecenter
cd pokecenter
```

**2.** Install dependencies:

```bash
npm install
```

**3.** Set up your environment variables:

```bash
cp .env.example .env
```

**4.** Configure your `.env` file with:

```
# connection to your postgresql database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."
BETTER_AUTH_URL=http://localhost:3000
```

**4.1.** Go to https://www.better-auth.com/docs/installation#set-environment-variables or use `npx @better-auth/cli@latest secret` to generate your better-auth secret key then add it your `.env` file:

```
BETTER_AUTH_SECRET=...
```

<details>
<summary><strong>How to add Google and Github Oauth2 ➕</strong></summary>

**4.2.1.** Make the api keys and Configure the routes for **google** (https://developers.google.com/identity/protocols/oauth2?hl=es-419#basicsteps) and **github** (https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) <br/>
**4.2.2.** Paste the client ID and secret keys inside the `.env` file like this:

```
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
```

</details>

**5.** Run database migrations:

```bash
npx prisma migrate dev
```

**6.** Start the development server:

```bash
npm run dev
```

**7.** Open [http://localhost:3000](http://localhost:3000) in your browser

## 🤖📄 AI Docs

you can see the docs for the whole project and ask questions about the project by clicking the button below (always keep in mind AI can make mistakes):

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Flying-Spaghetti-Monster69/pokecenter)

## 🏗️ Project Structure

```
pokecenter/
├── app/              # Next.js app router pages
├── components/       # Reusable UI components
├── prisma/          # Database schema and migrations
├── public/          # Static assets
└── utils/           # Server actions, Helper functions and constants
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request
