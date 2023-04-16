import { useParams } from 'react-router-dom';
import { ProjectRun, PROJECT_RUNS } from '../../../../types/ProjectRun';

function ProjectRunPage() {
  const { runId } = useParams();
  const projectRun: ProjectRun | undefined = PROJECT_RUNS.find(
    (projectRun) => projectRun.id === runId
  );
  if (!projectRun) {
    return <div>Project Run Not Found</div>;
  }
  return (
    <div>
      <div>name: {projectRun.name} </div>
      <div>id: {projectRun.id} </div>
    </div>
  );
}

export default ProjectRunPage;
