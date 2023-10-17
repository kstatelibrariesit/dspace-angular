import { getInfoModulePath } from '../app-routing-paths';

export const END_USER_AGREEMENT_PATH = 'end-user-agreement';
export const PRIVACY_PATH = 'privacy';
export const FEEDBACK_PATH = 'feedback';

// KREx about page
export const ABOUT_PATH = 'about';
// KREx Faculty Works page
export const WORKS_FACULTY_PATH = 'works/faculty';

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

// KREx FacultyWorks Path
export function getWorksFacultyPath() {
    return getSubPath(WORKS_FACULTY_PATH);
}

function getSubPath(path: string) {
    return `${getInfoModulePath()}/${path}`;
}
