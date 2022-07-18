import React from 'react';
import { Icon } from '@iconify/react';
import locationIconFire from '@iconify/icons-mdi/fire-alert';
import locationIconEarth from '@iconify/icons-mdi/earth';
import locationIconIce from '@iconify/icons-mdi/snow-advisory';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
        <h1>
            <Icon icon={locationIconFire}/> 
            <Icon icon={locationIconEarth}/> 
            <Icon icon={locationIconIce}/> 
             Natural Events Tracker (Powered by Nasa) 
            <Icon icon={locationIconFire}/> 
            <Icon icon={locationIconEarth}/> 
            <Icon icon={locationIconIce}/> 
        </h1>
    </header>
  )
}
