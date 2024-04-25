'use client'

export const CloudflareAnalytics = () => {
    return <>
        <script 
            defer 
            src='https://static.cloudflareinsights.com/beacon.min.js' 
            data-cf-beacon='{"token": "e5220b008f4e45978d81fd6ab189ec0e"}'></script>
    </>
}