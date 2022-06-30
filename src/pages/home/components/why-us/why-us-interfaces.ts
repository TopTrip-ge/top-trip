import { IconTypes } from "components/icon";
import { REASONS } from "enums/reasons";

export interface Reason {
  id: REASONS;
  reason: string;
}

export interface IconName {
  id: string;
  icon: IconTypes;
}
