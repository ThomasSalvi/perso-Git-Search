// == Import npm
import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// == Import
import './style.scss';

// == Composant
const Spinner = () => (
  <div>
    <Segment size='large' inverted>
      <Dimmer active inverted>
        <Loader size='massive' inverted content='Chargement' />
      </Dimmer>
    </Segment>
  </div>
);

// == Export
export default Spinner;
