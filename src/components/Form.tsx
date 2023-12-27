import { Event } from '../types/event';
import { List } from '../types/list';
import Input from './Input';

interface Props {
  value: List;
  onChage: (e: Event) => void;
}

export default function Form({ value, onChage }: Props) {
  return (
    <>
      <div className="col-md">
        <Input
          type="text"
          placeholder="Insert your task"
          onChage={onChage}
          value={value.name}
        />
      </div>

      <div className="col-sm">
        <Input type="date" onChage={onChage} value={value.date} />
      </div>

      <div className="col-sm">
        <Input type="time" onChage={onChage} value={value.time} />
      </div>
    </>
  );
}
