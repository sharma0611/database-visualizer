// @flow
import { Flex } from 'rebass'
import styled from 'styled-components'

const Page = styled(Flex).attrs({
    flexDirection: 'column'
})`
    height: 100vh;
    overflow: hidden !important;
`

export default Page
