import React, { useEffect, useState } from "react";
import {Htag,Button,Paragraph, Tag, Rating} from "../components";
import { withLayout } from "../Layout/Layout";
function Home():JSX.Element {

const [rating,setRating] = useState<number>(4);
 
  
  return (
    <>
      <Htag tag="h3">Привет</Htag>
      <Button appearance="primary" arrow='down' >Нажми бобо</Button>
      <Button appearance="ghost" arrow="right">Нажми а</Button>
      <Paragraph textSize="l" className="hi">Привет ты не дурак</Paragraph>
      <Tag textSize="s" color="green">Привет</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}


export default withLayout(Home);