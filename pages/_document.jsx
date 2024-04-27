import { Html, NextScript, Head, Main } from "next/document";
import { CloudflareAnalytics } from "../components/metrics/CloudflareAnalytics";
import { MicrosoftClarity } from "../components/metrics/MicrosoftClarity";


export default function Document(){
    return (
        <Html lang='en'>
            <Head>
                <MicrosoftClarity/>
            </Head>
            <body>
                <Main/>
                <NextScript/>
                <CloudflareAnalytics/>
            </body>
        </Html>
    )
}