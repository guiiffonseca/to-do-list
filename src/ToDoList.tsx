import { useCallback, useEffect, useState } from 'react';
import { List } from './types/list';
import Table from './components/Table';
import Button from './components/Button';

type Event = {
  target: {
    value: string;
  };
};

export default function ToDoList() {
  const [task, setTask] = useState<string>('');
  const [toDoList, setToDoList] = useState<List[]>([{ name: '', index: null }]);

  function handleInputChange(e: Event) {
    setTask(e.target.value);
  }

  const handleSubmit = useCallback(() => {
    setToDoList([...toDoList, { name: task, index: toDoList.length }]);
    setTask('');
  }, [task, toDoList]);

  const handleReset = useCallback(() => {
    setToDoList([]);
  }, []);

  useEffect(() => {
    return () => setToDoList([]);
  }, []);

  return (
    <>
      <h1>To do list</h1>
      <label htmlFor="task">
        Task
        <input
          type="text"
          id="task"
          placeholder="type your task"
          value={task}
          onChange={handleInputChange}
        />
      </label>
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
