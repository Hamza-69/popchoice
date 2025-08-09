# PopChoice 🍿

PopChoice is an AI-powered movie recommendation web application that helps you discover the perfect movie based on your personal preferences and mood. Using advanced semantic search and natural language processing, PopChoice provides personalized movie suggestions from a curated database of films.

## 🌟 Features

- **Personalized Recommendations**: Input your favorite movie and preferences to get tailored suggestions
- **Mood-Based Selection**: Choose between classic films or newer releases based on your current mood
- **Tone Preferences**: Specify whether you want something fun and lighthearted or serious and dramatic
- **AI-Powered Matching**: Uses OpenAI embeddings and semantic search to find movies that match your taste
- **Beautiful UI**: Clean, modern interface with smooth transitions and responsive design
- **Instant Results**: Get movie recommendations with descriptions in seconds

## 🚀 Live Demo

Check out the live application: [PopChoice on Netlify](https://popcornchoice.netlify.app/)

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup with meta tags for SEO
- **CSS3** - Custom styling with Google Fonts (Carter One, Roboto Slab)
- **Vanilla JavaScript** - ES6+ modules for clean, modern code
- **Vite** - Fast build tool and development server

### AI & Backend
- **OpenAI API** - Text embeddings and chat completions
- **Supabase** - Vector database for storing movie embeddings
- **LangChain** - Text processing and document splitting
- **Cloudflare Workers** - Serverless API endpoints for AI services

### Dependencies
- `@supabase/supabase-js` - Supabase client library
- `axios` - HTTP client for API requests
- `langchain` - Framework for building AI applications
- `openai` - OpenAI API client

## 🏗️ Architecture

PopChoice uses a modern AI-powered architecture:

1. **User Input Processing**: Collects user preferences through a simple form
2. **Text Embedding**: Converts user preferences to vector embeddings using OpenAI
3. **Semantic Search**: Finds similar movies in the Supabase vector database
4. **AI Recommendation**: Uses OpenAI's chat completion to generate personalized recommendations
5. **Dynamic UI**: Updates the interface with movie suggestions and descriptions

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PopChoice
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎬 How It Works

1. **Tell us your favorite movie** - Share what you love and why
2. **Choose your preference** - New releases or classic films?
3. **Set your mood** - Fun and lighthearted or serious and dramatic?
4. **Get recommendations** - Our AI analyzes your input and suggests the perfect movie

## 🎨 UI/UX Features

- Responsive design that works on all devices
- Smooth screen transitions between form and results
- Loading states for better user experience
- Error handling with user-friendly messages
- "Go Again" functionality for multiple recommendations

## 🔧 Configuration

The application connects to external backend services:
- OpenAI API for embeddings and chat completions (via Cloudflare Workers)
- Supabase for vector database storage (via Cloudflare Workers)
- Custom Cloudflare Workers endpoints for AI processing

**Note**: This repository contains only the frontend code. The backend services are hosted separately and not included in this codebase.

## 📁 Project Structure

```
PopChoice/
├── index.html          # Main HTML file with form and UI
├── index.js            # Core JavaScript functionality
├── index.css           # Styling and animations
├── content.js          # Movie database and content processing
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── popcorn.png         # Application logo
```

**Note**: The backend services (AI embedding, text completion, and database queries) are hosted separately on Cloudflare Workers and are not included in this repository.

## 🤝 Contributing

This project was created as part of the Scrimba AI Engineer Path. Feel free to fork and enhance!

## 👨‍💻 Author

**Hamza El Rachdi**

## 📝 License

This project is open source and available under the MIT License.

---

*Built with ❤️*