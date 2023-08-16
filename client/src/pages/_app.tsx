import {Provider} from 'react-redux'
import store from '../app/store/store'
import { createWrapper } from 'next-redux-wrapper';
import '../app/styles/globals.css'

function App({ Component, pageProps } :any) {
  return (
       <Component {...pageProps} />
  )
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);