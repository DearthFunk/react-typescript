import { Project, PROJECTS } from '../../../types/Project';
import { Link, useParams } from 'react-router-dom';

function ProjectPage() {
  const { projectId } = useParams();
  const project: Project | undefined = PROJECTS.find(
    (project) => project.id === projectId
  );
  if (!project) {
    return <div>PROJECT NOT FOUND</div>;
  }

  const { runs } = project;
  const hasRuns = runs.length > 0;

  return (
    <div>
      <div>name: {project.name} </div>
      <div>id: {project.id} </div>
      <div>description: {project.description}</div>
      <div>
        total runs: {project.runs.length}
        {hasRuns ? (
          <Link to={'runs'} className="px-2">
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
