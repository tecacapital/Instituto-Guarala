import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Courses } from '@/components/sections/Courses';
import { Benefits } from '@/components/sections/Benefits';
import { Contact } from '@/components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}