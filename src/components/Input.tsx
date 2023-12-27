import { Event } from '../types/event';

interface Props {
  type: 'text' | 'date' | 'time';
  value: string | number;
  placeholder?: string;
  onChage?: (e: Event) => void;
}

export default function Input({ type, value, placeholder, onChage }: Props) {
  return (
    <input
      className="form-control form-control-lg"
      value={value}
      placeholder={placeholder}
      aria-label=".form-control-lg example"
      type={type}
      onChange={onChage}
    />
  );
}
