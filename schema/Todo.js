// Todo Schema
function TodoSchema() {
    return {
        title: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        },
        createdBy: {
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        }
    }
}

module.exports = {TodoSchema}