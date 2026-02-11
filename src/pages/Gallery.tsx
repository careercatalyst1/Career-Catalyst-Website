import { motion } from 'framer-motion';

export default function Gallery() {
    return (
        <section className="relative py-24 bg-slate-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">Our Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Project <span className="text-cyan-400">Gallery</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                        A curated selection of our most impactful work, demonstrating our commitment to quality and creative excellence. Explore the projects where our vision and expertise come to life.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
