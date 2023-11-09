import Cards from "./cards";
function Tours({tours,removeTour}) {
  return (
    <div className="container">
      <div> 
        <h2 className="title">Plan With Yash</h2>
      </div>
      <div className="cards">
        {
        tours.map((tour) => {
          return <Cards {...tour} removeTour={removeTour}></Cards>;
        })
        }
      </div>
    </div>
  );
}
export default Tours;
