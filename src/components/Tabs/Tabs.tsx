import React from 'react';
import { Link } from 'react-router-dom';

export interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Props {
  tabs: Tab[];
  selectedTabId: string;
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const isIdValid = tabs.some(tab => tab.id === selectedTabId);
  const activeId = isIdValid ? selectedTabId : '';

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
