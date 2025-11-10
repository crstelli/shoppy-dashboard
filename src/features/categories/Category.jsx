import { useCategory } from "./useCategory";
import { Table } from "../../shared/components/table/Table";

import { Menus } from "../../shared/components/menus/Menus";
import { Trash } from "lucide-react";

function Category({ category, gridCols }) {
  const { handleDelete } = useCategory();

  return (
    <>
      <Table.Row key={category.id} gridCols={gridCols}>
        <Table.Cell>{category.id}</Table.Cell>
        <Table.Cell>{category.name}</Table.Cell>
        <Table.Cell>
          <Menus.Menu>
            <Menus.Toggle id={category.id} />

            <Menus.List id={category.id}>
              <Menus.Button onClick={() => handleDelete(category.id)}>
                <Trash size={22} />
                Delete
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </Table.Cell>
      </Table.Row>
    </>
  );
}

export { Category };
