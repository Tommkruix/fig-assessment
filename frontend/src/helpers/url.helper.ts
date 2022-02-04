import * as consoleLogColors from 'console-log-colors';

class UrlHelper {
  getAsync = async ( url: string ) => {
    consoleLogColors.log.cyan( `STARTED | urlHelper.getAsync() -> ${url}` );
    let callback = null;

    try {
      const resp = await fetch( url, {
        mode:    'cors',
        cache:   'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
      } );

      callback = await resp.json();

      consoleLogColors.log.greenBright( `FINISHED | urlHelper.getAsync() -> ${url}` );
    } catch ( e ) {
      consoleLogColors.log.red( `FAILED | urlHelper.getAsync() -> ${url}` );
    }

    return callback;
  };

  postAsync = async ( url: string, data: object ) => {
    consoleLogColors.log.cyan( `STARTED | urlHelper.postAsync() -> ${url}` );
    let callback = null;

    try {
      const resp = await fetch( url, {
        mode:    'cors',
        method:  'post',
        cache:   'no-cache',
        body:    JSON.stringify( data ),
        headers: {
          'Content-Type': 'application/json',
        },
      } );

      callback = await resp.json();

      consoleLogColors.log.greenBright( `FINISHED | urlHelper.postAsync() -> ${url}` );
    } catch ( e ) {
      consoleLogColors.log.red( `FAILED | urlHelper.postAsync() -> ${url}` );
    }

    return callback;
  };
}

export default new UrlHelper();
