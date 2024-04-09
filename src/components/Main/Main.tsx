import React from 'react';
import './Main.scss';

type HeaderProps = {
  children: React.ReactNode;
};

function Ambassadors(props: HeaderProps) {
  return <div className="main">{props.children}</div>;
}

export default Ambassadors;
