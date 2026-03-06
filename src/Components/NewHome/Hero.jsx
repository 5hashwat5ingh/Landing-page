"use client";

import { useEffect, useRef, useState } from "react";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "react-use";
import { motion } from "framer-motion";

import { useStore } from "../../store";
import { FaWhatsapp } from "react-icons/fa";
import Gallery from "./Gallery";
import Marchandise from "../homepage/merchandise/Merchandise";
import Hero2Section from "../homepage/hero2";
import Slider from "../homepage/slider/Slider";
import CombinedFest from "./CombinedFest";
gsap.registerPlugin(ScrollTrigger);

// ── Framer Motion variants (shared across local components) ─────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
// ────────────────────────────────────────────────────────────────────────────


const Logo = () => (
  <div
    className="scene-content flex items-center justify-center w-full max-w-4xl mx-auto"
    style={{ willChange: "transform, opacity" }}
  >
    <img
      src="/Abhyudaya-combined.png"
      alt="Abhyudaya  Logo"
      className="w-full h-auto drop-shadow-[0_0_30px_rgba(135,206,235,0.6)]"
    />
  </div>
);
const GrainOverlay = () => (
    <div 
        className="fixed top-0 left-0 h-screen w-screen pointer-events-none z-10"
        style={{
            backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=)',
            opacity: 0.07,
            animation: 'grain 8s steps(10) infinite',
        }}
    />
  );
/*
  const ThemeInfo = () => (
	<div className="scene-content mx-5 my-4 p-8 max-w-3xl bg-black/50 backdrop-blur-lg border border-yellow-400/30 rounded-xl shadow-2xl ">
		<h2 className="text-2xl md:text-6xl text-center font-bold text-[#FF8888] mb-4">
			Abhyudaya: Enchanted Escapade
		</h2>

		<p className=" text-center text-gray-200">
			Where the veil between reality and wonder grows thin, Abhyudaya unfolds—
			a gateway to realms forgotten and dreams awakened.
			<br />
			<br />
			Within this enchanted world, ancient spirits, wandering stars, and 
			whispers of forgotten magic intertwine. Here, every moment is a
			journey—every heartbeat, an adventure waiting to be discovered.
			<br />
			<br />
			Performers become storytellers of the arcane; dancers trace spells
			in the air; musicians summon worlds with their melodies. Art no longer
			remains an expression—it becomes a portal.
			<br />
			<br />
			As dusk descends, the realm deepens. Mystical paths open, guiding all who
			enter into an escapade of wonder, courage, and creation. Legends are not
			read—they are lived.
			<br />
			<br />
			This year, Abhyudaya does not merely arrive—it *enchants*. And the
			Escapade begins for those brave enough to step beyond the ordinary.
		</p>
	</div>
);
*/
const ContactSection = () => (
	<div className="scene-content w-full overflow-hidden flex flex-col items-center justify-start py-12 md:py-20">
		<div className="absolute mt-[5%] w-full" />

		<div className="w-11/12 max-w-5xl mx-auto backdrop-blur-md bg-black/30 p-6 md:p-10 rounded-2xl shadow-deep border border-white/5 transition-all duration-300 hover:shadow-deep-lg mt-[4%]">
			{/* Inner motion container - GSAP animates the outer scene-content */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.3 }}
			>
				<motion.h2
					variants={itemVariants}
					className="text-2xl md:text-6xl font-bold text-[#FF8888] text-center drop-shadow-lg mb-2"
				>
					Join the Community
				</motion.h2>

				<div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center">
					<div className="flex-1 text-white">
						<motion.h2
							variants={itemVariants}
							className="text-l text-center md:text-2xl font-bold mb-2"
						>
							Welcome to Abhyudaya – MMMUT's Cultural Fest!
						</motion.h2>

						<motion.p
							variants={itemVariants}
							className="text-md md:text-xl text-center leading-relaxed text-gray-200"
						>
							Step into{" "}
							<span style={{ fontFamily: "'TimBurton', serif", color: "#000", textShadow: "0 1px 6px rgba(255,255,255,0.4)" }}>
								An Enchanted Escapade
							</span>
							, the magical journey of Abhyudaya—where
							art, imagination, and creativity come alive. Stay tuned for updates,
							event announcements, and exclusive behind-the-scenes moments from our
							grand cultural celebration.
							<br />
							<br />
							Join the adventure, embrace the magic, and be part of the vibrant
							energy that defines campus life.
							<strong className="block mt-2">Your escapade begins here!</strong>
						</motion.p>

						<motion.div
							variants={itemVariants}
							className="mt-[10%] flex justify-center md:justify-center"
						>
							<a href="https://whatsapp.com/channel/0029VaGSSJQGJP8AijZRD62j">
								<button className="flex items-center gap-2 border border-pink-400 text-pink-400 font-bold px-6 py-2 rounded-2xl hover:bg-pink-400 hover:text-black transition-all duration-300 cursor-pointer">
									<FaWhatsapp className="text-xl" />
									Join WhatsApp Channel
								</button>
							</a>
						</motion.div>
					</div>

					<motion.div
						variants={itemVariants}
						className="flex-1 w-full md:w-full relative p-6 backdrop-blur-xl rounded-2xl"
					>
						<div className="aspect-video w-full rounded-xl overflow-hidden">
							<img
								src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
								alt="A magical moment from Abhyudaya's cultural performances"
								className="w-full h-full object-cover transition-[transform,filter] duration-500 hover:scale-[1.03] hover:brightness-110 hover:contrast-110"
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	</div>
);

