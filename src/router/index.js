import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore, pathAllowedForRole } from '../stores/authStore'

const meta = (title) => ({ title })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/login' },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: meta('로그인'),
    },
    {
      path: '/site/dashboard',
      name: 'siteDashboard',
      component: () => import('../views/SiteManagement/SiteDashboardView.vue'),
      meta: meta('\uc778\uc0ac \ub300\uc2dc\ubcf4\ub4dc'),
    },
    {
      path: '/site/onboarding',
      name: 'siteOnboarding',
      component: () => import('../views/SiteManagement/WorkerOnboardingView.vue'),
      meta: meta('\uc791\uc5c5\uc790 \uc778\ub825 \uc628\ubcf4\ub529'),
    },
    {
      path: '/site/workers/manage',
      name: 'siteWorkerManagement',
      component: () => import('../views/SiteManagement/WorkerManagementView.vue'),
      meta: meta('\uc791\uc5c5\uc790 \uad00\ub9ac'),
    },
    {
      path: '/site/workers/manage/:id',
      name: 'siteWorkerProfile',
      component: () => import('../views/SiteManagement/WorkerProfileDetailView.vue'),
      meta: meta('\uc791\uc5c5\uc790 \uc0c1\uc138 \ud504\ub85c\ud544'),
    },
    {
      path: '/site/onboarding/workers/:id',
      redirect: (to) => ({ path: `/site/workers/manage/${to.params.id}` }),
    },
    {
      path: '/site/workers/:id',
      redirect: (to) => ({ path: `/site/workers/manage/${to.params.id}` }),
    },
    {
      path: '/site/access-attendance',
      redirect: '/site/onboarding',
    },
    {
      path: '/site/work-instructions',
      name: 'siteWorkInstructions',
      component: () => import('../views/SiteManagement/WorkInstructionView.vue'),
      meta: meta('\uc791\uc5c5 \uc9c0\uc2dc'),
    },
    {
      path: '/site/staffing',
      name: 'siteStaffing',
      component: () => import('../views/SiteManagement/StaffingBoardView.vue'),
      meta: meta('\uc778\ub825 \ubc30\uce58'),
    },
    {
      path: '/site/man-days',
      name: 'siteManDays',
      component: () => import('../views/PayrollManagement/PayrollCalculationView.vue'),
      meta: meta('\uacf5\uc218 \uad00\ub9ac'),
    },
    { path: '/site/settlement', redirect: '/site/dashboard' },
    {
      path: '/site/daily-log',
      name: 'siteDailyLog',
      component: () => import('../views/SiteManagement/DailyWorkReportView.vue'),
      meta: meta('\uc791\uc5c5 \uc77c\ubcf4'),
    },
    {
      path: '/site/schedule',
      name: 'siteSchedule',
      component: () => import('../views/SiteManagement/ScheduleChartView.vue'),
      meta: meta('\uacf5\uc815 \uc9c0\ud45c\ubcf4\uace0'),
    },
    {
      path: '/site/work-plan',
      name: 'siteWorkPlan',
      component: () => import('../views/SiteManagement/WorkPlanView.vue'),
      meta: meta('\uc791\uc5c5 \uacc4\ud68d'),
    },
    {
      path: '/site/weather',
      name: 'siteWeather',
      component: () => import('../views/SiteManagement/WeatherControlView.vue'),
      meta: meta('\uae30\uc0c1 \uad00\uc81c'),
    },
    { path: '/site/alerts', redirect: '/site/dashboard' },

    { path: '/hr/sites', redirect: '/site/dashboard' },
    { path: '/hr/sites/:id', redirect: '/site/dashboard' },
    {
      path: '/hr/partners',
      name: 'hrPartners',
      component: () => import('../views/PartnerManagement/PartnerListView.vue'),
      meta: meta('\ud611\ub825\uc0ac \uad00\ub9ac'),
    },
    {
      path: '/hr/partners/:id',
      name: 'hrPartnerDetail',
      component: () => import('../views/PartnerManagement/PartnerDetailView.vue'),
      meta: meta('\ud611\ub825\uc0ac \uc0c1\uc138'),
    },
    {
      path: '/hr/attendance/list',
      name: 'hrAttendanceList',
      component: () => import('../views/AttendanceManagement/AttendanceListView.vue'),
      meta: meta('\uc804\uccb4 \uadfc\ud0dc \ubaa9\ub85d'),
    },
    {
      path: '/hr/attendance/closing',
      name: 'hrAttendanceClosing',
      component: () => import('../views/AttendanceManagement/AttendanceClosingView.vue'),
      meta: meta('\uadfc\ud0dc \ub9c8\uac10'),
    },
    { path: '/hr/payroll/calculation', redirect: '/site/man-days' },
    { path: '/hr/payroll/ledger', redirect: '/site/dashboard' },
    { path: '/hr/payroll/statement', redirect: '/site/dashboard' },
    { path: '/hr/payroll/standard', redirect: '/site/dashboard' },
    {
      path: '/hr/accounts',
      name: 'hrAccounts',
      component: () => import('../views/AccountManagement/AccountListView.vue'),
      meta: meta('\uacc4\uc815 \uad00\ub9ac'),
    },

    { path: '/SiteManagement', redirect: '/site/dashboard' },
    { path: '/SiteManagement/:id', redirect: '/site/dashboard' },
    { path: '/PartnerManagement', redirect: '/hr/partners' },
    { path: '/PartnerManagement/:id', redirect: (to) => ({ path: `/hr/partners/${to.params.id}` }) },
    { path: '/Attendance/List', redirect: '/site/workers/manage' },
    { path: '/Attendance/Closing', redirect: '/site/dashboard' },
    { path: '/Payroll/Calculation', redirect: '/site/man-days' },
    { path: '/Payroll/Ledger', redirect: '/site/dashboard' },
    { path: '/Payroll/Statement', redirect: '/site/dashboard' },
    { path: '/Payroll/Standard', redirect: '/site/dashboard' },
    { path: '/Account/List', redirect: '/site/dashboard' },
    { path: '/Invoices', redirect: '/site/dashboard' },
  ],
})

router.beforeEach((to) => {
  if (to.path === '/login') return true

  const auth = useAuthStore()
  if (!pathAllowedForRole(auth.role, to.path)) {
    return { path: '/login' }
  }
  return true
})

export default router
