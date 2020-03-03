
import axios from "axios";

export default {
    getRandomEmployee: function(){
        return axios.get("https://randomuser.me/api/?results=50&nat=us");
    },
    getEmployeeByGender: function(gender) {
        return axios.get ("https://randomuser.me/api/?gender=" + gender +"")
    }
    
};
 
  