import {useState} from 'react';
const axios = require('axios');


const CreateProduct = () => {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setdescription] = useState();
    const [category, setCategory] = useState();
    const [image, setImage] = useState();

    const handleCreate = e => {
        e.preventDefault();
        const userToCreate = {title, price};
        if (description) userToCreate.description = description;
        if (category) userToCreate.category = category;
        if (image) userToCreate.image = image;
        axios.post('http://localhost:5000/products', userToCreate)
    }

    const handleGen = e => {
        e.preventDefault();
        axios.get('http://localhost:5000/generate-products', {withCredentials: true})
    }

    return (  
        <div>
            <h2> Create Product </h2>
            <form>
                <label> Title </label><br/>
                <input type="text" id="prod-title" required onChange={(e) => setTitle(e.target.value)}/><br/>
                <label> Price </label><br/>
                <input type="text" id="prod-price" required onChange={(e) => setPrice(e.target.value)}/><br/>
                <label> Description </label><br/>
                <textarea type="text" id="prod-desc" onChange={(e) => setdescription(e.target.value)}/><br/>
                <label> Category </label><br/>
                <input type="text" id="prod-cate" onChange={(e) => setCategory(e.target.value)}/><br/>
                <label> Image </label><br/>
                <input type="text" id="prod-img" onChange={(e) => setImage(e.target.value)}/><br/>
                <input type="submit" value="Submit" onClick={handleCreate}/>
            </form>
            <h3> Or... </h3>
            <button onClick={handleGen}> Generate Product </button>
        </div>
    );
}
 
export default CreateProduct;