import styled from "@emotion/styled";

const ResultadoStyle = styled.div`
  color: #fff;
  font-family: 'lato', sans-serif;
  display: flex;
  align-items: start;
  gap: 1rem;
  margin-top: 30px;
`

const Imagen = styled.img`
   display: block;
   width: 150px
`

const Texto = styled.p`
  font-size: 18px;
  span { 
    font-weight: 700;
  }
`

const Precio = styled.p`
  font-size: 24px;
  span { 
    font-weight: 700;
  }
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (

    <ResultadoStyle>
    <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
        <div>
          <Precio>El precio es de: <span>{PRICE}</span></Precio>
          <Texto>Precio mas Alto del Dias: <span>{HIGHDAY}</span></Texto>
          <Texto>Precio mas Bajo del Dias: <span>{LOWDAY}</span></Texto>
          <Texto>Variacion de las Ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
          <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
        </div>
    </ResultadoStyle>
  )
}

export default Resultado