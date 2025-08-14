'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import awards from '../dump/awards.json';

type Award = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

const awardsData = awards as Award[];

// Reusable motion variants
const fadeLeft = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function AboutMe() {
  return (
    <main className="w-full text-stone-600">
      {/* Hero and Title */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-12 md:px-24 py-16 gap-6">
        {/* Left text */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          {/* fix responsive order: grow with viewport */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Me</h1>

          <p className="text-sm leading-relaxed">
            I&apos;m a B.Tech student in <strong>Artificial Intelligence</strong> at{' '}
            <strong>Kathmandu University</strong>.<br />
            I specialize in <strong>full-stack development</strong> with React, FastAPI, and MySQL.
            <br />
            I love working on AI/ML, Robotics, and data-driven projects using Python.
          </p>
        </motion.div>

        {/* Right image */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[350px] h-[370px] shadow-xl border-4 border-gray-300 rounded-xl flex items-center justify-center"
          aria-hidden
        >
          <Image
            src="/hero.jpg"
            alt="Portrait / hero illustration"
            width={300}
            height={370}
            sizes="(min-width: 768px) 300px, 60vw"
            priority
            className="rounded-xl object-cover mx-auto"
          />
        </motion.div>
      </section>

      {/* Expertise */}
      <section className="px-6 sm:px-12 md:px-24 py-8 space-y-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold"
        >
          Areas of Expertise
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
        >
          {[
            'Data Collection',
            'UI/UX Design',
            'Backend (FastAPI)',
            'Database Design',
            'AI Model Development',
            'Data Analysis',
          ].map((skill) => (
            <span
              key={skill}
              className="p-2 px-4 rounded-lg border bg-rose-100/40 border-gray-300 text-center hover:bg-white/10 transition"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Awards */}
      <section className="px-6 sm:px-12 md:px-24 py-12 space-y-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold"
        >
          Awards &amp; Achievements
        </motion.h2>

        {awardsData.map((award, i) => (
          <motion.article
            key={`${award.title}-${i}`}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              show: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col md:flex-row items-center gap-6 border bg-rose-100/40 border-gray-300 rounded-xl p-4"
          >
            <Image
              src={award.image}
              alt={award.alt}
              width={240}
              height={140}
              sizes="(min-width: 768px) 240px, 80vw"
              className="rounded-md border object-cover"
            />
            <div>
              <h3 className="text-lg font-bold">{award.title}</h3>
              <p className="mt-2 text-sm">{award.description}</p>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
