import RunsTable from '@/components/runs-table';
import { Project, PROJECTS } from '../../types/project';

function ProjectPage({ name, id, description, runs }: Project) {
  return <div>
    <div>name: {name} </div>
    <div>id: {id ? id : 'new project'} </div>
    <div>description: {description}</div>
    <div>total runs: {runs.length}</div>

    <hr className="my-10" />
    <RunsTable runs={runs} />
  </div>
}

export async function getStaticPaths() {
  let paths = PROJECTS.map((project) => {
    return { params: {id: project.id} };
  });
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { id: string }}) {
  let project = PROJECTS.find((project) => project.id === params.id);
  return { props: project };
}

export default ProjectPage;


