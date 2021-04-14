import { useField, FieldConfig, GenericFieldHTMLAttributes } from "formik";
import { useCallback } from "react";

export function useChange<Value>(
  props: GenericFieldHTMLAttributes & FieldConfig<Value>
): ReturnType<(e: React.ChangeEvent) => (e: never) => void> {
  const [{ onChange }] = useField(props);
  return useCallback((e) => (props.onChange!(e), onChange(e)), [
    onChange,
    props.onChange
  ]);
}
