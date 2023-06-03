'use client'

import { useState } from "react"

export default function CartItem(){
    const [cnt,setCnt]=useState<number>(0)
    const onClickPlus=():void=>{
        setCnt(cnt+1)
    }
    const onClickMinus=():void=>{
        setCnt(cnt-1)
    }
    return(
        <div className="cart-item">
          <p>상품명</p>
          <p>$40</p>
          <p>{cnt}개</p>
          <div>
            <button onClick={onClickMinus}>-</button>
            <button onClick={onClickPlus}>+</button>
          </div>
          <div>{0}</div>
        </div>
    )
}