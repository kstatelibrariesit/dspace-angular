import { getInfoModulePath } from '../app-routing-paths';

export const END_USER_AGREEMENT_PATH = 'end-user-agreement';
export const PRIVACY_PATH = 'privacy';
export const FEEDBACK_PATH = 'feedback';

// KREx about page
export const ABOUT_PATH = 'about';
// KREx LICENSE page
export const LICENSE_PATH = 'license';
// KREx SYMBOLS page
export const SYMBOLS_PATH = 'guidelines/symbols';
// KREx Attachments page
export const ATTACHMENTS_PATH = 'guidelines/attachments';
// KREx Authors page
export const AUTHORS_PATH = 'guidelines/authors';
// KREx Keywords page
export const KEYWORDS_PATH = 'guidelines/keywords';
// KREx policy page
export const POLICIES_PATH = 'policies';

export function getEndUserAgreementPath() {
    return getSubPath(END_USER_AGREEMENT_PATH);
}

export function getPrivacyPath() {
    return getSubPath(PRIVACY_PATH);
}

export function getFeedbackPath() {
    return getSubPath(FEEDBACK_PATH);
}

// KREx About Path
export function getAboutPath() {
    return getSubPath(ABOUT_PATH);
}

// KREx License Path
export function getLicensePath() {
    return getSubPath(LICENSE_PATH);
}

// KREx Symbols Guidelines Path
export function getSymbolsGuidelinesPath() {
    return getSubPath(SYMBOLS_PATH);
}

// KREx Attachments Guidelines Path
export function getAttachmentsGuidelinesPath() {
    return getSubPath(ATTACHMENTS_PATH);
}

// KREx Authors Guidelines Path
export function getAuthorGuidelinessPath() {
    return getSubPath(AUTHORS_PATH);
}

// KREx Keywords Guidelines Path
export function getKeywordsGuidelinesPath() {
    return getSubPath(KEYWORDS_PATH);
}

// KREx Policies Path
export function getPoliciesPath() {
    return getSubPath(POLICIES_PATH);
}

function getSubPath(path: string) {
    return `${getInfoModulePath()}/${path}`;
}
