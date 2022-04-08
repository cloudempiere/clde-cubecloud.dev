// Cube.js configuration options: https://cube.dev/docs/config

// NOTE: third-party dependencies and the use of require(...) are disabled for
// CubeCloud users by default.  Please contact support if you need them
// enabled for your account.  You are still allowed to require
// @cubejs-backend/*-driver packages.

module.exports = {
    contextToAppId: ({ securityContext }) =>
        `CUBEJS_APP_${securityContext.ad_client_id}`,

    queryRewrite: (query, { securityContext }) => {
        const context = securityContext;
        if (context.ad_client_id) {
          query.filters.push({
            member: 'Client.ad_client_id',
            operator: 'equals',
            values: [context.ad_client_id],
          });
        }
        return query;
    },

    // Context for Sheduler to Update all 
    scheduledRefreshContexts: async () => [
        {
          securityContext: {
          },
        }
    ],
};


https://cloudempiere.cubecloud.dev/deployments/1/pre-aggregations/Businesspartner/def?securityContext=%7B%22ad_client_id%22%3A1000026%2C%22ad_language%22%3A%22sk_SK%22%7D
https://cloudempiere.cubecloud.dev/deployments/1/pre-aggregations/Orderfacts/linecnt?securityContext=%7B%22ad_client_id%22%3A1000026%2C%22ad_language%22%3A%22sk_SK%22%7D