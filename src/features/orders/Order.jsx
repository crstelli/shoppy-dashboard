import { useOrder } from "./useOrder";

import { Table } from "../../shared/components/table/Table";
import { Menus } from "../../shared/components/menus/Menus";
import { Tag } from "../../shared/components/Tag";
import { Package, Check, Trash, X } from "lucide-react";

function Order({ order, gridCols }) {
  const { handleDelete, handleDelivery, handleCompleted, handleCancel } =
    useOrder();

  let tagColor;
  if (order.status === "received") tagColor = "gray";
  if (order.status === "completed") tagColor = "green";
  if (order.status === "delivery") tagColor = "orange";
  if (order.status === "canceled") tagColor = "red";

  return (
    <>
      <Table.Row key={order.id} gridCols={gridCols}>
        <Table.Cell>{order.id}</Table.Cell>
        <Table.Cell>{order.email || "No email"}</Table.Cell>
        <Table.Cell>${order.total}</Table.Cell>
        <Table.Cell>{order.info || "No Info"}</Table.Cell>
        <Table.Cell>{order.delivery || "Unknown"}</Table.Cell>
        <Table.Cell classes={"self-center"}>
          <Tag color={tagColor}>{order.status}</Tag>
        </Table.Cell>
        <Table.Cell>
          <Menus.Menu>
            <Menus.Toggle id={order.id} />

            <Menus.List id={order.id}>
              <Menus.Button onClick={() => handleDelete(order.id)}>
                <Trash size={22} />
                Delete
              </Menus.Button>
              <Menus.Button onClick={() => handleDelivery(order.id)}>
                <Package size={22} />
                Set as Delivery
              </Menus.Button>
              <Menus.Button onClick={() => handleCompleted(order.id)}>
                <Check size={22} />
                Set as Completed
              </Menus.Button>
              <Menus.Button onClick={() => handleCancel(order.id)}>
                <X size={22} />
                Set as Canceled
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </Table.Cell>
      </Table.Row>
    </>
  );
}

export { Order };
