export const fileUpLoad = async (file) => {
    const cluodURL = 'https://api.cloudinary.com/v1_1/dmmm6wcno/image/upload'
    const fromData = new FormData()
    FormData.append('upload_preset', 'movie-app');
    FormData.append('file', file)


    try {
        const resp = await fetch(cluodURL, {
            method: 'POST',
            body: fromData
        });
        if (resp.ok) {
            const cluodRes = await resp.json()
            console.log('data', cluodRes);
            return cluodRes.secure_url
        } else {
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}
