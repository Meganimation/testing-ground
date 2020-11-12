import React from 'react';
import PropTypes from "prop-types";
import enquire from 'enquire.js';
// import { Breakpoints } from './Breakpoints';




let Breakpoints =  {
  smallMobile: '320px',
  mobile: '414px',
  tablet: '768px',
  smallDesktop: '1024px',
  desktop: '1280px',
  largeDesktop: '1440px',
  hdDesktop: '1600px',
  uhdDesktop: '1920px'
};

let uhdDesktop = { 
  min: _parsePxStringToInt(Breakpoints.uhdDesktop), 
  max: null 
},
 hdDesktop = { 
  max: _parsePxStringToInt(Breakpoints.uhdDesktop), 
  min: _parsePxStringToInt(Breakpoints.hdDesktop), 
},
 largeDesktop = { 
  max: _parsePxStringToInt(Breakpoints.hdDesktop), 
  min: _parsePxStringToInt(Breakpoints.largeDesktop), 
},
  desktop = { 
  max: _parsePxStringToInt(Breakpoints.largeDesktop), 
  min: _parsePxStringToInt(Breakpoints.desktop), 
},
  smallDesktop = { 
  max: _parsePxStringToInt(Breakpoints.desktop), 
  min: _parsePxStringToInt(Breakpoints.smallDesktop), 
},
 tablet = { 
  max: _parsePxStringToInt(Breakpoints.smallDesktop), 
  min: _parsePxStringToInt(Breakpoints.tablet), 
},
 mobile = { 
  max: _parsePxStringToInt(Breakpoints.tablet), 
  min: _parsePxStringToInt(Breakpoints.mobile), 
},
  smallMobile = { 
  max: _parsePxStringToInt(Breakpoints.mobile), 
  min: null 
};

export class ViewportManager {
  constructor(config) {
    this.viewport = this._calculateInitialViewport();
    if (!global.callbacks) global.callbacks = {};
  }

register() {
const self = this; 

let uhdDesktopQuery = `screen and (min-width:${Breakpoints.uhdDesktop})`;
let hdDesktopQuery = `screen and (min-width:${Breakpoints.hdDesktop}) and (max-width:${Breakpoints.uhdDesktop})`;
let largeDesktopQuery = `screen and (min-width:${Breakpoints.largeDesktop}) and (max-width:${Breakpoints.hdDesktop})`;
let desktopQuery = `screen and (min-width:${Breakpoints.desktop}) and (max-width:${ Breakpoints.largeDesktop})`;
let smallDesktopQuery = `screen and (min-width:${Breakpoints.smallDesktop}) and (max-width:${Breakpoints.desktop})`;
let tabletQuery = `screen and (min-width:${Breakpoints.tablet}) and (max-width:${Breakpoints.smallDesktop})`;
let mobileQuery = `screen and (min-width:${Breakpoints.mobile}) and (max-width:${Breakpoints.tablet})`;
let smallMobileQuery = `screen and (min-width:0px) and (max-width:${Breakpoints.mobile})`;
let newViewport;
    if (this.registered) return;

    enquire.register(uhdDesktopQuery , {
      match: () => {
        if (this.viewport === "uhdDesktop") return;
        self._changeViewport('uhdDesktop');
      },
      unmatch: () => {
        newViewport = this._calculateInitialViewport();
        self._changeViewport(newViewport);
      }
    });

    enquire.register(hdDesktopQuery , {
      match: () => {
        if (this.viewport === "hdDesktop") return;
        self._changeViewport("hdDesktop")
      },
      unmatch: () => {
        newViewport = this._calculateInitialViewport();
        self._changeViewport(newViewport);
      }
    });

    enquire.register(largeDesktopQuery , {
      match: () => {
        if (this.viewport === "largeDesktop") return;
        self._changeViewport("largeDesktop")
      },
      unmatch: () => {
        newViewport = this._calculateInitialViewport();
        self._changeViewport(newViewport);
      }
    });

    enquire.register(desktopQuery , {
      match: () => {
        if (this.viewport === "desktop") return;
        self._changeViewport("desktop")
      },
      unmatch: () => {
        newViewport = this._calculateInitialViewport();
        self._changeViewport(newViewport);
      }
    });

    enquire.register(smallDesktopQuery , {
      match: () => {
        if (this.viewport === "smallDesktop") return;
        self._changeViewport("smallDesktop")
      },
      unmatch: () => {
        newViewport = this._calculateInitialViewport();
        self._changeViewport(newViewport);
      }
    });

    enquire.register(tabletQuery , {
      match: () => {
        if (this.viewport === "tablet") return;
        self._changeViewport("tablet")
      },
      unmatch: () => {
        newViewport = this._calculateInitialViewport();
        self._changeViewport(newViewport);
      }
    });

    enquire.register(mobileQuery , {
      match: () => {
        if (this.viewport === "mobile") return;
        self._changeViewport("mobile")
      },
      unmatch: () => {
        newViewport = this._calculateInitialViewport();
        self._changeViewport(newViewport);
      }
    });

    enquire.register(smallMobileQuery , {
      match: () => {
        if (this.viewport === "smallMobile") return;
        self._changeViewport("smallMobile")
      },
      unmatch: () => {
        newViewport = this._calculateInitialViewport();
        self._changeViewport(newViewport);
      }
    });
    this.registered = true;
  }

