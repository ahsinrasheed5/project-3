import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const ProductIndex = () => {
    const shoe = {
        "air-jordan-3-valor-blue": {
          name: "VALOUR BLUE",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "jordan-mars-270-london": {
          name: "JORDAN MARS 270 LONDON",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-1-zoom-racer-blue": {
          name: "RACER BLUE",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-3-valor-blue1": {
            name: "VALOUR BLUE",
            img:
              "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
          },
          "jordan-mars-270-london1": {
            name: "JORDAN MARS 270 LONDON",
            img:
              "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
          },
          "air-jordan-1-zoom-racer-blue1": {
            name: "RACER BLUE",
            img:
              "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
          }
    }
    return (
        <Fragment>
            <h3>Dispaly list of Products</h3>
             <div className="box">
                {Object.entries(shoe).map(([productId,{name,img}])=>(
                    <div key={productId} className="card">
                        <Link to={productId}>
                            <h2>{name}</h2>
                            <img src={img} alt={name} height={200}/>
                        </Link>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}
