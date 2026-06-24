import { reactive } from 'vue';

export const DEFAULT_RESUME_LINK = `${import.meta.env.BASE_URL}resume.pdf`;

export const constantsStore = reactive({
    navLinks: [],
    homeSection: {},
    socialLinks: [],
    aboutMe: {},
    resumeLink: DEFAULT_RESUME_LINK,
    experiences: [],
    projects: [],
    mainSkills: [],
    additionalSkills: [],
    contact: {},
});
