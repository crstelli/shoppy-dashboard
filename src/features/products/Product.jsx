import { useState } from "react";
import { useProduct } from "./useProduct";

import { EditForm } from "./EditForm";
import { Table } from "../../shared/components/table/Table";
import { Modal } from "../../shared/components/modal/Modal";
import { Menus } from "../../shared/components/menus/Menus";

import { ConfirmModal } from "../../shared/components/ConfirmModal";
import { Tag } from "../../shared/components/Tag";
import { PenBox, Trash } from "lucide-react";

function Product({ product, gridCols }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const { handleDelete, handleSubmitEdit } = useProduct(product, setIsEditing);

  let tagColor;
  if (product.status === "active") tagColor = "green";
  if (product.status === "hidden") tagColor = "orange";
  if (product.status === "sold out") tagColor = "red";

  return (
    <>
      <Table.Row key={product.id} gridCols={gridCols}>
        <Table.Cell>{product.id}</Table.Cell>
        <Table.Cell>{product.name}</Table.Cell>
        <Table.Cell>{product.category}</Table.Cell>
        <Table.Cell>{product.quantity}</Table.Cell>
        <Table.Cell>{product.price}</Table.Cell>
        <Table.Cell>
          <Tag color={tagColor}>{product.status}</Tag>
        </Table.Cell>
        <Table.Cell>
          <Menus.Menu>
            <Menus.Toggle id={product.id} />

            <Menus.List id={product.id}>
              <Menus.Button onClick={() => setIsEditing(true)}>
                <PenBox /> Edit
              </Menus.Button>
              <Menus.Button onClick={() => setIsDeleting(true)}>
                <Trash />
                Delete
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </Table.Cell>
      </Table.Row>
      {isEditing && (
        <Modal onClose={() => setIsEditing(false)}>
          <EditForm item={product} onSubmit={handleSubmitEdit} />
        </Modal>
      )}

      {isDeleting && (
        <ConfirmModal
          onConfirm={() => handleDelete(product.id)}
          onClose={() => setIsDeleting(false)}
        />
      )}
    </>
  );
}

export { Product };
