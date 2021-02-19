import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    background: #EFEFBB;
	  background: linear-gradient(to right, rgb(145, 240, 212), rgb(268, 165, 248));
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .steel {
	background-color: #f4f4f4;
}

.fire {
	background-color: #FDDFDF;
}

.grass {
	background-color: #DEFDE0;
}

.electric {
	background-color: #FCF7DE;
}

.water, .ice {
	background-color: #9EF3FF;
}

.ground {
	background-color: #f4e7da;
}

.rock {
	background-color: #d5d5d4;
}

.fairy {
	background-color: #fceaff;
}

.poison {
	background-color: #98d7a5;
}

.bug {
	background-color: #f8d5a3;
}

.dragon {
	background-color: #97b3e6;
}

.psychic {
	background-color: #eaeda1;
}

.flying {
	background-color: #F5F5F5;
}

.fighting {
	background-color: #E6E0D4;
}

.normal {
	background-color: #F5F5F5;
}
`;

const theme = {
  colors: {
    primary: '#2a75bb',
    primaryDark: '#3c5aa6',
    secondary: '#ffcb05',
    secondaryDark: '#c7a008',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
