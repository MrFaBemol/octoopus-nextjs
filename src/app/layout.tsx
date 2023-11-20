import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import HeaderComponent from "@/app/components/header";
import FooterComponent from "@/app/components/footer";
import NavbarMain from "@/app/components/navbarMain";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Octoopus',
    description: 'A toolkit for classical musicians',
}

export default function RootLayout(
    {
        children,
    }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/*<HeaderComponent />*/}
                <NavbarMain />
                {children}
                <FooterComponent />
            </body>
        </html>
    )
}
