import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import  useGetUser  from "./useGetUser";
import useUpdateUser from "./useUpdateUser";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useGetUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);
  const {isUpdating , updatingUser} = useUpdateUser();
  function handleSubmit(e) {
    e.preventDefault();
    updatingUser({fullName , avatar} , {
      onSuccess:()=>{
        setAvatar(null);
      }
    });
  }

  const handleCancel=()=>{
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
        disabled={isUpdating}
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
        disabled={isUpdating}
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRow>
      <FormRow>
        <Button type="reset" size="medium" variation="secondary" onClick={()=>handleCancel()}>
          Cancel
        </Button>
        <Button type="primary" size="medium">Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
