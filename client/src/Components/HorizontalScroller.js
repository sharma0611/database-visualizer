// @flow
import { Flex } from 'rebass'
import styled from 'styled-components'

const HorizontalScroller = styled(Flex).attrs({
    flexDirection: 'row'
})`
    width: 100vw;
    overflow: scroll;
`

export default HorizontalScroller
