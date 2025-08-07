import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation , useQueryClient } from "@tanstack/react-query";
import { addCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "./CabinFormRow";

function CreateCabinForm() {
  const {register , handleSubmit , reset, getValues , formState}=useForm();
  const {errors}=formState;
  const queryClient=useQueryClient();

  const {isLoading:isAdding , mutate}=useMutation({
    mutationFn:addCabin,
    onSuccess:()=>{
      toast.success("cabin added successfully");
      queryClient.invalidateQueries({queryKey:["cabins"]});
      reset();
    },
    onError:()=>{
      toast.error("couldnt add cabin");
    }
  })

  const onSubmit=(data)=>{
    mutate(data);
  }

  const onError=(errors)=>{
    // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit,onError)}>
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

      <FormRow label="Cabin photo">
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isAdding}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
