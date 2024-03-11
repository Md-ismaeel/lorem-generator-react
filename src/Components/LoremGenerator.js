import data from '../data.json'
import { useState } from 'react';


function LoremGenerator() {


    const [text, setText] = useState(0);
    const [paragraph, setParagraph] = useState([]);

    const onChangeHandler = (e) => {
        // console.log(e.target.value);
        if (e.target.value > 0) {
            setText(e.target.value)
        }
    }


    const btnHandler = () => {
        if (text > 8) {
            alert("Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀")
        } else if (text < 1) {
            alert(' Ayyo ! you know that you wrote negative input 😵')
        }

        // console.log(data.paraData);
        const filteredData = data.paraData.filter((e, index) => {
            return text > index; // idx =0  text 5
        })
        // console.log(filteredData);

        setParagraph(filteredData)
    }

    return (
        <>
            <div className="container">
                <p className='head'>TIRED OF BORING LOREM IPSUM?</p>
                <div className='input-box'>
                    <p className='para'>Paragraphs:</p>
                    <input className='input' type='number' onChange={onChangeHandler} value={text} />
                    <button onClick={btnHandler}>Generate</button>
                </div>
                <div className='paraDiv'>
                    {
                        paragraph.map((item, index) => {
                            return (
                                <div>
                                    <p key={index}>{item.title} </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default LoremGenerator;