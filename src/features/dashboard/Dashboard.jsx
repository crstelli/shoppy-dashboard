import { Statistic } from "../../shared/components/Statistic";
import { Table } from "../../shared/components/table/Table";
import { Filter } from "../../shared/components/filter/Filter";

import { ShoppingCart, Package, Bookmark, Banknote } from "lucide-react";

function Dashboard() {
  return (
    <div className="mx-auto grid w-[90%] max-w-[1200px] grid-cols-2 gap-y-4 overflow-y-auto py-4">
      <Table classes={"col-span-2"}>
        <Table.Header>
          <Table.Title>Dashboard</Table.Title>
          <Table.Operations>
            <Filter name="last">
              <Filter.Option>7-days</Filter.Option>
              <Filter.Option>30-days</Filter.Option>
              <Filter.Option>90-days</Filter.Option>
            </Filter>
          </Table.Operations>
        </Table.Header>
        <div className="mt-10 grid grid-cols-4 gap-20 text-left">
          <Statistic
            color="purple"
            value="102"
            icon={<ShoppingCart className="size-9 text-purple-400" />}
          >
            Products
          </Statistic>
          <Statistic
            color="sky"
            value="491"
            icon={<Package className="size-9 text-sky-400" />}
          >
            Orders
          </Statistic>
          <Statistic
            color="orange"
            value="40"
            icon={<Bookmark className="size-9 text-orange-400" />}
          >
            Categories
          </Statistic>
          <Statistic
            color="emerald"
            value={"$120"}
            icon={<Banknote className="size-9 text-emerald-400" />}
          >
            Revenue
          </Statistic>
        </div>
      </Table>
      <div className="bg-gray-50 p-4">
        <h4>Product Categories Summary</h4>
      </div>
    </div>
  );
}

export { Dashboard };
