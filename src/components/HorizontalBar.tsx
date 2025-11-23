import { motion } from "framer-motion";

export default function HorizontalBar() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="border-t border-[var(--primary-accent)]/20 pt-8"
        ></motion.div>
    );
}