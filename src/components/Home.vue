<template>
    <section
        id="home"
        class="relative isolate flex min-h-screen flex-col overflow-x-hidden pt-28 sm:pt-32 md:pt-36 pb-8 text-white"
    >
        <div class="hero-texture absolute inset-0 -z-10"></div>
        <div class="hero-radial absolute inset-0 -z-10"></div>
        <div class="hero-grid absolute inset-0 -z-10 opacity-20"></div>
        <div class="hero-vignette pointer-events-none absolute inset-0 -z-10"></div>
        <AmbientStarfield
            :density="1.35"
            :parallax-strength="58"
            :focus-x="starfieldFocus.x"
            :focus-y="starfieldFocus.y"
            :focus-radius="0.38"
            :focus-weight="0.62"
        />

        <div class="relative z-10 flex w-full flex-1 flex-col">
            <div class="site-container my-auto flex flex-col">
                <div class="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-12">
                    <div class="w-full md:w-[48%] lg:w-[46%] text-center md:text-left pointer-events-auto shrink-0">
                        <h1
                            class="hero-enter mb-4 text-[2.35rem] font-bold leading-[0.96] tracking-[-0.03em] sm:mb-5 sm:text-5xl lg:text-6xl xl:text-[4.15rem]"
                            style="animation-delay: 200ms"
                        >
                            {{ homeProfile.headlineLead }}
                            <span class="hero-name block">{{ homeProfile.headlineAccent }}</span>
                        </h1>
                        <p
                            class="hero-enter mx-auto mb-7 max-w-xl text-base leading-relaxed text-text-secondary sm:mb-8 sm:text-lg md:mx-0"
                            style="animation-delay: 300ms"
                        >
                            {{ homeProfile.supportLine }}
                        </p>
                        <div
                            class="hero-enter flex flex-col gap-4 lg:flex-row lg:justify-start"
                            style="animation-delay: 400ms"
                        >
                            <span
                                ref="magneticRef"
                                class="block w-full cursor-pointer lg:inline-block lg:w-auto"
                                @mouseenter="magnetic.onMouseEnter"
                                @mousemove="magnetic.onMouseMove"
                                @mouseleave="magnetic.onMouseLeave"
                            >
                                <Button
                                    variant="primary"
                                    size="lg"
                                    class="hero-cta-primary w-full lg:w-auto"
                                    @click="scrollTo('#contact')"
                                >
                                    Start a Conversation
                                </Button>
                            </span>
                            <Button
                                variant="secondary"
                                size="lg"
                                class="hero-cta-secondary w-full lg:w-auto"
                                @click="scrollTo('#projects')"
                            >
                                View My Work
                            </Button>
                        </div>
                        <div
                            class="hero-enter mt-8 flex flex-col items-center gap-5 sm:mt-9 md:items-start"
                            style="animation-delay: 500ms"
                        >
                            <ul class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-start" aria-label="Experience highlights">
                                <li
                                    v-for="proof in homeProfile.proof"
                                    :key="proof"
                                    class="inline-flex items-center gap-2.5 text-sm text-text-secondary"
                                >
                                    <span class="hero-proof-rule" aria-hidden="true"></span>
                                    <span>{{ proof }}</span>
                                </li>
                            </ul>
                            <div class="flex gap-3">
                                <a
                                    v-for="link in socialLinks"
                                    :key="`home-${link.icon}`"
                                    :href="link.url"
                                    :aria-label="socialLabel(link.icon)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="focus-ring flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/5 text-lg text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-chinese-bronze/50 hover:text-chinese-bronze"
                                >
                                    <font-awesome-icon :icon="['fab', link.icon]" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        class="hero-canvas-column hero-enter relative flex w-full flex-col items-center justify-center pointer-events-auto md:w-[52%] lg:w-[50%]"
                        style="animation-delay: 360ms"
                    >
                        <HeroDesktopCanvas
                            class="hero-canvas-panel relative z-[1] aspect-square w-full max-w-[22rem] min-h-[16rem] sm:max-w-[26rem] md:max-w-none md:min-h-[22rem] lg:min-h-[26rem]"
                        />
                        <p class="hero-role-caption absolute inset-x-0 bottom-[16%] z-[4] sm:bottom-[20%] md:bottom-[24%]">
                            <span class="sr-only">I am {{ heroRolesLabel }}</span>
                            <span class="hero-role" aria-hidden="true">
                                <span class="hero-role-sizer">I am {{ longestRole }}|</span>
                                <span class="hero-role-text">
                                    <span class="hero-role-prefix">I am</span>
                                    <span class="hero-role-value">{{ typedRole }}</span>
                                    <span
                                        class="hero-role-cursor"
                                        :class="{ 'animate-coding-cursor': !isReducedMotion }"
                                    >|</span>
                                </span>
                            </span>
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    class="focus-ring hero-enter group mx-auto mt-8 inline-flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-center transition-colors duration-300 hover:border-sky-cyan/35 hover:bg-white/[0.07] md:mt-6 cursor-pointer"
                    style="animation-delay: 620ms"
                    @click="scrollTo('#experience')"
                >
                    <span class="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-sky-cyan">Selected work</span>
                    <span class="text-sm text-text-secondary">{{ featuredWork }}</span>
                    <font-awesome-icon
                        class="text-xs text-text-muted transition-transform duration-300 group-hover:translate-y-0.5"
                        icon="fas fa-chevron-down"
                        aria-hidden="true"
                    />
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { onMounted, onBeforeUnmount, computed, ref, watch, defineAsyncComponent } from 'vue';
    import { constantsStore } from '@/store';
    import Button from '@/components/ui/Button.vue';
    import { useMagneticButton } from '@/composables/useMagneticButton';
    import { useMotion } from '@/composables/useMotion';
    import AmbientStarfield from '@/components/AmbientStarfield.vue';
    const HeroDesktopCanvas = defineAsyncComponent(() =>
        import('@/components/canvas/HeroDesktopCanvas.vue'),
    );

    const LEGACY_VALUE_PROPOSITION = 'With 5+ years across frontend, full-stack, and backend engineering, I turn complex workflows into reliable production software, from B2B, B2C and workforce platforms to APIs, CRM automation, and conversational AI.';

    const DEFAULT_HOME_PROFILE = {
        headlineLead: 'Turning complex operations into',
        headlineAccent: 'reliable software',
        supportLine: 'I design and build production systems for B2B/B2C workflows, APIs, and conversational AI.',
        proof: [
            '5+ years in production',
            'B2B/B2C and workforce platforms',
            'APIs, CRM, and conversational AI',
        ],
    };

    const normalizeText = (value, fallback) => {
        if (typeof value !== 'string' || value.trim().length === 0) {
            return fallback;
        }

        return value.trim();
    };

    const normalizeTextList = (value, fallback, limit) => {
        if (!Array.isArray(value)) {
            return fallback;
        }

        const items = value
            .filter((item) => typeof item === 'string' && item.trim().length > 0)
            .map((item) => item.trim())
            .slice(0, limit);

        return items.length > 0 ? items : fallback;
    };

    const resolveSupportLine = (homeSection) => {
        const explicit = normalizeText(homeSection.supportLine, '');
        if (explicit) {
            return explicit;
        }

        const stored = normalizeText(homeSection.valueProposition, '');
        if (!stored || stored === LEGACY_VALUE_PROPOSITION || stored.length > 180) {
            return DEFAULT_HOME_PROFILE.supportLine;
        }

        return stored;
    };

    const homeProfile = computed(() => {
        const homeSection = constantsStore.homeSection ?? {};

        return {
            headlineLead: normalizeText(homeSection.headlineLead, DEFAULT_HOME_PROFILE.headlineLead),
            headlineAccent: normalizeText(homeSection.headlineAccent, DEFAULT_HOME_PROFILE.headlineAccent),
            supportLine: resolveSupportLine(homeSection),
            proof: normalizeTextList(homeSection.proof, DEFAULT_HOME_PROFILE.proof, 3),
        };
    });

    const socialLinks = computed(() => constantsStore.socialLinks);
    const featuredWork = computed(() => {
        const names = [];
        const seen = new Set();

        for (const item of constantsStore.experiences ?? []) {
            const name = typeof item?.project?.name === 'string' ? item.project.name.trim() : '';
            if (!name || seen.has(name)) continue;
            seen.add(name);
            names.push(name);
        }

        return names.length > 0 ? names.join(' · ') : 'Production platforms and APIs';
    });

    const HERO_ROLES = [
        'Full Stack Software Engineer',
        'AI Systems Engineer',
        'Web Application Developer',
    ];

    const typedRole = ref('');
    const heroRolesLabel = HERO_ROLES.join(', ');
    const longestRole = HERO_ROLES.reduce((longest, role) => (
        role.length > longest.length ? role : longest
    ));
    let roleTimer = null;
    let roleCursor = 0;
    let characterIndex = 0;
    let deletingRole = false;

    const stopRoleTyping = () => {
        if (roleTimer) {
            clearTimeout(roleTimer);
            roleTimer = null;
        }
    };

    const animateRole = () => {
        const activeWord = HERO_ROLES[roleCursor];

        if (deletingRole) {
            typedRole.value = activeWord.slice(0, Math.max(0, characterIndex - 1));
            characterIndex = Math.max(0, characterIndex - 1);
        } else {
            typedRole.value = activeWord.slice(0, characterIndex + 1);
            characterIndex += 1;
        }

        if (!deletingRole && characterIndex >= activeWord.length) {
            deletingRole = true;
            roleTimer = setTimeout(animateRole, 1400);
            return;
        }

        if (deletingRole && characterIndex === 0) {
            deletingRole = false;
            roleCursor = (roleCursor + 1) % HERO_ROLES.length;
            roleTimer = setTimeout(animateRole, 280);
            return;
        }

        roleTimer = setTimeout(animateRole, deletingRole ? 42 : 78);
    };

    const startRoleTyping = () => {
        stopRoleTyping();
        if (isReducedMotion.value) {
            typedRole.value = HERO_ROLES[0];
            return;
        }

        typedRole.value = '';
        roleCursor = 0;
        characterIndex = 0;
        deletingRole = false;
        animateRole();
    };

    const magneticRef = ref(null);
    const magnetic = useMagneticButton(magneticRef);
    const { isReducedMotion } = useMotion();
    const starfieldFocus = ref({ x: 0.72, y: 0.38 });

    const socialLabel = (icon) => {
        if (icon === 'github') return 'GitHub profile';
        if (icon === 'linkedin') return 'LinkedIn profile';
        return `${icon} profile`;
    };

    const updateStarfieldFocus = () => {
        const isMobile = window.innerWidth < 768;
        starfieldFocus.value = isMobile
            ? { x: 0.5, y: 0.62 }
            : { x: 0.7, y: 0.42 };
    };

    const scrollTo = (selector) => {
        const target = document.querySelector(selector);
        if (target) {
            target.scrollIntoView({
                behavior: isReducedMotion.value ? 'auto' : 'smooth',
                block: 'start',
            });
        }
    };

    watch(isReducedMotion, () => {
        startRoleTyping();
    });

    onMounted(() => {
        updateStarfieldFocus();
        window.addEventListener('resize', updateStarfieldFocus, { passive: true });
        startRoleTyping();
    });

    onBeforeUnmount(() => {
        stopRoleTyping();
        window.removeEventListener('resize', updateStarfieldFocus);
    });
