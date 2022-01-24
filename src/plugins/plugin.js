import {getRequest, postRequest, putRequest, deleteRequest} from "@/utils/api";
import {downloadRequest} from "@/utils/download";

export default {
    install(Vue) {
        Vue.prototype.downloadRequest = downloadRequest
        Vue.prototype.getRequest = getRequest
        Vue.prototype.postRequest = postRequest
        Vue.prototype.putRequest = putRequest
        Vue.prototype.deleteRequest = deleteRequest
    },
}