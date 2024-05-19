 
import SplitStringWithServalTokens from './leetcode/SplitStringWithServalTokens'
import { NavLink ,Route,Routes} from "react-router-dom";
import Lca from './leetcode/Lca';
export default function App(){

    const handleClickPwa = ()=>{
 
         
        window.open('http://localhost:5173/')
    }

    return (

        <div>
            <div>
                <NavLink to="SplitStringWithServalTokens">分割字符串</NavLink>
            </div>
           <div>
                <NavLink to="Lca">最近公共父节点</NavLink>
           </div>
            
            <button onClick={handleClickPwa}>gotopwa</button>
             

            <Routes>
                <Route path="/SplitStringWithServalTokens" element={<SplitStringWithServalTokens />} />
                 <Route path='/Lca' element={<Lca></Lca>}></Route>
            </Routes>
 
        </div>
    )
}

 