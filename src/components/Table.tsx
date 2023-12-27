import { List } from '../types/list';

interface Props {
  toDoList: List[];
}

export default function Table({ toDoList }: Props) {
  if (!toDoList.length) return <h3>No tasks so far</h3>;

  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped table-hover">
        <tbody>
          {toDoList.map((task) => {
            return (
              <tr key={task.index}>
                <td>{task.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
