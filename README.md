# 📰 NewsMatrix - React News App

A responsive React.js news web application for browsing and reading the latest news articles by category. Fetches real-time data from public news APIs and provides an intuitive interface to explore top headlines across multiple topics.

---

## 🚀 Demo

[Live Demo](https://vishal-singh-web.github.io/newsapp/)

---

## ✨ Features

- Browse news by category (Technology, Sports, Business, Science, etc.)
- Responsive design (desktop & mobile)
- Clean, modern UI built with React & Bootstrap
- Fast navigation between news categories
- Article meta: title, description, source, date
- Direct link to full articles

---

## 🏁 Getting Started

1. **Clone the repository**
git clone https://github.com/vishal-singh-web/newsapp.git
cd newsapp

text

2. **Install dependencies**
npm install

text

3. **Configure API Key**
- Uses [NewsAPI](https://newsapi.org/) or compatible source
- Create `.env` in the root:
  ```
  REACT_APP_NEWS_API_KEY=your_api_key_here
  ```

4. **Run locally**
npm start

text
- App will be available at `http://localhost:3000`

---

## 📡 API Reference

### Endpoint

GET https://newsapi.org/v2/top-headlines

text

**Query Parameters:**

| Param     | Type   | Description            |
|-----------|--------|------------------------|
| `apiKey`  | String | Your NewsAPI key       |
| `country` | String | Country code (optional)|
| `category`| String | News category          |

**Example Request:**
GET https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=YOUR_API_KEY

text

**Sample Response:**
{
"status": "ok",
"totalResults": 38,
"articles": [
{
"source": { "id": null, "name": "NDTV" },
"author": "John Doe",
"title": "Latest Technology News",
"description": "Brief description...",
"url": "https://www.ndtv.com/...",
"urlToImage": "https://image.url",
"publishedAt": "2025-11-20T09:00:00Z",
"content": "Full content..."
}
// more articles...
]
}

text

---

## 🗂️ Project Structure

newsapp/
├── src/
│ ├── components/
│ ├── App.js
│ └── index.js
├── public/
│ └── index.html
├── package.json
└── README.md

text

---

## 🧰 Technologies

- React.js
- Bootstrap
- JavaScript (ES6)
- HTML/CSS
- [NewsAPI](https://newsapi.org/)

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss ideas.
