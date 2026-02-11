import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Mail, Phone, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', course: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="relative py-24 bg-slate-950 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-500/5 to-transparent" />
                <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">Get In Touch</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Join the <span className="text-cyan-400">Career Catalyst</span> Club
                        </h2>
                        <p className="text-slate-400 text-lg mb-8">
                            Take the first step towards your dream career. Fill out the form and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-white font-medium">Campus Location</div>
                                    <div className="text-slate-400 text-sm">Sri Siddhartha Institute of Technology, Saraswathipuram, Tumkur</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-white font-medium">Email Us</div>
                                    <div className="text-slate-400 text-sm">careercatalystclub@gmail.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-white font-medium">Call Us</div>
                                    <div className="text-slate-400 text-sm">+91 90192 46650</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-slate-500 text-sm">Follow us:</span>
                            <div className="flex gap-3">
                                {[
                                    { Icon: Linkedin, href: 'https://www.linkedin.com/in/career-catalyst-78b5483ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
                                    { Icon: Instagram, href: 'https://www.instagram.com/career_catalyst2k25?igsh=MWIzb3N0c2djdXNiYg==' }
                                ].map(({ Icon, href }, index) => (
                                    <a
                                        key={index}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl" />
                        <div className="relative p-8 bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                                        <CheckCircle className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                                    <p className="text-slate-400">We'll be in touch soon.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-slate-400 text-sm mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-400 text-sm mb-2">Email</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-slate-400 text-sm mb-2">Phone</label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-400 text-sm mb-2">Course</label>
                                            <select
                                                value={formData.course}
                                                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                                                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                            >
                                                <option value="">Select Course</option>
                                                <option value="btech">B.Tech</option>
                                                <option value="bca">BCA</option>
                                                <option value="mca">MCA</option>
                                                <option value="mba">MBA</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-slate-400 text-sm mb-2">Message</label>
                                        <textarea
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                            placeholder="Tell us about your career goals..."
                                        />
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
                                    >
                                        Submit Application
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
