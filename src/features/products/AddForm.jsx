import { useForm } from "react-hook-form";
import { Form } from "../../shared/components/form/Form";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/apiCategories";

function AddForm({ onSubmit }) {
  const { register, handleSubmit, reset } = useForm();

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <Form onSubmit={handleSubmit((data) => onSubmit(data, reset))}>
      <h3 className="text-center text-lg font-bold">Add a product</h3>

      <Form.Label>Name</Form.Label>
      <Form.Input type="text" {...register("name", { required: true })} />

      <Form.Label>Category</Form.Label>
      <Form.Select
        defaultValue="..."
        {...register("category", { required: true })}
      >
        <option disabled value="...">
          ...
        </option>
        {categories?.map((c) => (
          <option key={c.id} value={c.name}>
            {c.name}
          </option>
        ))}
      </Form.Select>

      <Form.Label>Quantity</Form.Label>
      <Form.Input type="number" {...register("quantity", { required: true })} />

      <Form.Label>Price</Form.Label>
      <Form.Input type="number" {...register("price", { required: true })} />

      <Form.Label>Description</Form.Label>
      <Form.Input {...register("description", { required: true })} />

      <Form.Label>Status</Form.Label>
      <Form.Select
        defaultValue="..."
        {...register("status", { required: true })}
      >
        <option disabled value="...">
          ...
        </option>
        <option value="active">Active</option>
        <option value="sold out">Sold Out</option>
        <option value="hidden">Hidden</option>
      </Form.Select>

      <Form.Label>Image</Form.Label>
      <Form.Input
        accept="image/*"
        type="file"
        {...register("image", { required: true })}
      />

      <Form.Submit classes={"mt-6"} type="submit">
        Add
      </Form.Submit>
    </Form>
  );
}

export { AddForm };
