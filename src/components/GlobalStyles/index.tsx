import { css, Global } from '@emotion/react'

export const GlobalStyles = () => (
  <Global
    styles={css`
      *:not(svg),
      *::before,
      *::after {
        box-sizing: border-box;
      }

      html,
      body {
        min-height: 100%;
      }

      html {
        background-color: #d5d6da;
        font-size: 14px;
        font-family: Arial, sans-serif;
        line-height: 1.4;
      }

      body {
        padding: 0;
        margin: 0;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      button,
      [type='button'],
      [type='reset'],
      [type='submit'] {
        -webkit-appearance: button;
      }

      button::-moz-focus-inner,
      [type='button']::-moz-focus-inner,
      [type='reset']::-moz-focus-inner,
      [type='submit']::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      button:-moz-focusring,
      [type='button']:-moz-focusring,
      [type='reset']:-moz-focusring,
      [type='submit']:-moz-focusring {
        outline: 1px dotted ButtonText;
      }

      a {
        text-decoration: none;
      }
    `}
  />
)
