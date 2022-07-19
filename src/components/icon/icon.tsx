import { FC } from "react";
import {
  Copyright,
  Instagram,
  Facebook,
  Twitter,
  Telegram,
  Email,
  LocalPhone,
  Place,
  SupportAgent,
  Menu,
  Done,
  ExpandMore,
  AttachMoneyOutlined,
  PaymentOutlined,
  AccessibilityNewOutlined,
  ChairOutlined,
  NetworkWifiOutlined,
  PhotoCameraOutlined,
  Add,
  Clear,
  AccountCircle,
  DirectionsCar,
  AirlineSeatReclineNormal,
  Luggage,
  LocalGasStation,
  Pets,
} from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

const ICONS = {
  Instagram,
  Facebook,
  Twitter,
  Telegram,
  Email,
  Copyright,
  LocalPhone,
  Place,
  SupportAgent,
  Menu,
  Done,
  ExpandMore,
  AttachMoneyOutlined,
  PaymentOutlined,
  AccessibilityNewOutlined,
  ChairOutlined,
  NetworkWifiOutlined,
  PhotoCameraOutlined,
  Add,
  Clear,
  AccountCircle,
  DirectionsCar,
  AirlineSeatReclineNormal,
  Luggage,
  LocalGasStation,
  Pets,
};

export type IconTypes = keyof typeof ICONS;

interface Props extends SvgIconProps {
  name: IconTypes;
}

export const Icon: FC<Props> = ({ name, ...rest }) => {
  const MUIIcon = ICONS[name];

  return <MUIIcon {...rest} />;
};
