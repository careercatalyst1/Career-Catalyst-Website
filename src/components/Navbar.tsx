import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Programs', path: '/programs' },
        { label: 'Journey', path: '/journey' },
        { label: 'Gallery', path: '/gallery' },
        { label: 'Achievements', path: '/achievements' },
        { label: 'Team', path: '/team' },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-cyan-500/10' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/">
                        <motion.div
                            className="flex items-center gap-3"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="relative">
                                <img src="/logo.png" alt="Career Catalyst Logo" className="w-24 h-24 rounded-xl object-contain" />
                            </div>
                            <div>
                                <span className="text-xl font-bold text-white tracking-tight">Career Catalyst</span>
                                <span className="text-sm text-cyan-400 ml-1 block">Club</span>
                            </div>
                        </motion.div>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.path}
                                className={cn(
                                    "text-sm font-medium transition-colors relative group",
                                    location.pathname === item.path ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
                                )}
                            >
                                <motion.span whileHover={{ y: -2 }} className="block">
                                    {item.label}
                                </motion.span>
                                {location.pathname === item.path && (
                                    <motion.span
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"
                                    />
                                )}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
                    >
                        Join Club <ArrowRight className="w-4 h-4" />
                    </motion.button>

                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800"
                    >
                        <div className="px-4 py-6 space-y-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className={cn(
                                        "block py-2 text-sm font-medium",
                                        location.pathname === item.path ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <button className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                                Join Club <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
