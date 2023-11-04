import React, { useRef } from 'react';
import { Button, Col, Form, Input, InputRef, Row, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import useCities from '../hooks/useCities';
import useCountries from '../hooks/useCountries';

const Cities = () => {
  const [currentCountry, setCurrentCountry] = React.useState<any>(null);
  const nameInputRef = useRef<InputRef>(null);
  const { countries } = useCountries();
  const { cities, fetchCities } = useCities();

  async function createCity() {
    await fetch(import.meta.env.VITE_API_URL + '/city', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameInputRef.current.input.value,
        country: {
          id: currentCountry,
        },
      }),
    });
    void fetchCities();
  }

  function handleChange(value) {
    setCurrentCountry(value);
  }

  function handleSubmit() {
    void createCity();
  }

  return (
    <Row>
      <Col>
        <h1>Villes</h1>
        <ul>
          {cities.map((city: any) => (
            <li key={city.id}>
              {city.name} - {city.country?.name}
            </li>
          ))}
        </ul>
        <Form onFinish={handleSubmit}>
          <FormItem label="Pays">
            <Select onChange={handleChange}>
              {countries.map((country: any) => (
                <Select.Option key={country.id} value={country.id}>
                  {country.name}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
          <FormItem label="Nom">
            <Input ref={nameInputRef} />
          </FormItem>
          <Button type="primary" htmlType="submit">
            Créer
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Cities;
