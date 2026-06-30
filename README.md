# 💱 Currency Converter Website

A responsive and modern currency converter built with **HTML**, **CSS**, and **JavaScript**. It offers real-time exchange rate conversion, a dark mode toggle, an animated glowing navigation bar, and a clean, minimal UI.

## 🚀 Features

- 🔄 Real-time currency conversion
- 🌙 Dark mode toggle with moon icon
- ✨ Glowing animated underline navbar
- 📱 Fully responsive design
- 🧠 Smooth hover effects and text zoom
- 🌌 Animated particle background

## 🛠 Tech Stack

| Layer         | Technology       |
|---------------|------------------|
| Structure     | HTML5            |
| Styling       | CSS3             |
| Logic         | JavaScript       |
| Exchange Data | ExchangeRate-API |

## Project Structure

```
Currency-Convertor-Website/
├── assests/        # Images and static assets
├── index.html       # Main page markup
├── style.css         # Styling, dark mode, navbar animation
├── script.js          # Conversion logic and API calls
├── particle.js         # Animated particle background effect
└── README.md
```

## Getting Started

### Prerequisites

- A modern web browser
- (Optional) A local server such as the VS Code "Live Server" extension for the best experience

### Installation & Usage

1. Clone the repository
   ```bash
   git clone https://github.com/AyanNaskar08/Currency-Convertor-Website.git
   cd Currency-Convertor-Website
   ```

2. Open `index.html` directly in your browser, or serve it with a local development server:
   ```bash
   npx serve .
   ```

3. Select a base currency and a target currency, enter an amount, and get the live converted value.

## How It Works

`script.js` fetches live exchange rates from the [ExchangeRate-API](https://www.exchangerate-api.com/) and calculates the converted amount based on the user's selected currencies and input value. `particle.js` powers the animated background, while `style.css` handles the responsive layout, dark mode theme, and glowing navbar effects.

## Future Improvements

- Add a currency-pair history/chart view
- Cache exchange rates to reduce API calls
- Add support for offline fallback rates
- Improve accessibility (keyboard navigation, ARIA labels)

## License

No license has been specified for this repository yet. Consider adding one (e.g., MIT) if you plan to share or accept contributions.

## Author

[AyanNaskar08](https://github.com/AyanNaskar08)