const WizardInfo = ({ name, description, type }) => (
	<div
		className={`scene-content mx-2 mt-16 p-4 max-w-3xl bg-black/50 backdrop-blur-[2px] border shadow-2xl rounded-xl ${
      type === "light" ? "border-yellow-400/30" : "border-purple-400/30"
    } `}
	>
		<h2
			className={`text-2xl md:text-6xl text-center font-bold  ${
				type === "light" ? "text-[#FF8888]" : "text-purple-400"
			} mb-4`}
		>
			{name}
		</h2>
		<p className=" text-center text-gray-200">{description}</p>
	</div>
);

const sceneConfigs = {
  treetogate: {
    frameCount: 192,
    path: (frame) => `/Frame/1st/frame${frame}.webp`,
  },
  gatetoforest: {
    frameCount: 192,
    path: (frame) => `/Frame/2nd/frame${frame}.webp`,
  },
  ForestToworld: {
    frameCount: 96,
    path: (frame) => `/Frame/3rd/frame${frame}.webp`,
  },
  Last: {
    frameCount: 84,
    path: (frame) => `/Frame/4th/frame${frame}.webp`,
  },
};

export function Hero() {
  const mainRef = useRef(null);
  const wrapperRef = useRef(null);

  const canvasRefs = {
    treetogate: useRef(null),
    gatetoforest: useRef(null),
    ForestToworld: useRef(null),
    Last: useRef(null),
  };

  const { width } = useWindowSize();
  const { imagesLoaded, setImagesLoaded } = useStore();
  const [isMobile, setIsMobile] = useState(width < 768);

  const imageSequences = useRef({
    treetogate: [],
    gatetoforest: [],
    ForestToworld: [],
    Last: [],
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setImagesLoaded(true);
      return;
    }

    const loadImages = async () => {
      const promises = Object.keys(sceneConfigs).flatMap((key) => {
        const config = sceneConfigs[key];
        const sequencePromises = [];
        for (let i = 1; i <= config.frameCount; i++) {
          sequencePromises.push(
            new Promise((resolve) => {
              const img = new window.Image();
              img.src = config.path(i);
              img.onload = () => resolve(img);
              img.onerror = () => resolve(img);
            })
          );
        }
        return sequencePromises;
      });
      const loadedImages = await Promise.all(promises);
      let offset = 0;
      Object.keys(sceneConfigs).forEach((key) => {
        const config = sceneConfigs[key];
        imageSequences.current[key] = loadedImages.slice(
          offset,
          offset + config.frameCount
        );
        offset += config.frameCount;
      });
      setImagesLoaded(true);
    };
    loadImages();
  }, [isMobile, setImagesLoaded]);

  useEffect(() => {
    if ((isMobile && mainRef.current) || (!isMobile && imagesLoaded)) {
      const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      const update = (time) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);

      const ctx = gsap.context(() => {
        if (isMobile) {
          const scenes = gsap.utils.toArray(".scene");
          scenes.forEach((scene) => {
            gsap.from(scene.querySelector(".scene-content"), {
              autoAlpha: 0,
              y: 50,
              scrollTrigger: {
                trigger: scene,
                start: "top 85%",
                end: "top 60%",
                scrub: 1,
              },
            });
          });
        } else {
          const setupCanvas = (canvas) => {
            if (!canvas) return null;
            const context = canvas.getContext("2d");
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            context?.scale(dpr, dpr);
            return context;
          };
          const contexts = {
            treetogate: setupCanvas(canvasRefs.treetogate.current),
            gatetoforest: setupCanvas(canvasRefs.gatetoforest.current),
            ForestToworld: setupCanvas(canvasRefs.ForestToworld.current),
            Last: setupCanvas(canvasRefs.Last.current),
          };
          const renderFrame = (context, image) => {
            if (!image || !context) return;
            const dpr = window.devicePixelRatio || 1;
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            const canvasAspect = context.canvas.width / context.canvas.height;
            const imageAspect = image.width / image.height;
            let drawWidth, drawHeight, offsetX, offsetY;
            if (canvasAspect > imageAspect) {
              drawWidth = context.canvas.width / dpr;
              drawHeight = drawWidth / imageAspect;
              offsetX = 0;
              offsetY = (context.canvas.height / dpr - drawHeight) / 2;
            } else {
              drawHeight = context.canvas.height / dpr;
              drawWidth = drawHeight * imageAspect;
              offsetY = 0;
              offsetX = (context.canvas.width / dpr - drawWidth) / 2;
            }
            context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
          };
          Object.keys(canvasRefs).forEach((key) => {
            renderFrame(contexts[key], imageSequences.current[key][0]);
          });
          const scenes = gsap.utils.toArray(".scene");
          gsap.set(wrapperRef.current, { height: `${scenes.length * 100}vh` });
          const ease = gsap.parseEase("power1.inOut");

          const handleResize = () => {
            console.log("HI");
            Object.values(contexts).forEach((context) => {
              if (context && context.canvas) {
                const dpr = window.devicePixelRatio || 1;
                context.canvas.width = window.innerWidth * dpr;
                context.canvas.height = window.innerHeight * dpr;
                context.canvas.style.width = `${window.innerWidth}px`;
                context.canvas.style.height = `${window.innerHeight}px`;
                context.scale(dpr, dpr);
              }
            });
            ScrollTrigger.refresh(true);
          };
          window.addEventListener("resize", handleResize);

          ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: mainRef.current,
            onUpdate: (self) => {
              const progress = self.progress;
              const sceneLength = 1 / scenes.length;
              const activeSceneIndex = Math.min(
                scenes.length - 1,
                Math.floor(progress / sceneLength)
              );

              scenes.forEach((scene, index) => {
                const sceneStartProgress = index * sceneLength;
                const localProgress =
                  (progress - sceneStartProgress) / sceneLength;
                const isActive = index === activeSceneIndex;

                gsap.set(scene, { autoAlpha: isActive ? 1 : 0 });

                const content = scene.querySelector(".scene-content");
                if (content) {
                  let from = { autoAlpha: 0, y: 50, x: 0 };
                  if (scene.classList.contains("scene-3"))
                    from = { autoAlpha: 0, x: -100, y: 50 };
                  if (scene.classList.contains("scene-5"))
                    from = { autoAlpha: 0, x: 100, y: 50 };

                  const fadeInEnd = 0.5;
                  const fadeOutStart = 0.5;

                  if (isActive) {
                    if (index === scenes.length - 1) {
                      // Last scene: fade in → hold → fade out (background stays)
                      const FADE_IN_END  = 0.4;
                      const FADE_OUT_START = 0.65;
                      if (localProgress < FADE_IN_END) {
                        const p = localProgress / FADE_IN_END;
                        gsap.set(content, {
                          autoAlpha: p,
                          y: from.y ? from.y * (1 - p) : 0,
                          x: from.x ? from.x * (1 - p) : 0,
                        });
                      } else if (localProgress > FADE_OUT_START) {
                        const p = (localProgress - FADE_OUT_START) / (1 - FADE_OUT_START);
                        gsap.set(content, { autoAlpha: 1 - p, y: -40 * p, x: 0 });
                      } else {
                        gsap.set(content, { autoAlpha: 1, y: 0, x: 0 });
                      }
                    } else if (localProgress < fadeInEnd) {
                      const p = localProgress / fadeInEnd;
                      gsap.set(content, {
                        autoAlpha: p,
                        y: from.y ? from.y * (1 - p) : 0,
                        x: from.x ? from.x * (1 - p) : 0,
                      });
                    } else if (localProgress > fadeOutStart) {
                      const p =
                        (localProgress - fadeOutStart) / (1 - fadeOutStart);
                      gsap.set(content, { autoAlpha: 1 - p, y: -50 * p, x: 0 });
                    } else {
                      gsap.set(content, { autoAlpha: 1, y: 0, x: 0 });
                    }
                  }
                }
              });

              if (activeSceneIndex === 0) {
                const logoContent = scenes[0].querySelector(".scene-content");
                const localProgress = progress / sceneLength;
                gsap.set(logoContent, {
                  autoAlpha: 1 - localProgress,
                  z: -1000 * localProgress,
                });
              }
 
              const updateSequence = (sceneIndex, configKey) => {
                const startProgress = sceneLength * (sceneIndex - 1);
                if (
                  progress >= startProgress &&
                  progress < startProgress + sceneLength
                ) {
                  const localProgress =
                    (progress - startProgress) / sceneLength;
                  const easedProgress = ease(localProgress);
                  const frameIndex = Math.floor(
                    easedProgress * (sceneConfigs[configKey].frameCount - 1)
                  );
                  if (imageSequences.current[configKey]?.[frameIndex]) {
                    renderFrame(
                      contexts[configKey],
                      imageSequences.current[configKey][frameIndex]
                    );
                  }
                }
              };

              updateSequence(2, "treetogate");
              updateSequence(3, "gatetoforest");
              updateSequence(4, "ForestToworld");
            },
          });

          setTimeout(() => ScrollTrigger.refresh(), 100);
          return () => window.removeEventListener("resize", handleResize);
        }
      }, mainRef);
      return () => {
        gsap.ticker.remove(update);
        lenis.destroy();
        ctx.revert();
      };
    }
  }, [canvasRefs, imagesLoaded, isMobile]);

  if (isMobile) {
    return (
      <div className="bg-black text-white antialiased">
        <div ref={mainRef}>
          <section className="scene scene-1 min-h-screen flex items-center justify-center relative">
            <img
              src="/FirstA.png"
              alt="Daytime"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="z-10">{/*<Logo />*/}</div>
          </section>

          <section className="scene scene-2 min-h-screen flex items-center justify-center relative">
            <img
              src="/second.png"
              alt="Cave"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="z-10">{/*<ThemeInfoMob />*/}</div>
          </section>

          <section className="gradient-section  flex items-center justify-center relative">
            <div className="absolute inset-0 bg-[#030919]"></div>
          </section>

          <section className="scene scene-4 min-h-screen flex items-center justify-center bg-[#030919] relative">
            <div className="z-10">{/*<AftermoviesMob />*/}</div>
          </section>

          <section className="scene scene-6 min-h-screen flex items-center justify-center bg-[#030919] relative">
            <div className="z-10">
              <h1 className="text-5xl md:text-6xl font-karantina text-white tracking-[3px] pt-8 text-center drop-shadow-[0_4px_20px_rgba(252,155,155,1)]">
                GALLERY
              </h1>
              {/*<Gallery />*/}
            </div>
          </section>

          <section className="scene scene-8 min-h-screen flex items-center justify-center bg-[#030919] relative">
            <div className="z-10">{/*<Contact />*/}</div>
          </section>
          <section className="w-screen flex items-center justify-center bg-black relative">
            <div className="z-10">{/*<Footer />*/}</div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white antialiased text-center">
      <div ref={wrapperRef} className="relative">
        {/*<AntLogo />*/}
        <div
          ref={mainRef}
          className={`h-screen w-screen fixed top-0 left-0 ${
            imagesLoaded ? "visible" : "invisible"
          }`}
          style={{ perspective: "1000px" }}
        >
          <GrainOverlay />
          <section className="scene scene-1 absolute inset-0">
            <img
              src="/FirstA.webp"
              alt="Daytime"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center align-center justify-center">
							<Logo />
						</div>
          </section>
          {/*SECOND CANVAS*/}
          <section className="scene scene-2 absolute inset-0 opacity-0">
            <canvas ref={canvasRefs.treetogate} />
            <div className="absolute inset-0 flex items-center justify-center">
							<Hero2Section /> 
						</div>
          </section>
          <section className="scene scene-3 absolute inset-0 opacity-0">
            <canvas ref={canvasRefs.gatetoforest} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Slider />
            </div>
          </section>

          <section className="scene scene-5 absolute inset-0 opacity-0">
            <canvas ref={canvasRefs.ForestToworld} />
            <div className="absolute inset-0 flex items-center justify-center">
              <CombinedFest />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
