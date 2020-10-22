import {iseState,useEffect} from 'react'

const PREFIX = 'discord-clone-'

export default function useLocalStorage(key,initialValue) {
    const prefixedKey = PREFIX + key
    const [value,setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != NULL) return JSON.parse(jsonValue)
        if (typeof initialValue === "function") return initialValue();
        else return initialValue;

    })
    useEffect(()=> {
        localStorage.setItem(prefixedKey,JSON.stringify(value))
    },[prefixedKey,value])
}
