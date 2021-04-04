import React from 'react';

const Parametrepage = () => {
    return(
     
      <div className="h-full ml-20 mr-10 my-2 md-pt-8 border-opacity-5 border-solid md:border-dotted  absolute grid   container max-w-lg mx-center  bg-gray-50 rounded-lg ">
     <div className="items-center font-serif text-5xl ">
      <h1>  Paramètre</h1>
      </div>
      <div>
      <label> modifier la description:</label>
      
      
          <input className="rounded-lg w-full" type="text" name="name" id="name" placeholder="" required/>
      </div>
   <div>
            <label>ajouter un email: </label>
          <input className="rounded-lg w-full " type ="email" name="email" id="email" placeholder=""  required/>
          </div>
          <div>
              <label>Ajouter un admin </label>
          <input className="rounded-lg w-full"  type ="Text" name="Text" id="Text" placeholder=""/>
           </div>
           <div>
            <p>supprimer la page</p>
           </div>
           <div className="mx-28">
           <button style={{marginRight:"20px"}}  className="rounded-lg  bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 font-serif  h-10 ...">
    Annuler
             </button>
             <button className="rounded-lg bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 font-serif  h-10 ...">
      Sauvegarder
             </button>
             </div>
      </div>
    
     

    )};

export default Parametrepage;