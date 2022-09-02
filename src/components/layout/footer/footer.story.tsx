import React from "react";
import { storiesOf } from "@storybook/react";
import { Footer } from "./footer";

const story = storiesOf("Components|Layout", module);

const data: Footer = {
  copyrightOwner: "село Шебет",
  facebook: "https://www.facebook.com/serbetbezr/",
  instagram: "https://www.instagram.com/scherbetbezr/",
  twitter: "https://twitter.com/seloschebet",
  };

story.add("Footer", () => <Footer {...data} />);
