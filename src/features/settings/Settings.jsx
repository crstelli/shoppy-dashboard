import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getSettings,
  updateSettings as updateSettingsApi,
} from "../../services/apiSettings";

import { Spinner } from "../../shared/components/Spinner";

function Settings() {
  const [deliveryPrice, setDeliveryPrice] = useState("");

  const { data: settings, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  const { mutate: updateSettings } = useMutation({
    mutationFn: updateSettingsApi,
  });

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="mx-auto grid w-[90%] max-w-[1200px] grid-cols-3 gap-10 overflow-y-auto py-4">
      <h3 className="col-span-3 text-3xl font-bold">Settings</h3>
      <div className="col-span-2 mt-4 grid grid-cols-3 items-center gap-7 rounded-md border border-gray-300 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <label>Delivery Price</label>
        <input
          className="rounded-md border border-gray-400 px-4 py-1 text-sm dark:border-gray-700"
          type="number"
          value={deliveryPrice || settings?.delivery_price}
          onChange={(e) => setDeliveryPrice(e.target.value)}
          onBlur={() =>
            updateSettings({
              ...settings,
              delivery_price: deliveryPrice,
            })
          }
        />
        <div></div>
      </div>
    </div>
  );
}

export { Settings };
