import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { PROJECTS } from '../models/project-objects';
import { ProjectService } from '../models/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: Project [];

  constructor( private _projectService: ProjectService,
    private _router: Router) {

     }

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projects = this._projectService.getProjects();
  }

  navigateTo(url: string) {
    this._router.navigateByUrl('portfolio/' + url);
  }

}
