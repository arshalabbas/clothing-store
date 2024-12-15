interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const TextInput = ({ label, error, ...props }: Props) => {
  return (
    <label className="form-control min-w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input {...props} className="input input-bordered w-full" />

      {error && (
        <div className="label">
          <span className="label-text-alt text-error">{error}</span>
        </div>
      )}
    </label>
  );
};

export default TextInput;
