import { PROJECTS } from './index';
import { Project } from './index';

function ProjectsPage({ name, id }: Project) {
  return <div>
      <div>name: {name} </div>
      <div>id: {id ? id : 'new project'} </div>
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

export default ProjectsPage;


