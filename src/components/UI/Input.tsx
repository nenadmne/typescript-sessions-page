import type { ComponentPropsWithoutRef } from "react";

// Setting up InputProps that contain the default <input> props as well as some custom props (label, id)
type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-bold mb-1 text-label uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full max-w-[35rem] text-l leading-[1.25rem] border-solid border-[1px] border-label rounded p-2"
      />
    </div>
  );
}
