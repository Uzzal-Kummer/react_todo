import { useState } from 'react'



function App() {
  const [inputs, setInputs] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setData(inputValue);
    console.log(inputValue);
  }
const handleSubmit = (e) => {
  e.preventDefault();
  setInputs([...inputs, data]);
  setData("");
  setLoading(false);
  console.log(inputs);
}
const deleteItems = (i)=>{
  let filterItems = inputs.filter((item,index) => index !== i);
  setInputs(filterItems);
}
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input type="text" value={data}  onChange={handleChange}/>
          <button>Add todo</button>
        </form>
        <ul>
         {
           loading ? <h3>Loading...</h3> :(
            inputs.map((item,index)=>{
            return <li key={index}>{item} <span style={{fontSize:'30px',color: 'red', cursor:'pointer'}} onClick={()=> deleteItems(index)}>delete</span></li>
          })
          )
         }
        </ul>
      </div>
    </>
  )
}

export default App
