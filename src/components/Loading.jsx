import "../assets/css/loading.css";

const Loading = () => {
  let boxs = [1,2,3,4]
  return (
    <div className="loadingContainer">
      <div className="loadingContainer_content">
        {
          boxs.map((box,index)=>
            <div className="cuboid" key={index}>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Loading