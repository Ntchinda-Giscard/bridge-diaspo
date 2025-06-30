// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
"use client"
import '@mantine/core/styles.css';
//@ts-ignore
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { Toaster } from 'react-hot-toast';



import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import AuthProvider from './AuthProvider';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';


export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};



export default function Provider({
  children,
}: {
  children: React.ReactNode;
}) {

  const adminSecret = "rGvtJPPzqVUtdlnOA47eMp3DhiiNqqAF";
    const httpLink = new HttpLink({
        uri: "https://cheerful-crane-98.hasura.app/v1/graphql", // Replace with your Hasura GraphQL URL
        headers: {
            "x-hasura-admin-secret": adminSecret, // Replace with your admin secret
        },
    });

// Create the Apollo Client instance
    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
    });


  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
                  <Toaster />

        <MantineProvider>
          <ApolloProvider client={client}>
            <AuthProvider>
            <TawkMessengerReact
              propertyId="67079eb902d78d1a30ef6cbb"
              widgetId="1i9qs823g"
            />
            {children}
            </AuthProvider>
          </ApolloProvider>
        </MantineProvider>
      </body>
    </html>
  );
}