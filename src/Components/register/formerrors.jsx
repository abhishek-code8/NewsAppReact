import React from 'react';



const FormErrors = ({ errors }) => {
    return(
    <div>
        {
            Object.keys(errors).map((fieldname, i) => {
                if (errors[fieldname].length > 0) {
                    return (
                        <p key={i}>{fieldname.toUpperCase()} {errors[fieldname]}</p>
                    )
                }
                else{
                    return null;
                }
                
            })
        }
    </div>
    )
}

export default FormErrors;