import { Project, PROJECTS } from '../../../types/Project';
import { Link } from 'react-router-dom';

function ProjectPage() {
  const project: Project | undefined = PROJECTS.find(
    (project) => project.id === '1'
  );
  const hasRuns = false; //!!project?.runs?.length ?? false;

  if (!project) {
    return <div>PROJECT NOT FOUND</div>;
  }
  return (
    <div>
      <div>name: {project.name} </div>
      <div>id: {project.id} </div>
      <div>description: {project.description}</div>
      <div>
        total runs: {project.runs.length}
        {hasRuns ? (
          <Link to={`${project.id}/runs`} className="px-2">
            View Runs
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default ProjectPage;
