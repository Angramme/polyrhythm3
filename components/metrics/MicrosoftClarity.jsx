'use client'

import Script from "next/script"

export const MicrosoftClarity = () => {
    return <Script id="clarity-script" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "m1q5zx2fms");
        `}
    </Script>
    // return <Script
    //         id="microsoft-clarity-init"
    //         strategy="afterInteractive"
    //         dangerouslySetInnerHTML={{
    //             __html: `
    //             (function(c,l,a,r,i,t,y){
    //                 c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    //                 t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    //                 y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    //             })(window, document, "clarity", "script", "m1q5zx2fms");
    //             `,
    //         }}
    //     />
}