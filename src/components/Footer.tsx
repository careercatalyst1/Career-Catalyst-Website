import { Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const quickLinks = [
        { label: 'About Us', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Programs', path: '/programs' },
        { label: 'Achievements', path: '/achievements' },
        { label: 'Team', path: '/team' },
        { label: 'Contact', path: '/contact' }
    ];

    return (
        <footer className="relative bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/logo.png" alt="Career Catalyst Logo" className="w-24 h-24 rounded-xl object-contain" />
                            <div>
                                <span className="text-xl font-bold text-white">Career Catalyst</span>
                                <span className="text-sm text-cyan-400 ml-1 block">Club</span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm max-w-md mb-4">
                            Empowering students to achieve their career aspirations through comprehensive training, mentorship, and placement support.
                        </p>
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

                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.path} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact Info</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-400 text-sm">
                                <MapPin className="w-4 h-4 text-cyan-400" />
                                Sri Siddhartha Institute of Technology, Saraswathipuram, Tumkur
                            </li>
                            <li className="flex items-center gap-2 text-slate-400 text-sm">
                                <Mail className="w-4 h-4 text-cyan-400" />
                                careercatalystclub@gmail.com
                            </li>
                            <li className="flex items-center gap-2 text-slate-400 text-sm">
                                <Phone className="w-4 h-4 text-cyan-400" />
                                +91 90192 46650
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2024 Career Catalyst Club. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                        <Link to="#" className="text-slate-500 hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                        <Link to="#" className="text-slate-500 hover:text-cyan-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
