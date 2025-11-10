import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getSettings,
  updateSettings as updateSettingsApi,
} from "../../services/apiSettings";

import { Spinner } from "../../shared/components/Spinner";
import toast from "react-hot-toast";

function Settings() {
  const queryClient = useQueryClient();

  const { data: settings, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  const { mutate: updateSettings } = useMutation({
    mutationFn: updateSettingsApi,

    onSuccess: () => {
      toast.success("Settings updated!");
      queryClient.invalidateQueries("settings");
    },
  });

  const [deliveryPrice, setDeliveryPrice] = useState(settings.delivery_price);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="mx-auto grid w-[90%] max-w-[1200px] grid-cols-3 gap-10 overflow-y-auto py-4">
      <h3 className="col-span-3 text-3xl font-bold">Settings</h3>
      <div className="col-span-2 mt-4 grid grid-cols-3 items-center gap-7 rounded-md border border-gray-300 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <label>Delivery Price</label>
        <input
          className="rounded-md border border-gray-400 px-4 py-1 text-sm focus:border-emerald-500 focus:outline-none dark:border-gray-700"
          type="number"
          value={deliveryPrice}
          onChange={(e) => setDeliveryPrice(+e.target.value)}
          onBlur={() => {
            if (deliveryPrice !== settings?.delivery_price) {
              updateSettings({ ...settings, delivery_price: deliveryPrice });
            }
          }}
        />
        <div></div>
      </div>
    </div>
  );
}

export { Settings };
