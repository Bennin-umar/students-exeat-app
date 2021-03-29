import { createContext,useReducer } from "react"
import studentReducer from "../reducers/studentReducer";

const initialStudent = [
    { name: "Umar Bennin", level: 200, ddate: "12/12/12",rdate: "12/12/12",reason:"...",destination:"", indexNo: "KWE004" },
    { name: "game bwoy", level: 200, ddate: "12/12/12",rdate: "12/12/12",reason:"...",destination:"", indexNo: "KWE005" },
    { name: "sissala boy", level: 200, ddate: "12/12/12",rdate: "12/12/12",reason:"...",destination:"", indexNo: "KWE007" },
    
];


export const StudentContext = createContext()

const StudentContextProvider = ({ children }) => {
    
    const [students, dispatch] = useReducer(studentReducer, initialStudent);
    
    return (
        <StudentContext.Provider value={{ students, dispatch }}>
            {children}
        </StudentContext.Provider>
    );
};
export default StudentContextProvider;