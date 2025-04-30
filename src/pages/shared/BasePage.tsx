import React, { FC, useEffect, useMemo, useState } from "react";
import {
  Chip,
  Grid,
  Fab,
  AppBar,
  Breadcrumbs,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  ListItemProps,
  Slide,
  Container,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import ListIcon from "@mui/icons-material/List";
import Popover from "@mui/material/Popover";
import MenuIcon from "@mui/icons-material/Menu";
import { singleCata, useAppSelector } from "../../store";
import "./BasePage.scss";
import { styled } from "@mui/material/styles";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
  fab: {
    position: "fixed",
    bottom: "70px",
    right: "20px",
    top: "auto",
  },
};

const ListItemLink = (props: ListItemProps<"a", { button?: true }>) => {
  return <ListItem button component="a" {...props} />;
};

const HideOnScroll = (props: {
  window?: () => Window;
  children: React.ReactElement;
}) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const BasePage: FC<{ pending: boolean }> = ({ children, pending }) => {
  const history = useHistory();
  const location = useLocation();
  const [ifDrawer, setDrawer] = useState(false);
  const [nowTitles, setNowTitles] = useState<
    { label: string; id: string }[] | never[]
  >([]);

  const nowPaths = useMemo(() => {
    const pathArr = location.pathname.split("/");
    pathArr.shift();
    let nowPaths: {
      pathName: string;
      labelName: string;
    }[] = [];
    pathArr.reduce((accumulator: string, currentValue: string) => {
      let temp = accumulator + "/" + currentValue;
      nowPaths.push({
        labelName: currentValue,
        pathName: accumulator + "/" + currentValue,
      });
      return temp;
    }, "");
    return nowPaths;
  }, [location]);

  const routes = useAppSelector((state) => state.routes);

  useEffect(() => {
    let list = [];
    const aNodeList = Array.from(document.querySelectorAll("a"));
    list = aNodeList.filter((v) => v.id);
    const handledList = list.map((v) => {
      return {
        label: v.innerText,
        id: v.id,
      };
    });
    setNowTitles(handledList);
  }, [pending]);

  const nowState = useMemo(() => {
    let temp: singleCata = {
      label: "",
      mdPath: "",
      routePath: "",
      keyWords: [],
    };
    const rec = (arr: Array<singleCata | string>) => {
      if (arr.length > 0) {
        arr.forEach((key) => {
          if (typeof key !== "string") {
            if (key.routePath === location.pathname) {
              temp = key;
            }
            rec(key.keyWords);
          }
        });
      }
    };
    rec(routes);
    return temp;
  }, [location.pathname, routes]);

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              sx={useStyles.menuButton}
              onClick={() => setDrawer(!ifDrawer)}
            >
              <MenuIcon />
            </IconButton>
            <Breadcrumbs sx={useStyles.title}>
              {nowPaths &&
                nowPaths.map((key) => (
                  <Link
                    color="inherit"
                    key={key.pathName}
                    onClick={() => {
                      history.push(key.pathName);
                    }}
                    sx={{ cursor: "pointer" }}
                  >
                    {key.labelName}
                  </Link>
                ))}
            </Breadcrumbs>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Grid container marginY={1} justifyContent="flex-start" spacing={1}>
        {nowState.keyWords.map((key) => {
          if (typeof key === "string") {
            return (
              <Grid item key={key}>
                <Chip label={key} />
              </Grid>
            );
          } else {
            return (
              <Grid item key={key.routePath + key.label}>
                <Chip
                  label={key.label}
                  color="primary"
                  onClick={() => {
                    if (key.routePath) {
                      history.push(key.routePath);
                    }
                  }}
                />
              </Grid>
            );
          }
        })}
      </Grid>

      <Container
        maxWidth="lg"
        sx={{
          overflowX: "auto",
          marginY: "25px",
          wordBreak: "break-all",
        }}
      >
        {children}
      </Container>

      <Fab
        variant="extended"
        size="small"
        color="primary"
        aria-label="add"
        sx={useStyles.fab}
      >
        <ListIcon />
      </Fab>

      <Drawer
        anchor="left"
        open={ifDrawer}
        onClose={() => setDrawer(false)}
        sx={{ "& .MuiDrawer-paper": { width: 200 } }}
      >
        {(routes as singleCata[]).map((key) => (
          <div
            className="navBlock"
            key={key.routePath}
            onClick={() => {
              if (key.routePath) {
                history.push(key.routePath);
              }
              setDrawer(false);
            }}
          >
            {key.label}
          </div>
        ))}
      </Drawer>
    </>
  );
};

export default BasePage;
