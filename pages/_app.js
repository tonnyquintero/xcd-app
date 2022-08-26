import { nextUiProvider } from '@nextui-org/react'

function MyApp({ Component, pageProps }) {
  return (
          <nextUiProvider>
            <Component {...pageProps} />
          </nextUiProvider>
  )
        }

export default MyApp
