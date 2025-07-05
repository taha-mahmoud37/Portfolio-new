# Personal Portfolio Website

A modern, responsive personal portfolio website built with Angular 17, featuring multilingual support, clean design, and showcase of projects and skills.

## 🌟 Features

- **Multilingual Support**: English and Arabic language support using ngx-translate
- **Responsive Design**: Built with Bootstrap 5 and Tailwind CSS for mobile-first design
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Project Showcase**: Dedicated section to display portfolio projects
- **Contact Form**: Interactive contact section for potential clients/employers
- **Performance Optimized**: Lazy loading for better performance
- **Accessibility**: Built with accessibility best practices

## 🛠️ Technologies Used

- **Frontend Framework**: Angular 17
- **Styling**: Bootstrap 5, Tailwind CSS, SCSS
- **Internationalization**: ngx-translate
- **Icons**: Font Awesome
- **Build Tool**: Angular CLI
- **Testing**: Jasmine & Karma

## 📁 Project Structure

```
src/
├── app/
│   ├── @pipes/                 # Custom pipes
│   ├── about/                  # About page component
│   ├── contact/                # Contact page component
│   ├── footer/                 # Footer component
│   ├── home/                   # Home page component
│   ├── modules/                # Feature modules
│   │   └── app-translate/      # Translation module
│   ├── navbar/                 # Navigation component
│   ├── not-found/              # 404 page component
│   ├── project/                # Individual project component
│   ├── projects/               # Projects listing component
│   ├── services/               # Application services
│   ├── shared/                 # Shared components/modules
│   └── sidebar/                # Sidebar component
├── assets/
│   ├── i18n/                   # Translation files
│   │   ├── en.json            # English translations
│   │   └── ar.json            # Arabic translations
│   ├── images/                 # Project images and assets
│   └── scss/                   # Global styles and configurations
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200` to view the application.

## 📝 Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the project for production
- `npm run watch` - Build the project and watch for changes
- `npm test` - Run unit tests

## 🌐 Pages & Features

### Home Page

- Personal introduction with avatar
- Professional title and description
- Call-to-action button

### About Page

- Detailed personal information
- Skills and expertise
- Professional background

### Projects Page

- Grid layout showcasing portfolio projects
- Project cards with images and descriptions
- Links to live demos and GitHub repositories

### Contact Page

- Contact form with validation
- Contact information display
- Social media links
- Response time information

## 🎨 Design Features

- **Responsive Grid System**: Bootstrap-based responsive layout
- **Modern Typography**: Clean, readable fonts
- **Color Scheme**: Professional color palette
- **Interactive Elements**: Hover effects and smooth transitions
- **Mobile-First**: Optimized for all device sizes

## 🌍 Internationalization

The application supports multiple languages:

- **English** (default)
- **Arabic** (RTL support)

Translation files are located in `src/assets/i18n/` and can be easily extended for additional languages.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop computers
- Tablets
- Mobile phones
- Various screen resolutions

## 🔧 Customization

### Adding New Projects

1. Update the projects data in the projects component
2. Add project images to `src/assets/images/`
3. Update translations if needed

### Modifying Styles

- Global styles: `src/assets/scss/`
- Component-specific styles: Individual component `.scss` files
- Bootstrap customization: `src/assets/scss/configurations/_custom.scss`

### Adding New Languages

1. Create new translation file in `src/assets/i18n/`
2. Update the language service
3. Add language selector to the UI

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 📦 Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 👨‍💻 Developer

**Taha Mahmoud**

- Frontend Developer
- Based in Egypt, Cairo
- Email: tahamahmoudx417@gmail.com

---

_Built with ❤️ using Angular 17_
