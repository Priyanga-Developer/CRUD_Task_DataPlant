

const apiRequest = async(url="",OptionsObj=null) => {
    try {
        const response=await fetch(url,OptionsObj)
        if(!response.ok) throw Error("please reload the page")
    } catch (error) {
        console.log(error.message);
    }
 
}

export default apiRequest