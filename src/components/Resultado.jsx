import styled from "@emotion/styled";

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <div>
        <p>El precio es de: <span>{PRICE}</span></p>
        <p>Precio mas Alto del Dias: <span>{HIGHDAY}</span></p>
        <p>Precio mas Bajo del Dias: <span>{LOWDAY}</span></p>
        <p>Variacion de las Ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></p>
        <p>Ultima actualizacion: <span>{LASTUPDATE}</span></p>
    </div>
  )
}

export default Resultado