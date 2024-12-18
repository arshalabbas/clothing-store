interface Props {
  children: React.ReactNode;
  id: string;
  title?: string;
  buttonTitle?: string;
  isLoading?: boolean;
  successHandler: () => void;
}

const AlertDialog = ({
  children,
  id,
  title,
  buttonTitle,
  isLoading,
  successHandler,
}: Props) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">{title}</h3>
        <div id="modal-body">{children}</div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-ghost">Cancel</button>
          </form>
          <button
            disabled={isLoading}
            onClick={successHandler}
            className="btn btn-error"
          >
            {isLoading && <span className="loading loading-spinner" />}
            {buttonTitle}
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default AlertDialog;
