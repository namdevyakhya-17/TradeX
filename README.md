<img width="1919" height="1032" alt="image" src="https://github.com/user-attachments/assets/0439ee85-efde-472b-834b-62fea4de2b7f" />
# Tradex

Tradex is a full-stack trading dashboard application built with the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). It provides a responsive and interactive interface for tracking stocks, visualizing portfolio data, and buying or selling stocks in real-time.

---

## 🚀 Features

- 🔐 Secure user authentication and login
- 📈 Real-time dashboard for portfolio & market analysis
- 📊 Interactive graphs for holdings and stock performance
- 💹 Buy/Sell stocks with real-time updates
- 🌐 Clean and modern UI built with React
- ⚙️ RESTful API backend with Express.js
- 💾 MongoDB integration for data persistence

---

## 📁 Project Structure

```
Tradex/
├── backend/         # Node.js + Express API backend
├── dashboard/       # React components for graphs and stock dashboard
├── frontend/        # Login/Register pages, React frontend
├── .gitignore
└── README.md
```

---

## 📊 Graphs and Visualization

- 📈 Portfolio holdings are displayed using dynamic line and bar charts
- 📉 Stock trends and price movements are shown with real-time graph updates
- 📊 Interactive UI for tracking gains/losses and investment performance

---

## 💰 Stock Trading

- ✅ Search for available stocks
- 💹 Place Buy or Sell orders
- 🔄 Transactions are reflected instantly in portfolio and holdings
- 📃 View history of past trades

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Chart.js / Recharts, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT & Bcrypt
- **Version Control**: Git & GitHub

---

## 📦 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/Vyakhya-Namdev/Tradex.git
cd Tradex
```

2. **Install dependencies**

- Backend
```bash
cd backend
npm install
```

- Frontend
```bash
cd ../frontend
npm install
```

- Dashboard
```bash
cd ../dashboard
npm install
```

3. **Set up environment variables**

Create `.env` files in `backend/` and `frontend/` with appropriate variables like:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. **Run the development servers**

- Start backend:
```bash
cd backend
npm start
```

- Start frontend:
```bash
cd ../frontend
npm start
```

---

## 📸 Screenshots

_Add your login page, dashboard, and graph screenshots here._

---

## 🤝 Contribution

Contributions, issues, and feature requests are welcome!  
Feel free to fork this repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👩‍💻 Developed by

**Vyakhya Namdev**  
[GitHub](https://github.com/Vyakhya-Namdev)
