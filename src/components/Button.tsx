interface Props {
  text: string;
  isDisabled: true | false;
  onSubmit: () => void;
}

export default function Button({ text, isDisabled, onSubmit }: Props) {
  return (
    <button
      type="button"
      className="btn btn-success"
      onClick={onSubmit}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
