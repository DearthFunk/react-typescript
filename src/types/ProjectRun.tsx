export interface ProjectRun {
  id: string; //TODO:  | void, // if void = unsaved/net-new project, causes downstream issues
  projectId: string;
  name: string;
  state: RUN_STATE;
}

export enum RUN_STATE {
  FAIL = 'Fail',
  PASS = 'Pass',
  STALL = 'Stall',
}

export const PROJECT_RUNS: ProjectRun[] = [
  { id: '1', projectId: '1', name: 'run 1 for project 1', state: RUN_STATE.FAIL },
  { id: '2', projectId: '1', name: 'run 2 for project 1', state: RUN_STATE.PASS },
  { id: '3', projectId: '2', name: 'run 1 for project 2', state: RUN_STATE.STALL },
];
