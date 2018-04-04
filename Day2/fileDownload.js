funtion download(URL)
{
    console.log("Starting download "+URL);
    setTimeout(()=>console.log("Downloaded to system"),3000);
}

funtion compress(path)
{
    console.log("Compressing the file "+path);
    setTimeout(()=>console.log("Compressed the file"),3000);
    
}

funtion upload(path)
{
    console.log("Starting upload "+path);
    setTimeout(()=>console.log("Uploaded to server"),3000);
    
}

let path=download("images/file.jpeg");