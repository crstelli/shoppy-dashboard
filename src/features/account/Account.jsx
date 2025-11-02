import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

import { Button } from "../../shared/components/Button";
import { ButtonSecondary } from "../../shared/components/ButtonSecondary";

function Account() {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return (
    <div className="mx-auto grid w-[90%] max-w-[1200px] grid-cols-3 gap-10 overflow-y-auto py-4">
      <h3 className="col-span-3 text-3xl font-bold">User settings</h3>
      <div className="col-span-2 mt-4 grid grid-cols-3 items-center gap-7 rounded-md border border-gray-300 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <h4 className="col-span-3 text-xl">Update user info</h4>
        <label>Email address</label>
        <input
          className="rounded-md border border-gray-400 px-4 py-1 text-sm disabled:bg-gray-300 disabled:text-gray-500 dark:border-gray-700 dark:disabled:bg-gray-700 dark:disabled:text-gray-400"
          type="email"
          disabled
          value={user.email}
        />
        <div></div>

        <label>Full Name</label>
        <input
          className="rounded-md border border-gray-400 px-4 py-1 text-sm dark:border-gray-700"
          type="email"
        />
        <div></div>

        <div className="col-span-3 mt-4 flex justify-end gap-4">
          <ButtonSecondary>Cancel</ButtonSecondary>
          <Button>Save changes</Button>
        </div>
      </div>

      <div className="col-span-2 mt-4 grid grid-cols-3 items-center gap-7 rounded-md border border-gray-300 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <h4 className="col-span-3 text-xl">Update password</h4>
        <label>New password</label>
        <input
          className="rounded-md border border-gray-400 px-4 py-1 text-sm dark:border-gray-700"
          type="password"
        />
        <div></div>

        <label>Confirm password</label>
        <input
          className="rounded-md border border-gray-400 px-4 py-1 text-sm dark:border-gray-700"
          type="password"
        />
        <div></div>

        <div className="col-span-3 mt-4 flex justify-end gap-4">
          <ButtonSecondary>Cancel</ButtonSecondary>
          <Button>Update password</Button>
        </div>
      </div>
    </div>
  );
}

export { Account };
