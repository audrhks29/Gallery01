import { useRef, useState } from 'react';
import { GallerySearchForm } from '../styled/galleryStyle.js'
import { AiOutlineCloseCircle } from 'react-icons/ai';

const GallerySearch = ({ onSearch }) => {
    let no = useRef(1);
    let textReference = useRef(null);
    const [text, setText] = useState('')
    const [memory, setMemory] = useState([])
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) return
        onSearch(text)
        setText('')
        setMemory([...memory, { id: no.current++, text }])
        console.log(memory);
        textReference.current.focus()
    }


    const memoryDel = (id) => {
        setMemory(memory.filter(item => item.id !== id))

    }
    return (
        <GallerySearchForm onSubmit={onSubmit}>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} ref={textReference} />
            <button type='submit'>검색</button>
            <ul>
                {
                    memory.map(item => (
                        <li key={item.id}>{item.text}<i onClick={() => memoryDel(item.id)}><AiOutlineCloseCircle /></i></li>
                    ))
                }
                <button onClick={() => setMemory([])}>초기화</button>
            </ul>
        </GallerySearchForm>
    );
};

export default GallerySearch;