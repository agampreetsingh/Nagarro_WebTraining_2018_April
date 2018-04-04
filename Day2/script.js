// url = 'http://example.com/path/file.jpg'
function downloadFile(url, downloaded) {
    var source=url.split(":")[0];


    if(!(source=="http" || source=="https" ))
    {
        throw new Error("Files from a non HTTP source cannot be downloaded...")
    }
    console.log("Started download " + url)
    // Save it inside 'C:/Windows/Images/'
    let savePath = 'C:/Windows/Images/' + url.split('/').pop()

    setTimeout(() => {
        console.log("Saved to " + savePath)
        downloaded(savePath)
    }, 3000)

}
extensions=["jpg","jpeg","png","bmp","svg"];
//path = 'C:/Windows/Images/file.jpg'
function compressFile(path, compressed) {
    
    if(!extensions.includes(path.split(".").pop()))
    {
        throw new Error("Non image files cannot be compressed")
    }

    console.log("Going to compress " + path)
    let fileName = path.split('/').pop().split('.')[0]
    let compressedPath = 'C:/Files/' + fileName + '.zip'

    setTimeout(() => {
        console.log("Compressed to " + compressedPath)
        compressed(compressedPath)
    }, 2000)
}

//path = 'C:/Files/file.zip'
function uploadFile(path, uploaded) {
    var filename=path.split('/').pop();
    //console.log(filename);
    if(filename.charCodeAt(0)<=57 && filename.charCodeAt(0)>=48)
    {
        throw new Error("Invalid file name, filename must start with a character")
    }

    console.log("Uploading file " + path)
    // ftp://fileserver.com/zipimages/file.zip
    let uploadedPath =
        'ftp://fileserver.com/zipimages/' +
        path.split('/').pop()

    setTimeout(() => {
        console.log("Uploaded to " + uploadedPath)
        uploaded(uploadedPath)
    }, 2500)
}


function start(url) {

    downloadFile(url, (savedPath) => {
        compressFile(savedPath, (compressedPath) => {
            uploadFile(compressedPath, () => {})
        })
    })

}