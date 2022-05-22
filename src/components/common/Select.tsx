import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

export function Select(props: SelectProps) {
  const { name, labelText, selectOptions, onChangeSelect } = props;

  return (
    <FormGroup row>
      <Label for={name} sm={2}>
        {labelText}
      </Label>
      <Col sm={10}>
        <Input id={name} name="select" type="select" onChange={onChangeSelect}>
          {selectOptions.map(({ label }) => {
            return <option>{label}</option>;
          })}
        </Input>
      </Col>
    </FormGroup>
  );
}
type SelectProps = {
  name: string;
  labelText: string;
  onChangeSelect: React.ChangeEventHandler<HTMLInputElement>;
  selectOptions: {
    label: string;
  }[];
};
