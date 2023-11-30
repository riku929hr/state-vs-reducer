import type { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import './App.css';
import UseReducerForm from 'components/UseReducerForm';

const App: FC = () => (
  <>
    <Heading size="lg" as="h1" my={8}>
      {import.meta.env.VITE_APP_TITLE}
    </Heading>
    {/* <UseStateForm /> */}
    <UseReducerForm />
  </>
);

export default App;
