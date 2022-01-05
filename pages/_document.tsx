import { ServerStyleSheets } from '@mui/styles'
import Document, { DocumentContext } from 'next/document'
import React from 'react'
import { Component } from 'react'
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss'

// eslint-disable-next-line react/display-name
export default class JssDocument extends Document {
  static displayName = "JssDocument";
  // eslint-disable-next-line react/display-name
  static async getInitialProps(ctx: DocumentContext) {
    const registry = new SheetsRegistry()
    const generateId = createGenerateId()
    const originalRenderPage = ctx.renderPage
    const sheets = new ServerStyleSheets();
    // eslint-disable-next-line react/display-name
    ctx.renderPage = () =>
    // eslint-disable-next-line react/display-name
      originalRenderPage({
        // eslint-disable-next-line react/display-name
        enhanceApp: (App) => (props) =>
          (

            <JssProvider registry={registry} generateId={generateId}>
                {sheets.collect(<App {...props} />)},
            </JssProvider>
          ),
        // eslint-disable-next-line react/display-name
        enhanceComponent: (Component) => Component,
      })
    const initialProps = await Document.getInitialProps(ctx)
    // eslint-disable-next-line react/display-name
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ), 
    }
  }
}



/* JssDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: 
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
  }
}
 */