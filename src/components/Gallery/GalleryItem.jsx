import { GalleryItemBox } from '../styled/galleryStyle.js'

const GalleryItem = ({ item }) => {
    const { webformatURL, views, downloads, likes, tags, user } = item
    let tag = tags.split(',')
    return (
        <GalleryItemBox>
            <img src={webformatURL} alt={user} />
            <h2>{user}</h2>
            <ul>
                <li>조회수:{views}</li>
                <li>다운로드:{downloads}</li>
                <li>좋아요:{likes}</li>
            </ul>
            <p>
                {
                    tag.map((ele, idx) => <span key={idx}>#{ele.trim()}</span>)
                }
            </p>
        </GalleryItemBox>
    );
};

export default GalleryItem;