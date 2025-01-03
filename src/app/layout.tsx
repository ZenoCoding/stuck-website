import type {Metadata} from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Nav";
import React from "react";
import Footer from "@/components/Footer";
import Head from "next/head";

const roboto = Roboto(
    {
        subsets: ["latin"],
        weight: ['100', '300', '400', '500', '700'],
        display: "swap",
    }
);

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
        <html lang="en" className={roboto.className}>
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
