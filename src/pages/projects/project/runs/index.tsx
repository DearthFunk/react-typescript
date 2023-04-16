import { useParams } from 'react-router-dom';
import { PROJECT_RUNS, ProjectRun } from '../../../../types/ProjectRun';
import RunsTable from '../../../../components/RunstTable';

function ProjectRunsIndexPage() {
  const { projectId } = useParams();
  const projectRuns: ProjectRun[] = PROJECT_RUNS.filter(
    (projectRun) => projectRun.projectId === projectId
  );
  const hasNoProjectRuns = projectRuns.length === 0;
  if (hasNoProjectRuns) {
    return <div>This project has no runs</div>;
  }

  return (
    <div>
      <RunsTable projectRuns={projectRuns} />
    </div>
  );
}

export default ProjectRunsIndexPage;
