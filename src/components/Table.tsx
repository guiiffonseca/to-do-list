import { List } from '../types/list';

interface Props {
  toDoList: List[];
}

export default function Table({ toDoList }: Props) {
  if (!toDoList.length) return <h3>No tasks so far</h3>;

  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <td>ID</td>
            <td>Task</td>
            <td>Date</td>
            <td>Hour</td>
          </tr>
        </thead>
        <tbody>
          {toDoList.map((task) => {
            return (
              <tr key={task.index}>
                <td key={task.index}>{task.index}</td>
                <td key={task.index}>{task.name}</td>
                <td key={task.index}>{task.date}</td>
                <td key={task.index}>{task.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
