import { forwardRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  inputClassName?: string;
  containerClassName?: string;
  labelClassName?: string;
  RightComponent?: ReactNode;
}

const TextInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      error,
      containerClassName,
      inputClassName,
      labelClassName,
      RightComponent,
      ...props
    },
    ref,
  ) => {
    return (
      <label className={twMerge("form-control", containerClassName)}>
        <div className="label">
          <span className={twMerge("label-text", labelClassName)}>{label}</span>
        </div>
        <div className="join flex">
          <input
            {...props}
            ref={ref}
            className={twMerge("input input-bordered w-full", inputClassName)}
          />
          {RightComponent}
        </div>

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
