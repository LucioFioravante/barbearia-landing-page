import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const SectionTitle = ({ title, subtitle }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeUp}
    className="text-center mb-16"
  >
    <h2 className="font-sans text-4xl md:text-5xl font-bold text-zinc-50 leading-tight">
      {title}
    </h2>
    {subtitle && <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-24 h-1 bg-amber-500 mx-auto mt-8"></div>
  </motion.div>
);

export default SectionTitle;