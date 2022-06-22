import { FC } from "react";
import {
  SearchOutlined,
  SentimentSatisfiedAltOutlined,
  CheckOutlined,
  Copyright,
  Instagram,
  Facebook,
  Twitter,
  Telegram,
} from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

const ICONS = {
  SearchOutlined,
  SentimentSatisfiedAltOutlined,
  CheckOutlined,
  Copyright,
  Instagram,
  Facebook,
  Twitter,
  Telegram,
};

export type IconTypes = keyof typeof ICONS;

interface Props extends SvgIconProps {
  name: IconTypes;
}

export const Icon: FC<Props> = ({ name, ...rest }) => {
  const MUIIcon = ICONS[name];

  return <MUIIcon {...rest} />;
};
