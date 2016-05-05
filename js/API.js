import {get} from "jquery";
import ServerActions from "./actions/ServerActions";
let API = {
    fetchLinks() {
        console.log("1. In API");
        // Ajax request to read /data/links
        get("json").done(resp => {
          // console.log(resp);
          ServerActions.receiveLinks(resp);
        });
    }
};

export default API;