import { Footer, Layout, Link, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import './globals.css'
import { Metadata } from "next";
import { NextraSearchDialog } from "@/components/nextra-search-dialog";
import { getPagesFromPageMap } from "@/lib/getPagesFromPageMap";

export const metadata: Metadata = {
}

const banner = <Banner storageKey="some-key">This template was created with 🩸 and 💦 by <Link href="">PHUCBM</Link> 🐧</Banner>
const navbar = (
    <Navbar
        projectLink=""
        logo={<img src="/images/general/logo.svg" alt="Logo" width={100} height={20} />}
    />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>

export default async function RootLayout({ children }) {
    const pageMap = await getPageMap();
    const pages = await getPagesFromPageMap({
        pageMapArray: pageMap,
        // filterItem: async (item) => {
        //     return {
        //         ...item,
        //     };
        // }
    });

    return (
        <html
            lang="en"
            dir="ltr"
            suppressHydrationWarning
        >
            <Head
            >
                <link rel="shortcut icon" href="/images/general/icon.svg" />
            </Head>
            <body>
                <Layout
                    banner={banner}
                    navbar={navbar}
                    pageMap={pageMap}
                    docsRepositoryBase=""
                    footer={footer}
                    search={<NextraSearchDialog pages={pages} />}
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}