import { SlPencil } from 'react-icons/sl';
import { AiOutlineDelete } from 'react-icons/ai';
import { List } from '../types/list';

interface Props {
  toDoList: List[];
  updateTask: (id: number | undefined | null) => void;
}

export default function Table({ toDoList, updateTask }: Props) {
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
                <td key={task.index}>{task.name}</td>
                <td key={task.index}>{task.date}</td>
                <td key={task.index}>{task.time}</td>

                <td key={task.index}>
                  <button type="button" className="btn btn-danger rounded mx-2">
                    <AiOutlineDelete size={18} backgorundColor="blue" />
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
