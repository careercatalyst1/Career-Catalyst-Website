import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ArrowRight, Users, Building2, Award, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-20">
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 max-w-6xl mx-auto px-4 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
                        <Star className="w-4 h-4" /> Premier Placement Cell
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-1">
                        Sri Siddhartha Institute of Technology
                    </h2>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                        Department of CSE-Cyber Security
                    </h2>
                    <h3 className="text-2xl md:text-4xl font-semibold text-cyan-400">
                        Placement Asst. Club
                    </h3>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
                >
                    Launch Your{' '}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Career
                    </span>
                    <br />
                    With Confidence
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10"
                >
                    Empowering students with industry-ready skills, mentorship, and placement opportunities that transform aspirations into achievements.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-full shadow-lg shadow-cyan-500/25"
                    >
                        Join Club
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <Link to="/programs">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-all"
                        >
                            Explore Programs
                        </motion.button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-16 flex items-center justify-center gap-8 text-slate-500"
                >
                    <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm">500+ Students Placed</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm">100+ Partner Companies</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm">95% Success Rate</span>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-cyan-400"
                >
                    <ChevronDown className="w-8 h-8" />
                </motion.div>
            </motion.div>
        </section>
    );
}
