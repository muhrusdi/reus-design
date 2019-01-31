import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
  <Global styles={css`
   html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%
}

body {
  margin: 0;
  padding: 0
}

ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,hgroup,p,blockquote,figure,form,fieldset,input,legend,pre,abbr,button {
  margin: 0;
  padding: 0
}

pre,code,address,caption,th,figcaption {
  font-size: 1em;
  font-weight: normal;
  font-style: normal
}

fieldset,iframe,img {
  border: 0
}

caption,th {
  text-align: left
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

article,aside,footer,header,nav,main,section,summary,details,hgroup,figure,figcaption {
  display: block
}

audio,canvas,video,progress {
  display: inline-block;
  vertical-align: baseline
}

button {
  background: none;
  border: 0;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  color: inherit;
  cursor: pointer;
  font: inherit;
  line-height: inherit;
  overflow: visible;
  vertical-align: inherit
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
  font-size: 106.25%;
  quotes: "â€œ" "â€"
}

body {
  font-size: 14px;
  line-height: 1.47059;
  font-weight: 400;
  letter-spacing: -.022em;
  font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
  background-color: #fff;
  color: #333;
  font-style: normal
}

body,input,textarea,select,button {
  font-synthesis: none;
  -moz-font-feature-settings: 'kern';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  direction: ltr;
  text-align: left;
}

h1,h2,h3,h4,h5,h6 {
  color: #111
}

h1 img,h2 img,h3 img,h4 img,h5 img,h6 img {
    display: block;
    margin: 0
}

ul ul,ul ol,ol ul,ol ol {
  margin-top: 0;
  margin-bottom: 0
}

h1+*,h2+*,h3+*,h4+*,h5+*,h6+* {
  margin-top: .8em
}

h1+h1,h1+h2,h1+h3,h1+h4,h1+h5,h1+h6,h2+h1,h2+h2,h2+h3,h2+h4,h2+h5,h2+h6,h3+h1,h3+h2,h3+h3,h3+h4,h3+h5,h3+h6,h4+h1,h4+h2,h4+h3,h4+h4,h4+h5,h4+h6,h5+h1,h5+h2,h5+h3,h5+h4,h5+h5,h5+h6,h6+h1,h6+h2,h6+h3,h6+h4,h6+h5,h6+h6 {
  margin-top: .4em
}

p+h1,ul+h1,ol+h1,p+h2,ul+h2,ol+h2,p+h3,ul+h3,ol+h3,p+h4,ul+h4,ol+h4,p+h5,ul+h5,ol+h5,p+h6,ul+h6,ol+h6 {
  margin-top: 1.6em
}

p+*,ul+*,ol+* {
  margin-top: .8em
}

nav ul,nav ol {
  margin: 0;
  list-style: none
}

a {
  color: #1890ff;
  background-color: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color .3s;
}

p+a {
  display: inline-block
}
  `}/>
)

export default GlobalStyles