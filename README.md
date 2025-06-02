# 🗂️ Table of Contents

- [💬 Chatwise](#-chatwise)
- [🌍 Live Demo](#-live-demo)
- [✨ Features](#-features)
- [📸 Screenshots](#-screenshots)
- [⚙️ Tech Stack](#️-tech-stack)
- [📂 Folder Structure](#-folder-structure)
- [🧰 Installation Steps](#-installation-steps)

## 💬 Chatwise

A **modern, sleek, and fully responsive chat interface UI** built using **ReactJS** and **TailwindCSS**. It offers a clean, animated, and intuitive interface for chat-based applications.

---

## 🌍 Live Demo

Explore the interface: [Live Demo](https://pavithrj.github.io/chatwise)

---

## ✨ Features

* 📱 **Responsive Design** – Adapts smoothly to all screen sizes
* 💬 **Conversation Layout** – Structured user and message bubbles
* 🎨 **Modern UI** – Aesthetic color palette and minimalistic design
* 🧑‍🤝‍🧑 **User Avatars & Timestamps** – UI elements that mimic real-world chat apps
* 🧪 **Reusable Components** – Modular React components for clean structure
* 🌙 **Dark Mode (optional)** – Toggle between light and dark themes (if implemented)

---

## 📸 Screenshots

| 💬 Chat Interface                         |
| ----------------------------------------- |
| ![Chat UI](./src/assets/demo/chat-ui.png) |

| 📱 Mobile View                                          |
| ------------------------------------------------------- |
| ![Mobile Chat UI](./src/assets/demo/mobile-chat-ui.png) |

---

## ⚙️ Tech Stack

![Vite](https://img.shields.io/badge/Vite-563D7C?style=for-the-badge\&logo=vite\&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0EA5E9?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)

---

## 📂 Folder Structure

```
Chatwise/
├── src/
│   ├── assets/
│   │   └── demo/
│   │       ├── chat-ui.png
│   │       └── mobile-chat-ui.png
│   ├── components/
│   │   ├── ChatWindow.jsx
│   │   ├── MessageBubble.jsx
│   │   ├── Sidebar.jsx
│   │   └── Header.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🧰 Installation Steps

```bash
git clone https://github.com/Pavithrj/chatwise.git
cd chatwise
npm install
npm run dev
```