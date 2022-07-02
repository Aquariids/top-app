import React from "react";
import {Htag,Button} from "../components";
export default function Home():JSX.Element {
  return (
    <>
      <Htag tag="h3">Привет</Htag>
      <Button appearance="primary" arrow='right' >Нажми ебло</Button>
      <Button appearance="ghost">Нажми ебло</Button>
    </>
  );
}
