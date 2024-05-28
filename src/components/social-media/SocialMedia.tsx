//SocialMedia.tsx
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { FaXTwitter } from 'react-icons/fa6';

import './style-socialMedia.css';

type SocialObjType = {
  icon: JSX.Element;
  iconId: IconType;
  iconName: string;
  iconUrl: string;
};

export const socialMediaInfo: SocialObjType[] = [
  {
    icon: <FaFacebook />,
    iconId: FaFacebook,
    iconName: 'FaFacebook',
    iconUrl: 'https://www.facebook.com/p/SuescAventura-100063543973730/',
  },
  {
    icon: <FaInstagram />,
    iconId: FaInstagram,
    iconName: 'FaInstagram',
    // iconUrl:
    //   'https://www.instagram.com/suescaventura/?igsh=MTVvemFneXRsdGJmNw%3D%3D',
    iconUrl:
      'https://www.instagram.com/explore/locations/101373551821898/suescaventura/',
  },

  {
    icon: <FaWhatsapp />,
    iconId: FaWhatsapp,
    iconName: 'FaWhatsapp',
    iconUrl: 'https://wa.me/573204543746',
    // iconUrl: 'https://Whatsapp.com',
  },
  {
    icon: <FaXTwitter />,
    iconId: FaXTwitter,
    iconName: 'FaTwitter',
    iconUrl: 'https://twitter.com',
  },
];


type SocialMediaPropType = {
  isColored: boolean;
};
function SocialMedia({ isColored }: SocialMediaPropType): JSX.Element {
  return (
    <ul className='socialMedia'>
      {socialMediaInfo.map((item, indx) => {
        const iconClass = `icon ${item.iconId.name
          .substring(0, 2)
          .toLowerCase()}-${item.iconId.name.substring(2).toLowerCase()}`;

        return (
          <li key={`${item.iconId.name}--${indx}`}>
            <a
              href={item.iconUrl}
              className={`${iconClass} ${isColored ? 'colored' : ''}`}
              rel='noreferrer'
              target='_blank'
            >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialMedia;
