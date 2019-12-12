import request from '../util/request';

function queryList() {
    return request('/api/cards');
}

function addOne(data) {
    return request('/api/cards/add', {
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
    });
}

function getStatistic(id) {
    return request(`/api/cards/${id}/statistic`);
}

export default {

    namespace: 'cards',

    state: {
        cardsList: [],
        statistic: {},
    },

    effects: {
        *queryList({ _ }, { call, put }) {
            const rsp = yield call(queryList);
            yield put({ type: 'saveList', payload: { cardsList: rsp.result } });
        },
        // *deleteOne({ payload }, { call, put }) {
        //     const rsp = yield call(cardsService.deleteOne, payload);
        //     console.log('deleteOne');
        //     console.log(rsp);
        //     return rsp;
        // },
        *addOne({ payload }, { call, put }) {
            const rsp = yield call(addOne, payload);
            yield put({ type: 'queryList' });
            return rsp;
        },
        *getStatistic({ payload }, { call, put }) {

            const rsp = yield call(getStatistic, payload);
            yield put({
                type: 'saveStatistic',
                payload: {
                    id: payload,
                    data: rsp.result,
                },
            });
            return rsp;
        },
    },

    reducers: {
        saveList(state, { payload: { cardsList } }) {
            return {
                ...state,
                cardsList,
            }
        },
        saveStatistic(state, { payload: { id, data } }) {
            return {
                ...state,
                statistic: {
                    ...state.statistic,
                    [id]: data,
                },
            }
        },
    },
};