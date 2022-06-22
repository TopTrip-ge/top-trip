import { ReactNode, FC } from "react";
import { Skeleton, SkeletonProps, SxProps, Theme } from "@mui/material";
import { SKELETON_STYLES } from "./with-skeleton-constants";

interface Props extends SkeletonProps {
  children: ReactNode;
  isLoading: boolean;
}

export const WithSkeleton: FC<Props> = ({ children, isLoading, sx, ...rest }) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>{isLoading ? <Skeleton sx={{ ...SKELETON_STYLES, ...sx } as SxProps<Theme>} {...rest} /> : children}</>
);
