import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export default function Journey() {
    const steps = [
        { number: '01', title: 'Registration', description: 'Join the Career Catalyst Club and get access to all resources and programs.' },
        { number: '02', title: 'Assessment', description: 'Take our comprehensive skills assessment to identify your strengths and areas for improvement.' },
        { number: '03', title: 'Training', description: 'Enroll in personalized training programs tailored to your career goals.' },
        { number: '04', title: 'Mock Interviews', description: 'Practice with real-world interview scenarios and get expert feedback.' },
        { number: '05', title: 'Placement', description: 'Access exclusive job opportunities and crack your dream placement.' },
        { number: '06', title: 'Success', description: 'Launch your career with confidence and achieve your professional goals.' },
    ];

    return (
        <section className="relative py-24 bg-slate-950 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">Your Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Placement <span className="text-cyan-400">Path</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                        A structured pathway from joining to landing your dream job.
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 transform -translate-x-1/2" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    'relative flex items-center',
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                )}
                            >
                                <div className={cn(
                                    'flex-1',
                                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                                )}>
                                    <div className="p-6 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all">
                                        <span className="text-5xl font-bold text-cyan-500/20">{step.number}</span>
                                        <h3 className="text-xl font-bold text-white mt-2 mb-2">{step.title}</h3>
                                        <p className="text-slate-400 text-sm">{step.description}</p>
                                    </div>
                                </div>

                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 z-10">
                                    <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75" />
                                </div>

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
