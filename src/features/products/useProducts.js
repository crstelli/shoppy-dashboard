import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addProduct as addProductApi,
  getProducts,
} from "../../services/apiProducts";

import toast from "react-hot-toast";
import { URL } from "../../supabase";

function useProducts(setAddModal) {
  const queryClient = useQueryClient();

  const { error, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  if (error) toast.error(error.message);

  const { mutate: addProduct } = useMutation({
    mutationFn: addProductApi,
    onSuccess: () => {
      toast.success("Product addedd succesfully.");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  function handleAddProduct(data, reset) {
    const image_file = data.image[0];
    const image_name = `${Math.random()}-${image_file.name.replaceAll("/", "").replaceAll(" ", "")}`;
    const image_path = `${URL}/storage/v1/object/public/images/${image_name}`;
    const { image: _, ...item } = { ...data, image_path };

    addProduct({ item, image: { image_file, image_name } });
    reset();
    setAddModal(false);
  }

  return { products, handleAddProduct };
}

export { useProducts };
