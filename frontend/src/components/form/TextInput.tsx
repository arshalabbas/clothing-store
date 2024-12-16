import { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }, ref) => {
    return (
      <label className="form-control min-w-full">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input {...props} ref={ref} className="input input-bordered w-full" />

        {error && (
          <div className="label">
            <span className="label-text-alt text-error">{error}</span>
          </div>
        )}
      </label>
    );
  },
);

TextInput.displayName = "TextInput";

export default TextInput;
