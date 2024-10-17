import Header from "../component/Header";

const About = () => {

  const retorno = () => {
    alert("Hola desde retorno");
  }
    
    return (
      <div>
     <Header/>
      <div className="flex-col text-center my-20">
        <h1 className="text-2xl" >Hola desde about Thalia</h1>
        <button 
          className='m-4 bg-blue-700 hover:bg-blue-500 text-lg text-white px-3 py-1 rounded-xl'
          onClick={retorno}>Click aqui</button>
      </div>
      </div>
    )
  }
  export default About;