

const Card=(props)=>{
    const { title, subtitle }=props;
    return (
  
   <div className="Card">
 

   <h1 className="title">{title}</h1>
   <h2>Dance styles: {subtitle}</h2>
   </div>
    );
}

export default Card;