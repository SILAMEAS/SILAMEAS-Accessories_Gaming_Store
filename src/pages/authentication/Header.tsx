import {AppBar, Box, IconButton, Stack, Toolbar,} from "@mui/material";
import HeaderCart from "../../components/Cart/HeaderCart.tsx";
import HeaderProfile from "../../components/profiles/HeaderProfile.tsx";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerCustom from "../../components/Drawer/DrawerCustom.tsx";
import UILogo from "../../utils/ui/UILogo.tsx";
import {UIMenu} from "../../utils/ui/UIMenu.tsx";


const AppHeader = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "black",
        boxShadow: "2px",
        width: "100%",
        margin: "0 auto",
          p:0,
          py:"10px",
          height: {sm:80,md:100}
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
          {/** Mobile UI */}
          <Stack justifyContent={"center"} direction={"row"} alignItems={"center"}>
              <DrawerCustom
                  renderButton={<IconButton
                  edge="end"
                  aria-label="menu"
                  sx={{ display: { xs: "visible", md: "none" }}}
              >
                  <MenuIcon sx={{color:"white"}}/>
              </IconButton>}
                  anchor={"left"}
                  bgcolor={"black"}
              >
                  <Stack>
                      <UILogo  sx={{ display: { xs: "block", md: "none" }}}/>
                      <Stack sx={{ display: { xs: "flex", md: "none" }, gap: 2 }}>
                          <UIMenu/>
                      </Stack>
                  </Stack>
              </DrawerCustom>
             <UILogo/>
          </Stack>

        {/** Desk Top UI */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <UIMenu/>
        </Box>

        <Stack direction={"row"} sx={{ alignItems: "center" }}>
          {/* <SearchInput /> */}
          <HeaderCart />
          <HeaderProfile />
        </Stack>

      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
