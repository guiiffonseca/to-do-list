import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { List } from '../types/list';
import { Event } from '../types/event';
import Form from '../components/Form';
import Table from '../components/Table';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Loading from '../components/Loading';

type InputType = {
  [key: string]: () => void;
};

export default function ToDoList() {
  const [toDoList, setToDoList] = useState<List[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [task, setTask] = useState<List>({
    name: '',
    date: '',
    time: '',
  });
  const [selectedTask, setSelectedTask] = useState<List>({
    name: '',
    date: '',
    time: '',
  });

  const handleInputChange = useCallback(
    (e: Event) => {
      const inputType: InputType = {
        text: () => setTask({ ...task, name: e.target.value }),
        date: () => setTask({ ...task, date: e.target.value }),
        time: () => setTask({ ...task, time: e.target.value }),
      };

      return inputType[e.target.type]?.();
    },
    [task]
  );

  const handleModalInputChange = useCallback(
    (e: Event) => {
      const inputType: InputType = {
        text: () => setSelectedTask({ ...selectedTask, name: e.target.value }),
        date: () => setSelectedTask({ ...selectedTask, date: e.target.value }),
        time: () => setSelectedTask({ ...selectedTask, time: e.target.value }),
      };

      return inputType[e.target.type]?.();
    },
    [selectedTask]
  );

  const handleSubmit = useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setToDoList([
        ...toDoList,
        {
          index: toDoList.length + 1,
          name: task.name,
          date: task.date,
          time: task.time,
        },
      ]);

      setTask({ name: '', date: '', time: '' });
      toast.success('Task added successfully!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }, 1000);
  }, [task, toDoList]);

  const handleUpdate = useCallback(
    (idTask: number | null | undefined) => {
      if (idTask) {
        const findTask: List[] = toDoList.filter(
          ({ index }: List) => index === idTask
        );

        setSelectedTask(findTask[0]);
      }
    },
    [toDoList]
  );

  const onSubmitUpdate = useCallback(() => {
    const taskId = selectedTask?.index;
    setLoading(true);

    if (taskId) {
      setTimeout(() => {
        toDoList[taskId - 1] = {
          index: taskId,
          name: selectedTask.name,
          date: selectedTask.date,
          time: selectedTask.time,
        };

        setLoading(false);
      }, 1000);
    }
  }, [toDoList, selectedTask]);

  const onDelTask = useCallback(
    (idTask: number | null | undefined) => {
      const findTask: List[] = toDoList.filter(
        ({ index }: List) => index === idTask
      );

      const indexTask = findTask[0].index;

      setLoading(true);

      if (indexTask) {
        setTimeout(() => {
          setLoading(false);
          const filteredArr: List[] = toDoList.filter(
            ({ index }: List) => index !== indexTask
          );

          setToDoList(filteredArr);
        }, 1000);
      }
    },
    [toDoList]
  );

  const handleReset = useCallback(() => {
    setToDoList([]);
  }, []);

  const isDisaledSubmitButton = useCallback(() => {
    if (task.name && task.date && task.time) return false;
    return true;
  }, [task.name, task.date, task.time]);

  const isDisaledResetButton = useCallback(() => {
    if (toDoList.length) return false;
    return true;
  }, [toDoList]);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <h1 className="align-self-center">To do list</h1>
      </div>

      <div className="row mt-5 d-flex justify-content-center">
        <Form value={task} onChage={(e: Event) => handleInputChange(e)} />

        <div className="col-sm d-flex justify-content-around">
          <Button
            text="Add new task"
            isDisabled={isDisaledSubmitButton}
            onSubmit={handleSubmit}
          />
          <Button
            text="Clear tasks"
            isDisabled={isDisaledResetButton}
            onSubmit={handleReset}
          />
        </div>
      </div>

      <div className="mt-5">
        {loading ? (
          <Loading />
        ) : (
          <Table
            toDoList={toDoList}
            updateTask={handleUpdate}
            deleteTask={onDelTask}
          />
        )}
      </div>

      <Modal
        data={selectedTask}
        onChage={(e: Event) => handleModalInputChange(e)}
        onSubmit={onSubmitUpdate}
      />
    </div>
  );
}
