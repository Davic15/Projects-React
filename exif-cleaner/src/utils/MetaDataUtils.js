import ExifReader from "exifreader";

export const getExif = (file) => {
    return ExifReader.load(file, {async: true}).then(function (tags) {
        // The MakerNote tag can be really large. Remove it to lower
        // memory usage if you're parsing a lot of files and saving the
        // tags.
        delete tags['MakerNote'];

        // If you want to extract the thumbnail you can use it like
        // this:
        //if (tags['Thumbnail'] && tags['Thumbnail'].image) {
        //let image = document.getElementById('thumbnail');
        //image.classList.remove('hidden');
        //image.src = 'data:image/jpg;base64,' + tags['Thumbnail'].base64;
        //}

        // Use the tags now present in `tags`.
        // console.log(tags)
        //

        // for (let key in tags) {
        //     if (tags.hasOwnProperty(key)) {
        //         console.log(key)
        //         console.log(tags[key].description)
        //     }
        // }

        let arrayTag = [];

        for (let key in tags) {
            if (tags.hasOwnProperty(key)) {
                arrayTag.push({description: key, key: tags[key].description})
            }
        }
        return arrayTag

    }).catch(function (error) {
        // Handle error.
        console.log(error)
    });
}