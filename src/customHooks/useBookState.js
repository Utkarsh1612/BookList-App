import { useEffect, useState } from "react";

const useBookState = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
     const data = JSON.parse(localStorage.getItem("books"));
        if(!data){
        setBooks([]);
    }else{
        setBooks(data);
    }
    },[]);

    return {books, setBooks};
}

export default useBookState;