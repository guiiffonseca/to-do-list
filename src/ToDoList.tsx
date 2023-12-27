import { useEffect, useState } from 'react';

type Event = {
  target: {
    value: string;
  };
};

type List = {
  name: string;
  index: number | null;
};

export default function ToDoList() {
  const [task, setTask] = useState<string>('');
  const [toDo, setToDo] = useState<List[]>([{ name: '', index: null }]);

  function handleInputChange(e: Event) {
    setTask(e.target.value);
  }

  function handleSubmit() {
    setToDo([...toDo, { name: task, index: toDo.length }]);
    setTask('');
  }

  function handleReset() {
    setToDo([]);
  }

  useEffect(() => {
    return () => setToDo([]);
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
      <button onClick={handleSubmit} disabled={!task} type="button">
        Enter task
      </button>
      <ul>
        {toDo.map((el: List) => (
          <>
            <input key={el.index} value={el.name} />
            <button type="button" onClick={() => console.log('updatedS')}>
              Edit
            </button>
            <button type="button">Del</button>
          </>
        ))}
      </ul>
      <button onClick={handleReset} disabled={!toDo.length} type="button">
        Clear tasks
      </button>
    </>
  );
}
