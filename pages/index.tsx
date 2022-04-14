import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Htag,
  P,
  Rating,
  Tag
} from '../components';
import { Layout, withLayout } from '../layout/Layout';

const Home: NextPage = () => {
  const [rating, setRating] = useState<number>(4);
  console.log('Home is render');

  return (
    <>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P size='14'>some text</P>
      <P size='16'>some text</P>
      <P size='18'>some text</P>
      <Tag size='s'>Small</Tag>
      <Tag size='m' color='primary'>Small</Tag>
      <Tag color='green'>Small</Tag>
      <Tag color='red'>111</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
};

export default withLayout(Home);
