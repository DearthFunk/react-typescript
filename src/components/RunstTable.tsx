import { Link } from 'react-router-dom';
import { ProjectRun } from '../types/ProjectRun';
import RunState from './RunState';

interface RunsTableProps {
  projectRuns: ProjectRun[];
}

//Todo: I don't understand why the React.FC portion was needed here

const RunsTable: React.FC<RunsTableProps> = ({ projectRuns }) => {
  const hasNorProjectRuns = projectRuns.length === 0;
  if (hasNorProjectRuns) {
    return <div>NO RUNS</div>;
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
        {projectRuns.map((run: ProjectRun) => {
          return (
            <tr key={run.id}>
              <td>{run.id}</td>
              <td>
                <Link to={run.id} key={run.id}>
                  {run.name}
                </Link>
              </td>
              <td>
                <RunState state={run.state} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RunsTable;
