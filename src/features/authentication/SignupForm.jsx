import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import useSignup from "./useSignup";

function SignupForm() {

  const {register , formState , getValues , handleSubmit , reset} = useForm();
  const {errors} = formState;
  const {isLoading , signupUser} = useSignup();
  const onSubmit=({fullName , email , password})=>{
    signupUser({fullName , email , password} , {
      onSettled:reset()
    })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input type="text" id="fullName" {...register("fullName" , {
          required:"this field is required"
        })}/>
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input disabled={isLoading} type="email" id="email" {...register("email" , {
          required:"this field is required" ,
          pattern:{
            value:/\S+@\S+\.\S+/,
            message:"Please provide a valid email address"
          }
        })} />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input disabled={isLoading} type="password" id="password" {...register("password" , {
          required:"this field is required",
          minLength:{
            value:8,
            message: "Password needs a minimum of 8 characters",
          }
        })} />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input disabled={isLoading} type="password" id="passwordConfirm" {...register("passwordConfirm" , {
          required:"this field is required",
          validate:{
            value:(value)=>value === getValues().password || "passwords need to match"
          }
        })} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button disabled={isLoading} variation="secondary" size="medium" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading} size="medium" variation="primary">Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
