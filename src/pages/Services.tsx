import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Mic, Code, Users, TrendingUp, CheckCircle } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: 'Placement Training',
            description: 'Comprehensive training programs designed to make you industry-ready with aptitude, technical, and interview preparation.',
            features: ['Aptitude Tests', 'Group Discussions', 'Personal Interviews'],
            color: 'cyan'
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: 'Resume Building',
            description: 'Expert guidance to craft professional resumes that stand out and highlight your unique strengths and achievements.',
            features: ['Resume Workshops', 'LinkedIn Optimization', 'Profile Enhancement'],
            color: 'blue'
        },
        {
            icon: <Mic className="w-8 h-8" />,
            title: 'Mock Interviews',
            description: 'Real-world interview simulations with industry professionals to build confidence and perfect your responses.',
            features: ['Technical Rounds', 'HR Interviews', 'Feedback Sessions'],
            color: 'purple'
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: 'Technical Preparation',
            description: 'Intensive coding practice and technical skill development tailored to your career aspirations.',
            features: ['Data Structures', 'System Design', 'Coding Challenges'],
            color: 'emerald'
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: 'Industry Mentorship',
            description: 'Connect with experienced professionals who provide valuable insights and guidance for your career journey.',
            features: ['1-on-1 Mentoring', 'Career Counseling', 'Industry Insights'],
            color: 'orange'
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: 'Career Analytics',
            description: 'Data-driven insights to track your progress and optimize your placement strategy for better outcomes.',
            features: ['Progress Tracking', 'Market Analysis', 'Success Metrics'],
            color: 'pink'
        }
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
            cyan: { bg: 'bg-cyan-500', text: 'text-cyan-400', border: 'border-cyan-500/30', glow: 'shadow-cyan-500/20' },
            blue: { bg: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500/30', glow: 'shadow-blue-500/20' },
            purple: { bg: 'bg-purple-500', text: 'text-purple-400', border: 'border-purple-500/30', glow: 'shadow-purple-500/20' },
            emerald: { bg: 'bg-emerald-500', text: 'text-emerald-400', border: 'border-emerald-500/30', glow: 'shadow-emerald-500/20' },
            orange: { bg: 'bg-orange-500', text: 'text-orange-400', border: 'border-orange-500/30', glow: 'shadow-orange-500/20' },
            pink: { bg: 'bg-pink-500', text: 'text-pink-400', border: 'border-pink-500/30', glow: 'shadow-pink-500/20' },
        };
        return colors[color] || colors.cyan;
    };

    return (
        <section className="relative py-24 bg-slate-950 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">What We Offer</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Comprehensive <span className="text-cyan-400">Services</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                        End-to-end placement support with everything you need to land your dream job.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const colors = getColorClasses(service.color);
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, rotateX: 5 }}
                                className="group perspective-1000"
                            >
                                <div className="relative h-full p-8 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl hover:border-slate-700 transition-all duration-500">
                                    <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                                    <div className="relative">
                                        <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-6 text-white shadow-lg ${colors.glow}`}>
                                            {service.icon}
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">{service.description}</p>

                                        <ul className="space-y-2">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                                                    <CheckCircle className={`w-4 h-4 ${colors.text}`} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
