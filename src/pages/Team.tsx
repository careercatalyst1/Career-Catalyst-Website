import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export default function Team() {
    const team = [
        {
            name: 'Dr. Renukalatha S',
            role: 'Faculty Coordinator',
            department: 'Dean and HOD of CSE-Cyber Security Dept.',
            image: null,
            social: { linkedin: '#', twitter: '#' }
        },
        {
            name: 'Prem Ranjith Varma K',
            role: 'Student Coordinator',
            department: 'department of Cyber Security',
            image: '/prem-profile.jpg',
            social: { linkedin: 'https://www.linkedin.com/in/prem-ranjith-varma-k-b197bb370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: '#' }
        },
        {
            name: 'Rakshitha NP',
            role: 'Design Team',
            department: 'Dept. of CSE-Cyber Security',
            image: '/rakshitha-profile.jpg',
            social: { linkedin: 'https://www.linkedin.com/in/rakshitha-n-p-2671572b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: '#' }
        },
        {
            name: 'Varshini KS',
            role: 'Design Team',
            department: 'Dept. of CSE-Cyber Security',
            image: '/varshini-profile.jpg',
            social: { linkedin: 'https://www.linkedin.com/in/ks-varshini-74198631b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: '#' }
        },
        {
            name: 'Sushmitha R',
            role: 'Technical Team',
            department: 'Dept. of CSE-Cyber Security',
            image: null,
            social: { linkedin: 'https://www.linkedin.com/in/sushmitha-r-b9a072378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: '#' }
        },
        {
            name: 'Gagan MD',
            role: 'Technical Team',
            department: 'Dept. of CSE-Cyber Security',
            image: '/gagan-profile.jpg',
            social: { linkedin: 'https://in.linkedin.com/in/gagan-m-d-841589361', twitter: '#' }
        },
        {
            name: 'Hemanth Kumar',
            role: 'Technical Team',
            department: 'Dept. of CSE-Cyber Security',
            image: '/hemanth-profile.jpg',
            social: { linkedin: 'https://www.linkedin.com/in/hemanth-kumar-k-v-4203b4389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: '#' }
        },
        {
            name: 'Dhanya',
            role: 'Technical Team',
            department: 'Dept. of CSE-Cyber Security',
            image: '/dhanya-profile.jpg',
            social: { linkedin: 'https://www.linkedin.com/in/dhanya-kn-075a853a3?utm_source=share_via&utm_content=profile&utm_medium=member_android', twitter: '#' }
        },
        {
            name: 'Lakshmi',
            role: 'Social Media Team',
            department: 'Dept. of CSE-Cyber Security',
            image: '/lakshmi-profile.jpg',
            social: { linkedin: 'https://www.linkedin.com/in/lakshmi-m-568910395?utm_source=share_via&utm_content=profile&utm_medium=member_android', twitter: '#' }
        },
        {
            name: 'Srivallabha',
            role: 'Social Media Team',
            department: 'Dept. of CSE-Cyber Security',
            image: null,
            social: { linkedin: '#', twitter: '#' }
        },
        {
            name: 'Shreyas',
            role: 'Social Media Team',
            department: 'Dept. of CSE-Cyber Security',
            image: null,
            social: { linkedin: '#', twitter: '#' }
        },
        {
            name: 'Kadambari',
            role: 'Social Media Team',
            department: 'Dept. of CSE-Cyber Security',
            image: '/kadambari-profile.jpg',
            social: { linkedin: 'https://www.linkedin.com/in/kadambari-shivalingaiah-628238332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: '#' }
        },
        {
            name: 'Ayeman Zuha',
            role: 'Promotion Team',
            department: 'Dept. of CSE-Cyber Security',
            image: null,
            social: { linkedin: '#', twitter: '#' }
        },
        {
            name: 'Lekhana G',
            role: 'Promotion Team',
            department: 'Dept. of CSE-Cyber Security',
            image: '/lekhana-profile.jpg',
            social: { linkedin: 'https://www.linkedin.com/in/lekhana-g-62b043396?utm_source=share_via&utm_content=profile&utm_medium=member_android', twitter: '#' }
        },
        {
            name: 'Harshitha KS',
            role: 'Promotion Team',
            department: 'Dept. of CSE-Cyber Security',
            image: null,
            social: { linkedin: '#', twitter: '#' }
        },
        {
            name: 'Tanmeyi',
            role: 'Promotion Team',
            department: 'Dept. of CSE-Cyber Security',
            image: '/tanmeyi-profile.jpg',
            social: { linkedin: 'https://www.linkedin.com/in/thanmayi-k-9370863b0?utm_source=share_via&utm_content=profile&utm_medium=member_android', twitter: '#' }
        }
    ];

    return (
        <section className="relative py-24 bg-slate-950 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">Meet The Team</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our <span className="text-cyan-400">Coordinators</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                        Experienced professionals dedicated to guiding you through your career journey.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative p-6 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl text-center">
                                {member.image ? (
                                    <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg shadow-cyan-500/30" />
                                ) : (
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-cyan-500/30">
                                        {member.name.charAt(0)}
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-cyan-400 text-sm font-medium mb-1">{member.role}</p>
                                <p className="text-slate-500 text-xs mb-4">{member.department}</p>

                                <div className="flex items-center justify-center gap-3">
                                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-colors">
                                        <Linkedin className="w-4 h-4" />
                                    </a>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
