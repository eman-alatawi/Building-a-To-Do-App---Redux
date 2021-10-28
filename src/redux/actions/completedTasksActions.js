export const makeComplete = (task) => {
    return {
        type: 'MAKE_COMPLETE',
        payload: task
    }
}