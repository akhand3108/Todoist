import {FaPizzaSlice} from "react-icons/fa"

export const Header = ()=>{
   return ( <header className="header" data-testid="header">
        <nav>
            <div className="logo">
                <img src="/images/logo.png" alt="TODOIST"/>
            </div>
            <div className="settings">
                <ul>
                    <li className="settings__add" data-testid="quick-add-task-action" >+</li>
                    <li data-testid="dark-mode-action" className="settings__darkmode" ><FaPizzaSlice/></li>
                </ul>
            </div>

        </nav>

    </header>)
}