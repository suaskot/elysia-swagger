import scalarElysiaTheme from './theme'
import type { ReferenceConfiguration } from './types'

export const ScalarRender = (version: string, config: ReferenceConfiguration) => `<!doctype html>
<html>
  <head>
    <title>API Reference</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1" />
    <style>
      body {
        margin: 0;
      }
    </style>
    <style>
      ${config.customCss ?? scalarElysiaTheme}
    </style>
  </head>
  <body>
    <script
      id="api-reference"
      data-configuration="JSON.stringify(${Bun.inspect(config)})"></script>
    <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference@${version}/dist/browser/standalone.min.js"></script>
  </body>
</html>`