function studentReducer(state, action) {
    
    switch (action.type) {
        case "ADDSTUDENT":
            const { name, level, rdate,ddate,reason,destination, indexNo } = action.data;
            return [
                 { name, level, rdate,ddate,reason,destination, indexNo },...state]
        case "delete":
            return state.filter((student) => student.indexNo !== action.payload)
        default:
            return state;
    }
}

export default studentReducer;