# 🚀 Journey to Mars: Odyssey_26

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

An immersive, cinematic web experience that takes you on a high-fidelity journey from Earth to the red planet. Experience the launch, the transit, and the final touchdown at Jezero Crater through interactive React components and 3D visualizations.

---

## 🌌 The Experience

**Odyssey_26** is not just a website; it's a narrative exploration of interplanetary travel. The application features a multi-stage journey:

1.  **🚀 Launch Phase**: The initial countdown and liftoff sequence.
2.  **📋 Mission Briefing**: Understanding the scope and objectives of the voyage.
3.  **🛸 Deep Space Transit**: Navigating the void between worlds.
4.  **🛬 EDL (Entry, Descent, Landing)**: The harrowing "seven minutes of terror" onto the Martian surface.
5.  **🔴 Surface Exploration**: Analyzing terrain and surveying the Martian landscape.
6.  **🔮 Future Outlook**: The conclusion of the mission and the vision for permanent settlement.

---

## 🛠️ Built With

-   **Frontend**: [React 19](https://react.dev/)
-   **3D Rendering**: [Three.js](https://threejs.org/) via [`@react-three/fiber`](https://github.com/pmndrs/react-three-fiber) & [`@react-three/drei`](https://github.com/pmndrs/drei)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/) for smooth, cinematic transitions.
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom design system (Space Black, Mars Orange).
-   **Icons**: [Lucide React](https://lucide.dev/) for clean, functional UI elements.
-   **Build Tool**: [Vite](https://vitejs.dev/) for lightning-fast development.

---

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/[your-username]/Frontend-odyssey.git
    cd Frontend-odyssey
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the application**:
    Navigate to `http://localhost:5173` in your browser.

---

## 🎨 Design System

The project uses a bespoke design system defined in `src/index.css`:
-   **Primary Colors**: `#e27b58` (Mars Orange), `#050505` (Space Black).
-   **Typography**: Inter (UI) & Poppins (Headers).
-   **Effects**: Glassmorphism HUD, custom scrollbars, and 3D perspective transforms.

---

## 📁 Project Structure

```text
src/
├── components/          # Interactive mission sections
│   ├── SpaceBackground  # Starfield and planet rendering
│   ├── Hero             # Launch sequence
│   ├── Exploration      # Terrain analysis system
│   └── ...              # Other mission phases
├── assets/              # Textures, models, and static media
└── App.jsx              # Main narrative controller and scroll logic
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">Created with ❤️ for space enthusiasts everywhere.</p>
