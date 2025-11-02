import { CardStatistics } from "./CardStatistics";
import { OrdersStatus } from "./OrdersStatus";
import { Sales } from "./Sales";

import { Table } from "../../shared/components/table/Table";
import { Filter } from "../../shared/components/filter/Filter";
import { LastOrders } from "./LastOrders";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";

function Dashboard() {
  const { isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  return isLoading ? (
    <p>loading</p>
  ) : (
    <div className="mx-auto grid w-[90%] max-w-[1200px] grid-cols-2 gap-10 overflow-y-auto py-4">
      <Table classes={"col-span-2"}>
        <Table.Header>
          <Table.Title>Dashboard</Table.Title>
          <Table.Operations>
            <Filter name="last" defaultValue="7days">
              <Filter.Option>7 days</Filter.Option>
              <Filter.Option>30 days</Filter.Option>
              <Filter.Option>90 days</Filter.Option>
            </Filter>
          </Table.Operations>
        </Table.Header>
        <CardStatistics />
      </Table>
      <LastOrders />
      <OrdersStatus />
      <Sales />
    </div>
  );
}

export { Dashboard };
