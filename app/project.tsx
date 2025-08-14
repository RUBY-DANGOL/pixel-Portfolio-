'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import projectsData from '../dump/projects.json';

type Project = {
  id: string | number;
  name: string;
  description: string;
  thumbnail: string;
  video: string;
};

export default function Project() {
  const projects = projectsData as Project[];

  return (
    <section className="min-h-screen px-6 py-10 text-stone-600">
      <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="flex gap-6 border bg-rose-100/40 backdrop-blur-md border-gray-300 p-4 duration-300 rounded-2xl overflow-hidden"
          >
            <Image
              src={project.thumbnail}
              alt={project.name}
              width={600}
              height={250}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4 bg-rose-100/40">
              <h2 className="text-lg text-stone-600 font-semibold mb-1">{project.name}</h2>
              <p className="text-sm text-stone-600 mb-4">{project.description}</p>
              <Link
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:underline text-sm"
              >
                ▶ Watch Demo
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
