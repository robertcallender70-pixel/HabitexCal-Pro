import React from 'react';
import ProjectManager from './components/ProjectManager';
import { LogoIcon } from './constants';
import { initDataLibrary } from './services/database';

const App: React.FC = () => {
    React.useEffect(() => {
        // Ensure the data library is populated on first load
        initDataLibrary();
    }, []);
    
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            <header className="bg-white shadow-md sticky top-0 z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3">
                            <LogoIcon className="h-8 w-8 text-cyan-600" />
                            <h1 className="text-2xl font-bold text-slate-700 tracking-tight">
                                Habitex <span className="font-light text-cyan-600">Calcula</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <ProjectManager />
            </main>
            <footer className="text-center py-4 text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} Habitex. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default App;