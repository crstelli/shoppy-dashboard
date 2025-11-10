import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";

import { CardStatistics } from "./CardStatistics";
import { OrdersStatus } from "./OrdersStatus";
import { Sales } from "./Sales";
import { LastOrders } from "./LastOrders";

import { Table } from "../../shared/components/table/Table";
import { Filter } from "../../shared/components/filter/Filter";
import { Section } from "../../shared/components/Section";
import { Spinner } from "../../shared/components/Spinner";

function Dashboard() {
  const { isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  return isLoading ? (
    <Spinner />
  ) : (
    <Section>
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
    </Section>
  );
}

export { Dashboard };
