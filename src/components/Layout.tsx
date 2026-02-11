import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Canvas } from '@react-three/fiber';
import Scene3D from './Scene3D';
import { Suspense, useState, useEffect } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

function CSSFallbackBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
    );
}

function Scene3DCanvas() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <Suspense fallback={null}>
                    <Scene3D />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default function Layout() {
    const [showCanvas, setShowCanvas] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowCanvas(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-slate-900 text-white selection:bg-cyan-500/30">
            <ErrorBoundary fallback={<CSSFallbackBackground />}>
                {showCanvas ? <Scene3DCanvas /> : <CSSFallbackBackground />}
            </ErrorBoundary>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}

