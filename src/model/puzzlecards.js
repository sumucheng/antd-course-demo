// request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise
import request from '../util/request';
import { message } from 'antd';

const delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}
const getRandomPuzzle = () => {
    return request('/dev/posts/1')
}
export default {
    namespace: 'puzzlecards',
    state: {
        data: [],
        counter: 0,
    },
    effects: {
        *queryInitCards(_, { call, put }) {
            // 加入 try catch 捕获抛错
            try {
                const puzzle = yield call(getRandomPuzzle)
                yield put({ type: 'addCard', payload: puzzle })

                yield call(delay, 3000)

                const puzzle2 = yield call(getRandomPuzzle)
                yield put({ type: 'addCard', payload: puzzle2 })
            }
            catch (error) {
                message.error('数据获取失败')
            }
        }
    },
    reducers: {
        addCard(state, { payload: newCard }) {
            const nextCounter = state.counter + 1
            const nextData = state.data.concat({ ...newCard, id: nextCounter })
            return {
                counter: nextCounter,
                data: nextData,
            }
        }
    },

};