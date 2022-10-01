import './App.css';
import {useRef} from "react";
import {CREATE, DELETE, useAnimalReducer} from "./components/reducer";


function App() {
    const catRef = useRef();
    const dogRef = useRef();

    const [catState, catDispatch] = useAnimalReducer();
    const [dogState, dogDispatch] = useAnimalReducer();


    const addCat = () => {
        catDispatch({type: CREATE, payload: {name: catRef.current.value}})
    }
    const addDog = () => {
        dogDispatch({type: CREATE, payload: {name: dogRef.current.value}})

    }

    const deleteCat = (id) => {
        catDispatch({type: DELETE, payload: {id}})
    }
    const deleteDog = (id) => {
        dogDispatch({type: DELETE, payload: {id}})
    }


    return (
        <div className={'block'}>
            <div className={'inputBlock'}>
                <div className={'input'}>
                    Add cat:<input type="text" ref={catRef}/>
                    <button onClick={() => addCat()}>Create</button>
                </div>
                <div className={'input'}>
                    Add dog:<input type="text" ref={dogRef}/>
                    <button onClick={() => addDog()}>Create</button>
                </div>
            </div>

            <hr/>

            <div className={'infoBlock'}>
                <div className={'info'}>
                {
                    catState.map(cat => <div key={cat.id}>
                        {cat.name}
                        <button onClick={() => deleteCat(cat.id)}>delete</button>
                    </div>)
                }
                </div>
                <div className={'info'}>
                    {
                        dogState.map(dog => <div key={dog.id}>
                            {dog.name}
                            <button onClick={() => deleteDog(dog.id)}>delete</button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
