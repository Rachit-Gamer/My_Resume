import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {
  skills: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.skills = this.dataService.getSkills();
  }
}
