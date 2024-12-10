# Dinul Haque - Full Stack Engineer & DevOps Specialist Portfolio

## 🌐 Live Website
[dinulhaque.com](https://dinulhaque.com)

## 🎯 Overview
A modern, responsive portfolio website showcasing my expertise in full-stack development and DevOps engineering. Built with cutting-edge technologies and featuring interactive UI components powered by Aceternity UI, this portfolio demonstrates both technical proficiency and creative design capabilities.

## ✨ Key Features
- **Interactive Hero Section**: Dynamic profile presentation with animated components and particle effects
- **Project Showcase**: Live demonstrations with detailed tech stack information and direct links
- **Skills Matrix**: Visual representation of technical competencies with modern animations
- **Professional Timeline**: Detailed work history and achievements in DevOps and Software Engineering
- **Responsive Design**: Optimised for all devices with tailored mobile experiences
- **Performance Focused**: Built with modern web performance best practices

## 🛠 Technical Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **UI Libraries**: 
  - Aceternity UI (custom animations and effects)
  - Shadcn UI (accessible components)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Hooks
- **Type Safety**: TypeScript

### Development & Deployment
- **Version Control**: Git
- **Hosting**: Vercel
- **Error Monitoring**: Sentry
- **Package Manager**: npm

## 🚀 Quick Start

### Prerequisites
- Node.js (v18.x or higher)
- npm (v9.x or higher)

### Local Development
```bash
# Clone the repository
git clone git@github.com:dinulhaque89/dinulhaque.com-nextjs-portfolio.git

# Navigate to project directory
cd dinulhaque.com-nextjs-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the site.

## 📁 Project Structure
```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable UI components
├── lib/                 # Utility functions and configurations
└── styles/             # Global styles and Tailwind configurations
```

## 🔧 Performance Features
- Lazy loading of images and components
- Server-side rendering for improved SEO
- Optimized asset delivery
- Responsive image handling
- Mobile-first approach
- Smooth animations and transitions

## 🔧 Technical Implementation
- Modern React patterns and hooks
- TypeScript for type safety
- Responsive design principles
- Component-based architecture
- Custom animations using Framer Motion
- Integration with Aceternity UI for enhanced UX

## 📫 Contact & Social
- **Email**: princ3mo3@gmail.com
- **LinkedIn**: [Dinul Haque - DevOps Engineer](https://www.linkedin.com/in/dinul-haque-devops)
- **GitHub**: [dinulhaque89](https://github.com/dinulhaque89)

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

---
Built with ❤️ using Next.js, Tailwind CSS, and Aceternity UI

## 🚀 Deployment

This portfolio is configured for static deployment on Hostinger using GitHub Actions.

### Deployment Configuration
The project uses GitHub Actions for automated deployments to Hostinger via FTP. The workflow is configured in `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Hostinger
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          NODE_ENV: production
      
      - name: Deploy to Hostinger
        uses: SamKirkland/FTP-Deploy-Action@v4.3.4
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./out/     # Next.js static export directory
          server-dir: /public_html/
          dangerous-clean-slate: true
```

### Manual Deployment
To deploy manually:
1. Build the project locally:
```bash
npm run build
```
2. The static files will be generated in the `out` directory
3. Upload the contents of the `out` directory to your hosting provider

### Environment Variables
Required secrets for GitHub Actions:
- `FTP_SERVER`: Your Hostinger FTP server address
- `FTP_USERNAME`: Your Hostinger FTP username
- `FTP_PASSWORD`: Your Hostinger FTP password