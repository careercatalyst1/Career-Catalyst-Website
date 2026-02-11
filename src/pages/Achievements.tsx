import { motion } from 'framer-motion';
import { Users, TrendingUp, Building2, Award } from 'lucide-react';

export default function Achievements() {
    const stats = [
        { value: '500+', label: 'Students Placed', icon: <Users className="w-6 h-6" />, suffix: '' },
        { value: '95%', label: 'Success Rate', icon: <TrendingUp className="w-6 h-6" />, suffix: '' },
        { value: '100+', label: 'Partner Companies', icon: <Building2 className="w-6 h-6" />, suffix: '' },
        { value: '10+', label: 'LPA Highest Package', icon: <Award className="w-6 h-6" />, suffix: 'L' },
    ];

    return (
        <section className="relative py-24 bg-slate-900 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">Our Impact</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Achievements & <span className="text-cyan-400">Success</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative p-6 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl text-center">
                                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {stat.value}{stat.suffix}
                                </div>
                                <div className="text-slate-400 text-sm">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
