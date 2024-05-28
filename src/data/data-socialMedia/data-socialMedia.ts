import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  // FaTwitter,
  // FaYoutube,
  // FaDiscord,
  // FaTelegram,
  // FaBehance,
} from 'react-icons/fa';

import { FaXTwitter } from 'react-icons/fa6';

type SocialObjType = {
  icon: JSX.Element;
  iconId: IconType;
  iconName: string;
  iconUrl: string;
};

export const socialObj: SocialObjType[] = [
  {
    icon: <FaFacebook />,
    iconId: FaFacebook,
    iconName: 'FaFacebook',
    iconUrl: 'https://www.facebook.com/p/SuescAventura-100063543973730/',
    // iconUrl: 'https://facebook.com',
  },
  {
    // icon: <FaInstagram />,
    iconId: 'FaInstagram',
    iconName: 'FaInstagram',
    iconUrl:
      'https://www.instagram.com/suescaventura/?igsh=MTVvemFneXRsdGJmNw%3D%3D',
    // iconUrl: 'https://instagram.com',
  },

  {
    // icon: <FaWhatsapp />,
    iconId: 'FaWhatsapp',
    iconName: 'FaWhatsapp',
    iconUrl: 'https://Whatsapp.com',
  },
  {
    // icon: <FaXTwitter />,
    iconId: 'FaXTwitter',
    iconName: 'FaTwitter',
    iconUrl: 'https://twitter.com',
  },
  // {
  //   icon: <FaTwitter />,
  //   iconId: FaTwitter,
  //   iconName: 'FaTwitter',
  //   iconUrl: 'https://twitter.com',
  // },
  // {
  //   icon: <FaYoutube />,
  //   iconId: FaYoutube,
  //   iconName: 'FaYoutube',
  //   iconUrl: 'https://youtube.com',
  // },
  // {
  //   icon: <FaDiscord />,
  //   iconId: FaDiscord,
  //   iconName: 'FaDiscord',
  //   iconUrl: 'https://discord.com',
  // },
  // {
  //   icon: <FaTelegram />,
  //   iconId: FaTelegram,
  //   iconName: 'FaTelegram',
  //   iconUrl: 'https://telegram.com',
  // },
  // {
  //   icon: <FaBehance />,
  //   iconId: FaBehance,
  //   iconName: 'FaBehance',
  //   iconUrl: 'https://behance.com',
  // },
];
