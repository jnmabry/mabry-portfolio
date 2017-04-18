import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { PROJECTS } from '../models/project-objects';
import { ProjectService } from '../models/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: Project [];

  constructor( private _projectService: ProjectService) { }

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projects = this._projectService.getProjects();
  }

}
