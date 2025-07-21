import React, { } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'


type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
