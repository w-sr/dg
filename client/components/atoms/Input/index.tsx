import { Kpi } from "types/kpi";
import { Path, UseFormRegister, FieldError } from "react-hook-form";

type InputProps = {
  label: string;
  name: Path<Kpi>;
  register: UseFormRegister<Kpi>;
  required: boolean;
  error?: FieldError;
};

const Input = ({ label, name, register, required, error }: InputProps) => (
  <>
    <label className="block text-sm text-gray-900 mb-2">{label}</label>
    <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
      {...register(name, { required })}
    />
    {error && (
      <p className="mt-2 text-sm text-red-600 dark:text-red-500">{`${label} is required`}</p>
    )}
  </>
);

export { Input };
