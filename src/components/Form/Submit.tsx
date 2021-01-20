import React, { FC } from "react";
import { useFormikContext } from "formik";
import { Button, ButtonProps as BsButtonProps, Spinner } from "react-bootstrap";

export interface SubmitProps extends BsButtonProps {
  withSpinner?: boolean;
}

export const Submit: FC<SubmitProps> = ({
  withSpinner,
  ...props
}: SubmitProps) => {
  const { isSubmitting } = useFormikContext();
  const disabled = isSubmitting || props.disabled;

  return (
    <Button type="submit" {...props} disabled={disabled}>
      {withSpinner && isSubmitting ? (
        <Spinner size="sm" animation="border" className="mr-1" />
      ) : null}
      {props.children}
    </Button>
  );
};

Submit.defaultProps = {
  withSpinner: true
};
