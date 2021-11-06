import React from 'react';
import DashboardTile from '../../components/Tiles/DashboardTile';
// import style from './HomePage.module.scss'

const ClientsPage:React.FC = () => {
    return (
        <div>
            <DashboardTile
                mainTitle="My Tasks"
                leftTitle="Total"
                leftCount="1000"
                rightTitle="Active"
                rightCount="99"
            />
            <DashboardTile
                mainTitle="Projects"
                leftTitle="Total"
                leftCount="500"
                rightTitle="Active"
                rightCount="50"
                bgColor="linear-gradient(to bottom right, #0aa361, #1adc88)"
            />
            <DashboardTile
                mainTitle="Clients"
                leftTitle="Total"
                leftCount="8987"
                rightTitle="Active"
                rightCount="2499"
                bgColor="linear-gradient(to bottom right, #1f6abb, #4f9cf2)"
            />
            <DashboardTile
                mainTitle="Products"
                leftTitle="Total"
                leftCount="89"
                rightTitle="Active"
                rightCount="77"
                bgColor="linear-gradient(to bottom right, #609931, #87bc27)"
            />
            
        </div>
    )
}

export default ClientsPage
