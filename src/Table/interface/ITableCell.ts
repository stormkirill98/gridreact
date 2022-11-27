import { IItem } from "../../interface/IData";
import { ICursorProps, IFontProps, IPaddingProps } from "./IGeneral";
import { ReactNode } from "react";

export interface ITableCellRenderProps {
  item?: IItem;
}

export interface ITableCellProps
  extends ICursorProps,
    IFontProps,
    IPaddingProps {
  children?: ReactNode;
  displayProperty?: string;
}
