'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import awards from '../dump/awards.json'

export default function AboutMe() {
  return (
    <div className="w-full  text-stone-600">
      {/* Hero and Title Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-12 md:px-24 py-16 gap-6">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-2xl font-bold mb-4">About Me</h1>
          <p className="text-sm  leading-relaxed">
            I'm a B.Tech student in <strong>Artificial Intelligence</strong> at <strong>Kathmandu University</strong>.<br />
            I specialize in <strong>full-stack development</strong> with React, FastAPI, and MySQL. <br />
            I love working on AI/ML, Robotics, and data-driven projects using Python.
          </p>
        </motion.div>

        {/* Right Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[350px] h-[370px] shadow-xl border-4 border-gray-300 rectangle-full flex items-center justify-center"
        >
          <Image
            src="/hero.jpg"
            alt="Hero"
            width={300}
            height={370}
            className="rounded-xl object-contain mx-auto"
          />
        </motion.div>
      </section>

      {/* Expertise Section */}
      <section className="px-6 sm:px-12 md:px-24 py-8 space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold "
        >
          Areas of Expertise
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm bg-transparent"
        >
          {[
            'Data Collection',
            'UI/UX Design',
            'Backend (FastAPI)',
            'Database Design',
            'AI Model Development',
            'Data Analysis'
          ].map((skill, i) => (
            <span
              key={i}
              className="p-2 px-4 rounded-lg border bg-rose-100/40  border-gray-300 text-center hover:bg-white/10 transition"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section className="px-6 sm:px-12 md:px-24 py-12 space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold"
        >
           Awards & Achievements
        </motion.h2>

        {awards.map((award, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="flex flex-col md:flex-row items-center gap-6 border bg-rose-100/40 border-gray-300 rounded-xl p-4"
        >
          <Image
            src={award.image}
            alt={award.alt}
            width={240}
            height={140}
            className="rounded-md border"
          />
          <div>
            <h3 className="text-l font-bold">{award.title}</h3>
            <p className="mt-2 text-sm">{award.description}</p>
          </div>
        </motion.div>
      ))}

      </section>
    </div>
  )
}
