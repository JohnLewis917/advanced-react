import React, {useState} from 'react'


export default () => {
    const [pianos, setPianos] = useState(['Steinway', 'Bosendorfer', 'Yamaha'])
    const [input, setInput] = useState('')
    return (
        <div>
            {/* {pianos.map(piano => <h2>{piano}</h2>)}
      <input onChange={e => setInput(e.target.value)}type="text"/>
      <button onClick={() => setPianos([...pianos, input])}>Add Piano</button> */}
        </div>
    )
}