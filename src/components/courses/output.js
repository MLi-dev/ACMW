const course = (id) => {
    let resp = "";
    switch(id) {
        case 1: resp = 'https://www.youtube.com/embed/XmkGxHZDer8'
        break; 
        case 2: resp = 'https://www.youtube.com/embed/FazgJVnrVuI'
        break; 
        case 3: resp = 'https://www.youtube.com/embed/FWTNMzK9vG4'
        break; 
        default: 
        break; 
    }
    return resp; 
}
export default course;   