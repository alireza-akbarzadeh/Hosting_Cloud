import React, { useState } from "react";
import HeaderView from "./header.view";
import useWindowSize from "@core/Hook/useWindowSize";

type PropTypes = {};

const HeaderComponents = (props: PropTypes) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const Menu = [
    { label: "Hosting", link: "#" },
    { label: "VPS", link: "#" },
    { label: "Domain", link: "#" },
    { label: "Pricing", link: "#" },
  ];
  const handleCloseModal = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <HeaderView
      {...props}
      setOpenModal={setOpenModal}
      menu={Menu}
      open={openModal}
      close={handleCloseModal}
    />
  );
};

export default HeaderComponents;
