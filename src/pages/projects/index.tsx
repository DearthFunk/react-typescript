import Link from 'next/link'

function ProjectsIndexPage() {
  return <div>
    <h1>ROOT PROJECTS PAGE</h1>
    <ul>
      {PROJECTS.map((project: Project) => {
        return (
          <li key={project.id}>
            <Link href={"projects/" + project.id}>{project.name}</Link>
          </li>
        )
      })}
    </ul>
  </div>
}

export default ProjectsIndexPage;


export interface Project {
  id: string, //TODO:  | void, // if void = unsaved/net-new project, causes downstream issues 
  name: string
}

export const PROJECTS: Project[] = [
  { id: '1', name: 'project one' },
  { id: '2', name: 'project two' },
  { id: '3', name: 'proejct three' }
] 
