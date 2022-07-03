import React from "react";
import {Htag,Button,Paragraph} from "../components";
export default function Home():JSX.Element {
  return (
    <>
      <Htag tag="h3">Привет</Htag>
      <Button appearance="primary" arrow='down' >Нажми ебло</Button>
      <Button appearance="ghost" arrow="right">Нажми ебло</Button>
      <Paragraph textSize="l" className="hi">Привет еблан</Paragraph>
    </>
  );
}
