import React, { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, ...props }, ref) => {
    return (
      <label className="form-control">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          {...props}
          ref={ref}
        ></textarea>
        {error && (
          <div className="label">
            <span className="label-text-alt text-error">{error}</span>
          </div>
        )}
      </label>
    );
  },
);

export default TextArea;
