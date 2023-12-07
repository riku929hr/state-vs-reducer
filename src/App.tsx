import type { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import './App.css';

import ReduxToolKitForm from 'components/ReduxToolKitForm';
// import SingleStateForm from 'components/SingleStateForm';
// import UseReducerForm from 'components/UseReducerForm';
// import UseStateForm from 'components/UseStateForm';

const App: FC = () => (
  <>
    <Heading size="lg" as="h1" my={8}>
      {import.meta.env.VITE_APP_TITLE}
    </Heading>
    <ReduxToolKitForm />
  </>
);

export default App;
