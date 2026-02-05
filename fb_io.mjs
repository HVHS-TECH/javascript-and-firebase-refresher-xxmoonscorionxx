const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
import { fb_initialise, fb_authenticate, fb_onAuthStateChanged, fb_signOut, fb_writeRecord, fb_readRecord, fb_readAll, fb_destroy, fb_updateRecord  }
    from './fb_io.mjs';

window.fb_initialise = fb_initialise;
window.fb_authenticate = fb_authenticate;
window.fb_onAuthStateChanged = fb_onAuthStateChanged;
window.fb_signOut = fb_signOut;
window.fb_writeRecord = fb_writeRecord;
window.fb_readRecord = fb_readRecord;
window.fb_readAll = fb_readAll;
window.fb_destroy = fb_destroy;
window.fb_updateRecord = fb_updateRecord;