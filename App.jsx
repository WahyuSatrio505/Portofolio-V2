import { motion } from "framer-motion";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f0f0f0" }}>
      <motion.h1 style={{ fontSize: "3rem", color: "blue" }} initial={{ opacity: 0, y: -100, scale: 0.5 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
        Halo Wahyu! 🚀
      </motion.h1>
    </div>
  );
}

export default App;


import SkillsSection from './components/SkillsSection';
<SkillsSection />
