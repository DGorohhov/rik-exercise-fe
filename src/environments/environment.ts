export const environment = {
  production: false,
  baseUrl: 'http://localhost:8080/',
  event: {
    service: 'http://localhost:8080/rest/v1/events',
    upcomingUrl: '/upcoming',
    endedUrl: '/ended',
  },
  participants: {
    baseService: 'http://localhost:8080/rest/v1/participant',
    civilian: {
      service: '/civilians',
    },
    company: {
      service: '/companies',
    },
  },
};
