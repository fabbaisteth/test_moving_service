# Berlin Move - Premium Moving Services Website

A comprehensive, modern moving service website for a Berlin-based company featuring an Apple-esque design with glassy gradients and rounded floating edges.

## Features

### Design
- **Glassmorphism Design**: Modern glass effect with blur and transparency
- **Gradient Orbs**: Animated floating background elements
- **Rounded Edges**: Smooth, rounded corners throughout
- **Smooth Animations**: Scroll-based animations and transitions
- **Responsive Layout**: Optimized for desktop, tablet, and mobile

### Sections
1. **Hero Section**: Eye-catching introduction with animated gradient orbs
2. **Services**: Six comprehensive moving services with gradient icons
3. **About**: Company information with statistics
4. **Pricing**: Three transparent pricing tiers
5. **Testimonials**: Customer reviews
6. **Contact**: Quote request form with company information
7. **Footer**: Quick links and company details

### Technical Features
- Pure HTML, CSS, and JavaScript (no frameworks required)
- Smooth scrolling navigation
- Form validation and submission handling
- Intersection Observer for scroll animations
- Parallax effects on hero section
- Custom notification system
- SEO-friendly meta tags

## File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # CSS with glassmorphism effects
├── script.js           # JavaScript for interactivity
├── favicon.svg         # Website favicon
└── README.md           # This file
```

## How to Use

Simply open `index.html` in a web browser to view the website. No build process or dependencies required.

### Viewing Locally
```bash
# Option 1: Open directly
open index.html

# Option 2: Use Python's built-in server
python -m http.server 8000

# Option 3: Use Node.js http-server
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Customization

### Colors
The color scheme uses CSS custom properties defined in `styles.css`:
- `--primary-gradient`: Main purple gradient (#667eea to #764ba2)
- `--secondary-gradient`: Pink gradient (#f093fb to #f5576c)
- `--accent-gradient`: Blue gradient (#4facfe to #00f2fe)
- Additional gradients for services and effects

### Content
Edit the HTML file to customize:
- Company name and branding
- Service descriptions
- Pricing packages
- Contact information
- Testimonials

### Styling
The design uses modern CSS features:
- CSS Grid for layouts
- CSS Custom Properties for theming
- Backdrop filters for glass effects
- CSS animations for smooth transitions

## Browser Compatibility

Optimized for modern browsers:
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

Note: Glassmorphism effects require support for `backdrop-filter`.

## Performance

- No external dependencies
- Optimized CSS with minimal reflows
- Lazy-loaded animations using Intersection Observer
- Lightweight SVG icons

## License

© 2026 Berlin Move. All rights reserved.
