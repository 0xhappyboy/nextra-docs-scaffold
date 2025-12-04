import { MetaRecord } from "nextra";

const DOCS_ITEMS: MetaRecord = {
    index: '',
    navigation: '',
    tips: '',
    menu: '',
}

export default {
    index: {
        type: 'page',
        theme: {
            layout: 'full',
            toc: false,
            timestamp: false,
        }
    },
    docs: {
        type: 'page',
        title: 'Documentation',
        items: DOCS_ITEMS
    },
    nextraStarter: {
        title: 'Links',
        type: 'menu',
        items: {
            docs: {
                title: 'Link1',
                href: '',
            },
            blog: {
                title: 'Linke2',
                href: ''
            }
        }
    },
}