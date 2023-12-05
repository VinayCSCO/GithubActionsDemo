import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.css"

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <header>
        <title>Cloud Coffee</title>
        <meta name="description" content="Welcome EngCommons" />
      </header>
      
      <main className='main'>
        

          <h1 className='title'>
            Welcome to{' '}
            <code className='title_code'>Cisco SBG</code>
          </h1>
      


          <footer className='footer'>
            <a
              href="https://www.cisco.com/"
            >
              Powered by{' '}
              <span className='logo'>
                <StaticImage src="../images/Cisco.jpg" alt="Cisco" width={200} height={200} />
              </span>
            </a>
          </footer>
      </main>

      
    </Layout>
  )
}

export default IndexPage
