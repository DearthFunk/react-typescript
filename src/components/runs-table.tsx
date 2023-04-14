import { ProjectRun } from '@/types/project-run';
import RunState from './run-state';
import Link from 'next/link';

type RunsTableProps = {
  runs: ProjectRun[]
}

function RunsTable({ runs }: RunsTableProps) {
  if (runs.length === 0) {
    return <div>NO RUNS</div>
  }
  return (
    <table className="table-fixed w-full">
      <thead className="text-left">
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>STATE</th>
        </tr>
      </thead>
      <tbody>
        {runs.map((run) => {
          return <tr key={run.id}>
            <td>{run.id}</td>
            <td>
              <Link href={`/project/${run.projectId}/run/${run.id}`} key={run.id}>
                {run.name}
              </Link>
            </td>
            <td><RunState state={run.state} /></td>
          </tr>
        })}
      </tbody>
    </table>
  )
}

export default RunsTable;
