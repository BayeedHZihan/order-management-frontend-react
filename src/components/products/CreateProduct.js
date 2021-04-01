import {useState} from 'react';
import {useHistory} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const axios = require('axios');


const CreateProduct = () => {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setdescription] = useState();
    const [category, setCategory] = useState();
    const [image, setImage] = useState();

    const [priceError, setPriceError] = useState();
    const [titleError, setTitleError] = useState();
    const [genericError, setGenericError] = useState();

    let history = useHistory();

    const validate = () => {
        if (!title) {
            setTitleError("* Title can not be empty!");
            return false;
        }
        if (!price) {
            setPriceError("* Price can not be empty!");
            return false;
        }
        if (typeof price !== Number){
            setPriceError("* Price has to be a number!");
            return false;
        }
        return true;
    }

    const handleCreate = e => {
        e.preventDefault();
        if (validate()) {
            try{
                const userToCreate = {title, price};
                if (description) userToCreate.description = description;
                if (category) userToCreate.category = category;
                if (image) userToCreate.image = image;
                axios.post('http://localhost:5000/products', userToCreate)
                    .then(() => history.push("/"))
                    .catch(e => setGenericError("* One or more invalid fields!!!"))
            }
            catch(e){
                setGenericError("* OOPS!!! Something went wrong!");
            }
            
        }
        
    }

    const handleGen = e => {
        e.preventDefault();
        axios.get('http://localhost:5000/generate-products', {withCredentials: true})
    }

    return (  
        <Container>
            <div className="top">
                <h2> Create Product </h2>
                <form>
                    <div className="text-danger">{genericError}</div>
                    <br/>

                    <label> Title </label><br/>
                    <input type="text" id="prod-title" required onChange={(e) => setTitle(e.target.value)}/>
                    <div className="text-danger">{titleError}</div>
                    <br/>

                    <label> Price </label><br/>
                    <input type="text" id="prod-price" required onChange={(e) => setPrice(e.target.value)}/>
                    <div className="text-danger">{priceError}</div>
                    <br/>

                    <label> Description </label><br/>
                    <textarea type="text" id="prod-desc" onChange={(e) => setdescription(e.target.value)}/>
                    <br/><br/>

                    <label> Category </label><br/>
                    <input type="text" id="prod-cate" onChange={(e) => setCategory(e.target.value)}/><br/><br/>

                    <label> Image </label><br/>
                    <input type="text" id="prod-img" onChange={(e) => setImage(e.target.value)}/><br/><br/>

                    <input type="submit" value="Submit" onClick={handleCreate}/>
                </form>
                <h3 className="mt-5"> Or... </h3>
                <Button onClick={handleGen} variant="primary"> Generate Product </Button>
            </div>
        </Container>
    );
}
 
export default CreateProduct;