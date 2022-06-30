import { IconTypes } from "components/icon";
import { REASONS } from "enums/reasons";

export interface Reason {
  reasonId: REASONS;
  reason: string;
}

export interface IconName {
  reasonId: REASONS;
  icon: IconTypes;
}
