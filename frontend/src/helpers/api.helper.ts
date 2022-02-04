import urlHelper from './url.helper';

class ApiHelper {
  apiUrl = 'http://localhost:4000/api/v1';

  fetchEvents = async () => urlHelper.getAsync(
    `${this.apiUrl}/events`,
  );

}

export default new ApiHelper();
