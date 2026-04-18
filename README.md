# SYNC-OS: Intelligence-Driven Academic Workspace 🚀

SyncOS is a high-fidelity, web-based educational desktop environment designed to centralize and enhance student learning. Powered by **Gemini 3.1 & 3 Series AI**, it offers real-time workspace synthesis, automated assessments, and intelligent content analysis within a familiar, fluid UI inspired by modern desktop operating systems.

## 🌟 Core Applications

### 🧠 OS Intelligence (AI Tutor)
The central nervous system of SyncOS.
- **Workspace Synthesis**: Aggregates and analyzes content from all open windows (Notepad, Browser, Syllabus) to provide unified study plans.
- **Dynamic Learning Modes**: Toggle between **Diverse Mode** for creative insights and **Concise Mode** for high-density information.
- **Module Generation**: Instantly create pointwise notes, flashcards, and practice tests synchronized with your current focus.
- **Voice Intelligence**: Hands-free interaction via integrated speech-to-text.

### 📝 Smart Notepad
Cloud-persistent note-taking with AI awareness.
- **Sync-Scraping**: Automatically reports note content to the Intelligence Core for better tutoring.
- **Server-Synced**: Uses Firebase Firestore with hardened security and server-side timestamping.

### 🌐 Edge Browser
A specialized browsing environment for research.
- **Live Analysis**: Gemini uses Google Search tools to analyze web content in real-time.
- **Quiz Integration**: Generate assessments directly from the webpage you are viewing.

### 🎓 Quiz Generator
AI-driven assessment engine.
- **Learning Moments**: Every answer comes with an AI-generated explanation ("reason") to reinforce understanding.
- **Topic Detection**: Automatically detects what you're working on across Windows to suggest relevant topics.

## 🛡️ Security & Architecture

SyncOS implements the **Fortress Architecture** for data protection:
- **ABAC (Attribute-Based Access Control)**: Rigid Firestore rules ensure identity isolation.
- **Temporal Integrity**: All writes are validated against server-side timestamps (`serverTimestamp()`).
- **ID Poisoning Guard**: Document IDs are validated to prevent malicious injection or resource exhaustion.
- **Zero-Trust Rules**: Global default-deny policy with strict schema validation for every collection.

## 🛠️ Tech Stack

- **Frontend**: React 18+, Vite, TypeScript, Framer Motion (for OS animations).
- **Styling**: Tailwind CSS with Mica (glassmorphism) effects.
- **Intelligence**: `@google/genai` (Gemini 3.1 Flash Preview).
- **Backend/Database**: Firebase (Authentication & Firestore).
- **Icons**: Lucide React (Standardized Rocket launch vocabulary).

## 🚀 Getting Started

1. **Environment Variables**:
   Copy `.env.example` to `.env` and provide your `GEMINI_API_KEY`.
2. **Firebase Configuration**:
   Ensure `firebase-applet-config.json` is correctly populated with your Firebase project details.
3. **Run Development**:
   ```bash
   npm run dev
   ```

---
*Built for the next generation of digital learners. Synthesize. Study. Succeed.*
