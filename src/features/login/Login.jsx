import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";

import { Form } from "../../shared/components/form/Form";
import { TextLogo } from "../../shared/components/TextLogo";
import { Spinner } from "../../shared/components/Spinner";

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const { handleLogin, isPending } = useLogin();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-12 dark:bg-gray-900">
      <TextLogo />
      <div className="w-[90%] max-w-[400px]">
        <Form onSubmit={handleSubmit((data) => handleLogin({ data, reset }))}>
          <Form.Title>Log in into your account</Form.Title>

          <Form.Label>Email</Form.Label>
          <Form.Input
            defaultValue="giuseppe@crescitelli.dev"
            type="email"
            {...register("email", { required: true })}
          />

          <Form.Label>Password</Form.Label>
          <Form.Input
            defaultValue="ciao1234"
            type="password"
            {...register("password", { required: true })}
          />

          <Form.Submit
            disabled={isPending}
            classes={"mt-4 flex items-center justify-center"}
          >
            {isPending ? <Spinner size="size-7" /> : "Log In"}
          </Form.Submit>
        </Form>
      </div>
    </div>
  );
}

export { Login };
