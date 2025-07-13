# Asitha Kanchana - Portfolio Website

A modern, responsive portfolio website built with React, Three.js, and Tailwind CSS. Features interactive 3D elements, smooth animations, and a fully functional contact form.

## 🌐 Live Demo

Visit the live website: [www.asitha.site](https://www.asitha.site)

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **3D Interactive Elements** - Built with Three.js and React Three Fiber
- **Smooth Animations** - Powered by Framer Motion
- **Contact Form** - Functional email form using EmailJS
- **Modern UI/UX** - Clean design with Tailwind CSS
- **Fast Loading** - Optimized with Vite build tool

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library

### Services
- **EmailJS** - Contact form functionality
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Hosting platform

## 📁 Project Structure

```
Portfolio-Website/
├── public/
│   ├── assets/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── company/
│   │   ├── projects/
│   │   ├── tech/
│   │   └── tech-stack/
│   ├── components/
│   ├── constants/
│   ├── hoc/
│   ├── utils/
│   └── App.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AsithaKanchana1/Portfolio-Website.git
   cd Portfolio-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file (for local development)
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to `http://localhost:5173`

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your environment variables

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

This project uses GitHub Actions for automatic deployment to GitHub Pages with a custom domain.

### GitHub Secrets Required:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

The deployment workflow automatically triggers on pushes to the main branch.

## 📱 Sections

- **Hero** - Introduction with animated elements
- **About** - Personal background and skills
- **Experience** - Work history and education
- **Tech Stack** - Technologies and tools
- **Projects** - Featured projects with live demos
- **Contact** - Functional contact form

## 🎨 Customization

To customize this portfolio for your own use:

1. Replace personal information in `src/constants/index.js`
2. Update images in `src/assets/`
3. Modify color scheme in `tailwind.config.js`
4. Update meta tags in `index.html`
5. Configure your own EmailJS service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Template inspiration: [Lohit Kolluri](https://github.com/lohitkolluri/Portfolio-Website)
- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- 3D Models: [Three.js Examples](https://threejs.org/examples/)

## 📞 Contact

- **Website**: [www.asitha.site](https://www.asitha.site)
- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- **GitHub**: [AsithaKanchana1](https://github.com/AsithaKanchana1)

---

<div align="center">
  Made with ❤️ by Asitha Kanchana
