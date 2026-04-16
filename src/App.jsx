export default function App() {
    return (
      <div style={{background:'#0a0a0a',color:'white',minHeight:'100vh',fontFamily:'Arial'}}>
        
        <header style={{display:'flex',justifyContent:'space-between',padding:'20px',borderBottom:'1px solid #222'}}>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <img src="/logo.png" style={{height:'40px'}} />
            <b>МЯСНОЙ АГРОДОМ</b>
          </div>
          <a href="https://wa.me/79999999999" style={{color:'white'}}>WhatsApp</a>
        </header>
  
        <section style={{textAlign:'center',padding:'80px 20px'}}>
          <h1>Поставки мяса оптом без перебоев</h1>
          <p>Работаем напрямую с производителями. Лучшие цены и стабильные объемы.</p>
        </section>
  
        <section style={{padding:'40px',background:'#111'}}>
          <h2>Оставить заявку</h2>
          <form action="https://formspree.io/f/your-id" method="POST">
            <input name="name" placeholder="Имя" style={{display:'block',margin:'10px 0',padding:'10px',width:'100%'}}/>
            <input name="phone" placeholder="Телефон" style={{display:'block',margin:'10px 0',padding:'10px',width:'100%'}}/>
            <button type="submit" style={{padding:'10px 20px'}}>Отправить</button>
          </form>
        </section>
  
        <footer style={{textAlign:'center',padding:'20px',color:'#777'}}>
          © 2026 МЯСНОЙ АГРОДОМ
        </footer>
      </div>
    )
  }