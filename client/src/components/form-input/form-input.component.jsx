/**
 * core files
 */
import React from "react";
/**
 * import css
 */
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

/**
 * main function
 */
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer className="group">
    <FormInputContainer
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <FormInputLabel
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;