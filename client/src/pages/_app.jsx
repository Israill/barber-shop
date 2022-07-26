import '../styles/global/_global.scss';
import Layout from '@/components/Layout';
import { Provider } from 'react-redux';
import store from '../redux/store';

import '../styles/css/Preload.css';
import '../styles/css/Libs.css';
import '../styles/css/Error.css';
import '../styles/css/About.css';
import '../styles/css/Gallery.css';
import '../styles/css/Index.css';
import '../styles/css/Post.css';
import '../styles/css/Preload.css';
import '../styles/css/Services.css';


const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
