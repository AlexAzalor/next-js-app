import { NextPage } from 'next';
import React from 'react';
import {
  Button,
  Htag,
  P,
  Tag
} from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P size='14'>some text</P>
      <P size='16'>some text</P>
      <P size='18'>some text</P>
      <Tag size='s'>Small</Tag>
      <Tag size='m' color='primary'>Small</Tag>
      <Tag color='green'>Small</Tag>
      <Tag color='red'>111</Tag>
    </>
  );
};

export default Home;
