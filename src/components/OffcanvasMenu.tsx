import {
  FlameIcon,
  HomeIcon,
  ShoppingCartIcon,
  InfoIcon,
  SettingsIcon,
} from "lucide-react";
import { Offcanvas } from "react-bootstrap";
import {
  SideMenuBarArea,
  SideMenuLogo,
  SideMenubarDivBox,
} from "./styled.component";
import { useNavigate } from "react-router-dom";

interface OffcanvasMenuProps {
  show: boolean;
  onHide: () => void;
}

const OffcanvasMenu = ({ show, onHide }: OffcanvasMenuProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Offcanvas
        show={show}
        onHide={onHide}
        style={{ width: "260px" }}
        placement="start"
      >
        <SideMenuBarArea>
          <SideMenuLogo>
            <FlameIcon
              fill="red"
              strokeWidth={0}
              size={24}
              style={{ marginRight: "15px" }}
            />
            <p>Sample App</p>
          </SideMenuLogo>
          <SideMenubarDivBox onClick={() => navigate("/")} selected={true}>
            <HomeIcon size={24} style={{ marginRight: "15px" }} />
            <p>Home</p>
          </SideMenubarDivBox>
          <SideMenubarDivBox
            onClick={() => navigate("/product")}
            selected={false}
          >
            <ShoppingCartIcon size={24} style={{ marginRight: "15px" }} />
            <p>Products</p>
          </SideMenubarDivBox>
          <SideMenubarDivBox
            onClick={() => navigate("/about")}
            selected={false}
          >
            <InfoIcon size={24} style={{ marginRight: "15px" }} />
            <p>About</p>
          </SideMenubarDivBox>
          <SideMenubarDivBox
            onClick={() => navigate("/settings")}
            selected={false}
          >
            <SettingsIcon size={24} style={{ marginRight: "15px" }} />
            <p>Settings</p>
          </SideMenubarDivBox>
        </SideMenuBarArea>
      </Offcanvas>
    </>
  );
};

export default OffcanvasMenu;
