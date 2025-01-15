import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getSkills() {
    return ['Java', 'Angular', 'Spring Boot', 'TypeScript', 'Python'];
  }

  getProjects() {
    return [
      { name: 'Fluid Simulation', description: 'A physics-based simulation project.' },
      { name: 'WhatsApp Chat Analysis', description: 'Deployed with Heroku.' },
    ];
  }
}
