// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
"use client"
import '@mantine/core/styles.css';
//@ts-ignore
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

export default function Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
        <TawkMessengerReact
          propertyId="67079eb902d78d1a30ef6cbb"
          widgetId="1i9qs823g"
        />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}