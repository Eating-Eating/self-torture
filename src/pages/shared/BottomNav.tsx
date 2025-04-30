import React, { FC, ReactElement } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import { useHistory, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledBottomNavigation = styled(BottomNavigation)({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  top: "auto",
});

export const BottomNav: FC<{ children: ReactElement }> = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <>
      {children}
      <StyledBottomNavigation
        value={location.pathname}
        onChange={(event, newValue) => {
          history.push(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          value="/react"
          label="知识的宝库"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          value="/selfTorture"
          label="自我拷打"
          icon={<RestoreIcon />}
        />
      </StyledBottomNavigation>
    </>
  );
};
