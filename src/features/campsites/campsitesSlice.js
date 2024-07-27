/////we write this with the lower case to create the different 
import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
    return CAMPSITES;
};

// export const selectRandomCampsite = ()=>{
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// }

export const selectCampsiteById = (id) =>{
    return CAMPSITES.find((campsites)=> campsites.id===id);
}

export const selectedFeaturedCampsite = () =>{
    return CAMPSITES.find((campsites)=> campsites.featured);
}



