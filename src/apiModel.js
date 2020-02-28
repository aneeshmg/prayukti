class APIResponse {
    constructor(data, source = 'Unknown') {
        this.data = data
        this.source = source
    }
}
module.exports = APIResponse;