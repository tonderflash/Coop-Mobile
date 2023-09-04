import {useState} from 'react';


const useToggle = (): [boolean, (value?: boolean)=>void] => {
    const [show, setShow] = useState(false)

    const toggleShow = (value?: boolean) =>{
        setShow(prev => {
            const result = value ? value : !prev

            return result
        })
    }

    return [
        show,
        toggleShow
    ]
};

export default useToggle;
