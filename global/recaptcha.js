/*
import FetchUtil from '../../common/util/fetch';
import logUtil from '../../common/util/log';
import envUtil from '../../common/util/env';
import serverEnvUtil from '../../servers-common/util/env';

// Todo - Add new env vars to k8s & marathon

const isCaptchaDisabled = envUtil.getBoolean('CAPTCHA_DISABLE');
class recaptcha {
  constructor() {
    this.fetchUtil = new FetchUtil();
  }

  // ==============================================================================================================
  // For Frontend:

  render = (id, doneCb) => {
    if (isCaptchaDisabled) return true;
    const recaptchaOpts =
        {
          sitekey: envUtil.get('GOOGLE_RECAPTCHA_V2_SITE_KEY'),
          callback: doneCb,
          size: 'invisible',
          badge: 'inline'
          // hl: 'fr', // we set locale in featurefm.html
        };
    const widgetId = grecaptcha.render(id, recaptchaOpts);
    logUtil.debug('New reCaptcha. widgetId = ', widgetId);
    return widgetId;
  };

  execute = (widgetId) => {
    if (isCaptchaDisabled) return true;
    return grecaptcha.execute(widgetId);
  };

  reset = (widgetId) => {
    if (isCaptchaDisabled) return true;
    return grecaptcha.reset(widgetId);
  };

  getResponse = (widgetId) => {
    if (isCaptchaDisabled) return true;
    return grecaptcha.getResponse(widgetId);
  };

  getResponseEx = (widgetId, doesFormValid) => {
    if (isCaptchaDisabled) return true;

    const token = this.getResponse(widgetId);
    if (doesFormValid && !token) {
      this.execute(widgetId);
      return false;
    }
    this.reset(widgetId);
    return token;
  };

  // ==============================================================================================================
  // For Backend (node.js):

  isTokenValid = async (token) => {
    if (isCaptchaDisabled) {
      logUtil.debug('captcha is disabled.');
      return true;
    }
    if (!token || !token.length) {
      logUtil.error('captcha token is missing.');
      return false;
    }
    const data = {
      secret: serverEnvUtil.get('GOOGLE_RECAPTCHA_V2_SECRET_KEY'),
      response: token,
    };
    const result = await this.fetchUtil.postJSON(`${serverEnvUtil.get('GOOGLE_RECAPTCHA_V2_API_URL')}?secret=${data.secret}&response=${data.response}`);
    if (result && result.success) {
      logUtil.debug('captcha api validation success.');
      return true;
    }
    logUtil.error('Error: captcha api validation error.');
    return false;
  }
}

const recaptchaUtil = new recaptcha();
export default recaptchaUtil;
*/
