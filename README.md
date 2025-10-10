# Marcelo's Personal Portfolio

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Features a clean black and white design with smooth animations and excellent UX.

## ✨ Features

- **Modern Design**: Clean, minimalist black and white aesthetic
- **Responsive Layout**: Works perfectly on all devices
- **Smooth Animations**: CSS transitions and JavaScript-powered animations
- **Interactive Elements**: Hover effects, scroll animations, and smooth scrolling
- **Mobile-First**: Optimized for mobile devices with hamburger navigation
- **Contact Form**: Functional contact form with validation
- **Loading Animation**: Elegant loading screen
- **Scroll Progress**: Visual scroll progress indicator
- **SEO Optimized**: Semantic HTML structure

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### Installation
1. Download or clone this repository
2. Open `index.html` in your web browser
3. That's it! The portfolio is ready to use

### Local Development
If you want to make changes:
1. Use a local server (like Live Server in VS Code)
2. Edit the HTML, CSS, and JavaScript files
3. Refresh your browser to see changes

## 🎨 Customization

### Personal Information
Edit the following sections in `index.html`:

#### Hero Section
```html
<span class="hero-name">Your Name</span>
<span class="hero-role">Your Title</span>
<p class="hero-description">Your description here</p>
```

#### About Section
```html
<p>Your personal story and background</p>
<div class="about-stats">
    <div class="stat-item">
        <h3>Your Number</h3>
        <p>Your Stat</p>
    </div>
</div>
```

#### Projects
Replace the project cards with your own:
```html
<div class="project-card">
    <div class="project-image">
        <!-- Add your project image here -->
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project</h3>
        <p class="project-description">Project description</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
    </div>
</div>
```

#### Skills
Update the skills section with your expertise:
```html
<div class="skill-item">
    <i data-feather="code"></i>
    <span>Your Skill</span>
</div>
```

#### Contact Information
```html
<div class="contact-method">
    <i data-feather="mail"></i>
    <span>your.email@example.com</span>
</div>
```

### Colors and Styling
The portfolio uses a black and white color scheme. To customize colors, edit `styles.css`:

#### Primary Colors
```css
:root {
    --primary-color: #000;
    --secondary-color: #fff;
    --accent-color: #666;
    --background-light: #f8f8f8;
}
```

#### Typography
The portfolio uses Google Fonts:
- **Inter**: Clean, modern sans-serif for body text
- **Playfair Display**: Elegant serif for headings

To change fonts, update the Google Fonts link in `index.html` and modify the font-family properties in `styles.css`.

### Icons
The portfolio uses [Feather Icons](https://feathericons.com/). To change icons:

1. Browse available icons at [feathericons.com](https://feathericons.com/)
2. Replace the icon names in the HTML:
```html
<i data-feather="icon-name"></i>
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎭 Animations

### CSS Animations
- **Fade In**: Elements appear with smooth fade-in effects
- **Slide Up**: Content slides up from below
- **Float**: Hero shape gently floats up and down
- **Pulse**: Subtle pulsing effects

### JavaScript Animations
- **Scroll Animations**: Elements animate when they come into view
- **Hover Effects**: Interactive elements respond to user interaction
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Loading Screen**: Elegant loading animation

## 🔧 Technical Details

### File Structure
```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

### Dependencies
- **Google Fonts**: Inter and Playfair Display
- **Feather Icons**: Beautiful, customizable icons
- **Vanilla JavaScript**: No frameworks required

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your portfolio will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to [netlify.com](https://netlify.com)
2. Your portfolio will be deployed instantly
3. Custom domain can be added in settings

### Vercel
1. Connect your GitHub repository to [vercel.com](https://vercel.com)
2. Deploy automatically on every push
3. Custom domain support included

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them with the community!

## 📞 Support

If you have questions or need help customizing your portfolio:
1. Check the customization section above
2. Review the code comments
3. Open an issue on GitHub

---

**Happy coding! 🎉**

Your portfolio is now ready to showcase your skills and projects to the world.
