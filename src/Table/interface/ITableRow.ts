import { ReactNode } from "react";
import {
  IMarkerProps,
  ICursorProps,
  IShadowProps,
  IBorderProps,
  IRoundAnglesProps,
  IPaddingProps,
  IActionsProps
} from "../../interface/IGeneral";

export interface ITableRowProps
  extends IMarkerProps,
    ICursorProps,
    IShadowProps,
    IBorderProps,
    IRoundAnglesProps,
    IPaddingProps,
    IActionsProps {
  children?: ReactNode;
}
