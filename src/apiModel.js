class APIResponse {
    constructor(data) {
        this.data = data.quote
        this.source = data.source != "" ? data.source : "Unknown"
    }
}
module.exports = APIResponse