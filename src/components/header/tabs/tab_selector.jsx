import React from 'react';
import TabItem from './tab_item';
import { faPlaneUp, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import LoginIndicator from '../login_indicator';

function TabSelector({ selectedPage }) {
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-b5a880ed.webp")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      className={classNames(
        'flex h-48 w-full flex-col justify-end px-10 text-gray-700'
      )}>
      <LoginIndicator />
      {/* {user && <UserIndicator user={user} />} */}
      <div className="flex w-full flex-row rounded-tl-md rounded-tr-md border-r border-t border-l bg-white">
        <TabItem
          icon={faPlaneUp}
          title={'رزرو بلیط'}
          link={'/'}
          isSelected={
            selectedPage == '/' || selectedPage.split('/')[1] == 'tickets'
          }
        />
        <TabItem
          icon={faClipboardCheck}
          title={'سفر‌های من'}
          link={'/my-trips'}
          isSelected={selectedPage == '/my-trips'}
        />
      </div>
    </div>
  );
}

export default TabSelector;
