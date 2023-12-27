import { Event } from '../types/event';

interface Props {
  type: 'text' | 'date' | 'time';
  placeholder?: string;
  onChage?: (e: Event) => void;
}

export default function Input({ type, placeholder, onChage }: Props) {
  return (
    <input
      className="form-control form-control-lg"
      type={type}
      placeholder={placeholder}
      aria-label=".form-control-lg example"
      onChange={onChage}
    />
  );
}
