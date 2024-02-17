import React from "react";
import './Episode.css'



export default episodes
const podcast1 = {
    num: '126',
    title: 'Robot, který snědl koblihu',
    guest: 'Radovan Siwek',
  };
const podcast2 = {
    num: '128',
    title: 'Moderní hrachová kaše',
    guest: 'Kamila Štancová',
  };

  
  console.log('funguju!', podcast1);

export const Episode = () => {
    return (
        <>
        <div className="episodes-list">
            <div className="episode">
                <div className="episode__num">{podcast1.num}</div>
                <div className="episode__body">
                    <div className="episode__title">{podcast1.title}</div>
                    <div className="episode__guest">{podcast1.guest}</div>
                </div>
            </div>
            <div className="episode">
                <div className="episode__num">{podcast2.num}</div>
                <div className="episode__body">
                    <div className="episode__title">{podcast2.title}</div>
                    <div className="episode__guest">{podcast2.guest}</div>
                </div>
            </div>
        </div>
        </>
    )
}

