export const paths = {
  auth: {
    default: {
      path: '',
      getHref: () => '/',
    },
    candidateLogin: {
      path: '/app/candidate/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/app/candidate/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    candidateRegister: {
      path: '/app/candidate/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/app/candidate/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    employerLogin: {
      path: '/app/employer/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/app/employer/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    employerRegister: {
      path: '/app/employer/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/app/employer/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },
  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    },
    // Candidate Portal
    candidate: {
      default: {
        path: '/app/candidate',
        getHref: () => '/app/candidate',
      },
      dashboard: {
        path: '/app/candidate/dashboard',
        getHref: () => '/app/candidate/dashboard',
      },
      allJobs: {
        path: '/app/candidate/all-jobs',
        getHref: () => '/app/candidate/all-jobs',
      },
      jobDetail: {
        path: '/app/candidate/job-detail/:jobId',
        getHref: (jobId: string) => `/app/candidate/job-detail/${jobId}`,
      },
    },

    // TA Portal
    talentRecruitment: {
      default: {
        path: '/app/talent-acquisition',
        getHref: () => '/app/talent-acquisition',
      },
      dashboard: {
        path: '/app/talent-acquisition/dashboard',
        getHref: () => '/app/talent-acquisition/dashboard',
      },
      analytics: {
        path: '/app/talent-acquisition/analytics',
        getHref: () => '/app/talent-acquisition/analytics',
      },
      aiSourcing: {
        path: '/app/talent-acquisition/ai-sourcing',
        getHref: () => '/app/talent-acquisition/ai-sourcing',
      },
      CVAnalystics: {
        path: '/app/talent-acquisition/CV-analytics',
        getHref: (jobId: string, jobTitle?: string, status?: string) => `/app/talent-acquisition/CV-analytics?jobId=${jobId}${jobTitle ? `&title=${encodeURIComponent(jobTitle)}` : ''}${status ? `&status=${encodeURIComponent(status)}` : ''}`,
      },
      jobDetail: {
        path: '/app/talent-acquisition/job-detail/:jobId',
        getHref: (jobId: string, jobTitle?: string, status?: string) => {
          const params = new URLSearchParams();
          if (jobTitle) params.append('title', jobTitle);
          if (status) params.append('status', status);
          const queryString = params.toString();
          return `/app/talent-acquisition/job-detail/${jobId}${queryString ? `?${queryString}` : ''}`;
        },
      },
    },

    // HM Portal
    hiringManagers: {
      default: {
        path: '/app/hiring-managers',
        getHref: () => '/app/hiring-managers',
      },
      dashboard: {
        path: '/app/hiring-managers/dashboard',
        getHref: () => '/app/hiring-managers/dashboard',
      },
      cvanalysticlist: {
        path: '/app/hiring-managers/dashboard',
        getHref: () => '/app/hiring-managers/dashboard',
      },
      jobShortList: {
        path: '/app/hiring-managers/job-shortlist/:jobId',
        getHref: (jobId: string) =>
          `/app/hiring-managers/job-shortlist/${jobId}`,
      },
    },
  },
} as const;
