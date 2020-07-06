import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetails = () => {
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
        },"air-jordan-3-valor-blue1": {
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
    const {productId} = useParams();
    const productItem = shoe[productId];
    const {name,img} = productItem;

    return (
        <div className="boxDetail">
            <h4>{name}</h4>
            <img src={img} alt={name} height={500} />
        </div>
    )
}
