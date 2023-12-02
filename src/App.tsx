import type { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import './App.css';
// import UseReducerForm from 'components/UseReducerForm';
// import ReduxToolKitForm from 'components/ReduxToolKitForm';
import SingleStateForm from 'components/SingleStateForm';
const App: FC = () => (
  <>
    <Heading size="lg" as="h1" my={8}>
      {import.meta.env.VITE_APP_TITLE}
    </Heading>
    {/* <UseStateForm /> */}
    {/* <UseReducerForm /> */}
    {/* <ReduxToolKitForm /> */}
    <SingleStateForm />
  </>
);

export default App;
