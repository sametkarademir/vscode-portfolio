export const GITIGNORE_CONTENT = `# Things I ignore
node_modules/
.env
bugs/
imposter-syndrome/
monday-mornings/
`;

export const ENV_CONTENT = `# 🔒 Environment Variables — bu dosya gizli olmalıydı...

# Personal
NAME=Samet Karademir
ROLE=Full-stack Software Engineer
LOCATION=Turkey
AVAILABLE_FOR_HIRE=true

# Config
NODE_ENV=passionate
PREFERRED_THEME=dark-always-dark
TABS_VS_SPACES=tabs
EDITOR=vscode-obviously

# Secrets
COFFEE_PER_DAY=∞
MOTIVATION_SOURCE=caffeine+deadlines
BUGS_CREATED_WHILE_FIXING_BUGS=yes
SECRET_TALENT=debugging-at-3am
STACKOVERFLOW_DEPENDENCY=critical
`;

export const PACKAGE_JSON_CONTENT = `{
  "name": "samet-karademir-portfolio",
  "version": "1.0.4",
  "private": false,
  "description": "Full-stack engineer who transforms complexity into scalable digital reality ⚡",
  "author": {
    "name": "Samet Karademir",
    "email": "sametkarademir244@gmail.com",
    "role": "Senior Full Stack Developer",
    "location": "Istanbul, Türkiye",
    "status": "Available_for_Hire"
  },
  "keywords": [
    "full-stack",
    "dotnet-enthusiast",
    "go-gopher",
    "react-wizard",
    "clean-architecture-advocate",
    "complexity-simplifier"
  ],
  "homepage": "https://sametkarademir.com",
  "repository": {
    "type": "git",
    "url": "https://github.com/sametkarademir"
  },
  "license": "MIT",
  "type": "module",
  "engines": {
    "node": ">=19.2.3",
    "dotnet": ">=9.0",
    "go": ">=1.21",
    "mass-chai": ">=5cups/day",
    "mass-curiosity": "∞"
  },
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx",
    "deploy": "npm run build && echo '🚀 Deployed to production!'",
    "debug": "echo 'Console.WriteLine happened here... again 🔍'",
    "mass-clean-architecture": "echo 'Folders organized. Uncle Bob would be proud 🏛️'",
    "mass-chai-break": "echo 'BRB, mass-chai is calling ☕'",
    "mass-ping-samet": "curl -X GET /api/v1/contact && echo 'Kahve içip projeler hakkında konuşalım!'"
  },
  "dependencies": {
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "react-router-dom": "^6.22.0",
    "lucide-react": "^0.312.0",
    "clsx": "^2.1.0",
    "framer-motion": "^11.0.3",
    "mass-backend-passion": "^8.0.0",
    "mass-frontend-craft": "^18.2.0",
    "mass-problem-solving": "^∞",
    "mass-chai-driven-development": "^5.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.2.3",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.22.0",
    "postcss": "^8.5.1",
    "tailwindcss": "^4.0.11",
    "typescript": "^5.8.2",
    "vite": "^6.0.13",
    "mass-patience-for-legacy-code": "^999.0.0",
    "mass-console-log-remover": "^1.0.0"
  },
  "skills": {
    "backend": ["dotnet-core", "csharp", "golang", "abp-framework", "nodejs"],
    "frontend": ["react", "nextjs", "angular", "typescript", "tailwind"],
    "cloud": ["aws-lambda", "aws-sqs", "docker", "kubernetes", "github-actions"],
    "databases": ["postgresql", "mssql", "couchbase", "redis"],
    "messaging": ["rabbitmq", "azure-service-bus", "websocket"],
    "architecture": ["ddd", "cqrs", "clean-architecture", "microservices", "event-driven"]
  },
  "experience": {
    "current": "SHFT — Senior Full Stack Developer",
    "since": "2024-03",
    "mass-chai_consumed": "mass-calculating...",
    "bugs_fixed": 9999,
    "mass-chai_breaks": "well deserved"
  },
  "contributors": [
    "Mass Chai ☕ — Primary fuel source",
    "Stack Overflow 🙏 — mass-mass-knowledge base",
    "Lo-fi beats 🎵 — Coding companion",
    "Rubber Duck 🦆 — Senior debugger"
  ],
  "socials": {
    "github": "https://github.com/sametkarademir",
    "linkedin": "https://www.linkedin.com/in/samet-karademir-8988b6198/",
    "medium": "https://medium.com/@sametkarademir244",
    "email": "mailto:sametkarademir244@gmail.com"
  }
}
`;
