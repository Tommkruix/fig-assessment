import urlHelper from './url.helper';

class ApiHelper {
  apiUrl = `${process.env.REACT_APP_FIG_API}`;

  fetchEvents = async () => urlHelper.getAsync(
    `${this.apiUrl}/events`,
  );

}

export default new ApiHelper();
