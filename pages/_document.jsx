import { Html, NextScript, Head, Main } from "next/document";


export default function Document(){
    return (
        <Html lang='en'>
            <Head/>
            <body>
                <Main/>
                <NextScript/>
                <>
                    <script 
                        defer 
                        src='https://static.cloudflareinsights.com/beacon.min.js' 
                        data-cf-beacon='{"token": "e5220b008f4e45978d81fd6ab189ec0e"}'></script>
                </>
            </body>
        </Html>
    )
}