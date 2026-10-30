<template>
    <Section id="about" bg="default">
        <SectionHeader
            class="!mb-10 md:!mb-12 lg:!mb-14"
            title="Who I Am"
            :subTitle="aboutProfile.headline"
            subTitleColor="text-text-primary"
        />

        <div class="grid items-center gap-8 md:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)] md:gap-10 lg:gap-14">
            <figure
                class="mx-auto w-full max-w-md md:max-w-none"
                data-reveal="fade-right"
                :style="{ '--reveal-delay': '120ms' }"
            >
                <div class="overflow-hidden rounded-2xl border border-border-subtle bg-light-cyan shadow-soft-dark">
                    <img
                        :src="profileImage"
                        alt="Portrait of Christian Mark Gonzales"
                        class="h-[22rem] w-full object-cover sm:h-[26rem] md:h-[28rem]"
                    />
                </div>
                <figcaption class="mt-3 text-center font-mono text-xs uppercase tracking-[0.14em] text-text-muted md:text-left">
                    Frontend roots. Backend focus. AI systems.
                </figcaption>
            </figure>

            <div
                class="min-w-0"
                data-reveal="fade-left"
                :style="{ '--reveal-delay': '180ms' }"
            >
                <p class="max-w-3xl text-lg font-medium leading-relaxed text-text-primary sm:text-xl lg:text-2xl">
                    {{ aboutProfile.valueProposition }}
                </p>
                <p class="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
                    {{ aboutProfile.experienceSummary }}
                </p>

                <blockquote class="mt-6 max-w-3xl border-l-2 border-chinese-bronze pl-4">
                    <p class="text-base font-medium leading-relaxed text-text-primary">
                        “{{ aboutProfile.quote }}”
                    </p>
                </blockquote>

                <a
                    :href="resumeLink"
                    download
                    aria-label="Download Christian Gonzales's resume as a PDF"
                    class="focus-ring mt-6 inline-flex items-center rounded-xl bg-chinese-bronze px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(217,128,50,0.28),0_0_20px_rgba(217,128,50,0.2)] transition duration-300 hover:bg-dark-bronze hover:shadow-[0_0_0_1px_rgba(217,128,50,0.45),0_0_26px_rgba(217,128,50,0.32)]"
                >
                    <span>Download Resume</span>
                    <font-awesome-icon class="ml-2" icon="fas fa-download" aria-hidden="true" />
                </a>
            </div>
        </div>
    </Section>
</template>

<script setup>
    import { computed } from 'vue';
    import { constantsStore, DEFAULT_RESUME_LINK } from '@/store';
    import SectionHeader from '@/generics/SectionHeader.vue';
    import Section from '@/components/ui/Section.vue';

    const DEFAULT_ABOUT_PROFILE = {
        headline: 'Full Stack Software Engineer',
        valueProposition: 'I build reliable backend systems and AI-powered products that turn complex business workflows into maintainable production software.',
        experienceSummary: 'Across 4+ years, I have grown from frontend development into full-stack delivery and backend ownership, contributing to complex B2B solutions and workforce operations platforms while shipping REST APIs, asynchronous workflows, CRM automation, voice AI integrations, and cloud-deployed services for remote teams.',
        quote: "Great software isn't measured by the amount of code written - it's measured by how reliably it solves real problems.",
    };

    const profileImage = `${import.meta.env.BASE_URL}assets/profile.png`;

    const normalizeText = (value, fallback) => {
        if (typeof value !== 'string' || value.trim().length === 0) {
            return fallback;
        }

        return value.trim();
    };

    const aboutProfile = computed(() => {
        const aboutMe = constantsStore.aboutMe ?? {};

        return {
            headline: normalizeText(aboutMe.headline, DEFAULT_ABOUT_PROFILE.headline),
            valueProposition: normalizeText(aboutMe.valueProposition, DEFAULT_ABOUT_PROFILE.valueProposition),
            experienceSummary: normalizeText(aboutMe.experienceSummary, DEFAULT_ABOUT_PROFILE.experienceSummary),
            quote: normalizeText(aboutMe.quote, DEFAULT_ABOUT_PROFILE.quote),
        };
    });

    const resumeLink = computed(() => constantsStore.resumeLink || DEFAULT_RESUME_LINK);
</script>
