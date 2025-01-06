const axios = require('axios');


module.exports.getAddressCoordinate = async(address) => {
 const apiKey = process.env.GOOGLE_API_KEY;
 const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`

 try {
     const response = await axios.get(url);
     if(response.data.status === 'OK'){
         const location = response.data.results[0].geometry.location;
         return {
                lat : location.lat,
                lng : location.lng
         };
     }else{
         throw new Error('Unable to fetch coordinates');
     }
 } catch (error){
    console.log(error);
    throw error;
 }
}

module.exports.getDistance = async (origin,destination) =>{
    if(!origin || !destination){
        throw new Error('All fields are required');
    }

    const apiKey = process.env.GOOGLE_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`

    try{
      const response = await axios.get(url);
      if(response.data.status ==='OK'){

       if(response.data.rows[0].elements[0].status === 'ZERO_RESULTS'){
            throw new Error('Unable to fetch distance and time');
       }
        return response.data.rows[0].elements[0];

      }  else{
        throw new Error('Unable to fetch distance and time');
      }
    } catch(error){
        console.log(error);
        throw error;
    }
}

module.exports.getAutoCompleteSuggestions = async(input) =>{

    if(!input){
        throw new Error('Input is required');
    }
  
    const apiKey = process.env.GOOGLE_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}`;
  
    try{
      const response = await axios.get(url);
      if(response.data.status === 'OK'){
          return response.data.predictions;
      }else{
          throw new Error('Unable to fetch autocomplete suggestions');
      }
    } catch(error){
        console.log(error);
        throw error;
    }
  
  }