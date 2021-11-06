const size = {
    smallMobile: '320px',
    mobile: '375px',
    largeMobile: '425px',
    tablet: '768px',
    laptop: '1024px',
    largeLaptop: '1440px',
    desktop: '1600px',
    largeDesktop: '2560px'
  }

  export const device = {
    smallMobile: `(min-width: ${size.smallMobile})`,
    mobile: `(min-width: ${size.mobile})`,
    largeMobile: `(min-width: ${size.largeMobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    largeLaptop: `(min-width: ${size.largeLaptop})`,
    desktop: `(min-width: ${size.desktop})`,
    largeDesktop: `(min-width: ${size.largeDesktop})`
  };

