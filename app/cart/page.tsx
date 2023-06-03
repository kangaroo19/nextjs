import CartItem from "./CartItem"

export default function Cart() {
    return (
      <div>
        <h4 className="title">Cart</h4>
        <CartItem/>
        <CartItem/>
      </div>
    )
  } 



//Nextjs 컴포넌트는 2가지 종류
//1. server component 
//   이벤트,useState,useEffect 사용못함
//   서버 컴포넌트는 로딩속도 빠름,검색엔진 노출 유리
//2. client component
//   상단에 'use client' 넣으면 client component
//   로딩속도느림(자바스크립트 많이 필요,hydration필요)

//큰 페이지는 server component
//JS기능 필요한 곳은 client component
