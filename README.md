# Nikki's Portfolio

A responsive portfolio website showcasing my experience, projects, and skills as a software engineer transitioning from test engineering to full-stack development.

## 🌐 Live Site

**[View Live Portfolio](https://nikki-vadi-portfolio.vercel.app)** 

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation**: Smooth scrolling between sections with a fixed navigation bar
- **Experience Details**: Interactive experience cards with detailed views
- **Browser History Support**: Full browser back/forward button support with URL routing
- **Modern UI**: Clean, minimalist design with beautiful animations and transitions
- **Performance Optimized**: Fast loading times and smooth user experience

## Tech Stack

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: Ready for deployment on Vercel, Netlify, or any static hosting service

## Project Structure

```
src/
├── App.js                    # Main application component
├── components/               # Reusable React components
│   ├── About.js
│   ├── Contact.js
│   ├── DecorativeBackground.js
│   ├── Experience.js
│   ├── ExperienceDetail.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── Navbar.js
│   ├── Projects.js
│   └── Skills.js
└── data/                     # Data files
    ├── experiences.js
    ├── projects.js
    └── skills.js
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Sections

- **Hero**: Introduction with social media links
- **About**: Personal introduction with profile photo
- **Experience**: Professional experience at Samsung Semiconductor with detailed views
- **Projects**: Showcase of projects including HueMuse (AI color palette generator)
- **Skills**: Technical skills organized by category
- **Contact**: Contact information and social links

## Customization

### Updating Content

- **Experiences**: Edit `src/data/experiences.js`
- **Projects**: Edit `src/data/projects.js`
- **Skills**: Edit `src/data/skills.js`
- **About Section**: Edit `src/components/About.js`
- **Profile Photo**: Replace `public/profile.jpg` with your photo

### Styling

The project uses Tailwind CSS. Customize colors, spacing, and other design elements in `tailwind.config.js` or directly in component className props.

## Contact

- **Email**: vadinikitha@gmail.com
- **LinkedIn**: [linkedin.com/in/nikki-vadi](https://www.linkedin.com/in/nikki-vadi)
- **GitHub**: [github.com/n-vadi](https://github.com/n-vadi)

---

Built by Nikki 
