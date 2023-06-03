//메인페이지

export default function Home() {
  const name:string='cheon'
  const age:number=25
  return (
    <div>
      <h4 className="title">애플후레시</h4>
      <p className="title-sub">by dev {name},{age}</p>
    </div>
  )
}
