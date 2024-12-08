---

# ZetaAI Project

ZetaAI is a chatbot integration solution for social media platforms like Facebook, Instagram, X, and WhatsApp, leveraging the power of Generative AI to manage user interactions. This repository contains the source code for the ZetaAI platform's frontend, developed using React, Vite, and TypeScript.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will help you set up and run the project locally.

### Prerequisites

Ensure that you have the following installed:

- **Node.js** (version 14 or above)
- **npm** (Node package manager)

You can check if Node.js and npm are installed by running the following commands:

```bash
node -v
npm -v
```

If not installed, download and install Node.js from the official website: [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/zetaai.git
cd zetaai
```

2. Install dependencies:

```bash
npm install
```

3. To run the development server:

```bash
npm run dev
```

This will start the app at `http://localhost:3000`.

### Available Scripts

In the project directory, you can run the following commands:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Runs ESLint to check for code quality issues.

## Folder Structure

Here's a basic overview of the folder structure:

```
/src
  /assets              # Static assets like images, icons, etc.
  /components          # Reusable components (e.g., Header, Chatbot, etc.)
  /features            # Feature-specific components and logic (e.g., chatbot)
  /pages               # Page components (e.g., HomePage, ChatbotPage)
  /styles              # Global styles (e.g., CSS, SASS)
  App.tsx              # Root component
  index.tsx            # Entry point of the application
  vite.config.ts       # Vite configuration file
```

## Contributing

We welcome contributions to improve ZetaAI. To get started:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to your fork (`git push origin feature-branch`).
5. Open a Pull Request.

Please ensure that your code follows the project's style and passes the linting rules before submitting a PR.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
