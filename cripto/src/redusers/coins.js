export default (coins = [], action) => {
    const {type} = action;
    switch (type) {
        case 'DELL': return coins;
    }
    return coins;
}