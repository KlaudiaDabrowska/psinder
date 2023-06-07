import { Avatar, MenuItem, Typography } from "@mui/material";
import Link from "next/link";

export const UserMenuItem = ({
  handleCloseUserMenu,
  shouldHasAvatar,
  title,
  href,
}: {
  handleCloseUserMenu: () => void;
  shouldHasAvatar: boolean;
  title?: string;
  href: string;
}) => {
  return (
    <Link href={`/dashboard/${href}`}>
      <MenuItem onClick={handleCloseUserMenu}>
        {shouldHasAvatar && (
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 20, height: 20, mr: 1 }}
          />
        )}
        <Typography textAlign="center" textTransform="capitalize">
          {title || href}
        </Typography>
      </MenuItem>
    </Link>
  );
};
