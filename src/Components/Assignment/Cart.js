import React from 'react';
import FirstJson from '../../json/First.json';
import FunctionalAssi from '../Assignment/FunctionalAssi';

const cart = () => {

    return (
        <div className="container-fluid">
            <div class="row">
                
                {FirstJson.map ( (element,index) =>{
                return(
                    <FunctionalAssi 
                        image = {element.image}
                        heading= {element.head}
                        paragraph = {element.text}

                    >
                        {
                            element.button === 'button' ? <div className="text-center"><button class="btn btn-primary">ClickMe</button></div> : null

                        }
                        {
                            element.button === 'text' ? 
                            <div className="">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="w-100">
                                            <div className="text-left"><button class="btn btn-primary">ClickMe</button></div>
                                            </td>
                                            <td className="w-100">
                                                <div className="text-right">Hello</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> : null
                        }
                    </FunctionalAssi>
                )
            
                })

                
            }

            </div>
      </div>
    )
}

export default cart
