import styles from '../home/sidebar.css'
import { Link, useLocation } from 'react-router-dom';
function Sidebar({ isVisible }){
    const location = useLocation();
    const isWorkspaceRoute = location.pathname === '/workspace';
    const isClientspaceRoute = location.pathname === '/clients';
    const isClientDataRoute = location.pathname === "/clientdata";
    return(
        <div
        className='sidebar'
        style={{ display: isVisible ? '' : 'flex',
        width: isVisible ? "15vw" : "25vw"
         }}
        >

        <img 
            src="images/logo.png"
            className='sidebar-logo'
        />
        <Link to='/workspace'
                style={{
            textDecoration: 'none',
            color: isWorkspaceRoute ? 'orange' : 'rgb(43, 43, 43)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
            
        }}
        
        >
        <p><i class='bx bxs-dashboard'></i>WorkSpace</p>
        </Link>
        
        <Link to='/clients'
        style={{
            textDecoration: 'none',
            color: isClientspaceRoute || isClientDataRoute ? 'orange' : 'rgb(43, 43, 43)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
            
        }}

        >
        <p>
        <i class='bx bxs-group'></i>Clients
        </p>
        </Link> 
        
       
        <p><i class='bx bx-book-add'></i>Schedule Appointment</p>
        <p><i class='bx bx-receipt' ></i>Payment</p>
        <p><i class='bx bx-task'></i>Task</p>
        <p><i class='bx bx-message-rounded-dots'></i>Message</p>
        <p><i class='bx bxs-report' ></i>Report</p>
    </div>
    )
}
export default Sidebar