</script>

<style scoped>
    .hero-texture {
        background:
            linear-gradient(110deg, rgba(1, 35, 64, 0.96), rgba(1, 58, 99, 0.9)),
            radial-gradient(circle at 18% 24%, rgba(7, 178, 217, 0.1), transparent 42%),
            radial-gradient(circle at 78% 32%, rgba(217, 128, 50, 0.12), transparent 38%);
    }

    .hero-grid {
        background-image:
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        background-size: 32px 32px;
        mask-image: radial-gradient(circle at 68% 42%, rgba(0, 0, 0, 0.9), transparent 72%);
    }

    .hero-radial {
        background:
            radial-gradient(circle at 74% 40%, rgba(4, 138, 191, 0.38), transparent 42%),
            radial-gradient(circle at 70% 48%, rgba(217, 128, 50, 0.12), transparent 34%);
        filter: blur(12px);
    }

    .hero-vignette {
        background:
            linear-gradient(90deg, rgba(4, 10, 20, 0.62) 0%, rgba(4, 10, 20, 0.28) 42%, transparent 68%),
            linear-gradient(180deg, rgba(4, 10, 20, 0.18) 0%, transparent 22%, transparent 70%, rgba(4, 10, 20, 0.55) 100%);
    }

    .hero-role-caption {
        display: flex;
        justify-content: center;
        pointer-events: none;
        padding-inline: 0.5rem;
    }

    .hero-role {
        display: inline-grid;
        max-width: 100%;
        font-family: var(--font-body);
        font-size: clamp(1.35rem, 2.6vw, 2.15rem);
        font-weight: 500;
        line-height: 1.4;
        letter-spacing: 0;
        text-align: left;
    }

    .hero-role-sizer,
    .hero-role-text {
        grid-area: 1 / 1;
        white-space: nowrap;
    }

    .hero-role-sizer {
        visibility: hidden;
    }

    .hero-role-prefix,
    .hero-role-value,
    .hero-role-cursor {
        font-family: inherit;
        font-weight: inherit;
    }

    .hero-role-prefix {
        margin-right: 0.35em;
        color: var(--color-text-secondary);
    }

    .hero-role-value {
        color: var(--color-chinese-bronze);
    }

    .hero-role-cursor {
        margin-left: 0.08em;
        color: var(--color-sky-cyan);
    }

    .hero-proof-rule {
        width: 1.15rem;
        height: 1px;
        background: linear-gradient(90deg, #07b2d9, #d98032);
    }

    .hero-canvas-column {
        isolation: isolate;
    }

    .hero-name {
        background: linear-gradient(90deg, #07b2d9 0%, #d98032 55%, #f2b672 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    .hero-cta-primary {
        box-shadow: 0 0 0 1px rgba(217, 128, 50, 0.28), 0 0 26px rgba(217, 128, 50, 0.26);
    }

    .hero-cta-primary:hover {
        box-shadow: 0 0 0 1px rgba(217, 128, 50, 0.45), 0 0 34px rgba(217, 128, 50, 0.42);
    }

    .hero-cta-secondary {
        box-shadow: 0 0 0 1px rgba(4, 138, 191, 0.26), 0 0 24px rgba(4, 138, 191, 0.16);
    }

    .hero-cta-secondary:hover {
        box-shadow: 0 0 0 1px rgba(4, 138, 191, 0.44), 0 0 30px rgba(4, 138, 191, 0.28);
    }

    .hero-canvas-panel {
        filter: none;
    }

</style>
