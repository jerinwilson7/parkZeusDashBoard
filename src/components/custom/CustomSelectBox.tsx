import { useField } from "formik";

type SelectBoxPropsType = {
  labelTag: string;
  name: string;
  placeholder: string;
  children: React.ReactNode;
};

export const CustomSelectBox = ({ labelTag, ...props }: SelectBoxPropsType) => {
  const [field, meta] = useField(props);

  return (
    <div className="py-3 w-4/5">
      <label className="text-sm px-1">{labelTag}</label>
      <div className="w-full pr-2 my-2 rounded-xl border-solid">
        <select
          className="w-full px-2.5 py-4 rounded-xl bg-white text-gray-500 outline-none shadow-md"
          {...field}
          {...props}
        >
          <option value="" label={props.placeholder} />
          {props.children}
        </select>
      </div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
