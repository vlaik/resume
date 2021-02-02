import React from 'react'
import './myinfo.scss'



function MyInfo() {
    return(
        <div className='rightsite'>
            <h1>ОПЫТ ОБУЧЕНИЯ</h1>
           <div className='content'>
           <h4>Школа образования MyIT</h4>
           <h4>ОАО'БрестЛифт'</h4>
           <h4>СВЯЗЬ СО МНОЙ</h4>
           <p className='cors'>выпускник | 2020</p>
           <p className='oio'>Электромеханик по лифтам | 2017-2021</p>
           <p>Моб.: +375 (29) 2253131(telegram, viber)<br/>
           Электронная почта: rastorguevvlad67@gmail.com<br/>
           Github: <a href="https://github.com/vlaik">https://github.com/vlaik</a>
           </p>
           <p>Окончил курс "Веб-разработки для начинающих" в MyIT</p><br/><br/>
           <p>Проекты:</p>
           <a href="https://github.com/vlaik/mydemo">-сайт с погодой</a> 
           <p className='mno'>Приложение написаное на React JS. На сайте используется
           <br/> HTML5, CSS3, JavaScript, React.
               Это тренировачная работа,<br/>так что строго не судите :)
           </p>
           </div> 
        </div>
    )
}

export default MyInfo;