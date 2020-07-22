import { useCallback } from "react";
import { useField, FieldConfig, GenericFieldHTMLAttributes } from "formik";

export function useChange<Value>(
  props: GenericFieldHTMLAttributes & FieldConfig<Value>
): ReturnType<(e: React.ChangeEvent) => (e: never) => void> {
  const [{ onChange }] = useField(props);
  return useCallback((e) => (props.onChange!(e), onChange(e)), [
    onChange,
    props.onChange
  ]);
}
