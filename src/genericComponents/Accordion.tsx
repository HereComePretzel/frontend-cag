import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Checkbox from './Checkbox';

const GenericAccordion = (props: any) => {
  const { text, textHeader } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion defaultActiveKey="0" onClick={() => setIsOpen(!isOpen)}>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} eventKey="0" variant="link">
            {textHeader}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Checkbox {...text} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default GenericAccordion;