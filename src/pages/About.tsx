import { motion } from 'framer-motion';
import { Target, Lightbulb, Handshake } from 'lucide-react';

export default function About() {
    return (
        <section className="relative py-24 bg-slate-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">About Us</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Shaping Future <span className="text-cyan-400">Leaders</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                        We are a dynamic community dedicated to bridging the gap between academic excellence and professional success.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Target className="w-8 h-8" />,
                            title: 'Our Vision',
                            description: 'To be the premier catalyst for student career transformation, creating industry-ready professionals who lead with confidence and innovation.',
                            gradient: 'from-cyan-500 to-blue-600'
                        },
                        {
                            icon: <Lightbulb className="w-8 h-8" />,
                            title: 'Our Mission',
                            description: 'Empowering students with practical skills, industry exposure, and placement opportunities through comprehensive training and mentorship programs.',
                            gradient: 'from-purple-500 to-pink-600'
                        },
                        {
                            icon: <Handshake className="w-8 h-8" />,
                            title: 'Our Promise',
                            description: 'Commitment to excellence, integrity, and personalized career guidance that transforms aspirations into measurable achievements.',
                            gradient: 'from-emerald-500 to-teal-600'
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" style={{ background: `linear-gradient(to bottom right, ${item.gradient.replace('from-', '').replace('to-', ',')})` }} />
                            <div className="relative p-8 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 text-white shadow-lg`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
