import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/Nav";
import React from "react";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
    title: "STUCK Tutoring | Fremont CA",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <title>STUCK Tutoring | Fremont CA</title>
        </Head>
        <body
            className={`antialiased`}
        >
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
