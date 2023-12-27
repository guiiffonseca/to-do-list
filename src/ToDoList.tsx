import { useCallback, useEffect, useState } from 'react';
import { List } from './types/list';
import { Event } from './types/event';
import Table from './components/Table';
import Button from './components/Button';
import Input from './components/Input';

export default function ToDoList() {
  const [task, setTask] = useState<List>({
    name: '',
    date: '',
    time: '',
  });
  const [toDoList, setToDoList] = useState<List[]>([]);

  const handleInputChange = useCallback(
    (e: Event) => {
      if (e.target.type === 'text') setTask({ ...task, name: e.target.value });
      if (e.target.type === 'date') setTask({ ...task, date: e.target.value });
      if (e.target.type === 'time') setTask({ ...task, time: e.target.value });
    },
    [task]
  );

  const handleSubmit = useCallback(() => {
    // setToDoList([...toDoList, { name: task.name, index: toDoList.length }]);
    // setTask({});
  }, [task, toDoList]);

  const handleReset = useCallback(() => {
    setToDoList([]);
  }, []);

  useEffect(() => {
    return () => setToDoList([]);
  }, []);

  return (
    <>
      <div className="container">
        <h1>To do list</h1>
        <div className="row">
          <div className="col-sm">
            <Input
              type="text"
              placeholder="Insert your task"
              onChage={handleInputChange}
            />
          </div>

          <div className="col-sm">
            <Input type="date" onChage={handleInputChange} />
          </div>

          <div className="col-sm">
            <Input type="time" onChage={handleInputChange} />
          </div>
        </div>
      </div>

      <Button text="Add new task" isDisabled={false} onSubmit={handleSubmit} />

      <Table toDoList={toDoList} />

      <Button
        text="Clear tasks"
        isDisabled={!toDoList.length && true}
        onSubmit={handleReset}
      />
    </>
  );
}
