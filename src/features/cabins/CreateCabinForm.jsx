import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from "./CabinFormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({editCabin={} , onClose}) {
  const {id:cabinId , ...editValues}=editCabin;
  const isEdit=Boolean(cabinId);
  const {isCreating , creatingCabin}=useCreateCabin();
  const {isEditing , editingCabin}=useEditCabin();
  const {register , handleSubmit , reset, getValues , formState}=useForm({
    defaultValues:isEdit ? editValues : ""
  });
  const {errors}=formState;

  const isWorking = isEditing || isCreating;

  const onSubmit=(data)=>{
    const image = typeof data.image === "string" ? data.image : data.image[0];
    console.log(data);
    if (isEdit)
      editingCabin(
        { newCabinData: { ...data, image }, id: cabinId },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
    else
      creatingCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
  }

  const onError=(errors)=>{
    // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit,onError)} type={`${onClose} ? "modal" : "regular`}>
      <FormRow label="cabin name" error={errors?.name?.message}>
        <Input type="text" id="name" {...register("name",{
           required:"this filed is required"
        })}/>
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity" {...register("maxCapacity",{
           required:"this filed is required",
           min:{
              value:1,
              message:"capacity should be at least 1"
           }
        })} />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input type="number" id="regularPrice" {...register("regularPrice",{
           required:"this filed is required"
        })} />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input type="number" id="discount" defaultValue={0} {...register("discount",{
           required:"this filed is required",
           validate:(value)=>value < getValues().regularPrice || "discount value should be less than the actual price"
        })} />
      </FormRow>

      <FormRow label="Description for website" error={errors?.description?.message}>
        <Textarea type="number" id="description" defaultValue="" {...register("description",{
           required:"this filed is required"
        })} />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput id="image" accept="image/*" {...register("image",{
           required:isEdit ? false :"this filed is required"
        })} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" size="small" type="reset" onClick={()=>onClose?.()}>
          Cancel
        </Button>
        <Button variation="primary" size="small" disabled={isWorking}>{isEdit ? "Edit Cabin" : "Add Cabin"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
