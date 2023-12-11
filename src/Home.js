import { click } from "@testing-library/user-event/dist/click";

const Home = () => {

    const handleClick = (e) => {
        console.log('Hello, this is the event for clicking the ', e);
    }

    const handleCLickAgain = (name, e) => {
        console.log('Hello, ' + name, e.target);
    }


    return (  
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleCLickAgain('Mario', e)}>Click Me Again!</button>
        </div>
    );
}
 
export default Home;
<div className="home">
    <h2>Homeepage</h2>
</div>