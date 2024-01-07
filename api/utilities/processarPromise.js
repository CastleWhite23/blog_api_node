export const processarPromise = async (promise, status, error, res) => {
    try{
        const response = await promise;
        res.status(status)
        res.json(response)
    }catch{
        res.status(error)
    }   
}