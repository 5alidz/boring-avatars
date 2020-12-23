import React, { useState } from 'react'
import styled from 'styled-components'
import AvatarGeometric from '../avatar/components/avatar-geometric'
import { SegmentGroup, Segment, Button, BaseStyles, ColorDot } from './ui-system'
import colors from 'nice-color-palettes'

const paletteColors = colors

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: var(--pagePadding);
  align-items: center;
`

const SettingsSection = styled.div`
  display: inline-grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  max-width: max-content;
`

const ColorsSection = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
`

const ContentSection = styled.div`
  padding: var(--pagePadding);
`

const AvatarWrapper = ({ name, playgroundColors }) => {
  const [avatarName, setAvatarName] = useState(name)
  return (
    <>
      <div>
        <AvatarGeometric name={name} colors={playgroundColors} size={80}/>
      </div>
      <div>
        {avatarName}
      </div>
      <input value={avatarName} onChange={e => setAvatarName(e.target.value)}/>
    </>
  )
}

const getRandomPaletteIndex = () => Math.floor(Math.random() * paletteColors.length)

const Playground = () => {
  const defaultPlaygroundColors = paletteColors[31]
  const [playgroundColors, setPlaygroundColors] = useState(defaultPlaygroundColors)
  
  const handleRandomColors = () => {
    setPlaygroundColors(paletteColors[getRandomPaletteIndex()])
  }

  return (
    <>
      <BaseStyles />
      <Header>
        <SettingsSection>
          <SegmentGroup>
            <Segment>Texture</Segment>
            <Segment>Geometric</Segment>
            <Segment>Abstract</Segment>
          </SegmentGroup>
          <ColorsSection>
            {playgroundColors.map((playgroundColor, index) => (
              <ColorDot color={playgroundColor} key={index} />
            ))}
          </ColorsSection>
        </SettingsSection>

        <div>
          <Button
            onClick={() => handleRandomColors()}
          >
            Random colors
          </Button>
          <Button>Random names</Button>
        </div>
      </Header>

      <ContentSection>
        <AvatarWrapper name="Brian" playgroundColors={playgroundColors} />
        <AvatarWrapper name="Mike" playgroundColors={playgroundColors} />
      </ContentSection>
    </>
  )
}

export default Playground