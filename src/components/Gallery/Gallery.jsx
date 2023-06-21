import axios from 'axios'
import GallerySearch from './GallerySearch';
import GalleryList from './GalleryList';
import { useEffect, useState } from 'react';
import { Container } from '../styled/galleryStyle'

const Gallery = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [text, setText] = useState('')

    useEffect(() => {
        const API_KEY = '36875442-b68909cdf3bbc37f8d54f62e2'
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`
        axios.get(url)
            .then(res => {
                setData(res.data.hits)
                setLoading(true)
                setError(null)
            })
            .catch(error => {
                setData([])
                setLoading(false)
                setError('api주소를 확인하세요')

            })
    }, [text])

    const onSearch = (text) => {
        setText(text)
    }

    return (
        <Container width='1400px'>
            <GallerySearch onSearch={onSearch} />
            <GalleryList data={data} />
        </Container>
    );
};

export default Gallery;