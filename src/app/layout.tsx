import type { Metadata } from "next"
import "globals";


export const metadata: Metadata ={
    title: 'Ricky Yu Portfolio',
    description: 'portfolio',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            {/* 
            - next.js already includes default meta charset and meta viewport
            - It also automatically adds favicon.ico, icon.png, robots.txt as long as placed into
            top level of the "app" directory
            - In addition, next.js can manage head tags with metadata api (see metadata object*/}
            <body>
                <div id="root">{children}</div>
                {/* <script type="module" src="/src/main.tsx"></script> */}
            </body>
        </html>

    )
}