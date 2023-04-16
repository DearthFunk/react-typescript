
import { ProjectRun, PROJECT_RUNS } from '../../../../types/ProjectRun';

function ProjectRunsPage({ name, id }: ProjectRun) {
  return <div>
    <div>name: {name} </div>
    <div>id: {id} </div>
  </div>
}

export async function getStaticPaths() {
  let paths = PROJECT_RUNS.map((projectRun) => {
    return { params: {id: projectRun.id} };
  });
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { id: string }}) {
  let projectRun = PROJECT_RUNS.find((projectRun) => projectRun.id === params.id);
  return { props: projectRun };
}

export default ProjectRunsPage;
