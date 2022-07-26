import { Badge, IconButton } from "@mui/material";
import { Fragment } from "react";
import { Cart } from "../../assets";

const CartIcon = () => {
  return (
    <Fragment>
      <IconButton>
        <Badge
          badgeContent={4}
          color="primary"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <img src={Cart} />
        </Badge>
      </IconButton>
    </Fragment>
  );
};

export default CartIcon;
