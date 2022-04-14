import { AppProps } from 'next/app';
import { Component, FunctionComponent } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from './Layout.module.scss';
import { Sidebar } from './Sidebar';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
    <Header/>
      <div>
        <Sidebar />
        <div>
          {children}
        </div>
      </div>
    <Footer/>
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: AppProps) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
