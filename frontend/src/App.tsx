import React from 'react';

import GlobalStyle from './styles/global';
import User from './pages/users';

const App: React.FC = () => (
  <>
    <User />
    <GlobalStyle />
  </>
);

export default App;
