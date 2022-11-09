const story = (id) => {
    let resp = "";
    switch(id) {
        case 1: resp = 'Hello, I am Matthew Li'
        break; 
        case 2: resp = 'You are, come again?'
        break; 
        case 3: resp = 'Bye'
        break; 
        default: 
        break; 
    }
    return resp; 
}
export default story;   