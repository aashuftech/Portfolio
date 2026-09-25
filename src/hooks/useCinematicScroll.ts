import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export function useCinematicScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect user accessibility preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const mm = gsap.matchMedia();

    // ============================================================
    // DESKTOP & TABLET EXPERIENCE (>= 768px)
    // Coordinated Scene Transitions: Current section stays sharp until
    // the next section is partially visible, then gradually recedes.
    // ============================================================
    mm.add('(min-width: 768px)', () => {
      const sections = gsap.utils.toArray<HTMLElement>('main > section');

      sections.forEach((section, index) => {
        const nextSection = sections[index + 1];

        // 1. INCOMING SECTION SCENE REVEAL (for section 1 onwards)
        if (index > 0) {
          gsap.fromTo(
            section,
            {
              clipPath: 'inset(8% 3% 8% 3% round 22px)',
              scale: 0.97,
              opacity: 0.7,
              willChange: 'clip-path, transform, opacity',
            },
            {
              clipPath: 'inset(0% 0% 0% 0% round 0px)',
              scale: 1,
              opacity: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 92%',
                end: 'top 38%',
                scrub: 0.5,
                invalidateOnRefresh: true,
              },
            }
          );
        }

        // 2. OUTGOING SECTION RECEDE EFFECT (Progressive Blur, Scale, and Dim)
        // Triggered ONLY when the next section has reached the mid-viewport and is partially revealed.
        if (nextSection) {
          gsap.fromTo(
            section,
            {
              scale: 1,
              opacity: 1,
              filter: 'blur(0px)',
              transformOrigin: '50% 100%',
              willChange: 'filter, transform, opacity',
            },
            {
              scale: 0.96,
              opacity: 0.76,
              filter: 'blur(3.5px)',
              transformOrigin: '50% 100%',
              ease: 'power1.inOut',
              scrollTrigger: {
                trigger: nextSection,
                start: 'top 55%',
                end: 'top 5%',
                scrub: 0.5,
                invalidateOnRefresh: true,
              },
            }
          );
        }

        // 3. SECTION HEADER LAYERED ENTRANCE
        const header = section.querySelector('[data-cinematic-header]');
        if (header) {
          const eyebrow = header.querySelector('[data-cinematic-eyebrow]');
          const title = header.querySelector('h2, h1');
          const desc = header.querySelector('p');

          const headerTl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          });

          if (eyebrow) {
            headerTl.fromTo(
              eyebrow,
              { x: -18, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.55, ease: 'power3.out' },
              0
            );
          }
          if (title) {
            headerTl.fromTo(
              title,
              { y: 22, opacity: 0, rotateX: 6 },
              { y: 0, opacity: 1, rotateX: 0, duration: 0.65, ease: 'power3.out' },
              0.05
            );
          }
          if (desc) {
            headerTl.fromTo(
              desc,
              { y: 15, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' },
              0.12
            );
          }
        }

        // 4. MULTIDIRECTIONAL CARDS STAGGERED ENTRANCE
        const cards = section.querySelectorAll<HTMLElement>('[data-cinematic-card]');
        if (cards && cards.length > 0) {
          cards.forEach((card, cardIdx) => {
            const isLeft = cardIdx % 3 === 0 && cards.length > 1;
            const isRight = cardIdx % 3 === 2 && cards.length > 2;
            const xOffset = isLeft ? -20 : isRight ? 20 : 0;
            const rotOffset = isLeft ? -0.7 : isRight ? 0.7 : 0;

            gsap.fromTo(
              card,
              {
                x: xOffset,
                y: 28,
                rotateZ: rotOffset,
                scale: 0.97,
                opacity: 0,
                willChange: 'transform, opacity',
              },
              {
                x: 0,
                y: 0,
                rotateZ: 0,
                scale: 1,
                opacity: 1,
                duration: 0.75,
                delay: (cardIdx % 3) * 0.09,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 88%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          });
        }
      });

      // 5. PARALLAX DEPTH ON IMAGES & MEDIA
      const parallaxImages = gsap.utils.toArray<HTMLElement>('[data-parallax-image]');
      parallaxImages.forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -4, scale: 1.05 },
          {
            yPercent: 4,
            scale: 1.05,
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.7,
            },
          }
        );
      });

      // 6. HERO PROFILE PARALLAX
      const heroProfile = document.querySelector('[data-parallax-hero]');
      if (heroProfile) {
        gsap.to(heroProfile, {
          y: -32,
          ease: 'none',
          scrollTrigger: {
            trigger: '#home',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        });
      }

      // 7. AMBIENT BACKGROUND GLOW PARALLAX
      const ambientGlows = gsap.utils.toArray<HTMLElement>('[data-ambient-glow]');
      ambientGlows.forEach((glow, i) => {
        gsap.to(glow, {
          y: i === 0 ? 80 : -60,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
          },
        });
      });
    });

    // ============================================================
    // MOBILE EXPERIENCE (< 768px)
    // Lightweight, 60fps GPU-Optimized Reveal (No Expensive Blurs)
    // ============================================================
    mm.add('(max-width: 767px)', () => {
      const sections = gsap.utils.toArray<HTMLElement>('main > section');

      sections.forEach((section, index) => {
        const nextSection = sections[index + 1];

        // 1. Incoming reveal
        if (index > 0) {
          gsap.fromTo(
            section,
            {
              clipPath: 'inset(4% 2% 4% 2% round 14px)',
              opacity: 0.8,
              scale: 0.98,
            },
            {
              clipPath: 'inset(0% 0% 0% 0% round 0px)',
              opacity: 1,
              scale: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 92%',
                end: 'top 50%',
                scrub: 0.4,
              },
            }
          );
        }

        // 2. Outgoing subtle fade on mobile (tied to nextSection entering mid-viewport)
        if (nextSection) {
          gsap.fromTo(
            section,
            {
              opacity: 1,
              scale: 1,
            },
            {
              opacity: 0.82,
              scale: 0.98,
              ease: 'power1.inOut',
              scrollTrigger: {
                trigger: nextSection,
                start: 'top 55%',
                end: 'top 10%',
                scrub: 0.4,
              },
            }
          );
        }

        // 3. Cards entrance on mobile
        const cards = section.querySelectorAll<HTMLElement>('[data-cinematic-card]');
        if (cards && cards.length > 0) {
          cards.forEach((card, cardIdx) => {
            gsap.fromTo(
              card,
              { y: 18, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.55,
                delay: cardIdx * 0.05,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 90%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          });
        }
      });
    });

    // Refresh ScrollTrigger after initial render
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      mm.revert();
    };
  }, []);
}
