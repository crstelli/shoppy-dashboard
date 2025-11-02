import { Operations } from "./Operations";
import { Tag } from "./Tag";
import { Cell } from "./Cell";
import { Section } from "./Section";
import { Header } from "./Header";
import { Row } from "./Row";
import { Footer } from "./Footer";
import { Title } from "./Title";
import { Content } from "./Content";

function Table({ children, classes }) {
  return (
    <div className={`flex flex-col text-center ${classes}`}>{children}</div>
  );
}

Table.Title = Title;
Table.Operations = Operations;
Table.Header = Header;
Table.Content = Content;
Table.Section = Section;
Table.Row = Row;
Table.Cell = Cell;
Table.Tag = Tag;
Table.Footer = Footer;

export { Table };
