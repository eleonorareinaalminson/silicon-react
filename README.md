# Silicon React 🏦

A modern, responsive banking application built with React and Vite. Silicon offers a sleek interface for managing your finances with features like money transfers, payment processing, and comprehensive banking tools.

![Silicon App Preview](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF)

## ✨ Features

- **🌓 Dark/Light Mode**: Toggle between themes for optimal viewing
- **📱 Responsive Design**: Works seamlessly across all devices
- **💸 Money Transfers**: Simple and secure money transfer functionality
- **💳 Payment Processing**: Handle international bank payments
- **📊 Statistics**: Track your spending and financial habits
- **❓ FAQ System**: Dynamic FAQ with API integration
- **⭐ Customer Reviews**: Real testimonials from satisfied users
- **📧 Newsletter**: Subscribe to stay updated
- **🔒 Secure**: Built with security best practices

## 🚀 Live Demo (In Progress)

[View Live Application](https://your-app-url.com) <!-- Replace with your actual URL -->

## 🛠️ Built With

- **Frontend Framework**: React 19.0.0
- **Build Tool**: Vite 6.1.0
- **Routing**: React Router DOM 7.1.5
- **Styling**: CSS3 with CSS Variables
- **Icons**: Bootstrap Icons
- **Fonts**: Manrope (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/silicon-react.git
   cd silicon-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
silicon-react/
├── public/
│   └── images/           # Static images and assets
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── elements/     # Small UI elements
│   │   └── forms/        # Form components
│   ├── contexts/         # React Context providers
│   ├── pages/            # Page components
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   └── main.jsx          # Application entry point
├── package.json
└── README.md
```

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 API Integration

The application integrates with external APIs for dynamic content:

- **FAQ API**: `https://kyhn24.azurewebsites.net/api/faq`
- **Testimonials API**: `https://kyhn24.azurewebsites.net/api/testimonials`
- **Newsletter API**: `https://kyhn24.azurewebsites.net/api/subscribe`

## 🎨 Design Features

### Color Scheme
- **Primary**: #6366F1 (Indigo)
- **Success**: #22C55E (Green)
- **Warning**: #FFBA08 (Yellow)
- **Background**: #F3F6FF (Light Blue)

### Typography
- **Font Family**: Manrope
- **Weights**: 200-800
- **Responsive**: Fluid typography scaling

### Components
- **Responsive Grid**: CSS Grid and Flexbox
- **Interactive Elements**: Hover effects and transitions
- **Accessibility**: ARIA labels and semantic HTML
- **Performance**: Optimized images and lazy loading

## 📱 Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| Mobile | < 768px | Single column layout |
| Tablet | 768px - 1199px | Simplified grid |
| Desktop | ≥ 1200px | Full feature layout |

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://kyhn24.azurewebsites.net/api
VITE_APP_TITLE=Silicon Banking App
```

### Dark Mode
The application supports automatic dark mode detection and manual toggle. Preferences are saved in localStorage.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern banking applications
- Icons by [Bootstrap Icons](https://icons.getbootstrap.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- API services by [Kyhn24 Azure Services](https://kyhn24.azurewebsites.net/)

## 📞 Support

If you have any questions or need help, please feel free to:

- 📧 Email: support@silicon-app.com
- 💬 Open an issue on GitHub
- 📱 Contact us through the app

---

⭐ **Star this repository if you found it helpful!**
