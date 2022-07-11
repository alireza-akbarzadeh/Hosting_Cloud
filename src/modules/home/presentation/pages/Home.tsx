import React from "react";
import { Footer, Header } from "@core/components/layouts";
import {
  Banner,
  DomainBlock,
  Features,
  Plans,
} from "@modules/home/presentation/components";
import { IoShuffleSharp } from "react-icons/io5";
import { TbHeartRateMonitor } from "react-icons/tb";
import { Testimonial } from "@core/components/common";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <DomainBlock />
      <Plans />
      <Features
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsam nam praesentium!\n"
        }
        className={""}
        icon={IoShuffleSharp}
        alt={"balance"}
        title={"Host On Hte Cloud to Keep Growing"}
        subTitle={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, vero!\n"
        }
        link={"/"}
        img={"/images/easy.jpg"}
        heading={"Super Easy to Use"}
        direction={"none"}
      />
      <Features
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsam nam praesentium!\n"
        }
        className={""}
        icon={TbHeartRateMonitor}
        alt={"balance"}
        title={"Simply Fast Website"}
        subTitle={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, vero!\n"
        }
        link={"/"}
        img={"/images/fast.jpg"}
        heading={"Super Easy to Use"}
        direction={"reverse"}
      />
      <Features
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsam nam praesentium!\n"
        }
        className={""}
        icon={IoShuffleSharp}
        alt={"balance"}
        title={"Host On Hte Cloud to Keep Growing"}
        subTitle={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, vero!\n"
        }
        link={"/"}
        img={"/images/support.jpg"}
        heading={"Super Easy to Use"}
        direction={"none"}
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default HomePage;
