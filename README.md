# NatyaVeda — Ritual Intelligence Engine for Indian Classical Dance

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.9%2B-blue)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-18%2B-61DAFB?logo=react)](https://react.dev/)
[![Flask](https://img.shields.io/badge/Flask-2.0%2B-000000?logo=flask)](https://flask.palletsprojects.com/)
[![Status](https://img.shields.io/badge/Status-In%20Development-yellow)](https://github.com)

---

## Table of Contents

- [Overview](#overview)
- [The Problem](#the-problem)
- [The Solution](#the-solution)
- [Core Features](#core-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Future Scope](#future-scope)
- [Roadmap](#roadmap)

---

## Overview

**NatyaVeda** is an interactive cultural intelligence platform designed to preserve and visualize the **ritual, symbolic, and philosophical foundations of Indian classical dance traditions**.

The platform enables users to explore classical dance forms such as **Bharatanatyam, Kathak, Odissi, and Kathakali**, while understanding deeper cultural elements including:

- Mudras (hand gestures)
- Rasas (emotional expressions)
- Ritual structures
- Temple traditions
- Classical music elements

NatyaVeda combines **interactive visualizations, multimedia storytelling, and computer vision** to transform centuries of oral cultural knowledge into an accessible digital learning experience.

Instead of focusing only on choreography, the platform explores **the cultural intelligence behind Indian classical arts**.

---

## The Problem

Indian classical dance traditions contain deep philosophical and cultural knowledge, yet modern learning systems rarely capture this depth.

Key challenges include:

- **Knowledge Fragmentation**  
  Cultural meanings are scattered across ancient texts and oral traditions.

- **Technique-Focused Learning**  
  Many platforms focus only on choreography while ignoring ritual symbolism.

- **Lack of Interactive Digital Tools**  
  Few platforms allow users to explore dance traditions through visual systems or gesture recognition.

- **Cultural Knowledge Loss**  
  Without digital preservation, symbolic meanings risk disappearing over time.

---

## The Solution

NatyaVeda bridges **tradition and technology** by building an interactive cultural exploration platform.

The system introduces a **Ritual Knowledge Graph** that connects:

- Mudras
- Rasas
- Rituals
- Deities
- Dance traditions

Users can:

- Explore dance histories and philosophies
- Visualize cultural relationships
- Watch animated storytelling of dance traditions
- Listen to audio narrations
- Perform hand gestures and receive **real-time mudra recognition**

This approach creates a **digital ecosystem for cultural preservation and learning**.

---

## Core Features

### Interactive Knowledge Graph

A graph-based visualization system connecting:

- Mudras
- Rasas
- Deities
- Ritual structures
- Dance traditions

Users can click nodes to explore relationships between cultural elements.

---

### Dance History Explorer

Each dance form contains structured cultural information including:

- Historical origins
- Temple traditions
- Philosophical background
- Evolution of performance styles

This helps users understand the **context behind the art form**.

---

### Mudra Detection System

Real-time gesture recognition using computer vision.

Workflow:

Webcam Input → MediaPipe Hand Detection → Gesture Analysis → Mudra Identification

The platform then displays:

- Mudra name
- Cultural meaning
- Associated rasa

---

### Multimedia Learning

NatyaVeda offers multiple ways to explore dance traditions:

- Animated storytelling
- Audio narration
- Text-based explanations

This allows users to learn **visually, audibly, or interactively**.

---

### Music Integration

Indian classical dance is closely connected with music.

The platform includes exploration of:

- Classical ragas
- Talas (rhythm cycles)
- Instruments used in dance performances

---

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 18+ | User interface framework |
| Vite | Fast development build tool |
| TypeScript | Type-safe programming |
| TailwindCSS | Styling |
| Framer Motion | Animations & transitions |
| shadcn/ui | Accessible component library |
| Radix UI | Headless UI primitives |
| React Query | Server state management |
| Zustand/Context API | Client state management |
| React Router | Client-side routing |
| Howler.js | Audio playback (future) |

---

### Backend

| Technology | Purpose |
|---|---|
| Flask | Backend framework |
| Python | Core backend language |
| REST API | Frontend-backend communication |
| SQLite | Lightweight database |
| JSON | Knowledge graph data storage |

---

### Computer Vision

| Technology | Purpose |
|---|---|
| MediaPipe | Hand landmark detection |
| OpenCV | Webcam input and image processing |
| Python Logic | Mudra classification |

This design keeps the system **lightweight and efficient without heavy AI models**.

---

## Project Structure

```
natya-veda-studio/
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Navigation header
│   │   ├── Footer.tsx              # Footer component
│   │   ├── Hero.tsx                # Landing page hero section
│   │   ├── DanceCard.tsx           # Card display for dance forms
│   │   ├── FeatureCard.tsx         # Feature showcase cards
│   │   ├── NavLink.tsx             # Navigation link component
│   │   │
│   │   └── ui/                     # shadcn/ui components
│   │       ├── accordion.tsx
│   │       ├── alert.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── tabs.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       └── [other UI components...]
│   │
│   ├── pages/
│   │   ├── Home.tsx                # Landing page with features
│   │   ├── Dances.tsx              # Dance forms gallery
│   │   ├── DanceDetail.tsx         # Individual dance history & details
│   │   ├── MudraDetection.tsx      # AI mudra recognition interface
│   │   ├── About.tsx               # About the platform
│   │   ├── NotFound.tsx            # 404 page
│   │   └── Index.tsx               # Route index
│   │
│   ├── data/
│   │   └── dances.ts               # Dance forms database & metadata
│   │
│   ├── hooks/
│   │   ├── use-mobile.tsx          # Mobile responsiveness hook
│   │   └── use-toast.ts            # Toast notification hook
│   │
│   ├── lib/
│   │   └── utils.ts                # Utility functions & classname helpers
│   │
│   ├── assets/
│   │   ├── bg.jpg                  # Background images
│   │   ├── bharatanatyam.jpg       # Dance form images
│   │   ├── kathak.jpg
│   │   ├── kathakali.jpg
│   │   └── odissi.jpg
│   │
│   ├── App.tsx                      # Main app with routing
│   ├── App.css                      # Global styles
│   ├── main.tsx                     # React DOM entry point
│   ├── index.css                    # Global CSS
│   └── vite-env.d.ts               # Vite environment types
│
├── public/                          # Static assets (future)
│   ├── images/
│   ├── audio/
│   └── animations/
│
├── index.html                       # HTML entry point
├── vite.config.ts                  # Vite configuration
├── tailwind.config.ts              # TailwindCSS configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Project dependencies
├── eslint.config.js                # Linting rules
├── postcss.config.js               # PostCSS configuration
├── components.json                 # shadcn/ui configuration
└── README.md                       # This file

```

---

## Project Setup & Running

### Prerequisites
- Node.js 16+
- npm or bun package manager

### Installation

```bash
# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
bun run build
```

---

## Component Overview

### Pages

- **Home.tsx** - Landing page featuring hero section and core features (Knowledge Graph, Dance Explorer, Mudra Detection, Multimedia)
- **Dances.tsx** - Gallery view of all classical dance forms with filtering
- **DanceDetail.tsx** - Deep dive into individual dance history, philosophy, and traditions
- **MudraDetection.tsx** - AI-powered hand gesture recognition interface
- **About.tsx** - Information about the NatyaVeda project and mission
- **NotFound.tsx** - 404 error page

### Key Components

- **Navbar.tsx** - Responsive navigation with links to all sections
- **Hero.tsx** - Eye-catching landing section
- **DanceCard.tsx** - Reusable component for displaying dance forms
- **FeatureCard.tsx** - Component highlighting platform features
- **Footer.tsx** - Footer with links and information

### UI Library

The project uses **shadcn/ui** components (built on Radix UI primitives) for accessible, customizable UI elements with TailwindCSS styling.

---

## Future Scope

Potential future improvements include:

- **KnowledgeGraph Component** - Interactive graph visualization for dance, mudra, and cultural relationships
- **AudioPlayer Component** - Integrated audio player for ragas and musical accompaniment
- **Animations Folder** - Animated storytelling sequences and transitions
- **MultiLanguage Support** - Cultural documentation in multiple languages
- **Expanded Mudra Dataset** - Comprehensive gesture library with more classifications
- **Community Contribution Platform** - User submissions and collaborative knowledge building
- **Interactive Learning Modules** - Courses for students and practitioners
- **Augmented Reality** - AR mudra visualization overlays
- **Additional Dance Forms** - Coverage of more regional and classical traditions
- **Database Integration** - Backend REST API with persistent data storage

---

## Roadmap

| Phase | Goal | Description |
|---|---|---|
| Phase 1 | Prototype | ✅ Core website UI and dance explorer (CURRENT) |
| Phase 2 | Visualization | Implement knowledge graph & interactive connections |
| Phase 3 | AI Integration | Add MediaPipe mudra detection functionality |
| Phase 4 | Multimedia | Integrate animation and audio storytelling |
| Phase 5 | Expansion | Add community contributions and extended datasets |

---

## Notes

- Current structure prioritizes **clean routing** and **component reusability**
- UI components are modular and can be easily extended
- The project is optimized for **mobile responsiveness** via TailwindCSS
- Future backend integration will connect to REST API endpoints

