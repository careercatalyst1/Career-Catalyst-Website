import { motion } from 'framer-motion';
import { BookOpen, Rocket, Mic, Building2, Calendar, ChevronRight } from 'lucide-react';

export default function Programs() {
    const programs = [
        {
            category: 'Workshops',
            items: [
                { title: 'Resume Writing Masterclass', duration: '2 Hours', level: 'Beginner' },
                { title: 'Aptitude Bootcamp', duration: '1 Day', level: 'All Levels' },
                { title: 'Python for Placements', duration: '1 Week', level: 'Intermediate' },
            ],
            icon: <BookOpen className="w-6 h-6" />,
            gradient: 'from-cyan-500 to-blue-600'
        },
        {
            category: 'Bootcamps',
            items: [
                { title: 'Full Stack Development', duration: '8 Weeks', level: 'Advanced' },
                { title: 'Data Science Fundamentals', duration: '6 Weeks', level: 'Intermediate' },
                { title: 'Cloud Computing Essentials', duration: '4 Weeks', level: 'Intermediate' },
            ],
            icon: <Rocket className="w-6 h-6" />,
            gradient: 'from-purple-500 to-pink-600'
        },
        {
            category: 'Guest Lectures',
            items: [
                { title: 'Industry Trends 2024', duration: '2 Hours', level: 'All Levels' },
                { title: 'Success Stories from Alumni', duration: '3 Hours', level: 'All Levels' },
                { title: 'Tech Giants Recruitment Process', duration: '2 Hours', level: 'Advanced' },
            ],
            icon: <Mic className="w-6 h-6" />,
            gradient: 'from-emerald-500 to-teal-600'
        },
        {
            category: 'Industry Sessions',
            items: [
                { title: 'Company Recruitment Drives', duration: '1 Day', level: 'All Levels' },
                { title: 'HR Networking Events', duration: '3 Hours', level: 'Intermediate' },
                { title: 'Technical Interview Panels', duration: '4 Hours', level: 'Advanced' },
            ],
            icon: <Building2 className="w-6 h-6" />,
            gradient: 'from-orange-500 to-red-600'
        },
    ];

    return (
        <section className="relative py-24 bg-slate-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">Programs & Activities</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Learning <span className="text-cyan-400">Opportunities</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                        Structured programs designed to accelerate your career growth and make you industry-ready.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.category}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl bg-gradient-to-br from-slate-700/50" />
                            <div className="relative p-8 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${program.gradient} flex items-center justify-center text-white shadow-lg`}>
                                        {program.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{program.category}</h3>
                                </div>

                                <div className="space-y-4">
                                    {program.items.map((item) => (
                                        <div key={item.title} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl hover:bg-slate-900/80 transition-colors cursor-pointer group/item">
                                            <div>
                                                <h4 className="text-white font-medium">{item.title}</h4>
                                                <div className="flex items-center gap-3 mt-1">
                                                    <span className="text-xs text-slate-500 flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" /> {item.duration}
                                                    </span>
                                                    <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400">
                                                        {item.level}
                                                    </span>
                                                </div>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-slate-600 group-hover/item:text-cyan-400 transition-colors" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
