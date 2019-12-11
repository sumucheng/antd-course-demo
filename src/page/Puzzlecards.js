import { Card, Button } from "antd"
import { connect } from 'dva';
import { useEffect } from "react";

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
    const cardList = state[namespace].data;
    return { cardList };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDidMount: () => {
            dispatch({ type: `${namespace}/queryInitCards` })
        }
    }
}

function PuzzleCardPage(props) {
    useEffect(() => {
        props.onDidMount()
    }, [])
    return (
        <div>
            {props.cardList.map(card =>
                <Card key={card.id}>
                    <div>Q: {card.title}</div>
                    <div><strong>A: {card.body}</strong></div>
                </Card>
            )}
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(PuzzleCardPage)