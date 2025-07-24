import React, { } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import {  CategoryItemsFragment, } from '@/graphql/generated';

type LayoutProps = {
    children: React.ReactNode;
    categories: CategoryItemsFragment;
}

export default function Layout({ children, categories,  }: LayoutProps) {
    return (
        <div >
            <Header categories={categories} />
            <main>{children}</main>
            <Footer />
        </div>
    );
  }
