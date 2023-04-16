import RunsTable from '../../../../components/RunstTable';
import { PROJECTS } from '../../../../types/Project';
import { PROJECT_RUNS, ProjectRun } from '../../../../types/ProjectRun';

function ProjectRunsIndexPage(runs: any) {
  return (
    <div>
      <RunsTable runs={runs} />
    </div>
  );
}

export async function getStaticPaths() {
  let paths = PROJECTS.map((project) => {
    return { params: { projectId: project.id } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { projectId: string } }) {
  let projectRuns = PROJECT_RUNS.filter(
    (projectRun: ProjectRun) => projectRun.projectId === params.projectId
  );
  return { props: { projectRuns } };
}

export default ProjectRunsIndexPage;
