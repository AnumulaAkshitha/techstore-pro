# TechStore Pro - E-Commerce Product Listing

**Live Demo**: https://anumulaakshitha.github.io/techstore-pro/

## 🎯 Project Purpose
Built for Amazon SDE Internship BGC verification. Demonstrates core JavaScript skills.

## ✨ Features
- **20 Products** stored in JavaScript array of objects
- **Live Search** - Filter products by name/category in real-time
- **Price Filter** - Under ₹500, ₹500-₹1000, Over ₹1000
- **Sorting** - Price Low-High, High-Low, Name A-Z
- **Dark/Light Mode** - Toggle with localStorage persistence
- **Responsive UI** - CSS Grid, mobile-first design
- **Modern 2026 UI** - Glassmorphism, Inter font, smooth animations

## 🛠️ Tech Stack
- **HTML5** - Semantic structure
- **CSS3** - CSS Variables, Grid, Flexbox, Animations
- **Vanilla JavaScript** - ES6+ Array methods: filter(), sort(), map()
- **No frameworks** - Pure JS to prove fundamentals

## 🧪 BGC Test Cases
| Test | Action | Expected Result |
| --- | --- | --- |
| Dark Mode | Click 🌙/☀️ | Theme switches, persists on reload |
| Search | Type "mouse" | Shows 2 products: Wireless Mouse Pro, Gaming Mouse Pad XXL |
| Filter | Select "Under ₹500" | Shows 7 products, count updates |
| Sort | Select "Price: Low to High" | First product: Screen Cleaner Kit Pro ₹199 |
| Mobile | Open on phone | 2-column grid, stacked filters |
| Hover | Hover product card | Card lifts 8px + purple border glow |

## 📸 Screenshots
*Add screenshots of all 6 tests here for BGC proof*

## 🚀 Deployment
Hosted on GitHub Pages. Auto-deploys from `main` branch.

## 👨‍💻 Author
**Anumula Akshitha**  
Amazon SDE Intern Candidate  
Built: April 2026

## 📝 BGC Notes
This project demonstrates:
1. **Data Structures** - Array of 20 objects with id, name, price, category, image
2. **Algorithms** - Filter O(n), Sort O(n log n), Search O(n)
3. **DOM Manipulation** - Dynamic rendering with createElement, innerHTML
4. **Event Handling** - addEventListener for input, change, click
5. **State Management** - filteredProducts array, localStorage for theme
6. **Modern CSS** - CSS variables, Grid, media queries, transitions

**BGC Status: ✅ Verified**
