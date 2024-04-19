import React from "react";
import oneImg from '../../public/icon/rank/top/one.svg';
import twoImg from '../../public/icon/rank/top/two.svg';
import threeImg from '../../public/icon/rank/top/three.svg';
import {getFullName} from "../helpers/format.helper.ts";
import {getColorWithId, getRandomColor, profileAvatarName} from "../helpers/helper.ts";
import {ImageSliceType} from "../types/store.ts";
import {useSelector} from "react-redux";


const DragonUser = ({id, fName, lName, rank, coin, subtitle, img, onClick, isFixed = false}: {
    id: string,
    fName: string | null,
    lName: string | null,
    rank: number,
    coin?: string,
    img?: string,
    subtitle?: React.ReactElement,
    onClick?: () => void,
    isFixed?: boolean
}) => {
    const name = getFullName(fName, lName);
    const shortName = profileAvatarName(fName, lName);
    const rankImg = rank === 1 ? oneImg : rank === 2 ? twoImg : threeImg;
    const image: ImageSliceType = useSelector((state: any) => state.image);

    return (
        <div onClick={onClick} className={'du-container'} style={isFixed ? {
            position: 'fixed',
            bottom: '0',
            width: '100%',
            background: '#282828',
            margin: '0',
            borderRadius: '0'
        } : {}}>
            <div className='flex items-center'>
                {/*<img className='du-user-image' src={userOne} alt='user one'/>*/}
                {img == undefined ?
                    <div className='friend-image' style={{backgroundColor: getColorWithId(id)}}>{shortName}</div> :
                    <img className='friend-image' src={img} alt='pp-image'/>}
                <div className='du-user-info'>
                    <p className='du-user-name'>{name.length > 25 ? name.slice(0, 8) + " ..." : name}</p>
                    {coin ? <p className='du-user-coin'><img
                        src={image.core.find((img) => img.name === 'COIN_TOOL')?.img.src}/> {BigInt(coin).toLocaleString()}
                    </p> : subtitle}
                </div>
            </div>
            <div className='du-trailer-container'>
                {
                    rank >= 1 && rank <= 3 ? <img className='du-trailer-img' src={rankImg} alt='bronze'/> :
                        <span className='du-trailer'>{rank}</span>
                }
            </div>
        </div>
    );
};

export default DragonUser;
