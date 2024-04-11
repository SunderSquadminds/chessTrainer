import React from 'react';

export const getCellState = () => {
    const getRandomNumber = () => Math.floor(Math.random() * 8);
    const rows = [1, 2, 3, 4, 5, 6, 7, 8]
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    return columns[getRandomNumber()] + String(rows[getRandomNumber()])
}

const Board = (props) => {
    const Cell = (props) => {
        return (
            <div onClick={() => handleClick(props.count)} style={{ width: '116px', height: '116px', backgroundColor: props.color }}></div>
        )
    }
    const rows = [1, 2, 3, 4, 5, 6, 7, 8]
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    let white = '#EBECD2'
    let black = '#749557'
    let count = 0
    let componentMap = {}

    const handleClick = (count) => {
        if (count != props.cell) {
            props.setColor('#f00')
        }
        else {
            props.setColor('#282c34')
            props.setCellState(getCellState())
        }
    }

    for (let i = 0; i < 8; i++) {
        [black, white] = [white, black]
        for (let j = 0; j < 8; j++) {

            if (count % 2 == 0) {
                componentMap[columns[i] + rows[j]] = <Cell color={white} count={columns[i] + rows[j]} />
            }
            else {
                componentMap[columns[i] + rows[j]] = <Cell color={black} count={columns[i] + rows[j]} />
            }
            count += 1
        }
    }
    let chessBoard = <></>
    for (let cell in componentMap) {
        chessBoard = <>{chessBoard} {componentMap[cell]}</>
    }
    return (
        <div style={{ border: '10px solid', borderRadius: '10px', display: 'grid', margin: '10px 100px', width: '930px', gridTemplateColumns: 'auto auto auto auto auto auto auto auto', gap: '0px', rotate: '-90deg' }}>
            {chessBoard}
        </div>
    )
}
export default Board;