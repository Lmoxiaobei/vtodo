const state = {
    all: [
        {
            id: '1',
            body: '遛狗',
            compl: false
        },
        {
            id: '2',
            body: '吃饭',
            compl: true
        },
        {
            id: '3',
            body: '再次吃饭',
            compl: false
        }
    ],
    currentFilter: 'ALL'
}
const mutations = {
    addTodo1(state, todo) {
        state.all.push(todo)
    },
    close(state, id) {
        state.all = state.all.map(todo => {
            if (id === todo.id) todo.compl = true
            return todo
        })
    },
    setFilter(state, filter) {
        state.currentFilter = filter
    }
}

export default {
    state,
    mutations
}