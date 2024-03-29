import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nBreadcrumbResolver } from '../core/breadcrumbs/i18n-breadcrumb.resolver';
import { PRIVACY_PATH, END_USER_AGREEMENT_PATH, FEEDBACK_PATH } from './info-routing-paths';
import { ThemedEndUserAgreementComponent } from './end-user-agreement/themed-end-user-agreement.component';
import { ThemedPrivacyComponent } from './privacy/themed-privacy.component';
import { ThemedFeedbackComponent } from './feedback/themed-feedback.component';
import { FeedbackGuard } from '../core/feedback/feedback.guard';
import { environment } from '../../environments/environment';

// KREx about page
import { ABOUT_PATH } from './info-routing-paths';
import { AboutComponent } from './about/about.component';

// KREx License Page
import { LICENSE_PATH } from './info-routing-paths';
import { LicenseComponent } from './license/license.component'

// KREx Symbols Guidelines Page
import { SYMBOLS_PATH } from './info-routing-paths';
import { SymbolsGudielinesComponent } from './guidelines/symbols/symbols.component'

// KREx Attachment Guidelines Page
import { ATTACHMENTS_PATH } from './info-routing-paths';
import { AttachmentsGuidelinesComponent } from './guidelines/attachments/attachments.component'

// KREx Authors Guidelines Page
import { AUTHORS_PATH } from './info-routing-paths';
import { AuthorsGuidelinesComponent } from './guidelines/authors/authors.component'

// KREx Keywords Guidelines Page
import { KEYWORDS_PATH } from './info-routing-paths';
import { KeywordsGuidelinesComponent } from './guidelines/keywords/keywords.component'

// KREx policies page
import { POLICIES_PATH } from './info-routing-paths';
import { PoliciesComponent } from './policies/policies.component';

const imports = [
  RouterModule.forChild([
    {
      path: FEEDBACK_PATH,
      component: ThemedFeedbackComponent,
      resolve: { breadcrumb: I18nBreadcrumbResolver },
      data: { title: 'info.feedback.title', breadcrumbKey: 'info.feedback' },
      canActivate: [FeedbackGuard]
    }
  ])
];

  if (environment.info.enableEndUserAgreement) {
    imports.push(
      RouterModule.forChild([
        {
          path: END_USER_AGREEMENT_PATH,
          component: ThemedEndUserAgreementComponent,
          resolve: { breadcrumb: I18nBreadcrumbResolver },
          data: { title: 'info.end-user-agreement.title', breadcrumbKey: 'info.end-user-agreement' }
        }
      ]));
  }
  if (environment.info.enablePrivacyStatement) {
    imports.push(
      RouterModule.forChild([
        {
          path: PRIVACY_PATH,
          component: ThemedPrivacyComponent,
          resolve: { breadcrumb: I18nBreadcrumbResolver },
          data: { title: 'info.privacy.title', breadcrumbKey: 'info.privacy' }
        }
      ]));
  }

  // KREx about page
  imports.push(
    RouterModule.forChild([
      {
        path: ABOUT_PATH,
        component: AboutComponent,
        resolve: { breadcrumb: I18nBreadcrumbResolver },
        data: { title: 'info.about.title', breadcrumbKey: 'info.about' }
      }
    ]));

  // KREx License Page
  imports.push(
    RouterModule.forChild([
      {
        path: LICENSE_PATH,
        component: LicenseComponent,
        resolve: { breadcrumb: I18nBreadcrumbResolver },
        data: { title: 'info.license.title', breadcrumbKey: 'info.license' }
      }
    ]));

  // KREx Symbols Guidelines Page
  imports.push(
    RouterModule.forChild([
      {
        path: SYMBOLS_PATH,
        component: SymbolsGudielinesComponent,
        resolve: { breadcrumb: I18nBreadcrumbResolver },
        data: { title: 'info.guidelines.symbols.title', breadcrumbKey: 'info.guidelines.symbols' }
      }
    ]));

  // KREx Attachments Guidelines Page
  imports.push(
    RouterModule.forChild([
      {
        path: ATTACHMENTS_PATH,
        component: AttachmentsGuidelinesComponent,
        resolve: { breadcrumb: I18nBreadcrumbResolver },
        data: { title: 'info.guidelines.attachments.title', breadcrumbKey: 'info.guidelines.attachments' }
      }
    ]));

  // KREx Author Guidelines Page
  imports.push(
    RouterModule.forChild([
      {
        path: AUTHORS_PATH,
        component: AuthorsGuidelinesComponent,
        resolve: { breadcrumb: I18nBreadcrumbResolver },
        data: { title: 'info.guidelines.authors.title', breadcrumbKey: 'info.guidelines.authors' }
      }
    ]));

  // KREx Keywords Guidelines Page
  imports.push(
    RouterModule.forChild([
      {
        path: KEYWORDS_PATH,
        component: KeywordsGuidelinesComponent,
        resolve: { breadcrumb: I18nBreadcrumbResolver },
        data: { title: 'info.guidelines.keywords.title', breadcrumbKey: 'info.guidelines.keywords' }
      }
    ]));

  // KREx policy page
  imports.push(
    RouterModule.forChild([
      {
        path: POLICIES_PATH,
        component: PoliciesComponent,
        resolve: { breadcrumb: I18nBreadcrumbResolver },
        data: { title: 'info.policies.title', breadcrumbKey: 'info.policies' }
      }
    ]));

@NgModule({
  imports: [
    ...imports
  ]
})
/**
 * Module for navigating to components within the info module
 */
export class InfoRoutingModule {
}