  unregister() {
let uhdDesktopQuery = `screen and (min-width:${Breakpoints.uhdDesktop})`;
let hdDesktopQuery = `screen and (min-width:${Breakpoints.hdDesktop}) and (max-width:${Breakpoints.uhdDesktop})`;
let largeDesktopQuery = `screen and (min-width:${Breakpoints.largeDesktop}) and (max-width:${Breakpoints.hdDesktop})`;
let desktopQuery = `screen and (min-width:${Breakpoints.desktop}) and (max-width:${ Breakpoints.largeDesktop})`;
let smallDesktopQuery = `screen and (min-width:${Breakpoints.smallDesktop}) and (max-width:${Breakpoints.desktop})`;
let tabletQuery = `screen and (min-width:${Breakpoints.tablet}) and (max-width:${Breakpoints.smallDesktop})`;
let mobileQuery = `screen and (min-width:${Breakpoints.mobile}) and (max-width:${Breakpoints.tablet})`;
let smallMobileQuery = `screen and (min-width:0px) and (max-width:${Breakpoints.mobile})`;

  
if (!this.registered) return;

    enquire.unregister(uhdDesktopQuery);
    enquire.unregister(hdDesktopQuery);
    enquire.unregister(largeDesktopQuery);
    enquire.unregister(desktopQuery);
    enquire.unregister(smallDesktopQuery);
    enquire.unregister(tabletQuery);
    enquire.unregister(mobileQuery);
    enquire.unregister(smallMobileQuery);
  }

subscribe(id, cb) {
    global.callbacks[id] = { callbackFn: cb };
  }

  unsubscribe(id) {
    delete global.callbacks[id];
  }

  _calculateInitialViewport() {
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    let viewport;
    if (width >= uhdDesktop.min) {
      viewport = "uhdDesktop";
    } else if (width >= hdDesktop.min && width < uhdDesktop.min) {
      viewport = "hdDesktop";
    } else if (width >= largeDesktop.min && width < hdDesktop.min) {
      viewport = "largeDesktop";
    } else if (width >= desktop.min && width < largeDesktop.min) {
      viewport = "desktop";
    } else if (width >= smallDesktop.min && width < desktop.min) {
      viewport = "smallDesktop";
    } else if (width >= tablet.min && width < smallDesktop.min) {
      viewport = "tablet";
    } else if (width >= mobile.min && width < tablet.min) {
      viewport = "mobile";
    } else if (width >= smallMobile.min && width < mobile.min) {
      viewport = "smallMobile";
    }

    return viewport;
  };

  _changeViewport(currentViewport) {
    this.viewport = currentViewport;
    let callbackKeys = Object.keys(global.callbacks);
    if (callbackKeys.length > 0) {
      callbackKeys.forEach(key => {
        if (
          global.callbacks &&
          global.callbacks[key] &&
          global.callbacks[key].callbackFn
        ) {
          global.callbacks[key].callbackFn(currentViewport);
        }
      });
    }
  }
}

export default new ViewportManager();

//Helpers
function _parsePxStringToInt(string) {
  if (typeof string == 'number') return string;
  if (!string.indexOf('px')) return parseInt(string);
  return parseInt(string.split('px')[0]);
}
