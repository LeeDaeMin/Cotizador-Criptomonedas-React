
import styled from '@emotion/styled'

const Texto = styled.p`
    background-color: #b7322c;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'lato', sans-serif;
    font-weight: 700;
    text-align: center;
`

const Error = ({childre}) => {
  return (
    <Texto>{childre}</Texto>
  )
}

export default Error