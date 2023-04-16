import { ProjectRun } from '../types/ProjectRun';
import RunState from './RunState';

function RunsTable({ projectRuns: { runs } }: any) {
  if (runs.length === 0) {
    return <div>NO RUNS</div>;
  }
  return (
    <div></div>
    // <table className="table-fixed w-full">
    //   <thead className="text-left">
    //     <tr>
    //       <th>ID</th>
    //       <th>NAME</th>
    //       <th>STATE</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {projectRuns.map((run: ProjectRun) => {
    //       return <tr key={run.id}>
    //         <td>{run.id}</td>
    //         <td>
    //           <Link href={`/projects/${run.projectId}/runs/${run.id}`} key={run.id}>
    //             {run.name}
    //           </Link>
    //         </td>
    //         <td><RunState state={run.state} /></td>
    //       </tr>
    //     })}
    //   </tbody>
    // </table>
  );
}

export default RunsTable;
