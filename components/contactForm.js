import React from 'react'
import { useForm } from '@formspree/react';
function contactForm() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, handleSubmit] = useForm("mldgyqpa");
    const InputStyle = {
        width: "98%", background: "#F9F9F9", border: "1px solid #7F7F7F", padding: "14px 0 14px 8px"
    }
    return (
        <>
            {state.succeeded ? <p style={{ textAlign: 'center', marginTop: '20px' }}>Thanks! We will get back to you shortly</p> :
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px", flexWrap: "wrap", flex: "1" }}>
                    <input style={InputStyle} type='text' name='name' placeholder='Full Name' required></input>
                    <div className='form-div' style={{ display: "flex", justifyContent: "space-between" }}>
                        <input style={{ ...InputStyle, width: "46%" }} className='w-half' type='email' name='address' placeholder='Email Address' required></input>
                        <input style={{ ...InputStyle, width: "46%" }} className='w-half' type='tel' name='number' placeholder='Phone Number' required></input>
                    </div>
                    <input style={InputStyle} type='text' name='website' placeholder='Website' required></input>
                    <textarea style={{ height: "120px", flex: "1", resize: "none", ...InputStyle }} type='text' name='message' placeholder='Message(Optional' ></textarea>
                    <button type='submit' style={{ width: "100%", padding: "14px 0", background: "#FEDB03", border: "none" }}>Submit</button>
                </form>
            }
        </>
    )
}

export default contactForm