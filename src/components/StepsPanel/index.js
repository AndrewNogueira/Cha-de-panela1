import React from 'react';
import WaveSvg from '../WaveSvg';

import { Container, StepsTitleText, StepsSubtitleText } from './styles';

function StepsPanel() {
  return (
    <Container>
      <StepsTitleText>
        <h2>NATALLYA & ANDREW</h2>
      </StepsTitleText>
      <StepsSubtitleText>
        <h3>14 de março de 2026</h3>
      </StepsSubtitleText>
      <WaveSvg />
    </Container>
  );
}

export default StepsPanel;
