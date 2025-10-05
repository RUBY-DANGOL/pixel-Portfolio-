'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import AboutMe from './aboutme';
import Project from './project';
import Hobby from './hobby';
import Contact from './contact';
import '@/app/globals.css'


export default function Page() {
  const [time, setTime] = useState('');
  const city = 'Nepal';

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const now = new Date();
    setTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }));
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
      if (audio.duration > 0) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    if (audio) {
      audio.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div
      className="min-h-screen text-stone-600 font-pixel overflow-x-hidden scroll-smooth"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <section className="min-h-screen relative pb-28 pt-4 px-6 sm:px-12 md:px-24 py-8">
        <div className="w-full border border-black rounded-3xl bg-rose-100/40 backdrop-blur-md py-7 px-8 flex flex-col items-center justify-center space-y-2">
          <h1 className="text-xl font-extrabold tracking-wide text-center">
            Rubina Dangol Maharjan
          </h1>

          <div className="text-l text-center ">
            <span>{city} </span>
            <span className="font-semibold" suppressHydrationWarning>{time}</span>
            <span className="ml-1">🌤️</span>
          </div>
        </div>

        <main className="grid grid-cols-1 md:grid-cols-5 items-center px-6 sm:px-12 md:px-24 lg:px-32 min-h-[80vh] relative pt-10 sm:pt-0 gap-10 space-y-2">
          <section className="text-left text-[clamp(1rem,8vw,4rem)] tracking-tighter font-black max-w-2xl w-full col-span-3">
            <h1 className="leading-none">
              <span className="block">A Journey</span>
              <span className="block">of</span>
              <span className="block">Curiosity</span>
            </h1>

            <p className="mt-6 text-sm leading-snug font-normal not-italic tracking-normal">
              Full-Stack Developer | AI Engineer<br />
              Interested in Robotics<br />
              <span className="text-sm text-stone-400 font-normal non-italic">
                There are no experts. There&apos;s only us.
              </span>
            </p>

            <div className="flex justify-start mt-3">
              <a
                href="/ruby-resume.pdf"
                download
                className="inline-flex h-10 px-5 items-center justify-center text-sm font-semibold bg-rose-100/60 text-stone-600 border-4 border-gray-300 shadow-[4px_4px_0_0_black] hover:shadow-[2px_2px_0_0_black] active:shadow-none transition-all"
              >
                Download Resume
              </a>
            </div>
          </section>

          <div className="w-full flex justify-start pr-24">
          <div className="w-[360px] border border-black rounded-3xl bg-rose-100/70 backdrop-blur-md 
                          py-4 px-4 mt-4 flex flex-col items-center space-y-6 shadow-[6px_6px_0_0_rgba(0,0,0,0.8)] 
                          hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.8)] transition-all duration-200">

            {/* --- Spinning CD --- */}
            <div className="relative flex justify-center items-center mt-[-10px] mb-0">
              <div
                className={`cd ${isPlaying ? 'running' : 'paused'}`}
                style={{
                  width: '400px',
                  height: '400px',
                  display: 'inline-block',
                }}
              >
                <Image
                  src="/cd.png"
                  alt="Rotating CD"
                  fill
                  className="object-contain rounded-full drop-shadow-lg"
                />
              </div>

              <style jsx>{`
                .cd {
                  border-radius: 9999px;
                  animation: spin 7s linear infinite;
                  transform-origin: center center;
                }
                .paused {
                  animation-play-state: paused;
                }
                .running {
                  animation-play-state: running;
                }
                @keyframes spin {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(360deg);
                  }
                }
              `}</style>
            </div>


            {/* --- Controls Section --- */}
            <div className="w-full flex flex-col items-center space-y-4">

              {/* Audio element */}
              <audio
                ref={audioRef}
                src="/song.mp3"
                preload="auto"
                loop
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={() => {
                  if (audioRef.current) setDuration(audioRef.current.duration);
                }}
              />

              {/* --- Play/Pause Button --- */}
              <button
                onClick={togglePlay}
                className="w-36 h-12 flex items-center justify-center bg-rose-200/80 text-stone-700 border-4 border-gray-300 
                          shadow-[4px_4px_0_0_black] hover:shadow-[2px_2px_0_0_black] active:shadow-none 
                          transition-all font-pixel text-lg rounded-md"
              >
                {isPlaying ? 'Pause' : 'Play'}
              </button>

              {/* --- Progress Bar --- */}
              <div className="w-full max-w-md text-center text-stone-700 space-y-2">
                <div className="font-pixel text-base tracking-wide">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleSeek}
                  className="w-full h-1 rounded-full bg-gray-300 accent-stone-700 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
              </div>

              {/* --- Volume Control --- */}
              <div className="w-full max-w-md flex items-center space-x-4">
                <label htmlFor="volume" className="font-pixel text-base text-stone-700 whitespace-nowrap">
                  Volume
                </label>
                <input
                  id="volume"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1 rounded-full bg-gray-300 accent-stone-700 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
              </div>
            </div>
          </div>
        </div>


   
        </main>

        <div className="h-16 sm:h-24 bg-transparent"></div>

        <section id="about" className="scroll-mt-24 sm:scroll-mt-6 transition-all duration-700 ease-in-out">
          <AboutMe />
        </section>
        <section id="project"><Project /></section>
        <section id="hobby"><Hobby /></section>
        <section id="contact"><Contact /></section>

        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-rose-100/60 shadow-md border border-gray-300 rounded-2xl px-4 py-3 flex justify-center space-x-6 z-50">
          <a href="#"><Image src="/page.png" alt="Home" width={20} height={20} className="cursor-pointer rounded-lg" /></a>
          <a href="#about"><Image src="/about.png" alt="About" width={20} height={20} className="cursor-pointer rounded-lg" /></a>
          <a href="#project"><Image src="/project.png" alt="Project" width={20} height={20} className="cursor-pointer rounded-lg" /></a>
          <a href="#hobby"><Image src="/hobby.png" alt="Hobby" width={20} height={20} className="cursor-pointer rounded-lg" /></a>
          <a href="#contact"><Image src="/contact.png" alt="Contact" width={20} height={20} className="cursor-pointer rounded-lg" /></a>
        </div>

        
      </section>
    </div>
  );
}
