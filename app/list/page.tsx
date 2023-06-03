//URl과 페이지 만들고 싶으면
//1. app폴더 안에 폴더만들고
//2. 그 안에 page.tsx넣는다
//3. page파일 안의 함수명은 폴더이름과 동일하게 하는 경우 많음
import Image from "next/image" //이미지 최적화,레이아웃 쉬프트 방지
import mushroom from '/public/mushroom.png' 
export default function List(){
    const products:string[]=['Tomato','Pasta','Conconut']
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {products.map((v,i)=>(
                <div className="food" key={i}>
                    <Image src={mushroom} alt="" className="food-img"/>
                    <h4>상품{i+1} {v}</h4>
                </div>
            ))}
        </div>
    )
}