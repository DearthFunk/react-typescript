import { RUN_STATE } from '../types/ProjectRun';

type RunStateProps = {
  state: RUN_STATE;
};

function RunState({ state }: RunStateProps) {
  return <div className={state}>{state}</div>;
}

export default RunState;
