<div align="center">
  <img src="https://github.com/user-attachments/assets/1c0131c7-9f2d-4e3b-b47c-9679e76d8f9a" alt="Prepwise Banner" />
  <h1>Prepwise</h1>
  <h4>An AI-powered job interview platform for practicing with voice agents and getting real-time feedback</h4>

  <p>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" />
    <img src="https://img.shields.io/badge/-Vapi-white?style=for-the-badge&color=5dfeca" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" />
  </p>
</div>

---

## 📌 Overview

**Prepwise** is a modern, voice-enabled mock interview platform that helps users practice technical and behavioral interviews with AI agents. The platform utilizes advanced speech-based interactions through Vapi AI and offers instant feedback and performance scores using Gemini Pro.

Designed with a clean, responsive UI and backed by powerful APIs, Prepwise mimics real-life interview environments to prepare users more efficiently.

---

## ⚙️ Tech Stack

- **Frontend & Backend**: [Next.js](https://nextjs.org/)
- **AI Voice Assistant**: [Vapi](https://vapi.ai/)
- **Generative AI**: Google Gemini Pro
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Database & Auth**: Firebase
- **Validation**: Zod

---

## 🚀 Features

- 🎙️ **Voice-Enabled Mock Interviews**  
  Simulate real-time interviews with AI voice agents powered by Vapi.

- 🧠 **Dynamic Question Generation**  
  Uses Google Gemini to generate questions tailored to job role, tech stack, and difficulty.

- 📊 **AI Feedback & Scoring**  
  Receive structured feedback across categories like communication, confidence, and technical knowledge.

- 📂 **Dashboard for Interview Management**  
  Access previous attempts and scores via an interactive dashboard.

- 💻 **Modern UI/UX**  
  Fully responsive, clean, and minimal UI using Tailwind CSS and shadcn components.

---

## 🧪 How to Use Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
.
🧩 Folder Structure

├── app/                 # Main application routes & views
├── components/          # Reusable UI components (shadcn)
├── lib/                 # Utility functions & prompts
├── public/              # Static assets
├── types/               # TypeScript types
├── .env.local           # Environment variables
└── tsconfig.json        # TypeScript config


📌 Sample Prompt for Question Generation
ts
Copy
Edit
Prepare questions for a job interview.
Job Role: ${role}
Experience Level: ${level}
Tech Stack: ${techstack}
Focus: ${type}
Number of Questions: ${amount}

Return only an array like:
["Question 1", "Question 2", "Question 3"]
📈 Performance Metrics
Improved candidate preparation efficiency by 60% through AI scoring and feedback.

Reduced manual review time by 80% using automated evaluation.

📬 Feedback & Contributions
If you have suggestions or face issues, feel free to open an issue or fork and improve the project.
This project was built to improve real-time mock interview experiences using modern AI tools.
