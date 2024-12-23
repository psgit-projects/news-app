# News App

A dynamic and responsive news application built using React that fetches and displays news articles from an external API. This project demonstrates the use of React components, state management, and API integration.

# Features

Fetch News: Fetches the latest news articles from an API.

Category-wise News: Browse news articles based on categories.

Responsive Design: Optimized for different screen sizes.

Search Functionality: Search for news articles by keyword.

Loading State: Displays a loading indicator while fetching data.

# Technologies Used

Frontend: React + Vite

API: News API (e.g., NewsAPI.org or any similar service)

Styling: CSS/Bootstrap

# Installation

Follow these steps to set up and run the project locally:

1. Clone the repository:
   git clone https://github.com/yourusername/news-app.git
   
2. Install dependencies:
   npm install
   
3. Add API Key:
   Obtain an API key from your chosen news API provider (e.g., NewsAPI.org).
   Create a .env file in the root of your project and add your API key:
   REACT_APP_NEWS_API_KEY=your_api_key_here;

4. Run the application:
   npm run dev

5. Access the app:
Open your browser and navigate to http://localhost:5713

# Project Structure
news-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── NewsCard.js
│   │   ├── NewsList.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Category.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
├── .env
├── package.json
└── README.md

# Usage

Browse News:

1. Open the app to see the latest news articles.

Use the navigation bar to filter news by category.

2. Search for Articles:

Enter a keyword in the search bar to find relevant articles.

3. View Article Details:

Click on a news card to read the full article (redirects to the source).

# API Integration
`https://newsapi.org/v2/top-headlines?country=us&apiKey=your_api_key_here`

# Future Enhancements

* Add user authentication to personalize the news feed.

* Implement dark mode for better user experience.

* Integrate more APIs for diverse news sources.
