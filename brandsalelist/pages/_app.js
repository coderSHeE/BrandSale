import '../styles/globals.css'

import { QueryClientProvider, QueryClient } from 'react-query'


//creating a client

const queryClient = new QueryClient();
function MyApp({Component, pageProps}){
  return <QueryClientProvider client={queryClient}>
    <Component{...pageProps}/>
  </QueryClientProvider>
}


function myApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default myApp
