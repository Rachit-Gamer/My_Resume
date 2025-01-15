import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getSkills() {
    return [
      'Java', 'Python', 'C++', 'C#', 'SQL', 'JavaScript', 'HTML', 'CSS'
    ];
  }

  getProjects() {
    return [
      {
        title: 'Spring Boot Microservices Project',
        description: 'Distributed, scalable e-commerce platform using microservices architecture.',
        techStack: 'Spring Boot, Docker, Kubernetes, RabbitMQ, MySQL',
      },
      {
        title: 'Fluid Simulation Using SPH',
        description: 'Realistic fluid simulation leveraging Simulated Particle Hydrodynamics (SPH).',
        techStack: 'Unity, GLSL, GPU Instancing, SPH Algorithms',
      },
      {
        title: 'WhatsApp Chat Analyzer',
        description: 'Comprehensive platform for analyzing WhatsApp conversations.',
        techStack: 'Python, Pandas, Matplotlib, WordCloud',
      },
    ];
  }
}
