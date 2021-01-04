import React , {useEffect , useState}from 'react'
import "./pictures.css"
import Card from "./Card"
import TextBox from "./TextBox"
function App() {

  const [images, setimages] = useState([])
  const [isloading, setisloading] = useState(true)
  const [term, setterm] = useState("flowers")
  useEffect(() => {
    
    fetch(`https://pixabay.com/api/?key=19699555-6536534c7eadd0b4238345ede&q=${term}&image_type=photo&pretty=true`)
    .then(response => response.json())
    .then(data => {
      setimages(data.hits);
      setisloading(false);
    })
    .catch(err => console.log(err))

  }, [term])
  return (
    <div>
      <TextBox searchText= {(text) => setterm(text)}/>
    {
      isloading ? <h1>Loading...</h1> : 
       images.map((image , index) => (
          <>
          <Card key={index} image = {image}/>
          </>
        ))
    }
    </div>
  )
}

export default App
