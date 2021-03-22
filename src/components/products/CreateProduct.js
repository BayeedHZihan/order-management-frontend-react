const CreateProduct = () => {
    return (  
        <div>
            <h2> Create Product </h2>
            <form>
                <label> Title </label><br/>
                <input type="text" id="prod-title" required/><br/>
                <label> Price </label><br/>
                <input type="text" id="prod-price"/><br/>
                <label> Description </label><br/>
                <textarea type="text" id="prod-desc"/><br/>
                <label> Category </label><br/>
                <input type="text" id="prod-cate"/><br/>
                <label> Image </label><br/>
                <input type="text" id="prod-img"/><br/>
                <input type="submit" value="Submit"/>
            </form>
            <h3> Or... </h3>
            <button> Generate Product </button>
        </div>
    );
}
 
export default CreateProduct;