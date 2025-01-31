🛠️ LetsConnect

LetsConnect is a modern web application built with Next.js and Prisma, designed for seamless interactions and connectivity. It leverages Clerk for authentication, Radix UI for a clean UI, and UploadThing for efficient file uploads. Styled with Tailwind CSS, this app ensures a smooth and responsive user experience.

🚀 Features

✅ Next.js 14 - Fast and optimized React framework for modern web applications.
✅ Clerk Authentication - Secure user authentication and session management.
✅ Prisma ORM - Simplified database interaction with a powerful TypeScript ORM.
✅ Radix UI Components - Accessible, high-quality UI components for a seamless UX.
✅ UploadThing - Hassle-free file uploads and management.
✅ Tailwind CSS - Utility-first styling for rapid UI development.
✅ Dark Mode Support - Seamless light/dark theme switching using next-themes.
✅ Optimized Performance - Leverages React 18 and Next.js optimizations.

📦 Tech Stack

Framework: Next.js 14

Authentication: Clerk

Database ORM: Prisma

UI Components: Radix UI

Styling: Tailwind CSS

File Uploads: UploadThing

Icons: Lucide React

Date Handling: date-fns

Toasts/Notifications: React Hot Toast

📥 Installation

Clone the repository and install dependencies:

# Clone the repo
git clone 
cd letsconnect

# Install dependencies
npm install  # or yarn install

🏗️ Running the Project

Development Mode

npm run dev  # Runs the app in development mode at http://localhost:3000

Production Build

npm run build  # Builds the app for production
npm run start  # Starts the production server

🛠️ Configuration

Database Setup: Configure your .env file with the Prisma database URL:

DATABASE_URL="your-database-url"

Run Prisma migrations:

npx prisma migrate dev --name init

Clerk Authentication: Set up Clerk API keys in .env:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-key
CLERK_SECRET_KEY=your-clerk-secret-key

File Uploads (UploadThing): Add UploadThing secrets to .env:

UPLOADTHING_SECRET=your-uploadthing-secret


📸 Screenshots

📷 Add screenshots or GIFs showcasing your app’s UI and features.

🛠️ Deployment

🔥 Deploy on Vercel (Recommended)

npx vercel deploy

🌐 Deploy on Surge (Static Export Only)

npm run build
npm run export
surge out/

🧑‍💻 Contributing

We welcome contributions! Feel free to fork the repo, create a feature branch, and submit a pull request. 🚀

📜 License

This project is licensed under the MIT License.

💙 Made with ❤️ by Your Name

