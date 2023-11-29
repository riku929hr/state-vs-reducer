import type { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import RegistrationForm from 'components/RegistrationForm';
// import RegistrationForm from 'components/ValidRegistrationForm';
import './App.css';
import UseStateForm from 'components/UseStateForm';

const App: FC = () => (
  <>
    <Heading size="lg" as="h1" my={8}>
      {import.meta.env.VITE_APP_TITLE}
    </Heading>
    <UseStateForm />
  </>
);

export default App;
