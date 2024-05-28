//SocialMedia.tsx
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { FaXTwitter } from 'react-icons/fa6';

import './style-socialMedia.css';

type SocialObjType = {
  wtf: string;
  icon: JSX.Element;
  iconId: IconType;
  iconName: string;
  iconUrl: string;
};

export const socialMediaInfo: SocialObjType[] = [
  {
    wtf: 'sm1',
    icon: <FaFacebook />,
    iconId: FaFacebook,
    iconName: 'FaFacebook',
    iconUrl: 'https://www.facebook.com/p/SuescAventura-100063543973730/',
  },
  {
    wtf: 'sm2',
    icon: <FaInstagram />,
    iconId: FaInstagram,
    iconName: 'FaInstagram',
    // iconUrl:
    //   'https://www.instagram.com/suescaventura/?igsh=MTVvemFneXRsdGJmNw%3D%3D',
    iconUrl:
      'https://www.instagram.com/explore/locations/101373551821898/suescaventura/',
  },

  {
    wtf: 'sm3',
    icon: <FaWhatsapp />,
    iconId: FaWhatsapp,
    iconName: 'FaWhatsapp',
    iconUrl: 'https://wa.me/573204543746',
    // iconUrl: 'https://Whatsapp.com',
  },
  {
    wtf: 'sm4',
    icon: <FaXTwitter />,
    iconId: FaXTwitter,
    iconName: 'FaTwitter',
    iconUrl: 'https://twitter.com',
  },
];

// type SocialMediaPropType = {
//   isColored: boolean;
// }
// function SocialMedia({ isColored }: SocialMediaPropType): JSX.Element {
function SocialMedia(): JSX.Element {
  return (
    <ul className='socialMedia'>
      {socialMediaInfo.map((item, indx) => {
        //it depends on the name of the icon, in this case all names start with Fa
        // const iconClass = `icon_${item.iconId.name
        //   .substring(2)
        //   .toLowerCase()} icon`;

        const iconClass = `icon_${item.wtf} icon`;

        // console.log(iconClass, item.iconId.name);

        return (
          <li key={`${item.iconId.name}--${indx}`}>
            <a
              href={item.iconUrl}
              className={iconClass}
              // className={`${iconClass} ${isColored ? '' : ''}`}
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
