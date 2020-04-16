
import {useEffect, useState} from "react";


export const useFetch = (url) => {

    const [state, setState] = useState('m')

    useEffect(() => {
        setState({data: [], loading: true})
    fetch(url)
    .then(x => x.json())
    .then(y => {
        setState({data: 'mm', loading: false})
    });
}, [url]);
}

