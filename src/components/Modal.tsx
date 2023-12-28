import { Event } from '../types/event';
import { List } from '../types/list';
import Form from './Form';

interface Props {
  data: List;
  onChage: (e: Event) => void;
  onSubmit: (id: number | null | undefined) => void;
}

export default function Modal({ data, onChage, onSubmit }: Props) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {`Update task #${data.index}`}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body my-2 d-flex">
            <Form value={data} onChage={onChage} />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => onSubmit(data.index)}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
