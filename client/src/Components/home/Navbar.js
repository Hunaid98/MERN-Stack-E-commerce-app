import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navData } from "../constants/data";
import { getCategoryAction } from '../../redux/action/getCategoryAction';

const Navbar = ()=>{

    const {categoryItem} = useSelector(state=> state.category);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCategoryAction());
    },[dispatch])

    return(

        <div class="container">
            <div class="row category">
                {
                    navData.map(data =>(
                        <div class="col-1">
                            <img src={data.url} alt='pic'/>
                            <p>{data.text}</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Navbar;