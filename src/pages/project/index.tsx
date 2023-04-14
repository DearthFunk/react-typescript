import Link from 'next/link'
import { Project, PROJECTS } from '../../types/project';

function ProjectIndexPage() {
  return <div>
    <h2 className="underline py-2">Projects Page</h2>
    <ul>
      {PROJECTS.map((project: Project) => {
        return (
          <li key={project.id} className="p-2 mb-5 rounded-sm border-solid border-slate-200 border-2">
            <b>ID: {project.id}</b>
            &nbsp;-&nbsp;
            <Link href={"project/" + project.id}>{project.name}</Link>
            <br /><br />
            {project.description}
          </li>
        )
      })}
    </ul>
  </div>
}

export default ProjectIndexPage;
