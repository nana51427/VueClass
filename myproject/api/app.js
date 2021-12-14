import axios from "axios";

export default {
  async doQryZipCode() {
    let result = await axios.post("http://localhost:8080/EIBP/f040404/04");
    return result.data.body;
  }
}