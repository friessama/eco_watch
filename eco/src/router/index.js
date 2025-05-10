import { createRouter, createWebHistory } from 'vue-router'

import SignupPage from '../views/SignupPage.vue'
import LoginPage from '../views/LoginPage.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ReportListPage from '../views/ReportListPage.vue'
import GenerateReportPage from '../views/GenerateReportPage.vue'
import ReportPage from '../views/ReportPage.vue'
import DashboardPage from '../views/DashboardPage.vue'

const routes = [
  { path: '/', component: DashboardPage },
  { path: '/signup', component: SignupPage },
  { path: '/login', component: LoginPage },
  { path: '/forgot-password', component: ForgotPassword },
  { path: '/reports', component: ReportListPage },
  { path: '/generate-report', component: GenerateReportPage },
  { path: '/report/:id', component: ReportPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
