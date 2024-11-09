import React, { useState } from 'react'
import highlight from '../../assets/Image.png'
import circle from '../../assets/Frame (1).png'
import pointer from '../../assets/Frame (2).png'
import bigimg from '../../assets/Frame.png'
import layout from '../../assets/Auto Layout Horizontal.png'
import monkey from '../../assets/Frame (3).png'
import layout2 from '../../assets/Auto Layout Horizontal (1).png'
import layout3 from '../../assets/Auto Layout Horizontal (2).png'
import layout4 from '../../assets/Auto Layout Vertical (3).png'
import group from '../../assets/Group.png'
import artist from '../../assets/Frame (4).png'
import layou5 from '../../assets/Auto Layout Horizontal (4).png'
import layout6 from '../../assets/Auto Layout Horizontal (5).png'
import fragment from '../../assets/Тарифы.png'
import girls from '../../assets/Frame (6).png'
import button from '../../assets/Auto Layout Horizontal (6).png'
import layout7 from '../../assets/Frame (7).png'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const styles = {
    width: '100%',
    height: '7800px',
    backgroundColor: '#000000',
  };

  return (
    <div className='' style={styles}>
      <nav className="navbar">
        <h3 className="logo">First Flight <br/> School</h3>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
          <li><a href="#home">О курсе</a></li>
          <li><a href="#services">Для кого</a></li>
          <li><a href="#about">Преподаватель</a></li>
          <li><a href="#projects">Программа</a></li>
          <li><button className="btn">Записаться</button></li>
       </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
      </nav>
      <div className='position grid grid-cols-2'>
      <img className='image1' src={highlight} alt="" />
        <div className='po_ab absolute bottom-36'>
          <button className='btn2'>Профессия</button>
          <div className='word'><h3>3D-ХУДОЖНИК <br/>ПО ПЕРСОНАЖАМ</h3></div>
          <div className='word2'>Курс, где ты с нуля получишь навыки востребованного 3D-художника <br/> для перспективной работы в Gamedev, кинематографе или анимации <br/> с высокой оплатой труда</div>
          <div>
            <img className='image2' src={circle} alt="" />
            <img className='image3' src={pointer} alt="" />
          </div>
        </div>
        <div className='position2'>
          <img className='image4' src={bigimg} alt="" />
        </div>
      </div>
      <div>
        <img className='image5' src={layout} alt="" />
      </div>
      <div className='position3'>
        <div>
          <img className='image6' src={monkey} alt="" />
        </div>
        <div className='bkcolor'>
          <div className='word3'>О курсе</div>
          <div className='word4'>Получите уникальный опыт работы с самым мощным <br/> инструментом для создания трехмерных персонажей,<br/> а также научитесь основам моделирования,<br/> текстурирования и рендеринга</div>
          <img className='image7' src={layout2} alt="" />
        </div>
      </div>
      <div>
        <h3 className='word5'>Для кого</h3>
        <div>
          <img className='image8' src={layout3} alt="" />
        </div>
      </div>
      <div>
        <h3 className='word6'>Программа курса</h3>
        <div>
          <img className='img9' src={layout4} alt="" />
        </div>
      </div>
      <div className='position4'>
        <div>
          <h3 className='word7'>Куратор курса</h3>
          <img className='img10' src={group} alt="" />
        </div>
        <div>
          <img className='img11' src={artist} alt="" />
        </div>
      </div>
      <div>
        <img className='image12' src={layou5} alt="" />
      </div>
      <div>
        <h3 className='word8'>Процесс обучения</h3>
        <img className='img13' src={layout6} alt="" />
      </div>
      <div>
        <img className='img14' src={fragment} alt="" />
      </div>
      <div className='position5'>
        <div>
          <img className='img15' src={girls} alt="" />
        </div>
        <div>
          <h3 className='word9'>Остались <br/> вопросы?</h3>
          <h2 className='word10'>Напиши нам в телеграм или в онлайн чат <br/> и мы с радостью ответим на все ваши вопросы.</h2>
          <img className='btn5' src={button} alt="" />
        </div>
      </div>
      <div>
        <img className='img16' src={layout7} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
