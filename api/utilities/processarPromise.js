const processarPromise = async (promise, status, error, res) => {
    try{
        const response = await promise;
        res.status(status)
        res.json(response)
        console.log(response)
    }catch{
        res.status(error)
    }   
}

module.exports = processarPromise