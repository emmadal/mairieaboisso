import React from "react";
import TextScroll from "react-textscroll";
import { text } from "./containers/flashinfos";
import {Container} from 'mdbreact'

export default function FlashInfos() {
  return (
    <Container className="my-3">
      <TextScroll mode="vertical" text={text} speed={5000} />
    </Container>
  );
}
