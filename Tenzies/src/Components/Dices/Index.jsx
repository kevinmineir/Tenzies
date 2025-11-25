import * as S from './Styles.js'

export function Dice(props) {

    return(
        <>
            <S.Dice onClick={() => props.hold(props.id)} isClicked={props.isClicked}>{props.Numero}</S.Dice>
        </>
    )
}