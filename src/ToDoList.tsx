import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { List } from './types/list';
import { Event } from './types/event';
import Form from './components/Form';
import Table from './components/Table';
import Button from './components/Button';
import Modal from './components/Modal';

export default function ToDoList() {
  const [toDoList, setToDoList] = useState<List[]>([]);
  const [task, setTask] = useState<List>({
    name: '',
    date: '',
    time: '',
  });

  const handleInputChange = useCallback(
    (e: Event) => {
      if (e.target.type === 'text') setTask({ ...task, name: e.target.value });
      if (e.target.type === 'date') setTask({ ...task, date: e.target.value });
      if (e.target.type === 'time') setTask({ ...task, time: e.target.value });
    },
    [task]
  );

  const handleSubmit = useCallback(() => {
    setToDoList([
      ...toDoList,
      {
        index: toDoList.length + 1,
        name: task.name,
        date: task.date,
        time: task.time,
      },
    ]);

    toast.success('Task added successfully!', {
      position: toast.POSITION.TOP_RIGHT,
    });

    setTask({ name: '', date: '', time: '' });
  }, [task, toDoList]);

  const handleUpdate = useCallback(
    (id: number | null | undefined) => {
      if (id) {
        const filterdTask: List[] = toDoList.filter(
          ({ index }: List) => index === id
        );

        setTask(filterdTask[0]);
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
        <Table toDoList={toDoList} updateTask={handleUpdate} />
      </div>

      <Modal data={task} onChage={(e: Event) => handleInputChange(e)} />
    </div>
  );
}
