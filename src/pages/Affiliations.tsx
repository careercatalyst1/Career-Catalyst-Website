import { motion } from 'framer-motion';

export default function Affiliations() {
    const companies = [
        { name: 'Google', logo: null },
        { name: 'Microsoft', logo: null },
        { name: 'Amazon', logo: null },
        { name: 'Meta', logo: null },
        { name: 'Apple', logo: null },
        { name: 'Netflix', logo: null },
        { name: 'Adobe', logo: null },
        { name: 'Salesforce', logo: null },
    ];

    return (
        <section className="relative py-20 bg-slate-900 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">Our Partners</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                        Trusted by Industry Leaders
                    </h2>
                </motion.div>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group"
                        >
                            <div className="px-8 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-cyan-500/30 transition-all cursor-pointer">
                                <div className="w-32 h-12 flex items-center justify-center">
                                    <div className="text-xl font-bold text-slate-500 group-hover:text-white transition-colors">
                                        {company.name}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
