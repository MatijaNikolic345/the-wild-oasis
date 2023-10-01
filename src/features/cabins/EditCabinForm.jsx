import styled from "styled-components";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import ButtonCancel from "../../ui/ButtonCancel";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ModalContext } from "../../ui/Modal";

import useEditCabin from "./useEditCabin";
const Label = styled.label`
  font-weight: 500;
`;
function EditCabinForm({ cabin }) {
  const { name, maxCapacity, regularPrice, discount, description, id } = cabin;

  const { close } = useContext(ModalContext);
  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const { errors } = formState;
  const { isEditing, editCabin } = useEditCabin();

  function onSubmit(data) {
    const { name, regularPrice, maxCapacity, discount, description } = data;
    const { image } = cabin;
    const newCabin = {
      name,
      regularPrice,
      maxCapacity,
      image,
      discount,
      description,
    };
    console.log(newCabin);
    editCabin(
      { newCabin, id },
      {
        onSuccess: () => {
          close();
          reset();
        },
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow error={errors?.name?.message}>
        <Label htmlFor="name">Cabin name</Label>
        <Input
          id="name"
          disabled={isEditing}
          defaultValue={name}
          {...register("name", { required: "This field is required" })}
        ></Input>
      </FormRow>
      <FormRow error={errors?.maxCapacity?.message}>
        <Label htmlFor="maxCapacity">Maximulm capacity</Label>
        <Input
          id="maxCapacity"
          type="number"
          defaultValue={maxCapacity}
          disabled={isEditing}
          {...register("maxCapacity", {
            required: "This field is required",
            min: { value: 1, message: "Capacity should be at least 1" },
          })}
        ></Input>
      </FormRow>
      <FormRow error={errors?.regularPrice?.message}>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          id="regularPrice"
          defaultValue={regularPrice}
          disabled={isEditing}
          {...register("regularPrice", {
            required: "This field is required",
          })}
        ></Input>
      </FormRow>
      <FormRow error={errors?.discount?.message}>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          disabled={isEditing}
          defaultValue={discount || 0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              +value <= +getValues().regularPrice ||
              "Discount should be at most equal to the regular price",
          })}
        ></Input>
      </FormRow>
      <FormRow error={errors?.description?.message}>
        <Label htmlFor="description">Description for website</Label>
        <TextArea
          id="description"
          disabled={isEditing}
          defaultValue={description}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow error={errors?.image?.message}>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput
          id="image"
          disabled={isEditing}
          type="file"
          {...register("image")}
        ></FileInput>
      </FormRow>
      <FormRow>
        <ButtonCancel type="reset" disabled={isEditing} onClick={() => close()}>
          Cancel
        </ButtonCancel>
        <Button disabled={isEditing}>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default EditCabinForm;
