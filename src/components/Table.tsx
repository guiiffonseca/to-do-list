import { SlPencil } from 'react-icons/sl';
import { AiOutlineDelete } from 'react-icons/ai';
import { List } from '../types/list';
import formatDate from '../helpers/dateMask';

interface Props {
  toDoList: List[];
  updateTask: (id: number | undefined | null) => void;
  deleteTask: (id: number | undefined | null) => void;
}

export default function Table({ toDoList, updateTask, deleteTask }: Props) {
  if (!toDoList.length) return <h3>No tasks so far</h3>;

  return (
    <div className="table-responsive">
      <table className="table able-striped table-dark table-hover align-middle">
        <thead>
          <tr className="text-center">
            <td>Task</td>
            <td>Date</td>
            <td>Hour</td>
            <td className="text-center">Actions</td>
          </tr>
        </thead>
        <tbody className="">
          {toDoList.map((task) => {
            return (
              <tr className="text-center" key={task.index}>
                <td>{task.name}</td>
                <td>{formatDate(task.date)}</td>
                <td>{task.time}</td>

                <td>
                  <button
                    type="button"
                    className="btn btn-danger rounded mx-2"
                    onClick={() => deleteTask(task?.index)}
                  >
                    <AiOutlineDelete size={18} />
                  </button>

                  <button
                    type="button"
                    className="btn btn-success rounded"
                    onClick={() => updateTask(task?.index)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <SlPencil size={18} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
