import { ProjectRun, PROJECT_RUNS } from './ProjectRun';

export interface Project {
  id: string; //TODO:  | void, // if void = unsaved/net-new project, causes downstream issues
  name: string;
  description: string;
  runs: ProjectRun[];
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'project one',
    description: 'the cool project',
    runs: [PROJECT_RUNS[0], PROJECT_RUNS[1]],
  },
  {
    id: '2',
    name: 'project two',
    description: 'the coolest project',
    runs: [PROJECT_RUNS[2]],
  },
  {
    id: '3',
    name: 'project three',
    description: 'no other projects are as cool as this one',
    runs: [],
  },
];
