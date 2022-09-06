import data from '../aboutme.json';
import { makeAutoObservable } from 'mobx';
import { projectObject } from '../@types/project';
import { carousel } from '../@types/carousel';

class AppStore {
  projectID: number = 0;
  projectsList: projectObject[] = data.projects;
  order: number = 1;
  contacts: carousel[] = data['contacts'];
  programmingLanguages: carousel[] = data['programming-languages'];
  technologies: carousel[] = data['technologies'];

  constructor() {
    makeAutoObservable(this);
  }
}

export const appStore = new AppStore();
