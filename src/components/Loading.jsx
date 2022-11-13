import "../assets/css/loading.css";

const Loading = () => {
    let dots = [1,2,3,4,5,6]
    return (
        <div className="loadingContainer">
            <div className="loadingContainer_content">
                {
                    dots.map((dot,index)=>
                    <div class="cuboid" key={index}>
                        <div class="side"></div>
                        <div class="side"></div>
                        <div class="side"></div>
                        <div class="side"></div>
                        <div class="side"></div>
                        <div class="side"></div>
                    </div>   
                    )
                }
            </div>
        </div>
    )
}

export default Loading