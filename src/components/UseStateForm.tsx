import {
  type FC,
  useState,
  type ChangeEvent,
  type SyntheticEvent,
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

import { wrappingType, prefectures } from 'schemas/constants';

const UseStateForm: FC = () => {
  const [zipcode, setZipcode] = useState<string>('');
  const [prefecture, setPrefecture] = useState<
    keyof typeof prefectures | undefined
  >();
  const [city, setCity] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [building, setBuilding] = useState<string>('');
  const [wrapping, setWrapping] = useState<keyof typeof wrappingType>('none');
  const [isAgreed, setIsAgreed] = useState<boolean>(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const data = {
      zipcode,
      prefecture,
      city,
      address,
      building,
      wrapping,
    };

    console.log(data);
    // 本来であれば、ここで送信を行う
    // e.g.) const response = postForm(data);
  };

  const handleReset = () => {
    setZipcode('');
    setPrefecture(undefined);
    setCity('');
    setAddress('');
    setBuilding('');
    setWrapping('none');
    setIsAgreed(false);
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
          value={zipcode}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setZipcode(e.target.value);
          }}
        />
        <FormLabel htmlFor="prefecture" mt={4}>
          都道府県
        </FormLabel>
        <Select
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setPrefecture(e.target.value as keyof typeof prefectures);
          }}
        >
          {prefectures.map((pref) => (
            <option key={pref} value={pref}>
              {pref}
            </option>
          ))}
        </Select>
        <FormLabel htmlFor="city" mt={4}>
          市区町村
        </FormLabel>
        <Input
          size="md"
          value={city}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setCity(e.target.value);
          }}
        />
        <FormLabel htmlFor="address" mt={4}>
          番地
        </FormLabel>
        <Input
          size="md"
          value={address}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setAddress(e.target.value);
          }}
        />
        <FormLabel htmlFor="building" mt={4}>
          建物名・部屋番号
        </FormLabel>
        <Input
          size="md"
          value={building}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setBuilding(e.target.value);
          }}
        />
        <FormLabel htmlFor="wrapping" mt={4}>
          包装オプション
        </FormLabel>
        <Select
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setWrapping(e.target.value as keyof typeof wrappingType);
          }}
          value={wrapping}
        >
          {Object.entries(wrappingType).map(([code, value]) => (
            <option key={code} value={code}>
              {value}
            </option>
          ))}
        </Select>
        <Checkbox
          checked={isAgreed}
          onChange={(e) => {
            setIsAgreed(e.target.checked);
          }}
        >
          規約に同意する
        </Checkbox>
        <ButtonGroup my={3} w="xs">
          <Button w="30%" colorScheme="orange" variant="solid" type="submit">
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

export default UseStateForm;
