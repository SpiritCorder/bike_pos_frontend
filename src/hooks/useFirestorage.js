import {useState} from 'react';
import {storage} from '../config/firebase';
import {ref, uploadString, getDownloadURL, deleteObject} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const useFirestorage = () => {

    const [uploading, setUploading] = useState(false);
    // const [imageUrls, setImageUrls] = useState([]);

    const upload = async (images, productId, isUpdate=false, prevImages=[]) => {
        setUploading(true);

        if(isUpdate && prevImages.length > 0) {
            // remove existing images first
            for(let item of prevImages) {
                const imageRef = ref(storage, `products/${productId}/${item['fileName']}`);
                await deleteObject(imageRef);
            }
        }



        let count = 0;
        let imageUrls = [];
        for(let item of images) {
            const fileName = uuidv4();
            const imageRef = ref(storage, `products/${productId}/${fileName}`);
            const snapshot = await uploadString(imageRef, item.data_url, 'data_url');
            const url = await getDownloadURL(snapshot.ref);
            //setImageUrls(prev => ([...prev, url]));
            count++;
            imageUrls.push({fileName, url});
            if(count === 4) {
                setUploading(false);
            }
        }

        return imageUrls;

    }

    return {uploading, upload};
}

export default useFirestorage;
