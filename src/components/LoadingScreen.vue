<template>
    <div class="loader" role="status" aria-live="polite">
        <div class="loader-glow" aria-hidden="true" />
        <span
            v-for="star in stars"
            :key="star.id"
            class="loader-star"
            :style="{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
            }"
            aria-hidden="true"
        />

        <div class="loader-mark" aria-hidden="true">
            <span class="loader-ring loader-ring--bronze" />
            <span class="loader-ring loader-ring--cyan" />
            <span class="loader-orbit" />
            <div class="loader-logo-frame">
                <img
                    class="loader-logo"
                    :src="logoSrc"
                    alt=""
                    width="120"
                    height="120"
                />
            </div>
        </div>

        <p class="loader-wordmark">
            cm_gonzales <span class="loader-prompt">~/</span>
        </p>
        <p class="loader-status">Loading portfolio</p>
        <div class="loader-track" aria-hidden="true">
            <span class="loader-track-bar" />
        </div>
    </div>
</template>

<script setup>
    const logoSrc = `${import.meta.env.BASE_URL}assets/logo.svg`;

    const stars = [
        { id: 1, left: '14%', top: '18%', size: '2px', opacity: 0.7 },
        { id: 2, left: '28%', top: '74%', size: '2px', opacity: 0.4 },
        { id: 3, left: '78%', top: '22%', size: '2px', opacity: 0.55 },
        { id: 4, left: '86%', top: '68%', size: '1.5px', opacity: 0.35 },
        { id: 5, left: '8%', top: '48%', size: '1.5px', opacity: 0.3 },
        { id: 6, left: '64%', top: '12%', size: '1.5px', opacity: 0.45 },
        { id: 7, left: '48%', top: '84%', size: '2px', opacity: 0.35 },
        { id: 8, left: '92%', top: '40%', size: '1.5px', opacity: 0.25 },
    ];
</script>

<style scoped>
    .loader {
        position: fixed;
        inset: 0;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: #012340;
        color: #e8f1fb;
    }

    .loader-glow {
        position: absolute;
        width: min(34rem, 90vw);
        height: min(34rem, 90vw);
        border-radius: 999px;
        background:
            radial-gradient(circle, rgba(4, 138, 191, 0.28) 0%, rgba(4, 138, 191, 0.08) 38%, transparent 68%),
            radial-gradient(circle at 60% 62%, rgba(217, 128, 50, 0.16), transparent 46%);
        pointer-events: none;
    }

    .loader-star {
        position: absolute;
        border-radius: 999px;
        background: #e8f1fb;
        pointer-events: none;
    }

    .loader-mark {
        position: relative;
        display: grid;
        place-items: center;
        width: 12.5rem;
        height: 12.5rem;
    }

    .loader-ring,
    .loader-orbit,
    .loader-logo-frame {
        position: absolute;
        border-radius: 999px;
    }

    .loader-ring {
        border: 1px solid rgba(7, 178, 217, 0.45);
        opacity: 0.45;
    }

    .loader-ring--cyan {
        inset: 8%;
        animation: loader-pulse 2.4s ease-out infinite;
    }

    .loader-ring--bronze {
        inset: 0;
        border-color: rgba(217, 128, 50, 0.55);
        animation: loader-pulse 2.4s ease-out 1.2s infinite;
    }

    .loader-orbit {
        inset: 14%;
        background: conic-gradient(
            from 0deg,
            transparent 0 64%,
            rgba(7, 178, 217, 0.15) 76%,
            #07b2d9 90%,
            #d98032 100%
        );
        mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px));
        animation: loader-orbit 1.5s linear infinite;
    }

    .loader-logo-frame {
        inset: 2.5rem;
        display: grid;
        place-items: center;
        background: #012340;
        box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.16),
            0 0 28px rgba(7, 178, 217, 0.38),
            0 0 46px rgba(217, 128, 50, 0.16);
        animation: loader-logo 2.4s ease-in-out infinite;
    }

    .loader-logo {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 999px;
        object-fit: cover;
    }

    .loader-wordmark {
        position: relative;
        margin-top: 1.75rem;
        font-family: var(--font-mono);
        font-size: 0.95rem;
        letter-spacing: 0.01em;
        color: #07b2d9;
    }

    .loader-prompt {
        color: #d98032;
    }

    .loader-status {
        position: relative;
        margin-top: 0.55rem;
        font-family: var(--font-body);
        font-size: 0.875rem;
        letter-spacing: 0.04em;
        color: #8fa8c5;
    }

    .loader-track {
        position: relative;
        width: 9rem;
        height: 2px;
        margin-top: 1.15rem;
        overflow: hidden;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.1);
    }

    .loader-track-bar {
        display: block;
        width: 42%;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(90deg, #048abf, #07b2d9 62%, #d98032);
        animation: loader-sweep 1.35s ease-in-out infinite;
    }

    @keyframes loader-pulse {
        0% {
            transform: scale(0.86);
            opacity: 0.72;
        }

        80% {
            transform: scale(1.14);
            opacity: 0;
        }

        100% {
            transform: scale(1);
            opacity: 0.4;
        }
    }

    @keyframes loader-orbit {
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes loader-logo {
        0%,
        100% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.045);
        }
    }

    @keyframes loader-sweep {
        0% {
            transform: translateX(-20%);
        }

        100% {
            transform: translateX(190%);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .loader-ring,
        .loader-orbit,
        .loader-logo-frame,
        .loader-track-bar {
            animation: none;
        }
    }
</style>
