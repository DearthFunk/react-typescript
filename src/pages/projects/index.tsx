import Link from 'next/link'

function ProjectsIndexPage() {
  return <div>
    <h2 className="underline py-2">Projects Page</h2>
    <ul>
      {PROJECTS.map((project: Project) => {
        return (
          <li key={project.id} className="p-2 mb-5 rounded-sm border-solid border-slate-200 border-2">
            <b>ID: {project.id}</b>
            &nbsp;-&nbsp;
            <Link href={"projects/" + project.id}>{project.name}</Link>
            <br /><br />
            {project.description}
          </li>
        )
      })}
    </ul>
  </div>
}

export default ProjectsIndexPage;


export interface Project {
  id: string, //TODO:  | void, // if void = unsaved/net-new project, causes downstream issues 
  name: string,
  description: string
}

export const PROJECTS: Project[] = [
  { id: '1', name: 'project one', description: 'the cool project' },
  { id: '2', name: 'project two', description: 'the coolest projects' },
  { id: '3', name: 'project three', description: 'no other projects are as cool as this one' }
] 
