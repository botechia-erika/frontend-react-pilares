import React, {useState} from 'react';
import styled from 'styled-components';



export const CheckboxContainer = styled.div`
display: flex;
   width: 25px;
   height: 30px;
   justify-content: center;
   margin:auto;
   border-radius: 5px;
   align-self: center;
   background-color: ${props => props.checked ?'greenyellow' : 'lightgray' };

   display: flex;

`
;





export function Checkbox(checkValue) {
    const [checked, setChecked] = useState(false);
    
    function handleCheckboxChange(){
       setChecked(!checked);
    }

console.log(setChecked)       
return (

         <CheckboxContainer checked={checked} onClick={handleCheckboxChange} value={checkValue}>
             <input type="checkbox" />
         </CheckboxContainer>
 

       )
}
