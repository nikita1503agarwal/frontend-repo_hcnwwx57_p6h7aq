import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Results from './components/Results';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Results />
      <Integrations />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <footer className="py-10 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500" />
            <span className="font-semibold">ClickGram.io</span>
          </div>
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} ClickGram. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
