import React from "react";
import {Button,  Popover, OverlayTrigger} from 'react-bootstrap';

const Intento = () => {

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Popover right</Popover.Header>
          <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Body>
        </Popover>
      );

    return(
        <OverlayTrigger trigger={["hover", "focus"]} placement="right" overlay={popover}>
        <Button variant="success">Click me to see</Button>
    </OverlayTrigger>
    )


    
}


export default Intento;