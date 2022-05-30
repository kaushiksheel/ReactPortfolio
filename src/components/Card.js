
import Tilt from 'react-tilt'

const Card = ({title,img}) => {

const options={ max : 25,easing:         "cubic-bezier(.03,.98,.52,.99)",transition:true,scale:2 ,maxGlare: .5}


    return (  

        <Tilt  options={options}    
         className="card">
           <img src={img} alt='thumbnail of project'/>
           <div className="projectInfo">
               <p className="title">{title}</p>
               <div className="tags">
                   <p>Next.js</p>
                   <p>Tailwind</p>
                   <p>Firebase</p>
               </div>
               <div className="links">
                   <a href="#!">
                   <svg width="22" height="22" viewBox="0 0 55 51" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.5005 0C12.3067 0 0.000488281 11.4965 0.000488281 25.6906C0.000488281 37.0587 7.87236 46.6606 18.8036 50.0646C20.1786 50.2894 20.6942 49.5186 20.6942 48.8443C20.6942 48.2341 20.6599 46.211 20.6599 44.0594C13.7505 45.2476 11.963 42.4858 11.413 41.0407C11.1036 40.3021 9.76299 38.0221 8.59424 37.4119C7.63174 36.9302 6.25674 35.7421 8.55986 35.7099C10.7255 35.6778 12.2724 37.5725 12.788 38.3432C15.263 42.2289 19.2161 41.1371 20.7974 40.4627C21.038 38.7928 21.7599 37.6689 22.5505 37.0266C16.4317 36.3843 10.038 34.1685 10.038 24.3419C10.038 21.548 11.1036 19.2358 12.8567 17.4375C12.5817 16.7952 11.6192 14.1619 13.1317 10.6295C13.1317 10.6295 15.4349 9.95511 20.6942 13.2628C22.8942 12.6847 25.2317 12.3957 27.5692 12.3957C29.9067 12.3957 32.2442 12.6847 34.4442 13.2628C39.7036 9.923 42.0067 10.6295 42.0067 10.6295C43.5192 14.1619 42.5567 16.7952 42.2817 17.4375C44.0349 19.2358 45.1005 21.5159 45.1005 24.3419C45.1005 34.2006 38.6724 36.3843 32.5536 37.0266C33.5505 37.8294 34.4099 39.3709 34.4099 41.7794C34.4099 45.2155 34.3755 47.9772 34.3755 48.8443C34.3755 49.5186 34.8911 50.3215 36.2661 50.0646C41.7253 48.3427 46.469 45.0649 49.8297 40.6926C53.1904 36.3202 54.9988 31.0734 55.0005 25.6906C55.0005 11.4965 42.6942 0 27.5005 0Z" fill={document.body.classList.contains('active')?'white':'black'}/>
</svg>

                   </a>
                   <a href="#!">
                   <svg width="22" height="22" viewBox="0 0 35 34" fill="none" >
<path d="M18.9583 4.25L23.7606 8.91508L13.5522 18.8318L15.6143 20.8349L25.8227 10.9183L30.625 15.5833V4.25H18.9583Z" fill={document.body.classList.contains('active')?'white':'black'}/>
<path d="M27.7083 26.9167H7.29167V7.08333H17.5L14.5833 4.25H7.29167C5.68313 4.25 4.375 5.52075 4.375 7.08333V26.9167C4.375 28.4792 5.68313 29.75 7.29167 29.75H27.7083C29.3169 29.75 30.625 28.4792 30.625 26.9167V19.8333L27.7083 17V26.9167Z" fill={document.body.classList.contains('active')?'white':'black'}/>
</svg>

                   </a>
               </div>
           </div>
        </Tilt >
    );
}
 
export default Card;



Card.defaultProps={
    title:"Netflix clone"
}