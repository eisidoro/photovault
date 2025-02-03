# Project Name

PhotoVault is a web application that allows you to store and manage your photos.

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

```bash
Node.js >= 18.18.0
npm >= 9.8.1
```

## 🛠️ Installation

1. Install dependencies:

```bash
npm install
```

## 🔧 Configuration

Create a `.env.local` file in the root directory and add the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_BASE_API_URL=https://jsonplaceholder.typicode.com

## 💻 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
├── app/               # Next.js app directory
│   ├── api/           # API routes
│   ├── components/    # UI components
│   ├── config/        # Handle environment variables
│   ├── hooks/         # Custom hooks
│   ├── lib/           # Utility functions
│   ├── sections/      # Sections of the app
│   ├── trpc/          # TRPC setup and app routers
│   ├── types/         # TypeScript types
│   └── utils/         # Utility functions
│       └── supabase/  # Supabase utility functions
├── public/            # Static files
└── styles/            # CSS styles
```

## 🚀 Deployment

This project can be deployed using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/your-project-name)

For more deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - The React framework used
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [tRPC](https://trpc.io/) - Handle API requests with fully typesafe.
- [Supabase](https://supabase.com/) - Database and Authentication


## 📧 Contact

Eduardo Isidoro - eisilva1496@gmail.com

Project Link: [https://github.com/eisidoro/photovault](https://github.com/eisidoro/photovault)

## 🙏 Acknowledgments

- 1. **Benchmarking:** 
    1. I’m using with reference Google Photos and iCloud Photos and the dsm-firmenich landing page.
    2. Both are similar in some design elements, like a sidebar and navbar. Sidebar is responsible to navigate across product resources and navbar has user settings (name, logout…) and buttons to add new photos or albums.

2. **Stack of technologies:**
    1. Following the test instructions the product must be made with **React** and **Typescript** basically.
    2. For some features the user must be authenticated, so I decide to use **Supabase** authentication resource and database.
    3. I decide to use **shadcn/ui** to compose the interface. Based on Tailwind CSS and it’s a collection of good component libs.
    4. tRPC was choosed because is more easy to share types between backend-for-frontend and components. Also provide cache and state management (loading state, refetch and more features) integrated with ReactQuery.
