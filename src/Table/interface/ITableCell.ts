import { TItem } from "../../interface/IData";
import { ICursorProps, IFontProps, IPaddingProps } from "../../interface/IGeneral";
import { ReactChildren } from "react";

export interface ITableCellRenderProps {
  item?: TItem;
}

export interface ITableCellProps
  extends ICursorProps,
    IFontProps,
    IPaddingProps {
  children?: ReactChildren;
  displayProperty?: string;
}
