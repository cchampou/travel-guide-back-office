import React, { useRef } from 'react';
import { Button, Col, Form, Input, InputRef, Row } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import useCountries from '../hooks/useCountries';

const Countries = () => {
  const nameInputRef = useRef<InputRef>(null);
  const { countries, fetchCountries } = useCountries();

  async function createCountry() {
    await fetch(import.meta.env.VITE_API_URL + '/country', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameInputRef.current.input.value,
      }),
    });
    void fetchCountries();
  }

  function handleSubmit() {
    void createCountry();
  }

  return (
    <Row>
      <Col>
        <h1>Pays</h1>
        <ul>
          {countries.map((country: any) => (
            <li key={country.id}>{country.name}</li>
          ))}
        </ul>
        <Form onFinish={handleSubmit}>
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

export default Countries;
