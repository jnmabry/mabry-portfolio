import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { PROJECTS } from '../models/project-objects';

@Injectable()
export class ProjectService {

  getProjects(): Project [] {
    return PROJECTS;
  }

}