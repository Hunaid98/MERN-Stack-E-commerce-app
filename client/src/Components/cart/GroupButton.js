import { Button, ButtonGroup } from "@material-ui/core"
import { useState } from 'react';

const GroupButton = ()=>{
    const [counter, setCounter] = useState(1);


    const Decrement= ()=>{
        setCounter(counter => counter-1)
    }
    const Increment= ()=>{
        setCounter(counter => counter+1)
    }

    return(
        <ButtonGroup>
            <Button onClick={ ()=> Decrement() } disabled = {counter == 1}>-</Button>
            <Button>{ counter }</Button>
            <Button onClick={ ()=> Increment() }>+</Button>
        </ButtonGroup>
    )
}

export default GroupButton;