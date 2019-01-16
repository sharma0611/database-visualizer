//@flow
import { Heading } from 'rebass'
import { padding } from '../Theme'
import styled from 'styled-components'

const BigHeading = styled(Heading).attrs({
    fontSize: [5, 6],
    textAlign: 'center',
    p: padding.large,
    color: 'blue.1'
})``

export default BigHeading
