import React from 'react'
import styled from 'styled-components'

import tiger from '../../assets/tiger.png'
import winner from '../../assets/winner.svg'
import loser from '../../assets/loser.svg'

const images = {
  reverseResolution: tiger,
  ownsAction: winner,
  lostAction: loser
}

const StyledImg = styled('img')`
  width: 100%;
  height: auto;
`

const Div = styled('div')`
  position: relative;
  & div {
    position: absolute;
    top: -5px;
    left: 0px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #999;
    padding: 0.2em 0.3em;
    display: none;
    z-index: 1000;
    font-size: 80%;
  }
  &:hover {
    div {
      display: block;
    }
  }
`

export default ({ id, width, style, tooltip }) => (
  <Div style={{ display: 'inline-block', width, ...style }}>
    <StyledImg src={images[id]} />
    {tooltip ? (
      <div>
        {tooltip}
      </div>
    ) : null}
  </Div>
)
