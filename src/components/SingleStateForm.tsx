import {
  type FC,
  type ChangeEvent,
  type SyntheticEvent,
  useState,
} from 'react';

import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';

import ReactSelect from 'react-select';

import { wrappingType, prefectures } from 'schemas/constants';
import { type DeliveryForm } from 'schemas/deliveryForm';

const initialState: DeliveryForm = {
  zipCode: '',
  prefecture: '',
  city: '',
  address: '',
  building: '',
  wrapping: 'none',
};

/**
 * main component
 */
const UseReducerForm: FC = () => {
  const [formState, setFormState] = useState<DeliveryForm>(initialState);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(formState);
  };

  const handleReset = (e: SyntheticEvent) => {
    e.stopPropagation();
    setIsConfirmed(false);
    setFormState(initialState);
  };

  return (
    <Box p={4} w="md" borderWidth="1px" borderRadius="lg" boxShadow="base">
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="zipcode" mt={4}>
          郵便番号
        </FormLabel>
        <Input
          size="md"
          maxLength={7}
          value={formState.zipCode}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFormState((prevState) => ({
              ...prevState,
              zipCode: e.target.value,
            }));
          }}
        />
        <FormLabel htmlFor="prefecture" mt={4}>
          都道府県
        </FormLabel>
        <ReactSelect
          options={prefectures.map((pref) => ({ value: pref, label: pref }))}
          value={{ value: formState.prefecture, label: formState.prefecture }}
          onChange={(prefObj) => {
            setFormState((prevState) => ({
              ...prevState,
              prefecture: prefObj?.value ?? '',
            }));
          }}
        />

        <FormLabel htmlFor="city" mt={4}>
          市区町村
        </FormLabel>
        <Input
          size="md"
          value={formState.city}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFormState((prevState) => ({
              ...prevState,
              city: e.target.value,
            }));
          }}
        />
        <FormLabel htmlFor="address" mt={4}>
          番地
        </FormLabel>
        <Input
          size="md"
          value={formState.address}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFormState((prevState) => ({
              ...prevState,
              address: e.target.value,
            }));
          }}
        />
        <FormLabel htmlFor="building" mt={4}>
          建物名・部屋番号
        </FormLabel>
        <Input
          size="md"
          value={formState.building}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFormState((prevState) => ({
              ...prevState,
              building: e.target.value,
            }));
          }}
        />
        <FormLabel htmlFor="wrapping" mt={4}>
          包装オプション
        </FormLabel>
        <Select
          value={formState.wrapping}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setFormState((prevState) => ({
              ...prevState,
              wrapping: e.target.value as keyof typeof wrappingType,
            }));
          }}
        >
          {Object.entries(wrappingType).map(([code, value]) => (
            <option key={code} value={code}>
              {value}
            </option>
          ))}
        </Select>
        <Checkbox
          isChecked={isConfirmed}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setIsConfirmed(e.target.checked);
          }}
          mt={4}
        >
          内容を確認しました
        </Checkbox>
        <ButtonGroup my={3} w="xs">
          <Button
            w="30%"
            colorScheme="orange"
            variant="solid"
            type="submit"
            isDisabled={!isConfirmed}
          >
            送信
          </Button>
          <Button
            w="30%"
            colorScheme="orange"
            variant="outline"
            onClick={handleReset}
          >
            リセット
          </Button>
        </ButtonGroup>
      </form>
    </Box>
  );
};

export default UseReducerForm;
