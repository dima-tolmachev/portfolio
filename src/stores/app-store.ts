import data from '../aboutme.json';
import { makeAutoObservable } from 'mobx';
import { projectObject } from '../@types/project';
import { contact } from '../@types/contact';
import { carousel } from '../@types/carousel';

class AppStore {
  projectID: number = 0;
  projectsList: projectObject[] = data.projects;
  order: number = 1;
  contacts: contact[] = data.contacts;
  programmingLanguages: carousel[] = data['programming-languages'];
  technologies: carousel[] = data['technologies'];

  constructor() {
    makeAutoObservable(this);
  }
}

export const appStore = new AppStore();
