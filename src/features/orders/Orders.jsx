import { useState } from "react";
import { useOrders } from "./useOrders";

import { Order } from "./Order";
import { AddForm } from "./AddForm";

import { Table } from "../../shared/components/table/Table";
import { Menus } from "../../shared/components/menus/Menus";
import { Modal } from "../../shared/components/modal/Modal";

import { Button } from "../../shared/components/Button";

import { Filter } from "../../shared/components/filter/Filter";
import { Pagination } from "../../shared/components/pagination/Pagination";
import { useFilter } from "../../shared/components/filter/useFilter";
import { usePagination } from "../../shared/components/pagination/usePagination";
import { PAGE_SIZE } from "../../shared/constansts";

function Orders() {
  const [addModal, setAddModal] = useState(false);
  const { orders, handleAddOrder } = useOrders(setAddModal);

  const sections = ["ID", "Delivery", "Status"]; // TODO: Sistemare

  const { getFilter: getStatus } = useFilter("status", "all");
  const statusFilter = getStatus();

  const filteredOrders =
    statusFilter === "all"
      ? orders
      : orders?.filter(
          (p) =>
            p.status.trim().toLowerCase().replace(" ", "") === statusFilter,
        );

  const { getPage } = usePagination();
  const currPage = getPage();
  const paginatedOrders = filteredOrders?.filter((o, i) => {
    if (i >= (currPage - 1) * PAGE_SIZE && i < PAGE_SIZE * currPage) return o;
  });

  return (
    <div className="mx-auto w-[90%] max-w-[1200px] overflow-auto py-4">
      {orders?.length > 0 ? (
        <Menus>
          <Table>
            <Table.Header>
              <Table.Title>Customers Orders</Table.Title>
              <Table.Operations>
                <Filter name="status">
                  <Filter.Option>All</Filter.Option>
                  <Filter.Option>Received</Filter.Option>
                  <Filter.Option>Completed</Filter.Option>
                  <Filter.Option>Delivery</Filter.Option>
                </Filter>
                <Button onClick={() => setAddModal(true)}>Create Order</Button>
              </Table.Operations>
            </Table.Header>
            <Table.Content>
              <Table.Section gridCols={"1fr 3fr 3fr 1fr"} sections={sections} />
              {paginatedOrders.map((c) => (
                <Order key={c.id} order={c} gridCols={"1fr 3fr 3fr 1fr"} />
              ))}
            </Table.Content>
            <Table.Footer>
              <Pagination count={paginatedOrders.length} />
            </Table.Footer>
          </Table>
        </Menus>
      ) : (
        <div className="mt-40">
          <p className="text-center font-bold">You have no orders</p>
        </div>
      )}
      {addModal && (
        <Modal onClose={() => setAddModal(false)}>
          <AddForm onSubmit={handleAddOrder} />
        </Modal>
      )}
    </div>
  );
}
export { Orders };
