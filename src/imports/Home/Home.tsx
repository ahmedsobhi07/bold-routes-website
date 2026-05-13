import { useEffect, useState } from "react";
import svgPaths from "./svg-hn6nswr881";
import imgFreeTransparentIPhoneAirMockupMockuuupsStudio from "./705950eb79a80e88e105e9529ddcbcbfdf7175cf.png";
import imgFrame1321317214 from "./7e2c62845d99af3b5cc593bec4fcfdc3fca3c0a7.png";
import imgFrame1321317221 from "./e25c4d703775fce49e16014d94c9892de32d90f8.png";
import imgFrame1321317219 from "./6963f1d8b0debc073194a9b1f1096c3b32ec0670.png";
import imgFrame1321317220 from "./964abc934c2eb57602d48fb0fe9a52e022725a25.png";
import imgFrame1321317218 from "./ed2806f4d316d21470f7d886c4f22a92e7c61e4b.png";
import imgImage12 from "./49518c0d60efd3f74617e2303587290511b3f12f.png";
import imgImage22 from "./b5b1c83db6465a8aae4c5db7a966fc93d240681d.png";
import imgImage23 from "./ba4ec764bd8ea1a3d5df445cff2b7ebb1e75a045.png";
import imgFrame1321317096 from "./66528e5c11f35d16b44fe91e9901a9015b5cd0af.png";
import imgFrame1321317097 from "./19866cc40f3dfc469498c9c834cddfa52e73dc67.png";
import imgFrame1321317098 from "./93d381d74c1733b73a3c3004cfb18be69e949e3d.png";
import imgImage36 from "./21ba88f16a096b3453670ed05485a41148254b2b.png";
import imgImage35 from "./6547313f2c94c3763940e2c988e65b85f581de12.png";
import imgImage3 from "./32500421c9ac39f5856c8e797187be7840ef7f2e.png";
import imgImage37 from "./ea1da9aad90e928392834075080b3816400de189.png";
import imgImage11 from "./d0c6993bc587b46345cedc8b512ebee7108a8d44.png";
import imgImage24 from "./1cd40d3845ea719ef237ea09286b3bf5722c3c3c.png";
import { imgGroup } from "./svg-zwadl";

const searchPlaceholderPhrases = [
  "Search for New Cairo...",
  "Search for villas...",
  "Search for compounds...",
  "Search for developers...",
  "Search for apartments under 8M...",
];

function useTypingPlaceholder(phrases: string[]) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const isPhraseComplete = characterCount === currentPhrase.length;
    const isPhraseDeleted = characterCount === 0;
    const delay = isDeleting ? 42 : isPhraseComplete ? 1300 : 72;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && isPhraseComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isPhraseDeleted) {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
        return;
      }

      setCharacterCount((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [characterCount, isDeleting, phraseIndex, phrases]);

  return phrases[phraseIndex].slice(0, characterCount);
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[48px] text-black text-center whitespace-nowrap">
        <p className="leading-[48px]">Download our App</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7a7c7d] text-[16px] w-[472px]">
        <p className="leading-[24px]">Get instant access to new listings and exclusive deals. Download now for the best mobile experience.</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[21.8%_76.86%_23.76%_8.33%]" data-name="<Group>">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7166 21.776">
        <g id="<Group>">
          <path d={svgPaths.p1ba7a100} fill="var(--fill-0, white)" id="<Path>" />
          <path d={svgPaths.p26de8970} fill="var(--fill-0, white)" id="<Path>_2" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[21.8%_76.86%_23.76%_8.33%]" data-name="<Group>">
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[44.68%_8.5%_16.27%_28.77%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.0606 15.6202">
        <g id="Group">
          <path d={svgPaths.p19eaa100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p17b2f400} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p8e45d00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p10598288} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p281afc80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p20018000} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p26bfc900} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p126a78c0} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[21.8%_8.5%_16.27%_8.33%]" data-name="<Group>">
      <Group3 />
      <Group5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.664 40.0001">
        <g id="Group">
          <path d={svgPaths.p13e9cc00} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          <path d={svgPaths.p8f27200} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
      <Group2 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[21.09%_12.41%_63.01%_29.81%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.144 6.35832">
        <g id="Group">
          <path d={svgPaths.p7e7480} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2d170b00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1bb4ba00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p20f99500} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p145c3000} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p2d74a880} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p1203b600} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p199d400} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p3667ab00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p2467c500} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p3d549100} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p17bd4200} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p1f827c80} fill="var(--fill-0, white)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[21.09%_12.41%_63.01%_29.81%]" data-name="<Group>">
      <Group7 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group1 />
      <Group6 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <div className="h-[40px] overflow-clip relative shrink-0 w-[135px]" data-name="Badges">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 40">
          <path clipRule="evenodd" d={svgPaths.p33cb9a00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </svg>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 40">
          <path clipRule="evenodd" d={svgPaths.p3a71fdf0} fill="var(--fill-0, #A6A6A6)" fillRule="evenodd" id="Vector" />
        </svg>
        <div className="absolute inset-[16.91%_40.77%_66.92%_30.43%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8745 6.46633">
            <path d={svgPaths.p211f3a00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[42.58%_7.19%_14.83%_30.29%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.3981 17.0349">
            <path clipRule="evenodd" d={svgPaths.p1acbed00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[18.67%_83.1%_18.69%_7.36%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8796 25.0574">
            <path clipRule="evenodd" d={svgPaths.p3f59b300} fill="url(#paint0_linear_1_27302)" fillRule="evenodd" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_27302" x1="11.7729" x2="-8.00151" y1="1.24024" y2="6.48754">
                <stop stopColor="#00A0FF" />
                <stop offset="0.00657" stopColor="#00A1FF" />
                <stop offset="0.2601" stopColor="#00BEFF" />
                <stop offset="0.5122" stopColor="#00D2FF" />
                <stop offset="0.7604" stopColor="#00DFFF" />
                <stop offset="1" stopColor="#00E3FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[39.31%_75.61%_39.31%_16.89%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1174 8.55362">
            <path clipRule="evenodd" d={svgPaths.p2b226080} fill="url(#paint0_linear_1_27453)" fillRule="evenodd" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_27453" x1="10.8894" x2="-13.2084" y1="4.27684" y2="4.27684">
                <stop stopColor="#FFE000" />
                <stop offset="0.4087" stopColor="#FFBD00" />
                <stop offset="0.7754" stopColor="#FFA500" />
                <stop offset="1" stopColor="#FF9C00" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-[17.84%] left-[7.7%] right-[79.99%] top-1/2" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6198 12.8634">
            <path clipRule="evenodd" d={svgPaths.p317d6a00} fill="url(#paint0_linear_1_27388)" fillRule="evenodd" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_27388" x1="14.3335" x2="-1.62927" y1="2.29734" y2="29.0538">
                <stop stopColor="#FF3A44" />
                <stop offset="1" stopColor="#C31162" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-1/2 left-[7.7%] right-[79.99%] top-[17.86%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6198 12.8558">
            <path clipRule="evenodd" d={svgPaths.p3a036200} fill="url(#paint0_linear_1_27492)" fillRule="evenodd" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_27492" x1="-3.12628" x2="3.99538" y1="-6.96536" y2="4.98453">
                <stop stopColor="#32A071" />
                <stop offset="0.0685" stopColor="#2DA771" />
                <stop offset="0.4762" stopColor="#15CF74" />
                <stop offset="0.8009" stopColor="#06E775" />
                <stop offset="1" stopColor="#00F076" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[60.33%_79.98%_17.85%_7.7%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6199 8.72697">
            <path clipRule="evenodd" d={svgPaths.p3c0d6b70} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" opacity="0.2" />
          </svg>
        </div>
        <div className="absolute bottom-[39.45%] left-[19.93%] right-[75.62%] top-1/2" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99773 4.22194">
            <path clipRule="evenodd" d={svgPaths.p224cfbf0} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" opacity="0.12" />
          </svg>
        </div>
        <div className="absolute bottom-1/2 left-[7.36%] right-[75.62%] top-[17.85%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9826 12.8602">
            <path clipRule="evenodd" d={svgPaths.p482d9f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" opacity="0.25" />
          </svg>
        </div>
      </div>
      <div className="h-[40px] overflow-clip relative shrink-0 w-[119.664px]" data-name="Badges">
        <Group />
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative">
      <Frame112 />
      <Frame111 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[16px] h-[332px] items-start overflow-clip px-[60px] py-[61px] relative rounded-[16px] shrink-0 w-full">
      <Frame113 />
      <div className="absolute h-[454px] left-[874px] top-[44px] w-[220px]" data-name="Free Transparent iPhone Air Mockup (Mockuuups Studio)">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFreeTransparentIPhoneAirMockupMockuuupsStudio} />
      </div>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center relative shrink-0 text-[32px] text-black">
        <p className="leading-[48px]">Locations</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#a6a7a9] text-[20px]">
        <p className="leading-[28px]">Explore Popular Locations</p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex items-end justify-between leading-[0] not-italic relative shrink-0 text-center w-full whitespace-nowrap">
      <Frame143 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#212427] text-[0px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] text-[16px] underline">View All</p>
      </div>
    </div>
  );
}

function Frame75({ isActive, width }: { isActive: boolean; width: number }) {
  return (
    <div className="content-stretch flex flex-col h-[338px] items-start justify-end overflow-hidden px-[19px] py-[32px] relative rounded-[12px] shrink-0 transition-all duration-500 ease-out" style={{ width }}>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgFrame1321317214} />
        <div className="absolute bg-gradient-to-t from-black inset-0 rounded-[12px] to-[42.029%] to-[rgba(102,102,102,0)]" />
      </div>
      <div className={`flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white transition-opacity duration-300 whitespace-nowrap ${isActive ? "opacity-100" : "opacity-0"}`}>
        <p className="leading-[48px]">New Cairo</p>
      </div>
    </div>
  );
}

function Frame81({ isActive, width }: { isActive: boolean; width: number }) {
  return (
    <div className="content-stretch flex flex-col h-[338px] items-start justify-end overflow-hidden px-[19px] py-[32px] relative rounded-[12px] shrink-0 transition-all duration-500 ease-out" style={{ width }}>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgFrame1321317221} />
        <div className="absolute bg-gradient-to-t from-black inset-0 rounded-[12px] to-[rgba(102,102,102,0)]" />
      </div>
      <div className={`flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white transition-opacity duration-300 whitespace-nowrap ${isActive ? "opacity-100" : "opacity-0"}`}>
        <p className="leading-[48px]">Madrid</p>
      </div>
    </div>
  );
}

function Frame79({ isActive, width }: { isActive: boolean; width: number }) {
  return (
    <div className="content-stretch flex flex-col h-[338px] items-start justify-end overflow-hidden px-[19px] py-[32px] relative rounded-[12px] shrink-0 transition-all duration-500 ease-out" style={{ width }}>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgFrame1321317219} />
        <div className="absolute inset-0 rounded-[12px]" style={{ backgroundImage: "linear-gradient(2.84217e-14deg, rgb(0, 0, 0) 0%, rgba(102, 102, 102, 0) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>
      <div className={`flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white transition-opacity duration-300 whitespace-nowrap ${isActive ? "opacity-100" : "opacity-0"}`}>
        <p className="leading-[48px]">Paris</p>
      </div>
    </div>
  );
}

function Frame80({ isActive, width }: { isActive: boolean; width: number }) {
  return (
    <div className="content-stretch flex flex-col h-[338px] items-start justify-end overflow-hidden px-[19px] py-[32px] relative rounded-[12px] shrink-0 transition-all duration-500 ease-out" style={{ width }}>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgFrame1321317220} />
        <div className="absolute inset-0 rounded-[12px]" style={{ backgroundImage: "linear-gradient(4.26326e-14deg, rgb(0, 0, 0) 0%, rgba(102, 102, 102, 0) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>
      <div className={`flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white transition-opacity duration-300 whitespace-nowrap ${isActive ? "opacity-100" : "opacity-0"}`}>
        <p className="leading-[48px]">Rome</p>
      </div>
    </div>
  );
}

function Frame78({ isActive, width }: { isActive: boolean; width: number }) {
  return (
    <div className="h-[338px] overflow-hidden relative rounded-[12px] shrink-0 transition-all duration-500 ease-out" style={{ width }}>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgFrame1321317218} />
        <div className="absolute inset-0 rounded-[12px]" style={{ backgroundImage: "linear-gradient(8.52651e-14deg, rgb(0, 0, 0) 0%, rgba(102, 102, 102, 0) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>
      <div className="flex flex-col justify-end size-full">
        <div className="relative size-full" />
      </div>
      <div className={`absolute bottom-[32px] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[19px] not-italic text-[32px] text-white transition-opacity duration-300 whitespace-nowrap ${isActive ? "opacity-100" : "opacity-0"}`}>
        <p className="leading-[48px]">London</p>
      </div>
    </div>
  );
}

function Frame101({ activeIndex }: { activeIndex: number }) {
  const expandedWidth = 428;
  const collapsedWidth = 173;
  const getWidth = (index: number) => (activeIndex === index ? expandedWidth : collapsedWidth);

  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-hidden relative shrink-0 w-full">
      <Frame75 isActive={activeIndex === 0} width={getWidth(0)} />
      <Frame81 isActive={activeIndex === 1} width={getWidth(1)} />
      <Frame79 isActive={activeIndex === 2} width={getWidth(2)} />
      <Frame80 isActive={activeIndex === 3} width={getWidth(3)} />
      <Frame78 isActive={activeIndex === 4} width={getWidth(4)} />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="absolute inset-[8.34%_8.34%_8.33%_8.33%]" data-name="arrow-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.332 33.332">
        <g id="arrow-left">
          <path d={svgPaths.p1e56fb80} id="Vector" stroke="var(--stroke-0, #212427)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.08325" />
          <path d="M28.4711 16.666H5.09703" id="Vector_2" stroke="var(--stroke-0, #212427)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.08325" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearArrowLeft() {
  return (
    <div className="absolute contents inset-[8.34%_8.33%_8.33%_8.34%]" data-name="vuesax/linear/arrow-left">
      <ArrowLeft />
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="absolute inset-[8.33%_8.45%_8.34%_9.33%]" data-name="arrow-right">
      <div className="absolute inset-[0_0_0_-1.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.7076 33.332">
          <g id="arrow-right">
            <path d={svgPaths.p20d91460} id="Vector" stroke="var(--stroke-0, #212427)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.08325" />
            <path d={svgPaths.p1f5e5600} id="Vector_2" stroke="var(--stroke-0, #212427)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.08325" />
            <g id="Vector_3" opacity="0" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function VuesaxLinearArrowRight() {
  return (
    <div className="absolute contents inset-[8.33%_8.45%_8.34%_9.33%]" data-name="vuesax/linear/arrow-right">
      <ArrowRight1 />
    </div>
  );
}

function ArrowRight({ onClick }: { onClick: () => void }) {
  return (
    <button className="block cursor-pointer h-[40px] relative shrink-0 w-[75px] transition-transform duration-200 hover:translate-x-1 active:translate-x-0" data-name="arrow-right" onClick={onClick} type="button">
      <VuesaxLinearArrowRight />
    </button>
  );
}

function Frame117({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <button className="cursor-pointer relative shrink-0 size-[40px] transition-transform duration-200 hover:-translate-x-1 active:translate-x-0" data-name="arrow-left" onClick={onPrev} type="button">
        <VuesaxLinearArrowLeft />
      </button>
      <ArrowRight onClick={onNext} />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip py-[12px] relative rounded-[8px] shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#7a7c7d] text-[0px] text-center whitespace-nowrap">
        <p className="leading-[24px] text-[16px]">View All Popular Destinations</p>
      </div>
    </div>
  );
}

function Frame115({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame117 onPrev={onPrev} onNext={onNext} />
      <Buttons />
    </div>
  );
}

function Frame116() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame101 activeIndex={activeIndex} />
      <Frame115
        onPrev={() => setActiveIndex((current) => Math.max(current - 1, 0))}
        onNext={() => setActiveIndex((current) => Math.min(current + 1, 4))}
      />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center relative shrink-0 text-[32px] text-black">
        <p className="leading-[48px]">Top Compounds</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#a6a7a9] text-[20px]">
        <p className="leading-[28px]">Explore Popular Locations</p>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-end justify-between leading-[0] not-italic relative shrink-0 text-center w-full whitespace-nowrap">
      <Frame130 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#212427] text-[0px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] text-[16px] underline">View All</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#212427] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">New Giza</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame40 />
    </div>
  );
}

function Location1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="location">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="location">
          <path d={svgPaths.p36d5000} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeWidth="0.833333" />
          <path d={svgPaths.p2e8fea40} id="Vector_2" stroke="var(--stroke-0, #7A7C7D)" strokeWidth="0.833333" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearLocation() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="vuesax/linear/location">
      <Location1 />
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[5px] items-center py-[2px] relative shrink-0" data-name="Location">
      <div className="relative shrink-0 size-[16px]" data-name="location">
        <VuesaxLinearLocation />
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7a7c7d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">South New Cairo, Egypt</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame48 />
      <Location />
    </div>
  );
}

function Frame129() {
  return (
    <div className="bg-white flex-[1_0_0] h-[273px] min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
        <div className="h-[189px] relative rounded-[8px] shrink-0 w-full" data-name="image 12">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <img alt="" className="absolute h-[100.06%] left-[-25.36%] max-w-none top-[-0.03%] w-[132.36%]" src={imgImage12} />
          </div>
        </div>
        <Frame67 />
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#212427] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">New Giza</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame41 />
    </div>
  );
}

function Location3() {
  return (
    <div className="absolute inset-[8.33%]" data-name="location">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="location">
          <path d={svgPaths.p36d5000} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeWidth="0.833333" />
          <path d={svgPaths.p2e8fea40} id="Vector_2" stroke="var(--stroke-0, #7A7C7D)" strokeWidth="0.833333" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearLocation1() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="vuesax/linear/location">
      <Location3 />
    </div>
  );
}

function Location2() {
  return (
    <div className="content-stretch flex gap-[5px] items-center py-[2px] relative shrink-0" data-name="Location">
      <div className="relative shrink-0 size-[16px]" data-name="location">
        <VuesaxLinearLocation1 />
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7a7c7d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">South New Cairo, Egypt</p>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame49 />
      <Location2 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="bg-white flex-[1_0_0] h-[273px] min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
        <div className="h-[189px] relative rounded-[8px] shrink-0 w-full" data-name="image 22">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage22} />
        </div>
        <Frame68 />
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#212427] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">New Giza</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame42 />
    </div>
  );
}

function Location5() {
  return (
    <div className="absolute inset-[8.33%]" data-name="location">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="location">
          <path d={svgPaths.p36d5000} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeWidth="0.833333" />
          <path d={svgPaths.p2e8fea40} id="Vector_2" stroke="var(--stroke-0, #7A7C7D)" strokeWidth="0.833333" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearLocation2() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="vuesax/linear/location">
      <Location5 />
    </div>
  );
}

function Location4() {
  return (
    <div className="content-stretch flex gap-[5px] items-center py-[2px] relative shrink-0" data-name="Location">
      <div className="relative shrink-0 size-[16px]" data-name="location">
        <VuesaxLinearLocation2 />
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7a7c7d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">South New Cairo, Egypt</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame50 />
      <Location4 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="bg-white flex-[1_0_0] h-[273px] min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
        <div className="flex-[1_0_0] min-h-px relative rounded-[8px] w-full" data-name="image 23">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage23} />
        </div>
        <Frame69 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[8px] w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-white inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgFrame1321317096} />
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#212427] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">New Giza</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame43 />
    </div>
  );
}

function Location7() {
  return (
    <div className="absolute inset-[8.33%]" data-name="location">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="location">
          <path d={svgPaths.p36d5000} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeWidth="0.833333" />
          <path d={svgPaths.p2e8fea40} id="Vector_2" stroke="var(--stroke-0, #7A7C7D)" strokeWidth="0.833333" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearLocation3() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="vuesax/linear/location">
      <Location7 />
    </div>
  );
}

function Location6() {
  return (
    <div className="content-stretch flex gap-[5px] items-center py-[2px] relative shrink-0" data-name="Location">
      <div className="relative shrink-0 size-[16px]" data-name="location">
        <VuesaxLinearLocation3 />
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7a7c7d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">South New Cairo, Egypt</p>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame51 />
      <Location6 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="bg-white flex-[1_0_0] h-[273px] min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
        <Frame31 />
        <Frame70 />
      </div>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame129 />
      <Frame128 />
      <Frame126 />
      <Frame127 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame83 />
      <Frame125 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center relative shrink-0 text-[32px] text-black">
        <p className="leading-[48px]">Units</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#a6a7a9] text-[20px]">
        <p className="leading-[28px]">Explore More Units</p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex items-end justify-between leading-[0] not-italic relative shrink-0 text-center w-full whitespace-nowrap">
      <Frame131 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#212427] text-[0px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] text-[16px] underline">View All</p>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[8.33%_13.77%_8.33%_13.7%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5062 16.6667">
        <g id="Group">
          <path d={svgPaths.p47b8af2} fill="var(--fill-0, #7A7C7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
      <Group8 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white content-stretch flex items-center p-[6px] relative rounded-[8px] shrink-0">
      <Frame />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[8.33%_14.58%_8.33%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.5px_-1.667px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5833 16.6667">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p39dc2800} fill="var(--fill-0, #7A7C7D)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group10 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function Frame1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
      <Group9 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center px-[8px] relative rounded-[4px] shrink-0">
      <Frame1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4d5052] text-[12px] text-center whitespace-nowrap">Compare</p>
    </div>
  );
}

function Heart() {
  return (
    <div className="absolute inset-[8.33%]" data-name="heart">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="heart">
          <path d={svgPaths.p12651580} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04167" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearHeart() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="vuesax/linear/heart">
      <Heart />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white content-stretch flex items-center p-[6px] relative rounded-[8px] shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="heart">
        <VuesaxLinearHeart />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[176px] top-[8px]">
      <Frame38 />
      <Frame89 />
      <Frame37 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center left-[10px] p-[4px] rounded-[4px] top-[210px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">ORA Development</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="h-[249px] overflow-clip relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-white inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgFrame1321317097} />
      </div>
      <Frame39 />
      <Frame44 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#212427] text-[16px]">
        <p className="leading-[24px]">Apartment</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-black">
        <p className="leading-[20px]" dir="auto">
          /
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#212427] text-[16px]">
        <p className="leading-[24px]">Bloomfields</p>
      </div>
    </div>
  );
}

function Location9() {
  return (
    <div className="absolute inset-[8.33%]" data-name="location">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="location">
          <path d={svgPaths.p36d5000} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeWidth="0.833333" />
          <path d={svgPaths.p2e8fea40} id="Vector_2" stroke="var(--stroke-0, #7A7C7D)" strokeWidth="0.833333" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearLocation4() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="vuesax/linear/location">
      <Location9 />
    </div>
  );
}

function Location8() {
  return (
    <div className="content-stretch flex gap-[5px] items-center py-[2px] relative shrink-0" data-name="Location">
      <div className="relative shrink-0 size-[16px]" data-name="location">
        <VuesaxLinearLocation4 />
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7a7c7d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">South New Cairo, Egypt</p>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[186px]">
      <Frame47 />
      <Location8 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[4px] items-end leading-[0] not-italic relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#212427] text-[18px]">
        <p className="leading-[28px]">EGP 8,500,000</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7a7c7d] text-[12px]">
        <p className="leading-[16px]" dir="auto">
          /
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7a7c7d] text-[12px]">
        <p className="leading-[16px]">Start Price</p>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame92 />
      <Frame95 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame91 />
    </div>
  );
}

function MajesticonsBathShowerLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="majesticons:bath-shower-line">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="majesticons:bath-shower-line">
          <path d={svgPaths.p1dd400} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Baths() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Baths">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[8px] relative size-full">
          <MajesticonsBathShowerLine />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7c7d] text-[0px] whitespace-nowrap">
            <p className="text-[14px]">
              <span className="leading-[20px] text-[#7a7c7d]">2</span>
              <span className="leading-[20px]">{` Baths`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FluentBed20Regular() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="fluent:bed-20-regular">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="fluent:bed-20-regular">
          <path d={svgPaths.p2be73480} fill="var(--fill-0, #7A7C7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Bed() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Bed">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[8px] relative size-full">
          <FluentBed20Regular />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7c7d] text-[0px] whitespace-nowrap">
            <p className="text-[14px]">
              <span className="leading-[20px] text-[#7a7c7d]">3</span>
              <span className="leading-[20px]">{` Beds`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FluentResize24Regular() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="fluent:resize-24-regular">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="fluent:resize-24-regular">
          <path d={svgPaths.p16c37200} fill="var(--fill-0, #7A7C7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Size() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Size">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[8px] relative size-full">
          <FluentResize24Regular />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7c7d] text-[0px] whitespace-nowrap">
            <p>
              <span className="leading-[20px] text-[14px]">140 M</span>
              <span className="leading-[20px] text-[9.030000000000001px]">2</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Baths />
      <Bed />
      <Size />
    </div>
  );
}

function IcBaselineWhatsapp() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ic:baseline-whatsapp">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ic:baseline-whatsapp">
          <path d={svgPaths.p2ba54400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-[#25d366] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Buttons">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center pl-[8px] pr-[12px] py-[4px] relative size-full">
          <IcBaselineWhatsapp />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
            <p className="leading-[20px]">Whatsapp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
        <Frame32 />
        <Frame45 />
        <Frame34 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
              <line id="Line 3" stroke="var(--stroke-0, #F4F4F4)" x2="360" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons1 />
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[8.33%_13.77%_8.33%_13.7%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5062 16.6667">
        <g id="Group">
          <path d={svgPaths.p47b8af2} fill="var(--fill-0, #7A7C7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
      <Group11 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-white content-stretch flex items-center p-[6px] relative rounded-[8px] shrink-0">
      <Frame2 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[8.33%_14.58%_8.33%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.5px_-1.667px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5833 16.6667">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p39dc2800} fill="var(--fill-0, #7A7C7D)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group13 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
      <Group12 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center px-[8px] relative rounded-[4px] shrink-0">
      <Frame3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4d5052] text-[12px] text-center whitespace-nowrap">Compare</p>
    </div>
  );
}

function Heart1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="heart">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="heart">
          <path d={svgPaths.p12651580} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04167" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearHeart1() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="vuesax/linear/heart">
      <Heart1 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-white content-stretch flex items-center p-[6px] relative rounded-[8px] shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="heart">
        <VuesaxLinearHeart1 />
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[176px] top-[8px]">
      <Frame52 />
      <Frame96 />
      <Frame53 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center left-[10px] p-[4px] rounded-[4px] top-[210px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">ORA Development</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="h-[249px] overflow-clip relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-white inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgFrame1321317096} />
      </div>
      <Frame46 />
      <Frame54 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#212427] text-[16px]">
        <p className="leading-[24px]">Apartment</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-black">
        <p className="leading-[20px]" dir="auto">
          /
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#212427] text-[16px]">
        <p className="leading-[24px]">Bloomfields</p>
      </div>
    </div>
  );
}

function Location11() {
  return (
    <div className="absolute inset-[8.33%]" data-name="location">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="location">
          <path d={svgPaths.p36d5000} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeWidth="0.833333" />
          <path d={svgPaths.p2e8fea40} id="Vector_2" stroke="var(--stroke-0, #7A7C7D)" strokeWidth="0.833333" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearLocation5() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="vuesax/linear/location">
      <Location11 />
    </div>
  );
}

function Location10() {
  return (
    <div className="content-stretch flex gap-[5px] items-center py-[2px] relative shrink-0" data-name="Location">
      <div className="relative shrink-0 size-[16px]" data-name="location">
        <VuesaxLinearLocation5 />
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7a7c7d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">South New Cairo, Egypt</p>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[186px]">
      <Frame56 />
      <Location10 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[4px] items-end leading-[0] not-italic relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#212427] text-[18px]">
        <p className="leading-[28px]">EGP 8,500,000</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7a7c7d] text-[12px]">
        <p className="leading-[16px]" dir="auto">
          /
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7a7c7d] text-[12px]">
        <p className="leading-[16px]">Start Price</p>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame98 />
      <Frame99 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame97 />
    </div>
  );
}

function MajesticonsBathShowerLine1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="majesticons:bath-shower-line">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="majesticons:bath-shower-line">
          <path d={svgPaths.p1dd400} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Baths1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Baths">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[8px] relative size-full">
          <MajesticonsBathShowerLine1 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7c7d] text-[0px] whitespace-nowrap">
            <p className="text-[14px]">
              <span className="leading-[20px] text-[#7a7c7d]">2</span>
              <span className="leading-[20px]">{` Baths`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FluentBed20Regular1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="fluent:bed-20-regular">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="fluent:bed-20-regular">
          <path d={svgPaths.p2be73480} fill="var(--fill-0, #7A7C7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Bed1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Bed">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[8px] relative size-full">
          <FluentBed20Regular1 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7c7d] text-[0px] whitespace-nowrap">
            <p className="text-[14px]">
              <span className="leading-[20px] text-[#7a7c7d]">3</span>
              <span className="leading-[20px]">{` Beds`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FluentResize24Regular1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="fluent:resize-24-regular">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="fluent:resize-24-regular">
          <path d={svgPaths.p16c37200} fill="var(--fill-0, #7A7C7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Size1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Size">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[8px] relative size-full">
          <FluentResize24Regular1 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7c7d] text-[0px] whitespace-nowrap">
            <p>
              <span className="leading-[20px] text-[14px]">140 M</span>
              <span className="leading-[20px] text-[9.030000000000001px]">2</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Baths1 />
      <Bed1 />
      <Size1 />
    </div>
  );
}

function IcBaselineWhatsapp1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ic:baseline-whatsapp">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ic:baseline-whatsapp">
          <path d={svgPaths.p2ba54400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="bg-[#25d366] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Buttons">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center pl-[8px] pr-[12px] py-[4px] relative size-full">
          <IcBaselineWhatsapp1 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
            <p className="leading-[20px]">Whatsapp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
        <Frame33 />
        <Frame55 />
        <Frame35 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
              <line id="Line 3" stroke="var(--stroke-0, #F4F4F4)" x2="360" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons2 />
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[8.33%_13.77%_8.33%_13.7%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5062 16.6667">
        <g id="Group">
          <path d={svgPaths.p47b8af2} fill="var(--fill-0, #7A7C7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
      <Group14 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-white content-stretch flex items-center p-[6px] relative rounded-[8px] shrink-0">
      <Frame4 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[8.33%_14.58%_8.33%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.5px_-1.667px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5833 16.6667">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p39dc2800} fill="var(--fill-0, #7A7C7D)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group16 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
      <Group15 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center px-[8px] relative rounded-[4px] shrink-0">
      <Frame5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4d5052] text-[12px] text-center whitespace-nowrap">Compare</p>
    </div>
  );
}

function Heart2() {
  return (
    <div className="absolute inset-[8.33%]" data-name="heart">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="heart">
          <path d={svgPaths.p12651580} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04167" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearHeart2() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="vuesax/linear/heart">
      <Heart2 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-white content-stretch flex items-center p-[6px] relative rounded-[8px] shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="heart">
        <VuesaxLinearHeart2 />
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[176px] top-[8px]">
      <Frame58 />
      <Frame100 />
      <Frame59 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center left-[10px] p-[4px] rounded-[4px] top-[210px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">ORA Development</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="h-[249px] overflow-clip relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-white inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgFrame1321317098} />
      </div>
      <Frame57 />
      <Frame60 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#212427] text-[16px]">
        <p className="leading-[24px]">Apartment</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-black">
        <p className="leading-[20px]" dir="auto">
          /
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#212427] text-[16px]">
        <p className="leading-[24px]">Bloomfields</p>
      </div>
    </div>
  );
}

function Location13() {
  return (
    <div className="absolute inset-[8.33%]" data-name="location">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="location">
          <path d={svgPaths.p36d5000} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeWidth="0.833333" />
          <path d={svgPaths.p2e8fea40} id="Vector_2" stroke="var(--stroke-0, #7A7C7D)" strokeWidth="0.833333" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearLocation6() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="vuesax/linear/location">
      <Location13 />
    </div>
  );
}

function Location12() {
  return (
    <div className="content-stretch flex gap-[5px] items-center py-[2px] relative shrink-0" data-name="Location">
      <div className="relative shrink-0 size-[16px]" data-name="location">
        <VuesaxLinearLocation6 />
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7a7c7d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">South New Cairo, Egypt</p>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[186px]">
      <Frame62 />
      <Location12 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[4px] items-end leading-[0] not-italic relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#212427] text-[18px]">
        <p className="leading-[28px]">EGP 8,500,000</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7a7c7d] text-[12px]">
        <p className="leading-[16px]" dir="auto">
          /
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7a7c7d] text-[12px]">
        <p className="leading-[16px]">Start Price</p>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame104 />
      <Frame105 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame102 />
    </div>
  );
}

function MajesticonsBathShowerLine2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="majesticons:bath-shower-line">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="majesticons:bath-shower-line">
          <path d={svgPaths.p1dd400} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Baths2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Baths">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[8px] relative size-full">
          <MajesticonsBathShowerLine2 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7c7d] text-[0px] whitespace-nowrap">
            <p className="text-[14px]">
              <span className="leading-[20px] text-[#7a7c7d]">2</span>
              <span className="leading-[20px]">{` Baths`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FluentBed20Regular2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="fluent:bed-20-regular">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="fluent:bed-20-regular">
          <path d={svgPaths.p2be73480} fill="var(--fill-0, #7A7C7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Bed2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Bed">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[8px] relative size-full">
          <FluentBed20Regular2 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7c7d] text-[0px] whitespace-nowrap">
            <p className="text-[14px]">
              <span className="leading-[20px] text-[#7a7c7d]">3</span>
              <span className="leading-[20px]">{` Beds`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FluentResize24Regular2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="fluent:resize-24-regular">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="fluent:resize-24-regular">
          <path d={svgPaths.p16c37200} fill="var(--fill-0, #7A7C7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Size2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Size">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[8px] relative size-full">
          <FluentResize24Regular2 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7c7d] text-[0px] whitespace-nowrap">
            <p>
              <span className="leading-[20px] text-[14px]">140 M</span>
              <span className="leading-[20px] text-[9.030000000000001px]">2</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Baths2 />
      <Bed2 />
      <Size2 />
    </div>
  );
}

function IcBaselineWhatsapp2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ic:baseline-whatsapp">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ic:baseline-whatsapp">
          <path d={svgPaths.p2ba54400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons3() {
  return (
    <div className="bg-[#25d366] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Buttons">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center pl-[8px] pr-[12px] py-[4px] relative size-full">
          <IcBaselineWhatsapp2 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
            <p className="leading-[20px]">Whatsapp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
        <Frame36 />
        <Frame61 />
        <Frame63 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
              <line id="Line 3" stroke="var(--stroke-0, #F4F4F4)" x2="360" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons3 />
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame86 />
      <Frame85 />
      <Frame87 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
      <Frame90 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame84 />
      <Frame120 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center relative shrink-0 text-[32px] text-black">
        <p className="leading-[48px]">Developers</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#a6a7a9] text-[20px]">
        <p className="leading-[28px]">Explore Top Developers</p>
      </div>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex items-end justify-between leading-[0] not-italic relative shrink-0 text-center w-full whitespace-nowrap">
      <Frame132 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#212427] text-[0px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] text-[16px] underline">View All</p>
      </div>
    </div>
  );
}

function Frame136() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[6px] py-[26px] relative rounded-[40px] shrink-0 size-[80px]">
      <div aria-hidden="true" className="absolute border-[#f4f4f4] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="h-[54.384px] relative shrink-0 w-[66px]" data-name="image 36">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage36} />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Palm Hills Developments</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Frame136 />
      <Frame17 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6668 16.6667">
        <g id="Group">
          <path d={svgPaths.p369ce400} fill="var(--fill-0, #7A7C7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
      <Group17 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0">
      <Frame6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">7 Projects</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full">
      <Frame23 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 255 1">
            <line id="Line 389" stroke="var(--stroke-0, #F0F5FF)" x2="255" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[287px]">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Frame16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame139() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[6px] py-[26px] relative rounded-[40px] shrink-0 size-[80px]">
      <div aria-hidden="true" className="absolute border-[#f4f4f4] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="h-[36.695px] relative shrink-0 w-[66px]" data-name="image 35">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage35} />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Emaar Misr</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Frame139 />
      <Frame19 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6668 16.6667">
        <g id="Group">
          <path d={svgPaths.p369ce400} fill="var(--fill-0, #7A7C7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
      <Group18 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0">
      <Frame7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">9 Projects</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full">
      <Frame24 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 255 1">
            <line id="Line 389" stroke="var(--stroke-0, #F0F5FF)" x2="255" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame25 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[287px]">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Frame18 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame140() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[6px] py-[26px] relative rounded-[40px] shrink-0 size-[80px]">
      <div aria-hidden="true" className="absolute border-[#f4f4f4] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="h-[38.824px] relative shrink-0 w-[66px]" data-name="image 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[217.1%] left-[-13.85%] max-w-none top-[-58.55%] w-[127.71%]" src={imgImage3} />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" dir="auto">
        Orascom Development
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Frame140 />
      <Frame21 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6668 16.6667">
        <g id="Group">
          <path d={svgPaths.p369ce400} fill="var(--fill-0, #7A7C7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
      <Group19 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0">
      <Frame8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">4 Projects</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full">
      <Frame26 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 255 1">
            <line id="Line 389" stroke="var(--stroke-0, #F0F5FF)" x2="255" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame27 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[287px]">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Frame20 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame141() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[6px] py-[26px] relative rounded-[40px] shrink-0 size-[80px]">
      <div aria-hidden="true" className="absolute border-[#f4f4f4] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="relative shrink-0 size-[66px]" data-name="image 37">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage37} />
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">SODIC</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Frame141 />
      <Frame29 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6668 16.6667">
        <g id="Group">
          <path d={svgPaths.pcbb6300} fill="var(--fill-0, #7A7C7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
      <Group20 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0">
      <Frame9 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">15 Projects</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full">
      <Frame28 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 255 1">
            <line id="Line 389" stroke="var(--stroke-0, #F0F5FF)" x2="255" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame30 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[287px]">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Frame22 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame15 />
      <Frame134 />
      <Frame135 />
      <Frame133 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame138 />
      <Frame137 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-px not-italic relative text-[#a6a7a9] text-[16px]">Full Name</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[70px]" data-name="Input">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 48">
        <g id="Input">
          <path d={svgPaths.p3eedae80} fill="var(--fill-0, white)" />
          <path d={svgPaths.p3eedae80} stroke="var(--stroke-0, #E5E7EB)" />
          <g clipPath="url(#clip0_1_27324)" id="Frame">
            <path d={svgPaths.p32579b40} fill="var(--fill-0, #030303)" id="Vector" />
            <path d={svgPaths.p3b733380} fill="var(--fill-0, #CF2027)" id="Vector_2" />
            <path d={svgPaths.p17b64900} fill="var(--fill-0, #FEFFFF)" id="Vector_3" />
            <path d={svgPaths.p3e5f2580} fill="var(--fill-0, #DFA500)" id="Vector_4" />
            <path d={svgPaths.p315f100} fill="var(--fill-0, #DFA500)" id="Vector_5" />
            <path d={svgPaths.p59a3200} fill="var(--fill-0, #DFA500)" id="Vector_6" />
            <g id="Vector_7" />
            <path d={svgPaths.p1997700} fill="var(--fill-0, #DFA500)" id="Vector_8" />
            <path d={svgPaths.p315f100} fill="var(--fill-0, #DFA500)" id="Vector_9" />
            <path d={svgPaths.p2599d840} fill="var(--fill-0, #DFA500)" id="Vector_10" />
            <g id="Vector_11" />
            <path d={svgPaths.p3fd98a80} fill="var(--fill-0, #DFA500)" id="Vector_12" />
          </g>
          <path d={svgPaths.p332fa3c0} id="Vector_13" stroke="var(--stroke-0, #7A7C7D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_27324">
            <rect fill="white" height="20" transform="translate(16.3333 14)" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-[8px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-px not-italic relative text-[#a6a7a9] text-[16px]">Mobile Number</p>
        </div>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Input1 />
      <Input2 />
    </div>
  );
}

function InputFields() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Fields">
      <Frame88 />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[158px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-px not-italic relative text-[#a6a7a9] text-[16px]">Description</p>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-[686px] p-[24px] rounded-[16px] top-[52px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[380px]" data-name="Input Fields">
        <Input />
      </div>
      <InputFields />
      <Input3 />
      <div className="bg-[#212427] relative rounded-[8px] shrink-0 w-full" data-name="Buttons">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
            <div className="flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[24px]">Send</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoDark() {
  return (
    <div className="h-[33px] relative shrink-0 w-[38.425px]" data-name="logo-dark">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.4247 33">
        <g id="logo-dark">
          <path d={svgPaths.p2edf3580} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3bd4db00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p29ff5e00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2f75880} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame122() {
  return (
    <div className="absolute bg-[#212427] content-stretch flex flex-col h-[44px] items-center justify-center left-[1119.43px] px-[2.357px] py-[5.5px] rounded-[3.143px] top-[453px] w-[47.143px]">
      <LogoDark />
    </div>
  );
}

function Frame119() {
  return (
    <div className="h-[518px] overflow-clip relative rounded-[16px] shrink-0 w-full">
      <div className="absolute h-[518px] left-0 top-0 w-full" data-name="image 11">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage11} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <Frame118 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[60px] not-italic text-[40px] text-white top-[119px] w-[458px]">
        <p className="leading-[64px]">Let’s Find Your Next Property Together</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[60px] not-italic text-[20px] text-white top-[411px] w-[451px]">
        <p className="leading-[normal]">Fill out the form below and our team will reach out to guide you through your real estate journey.</p>
      </div>
      <Frame122 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start mx-auto w-[1184px]">
      <div className="bg-white content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Component 1">
        <Frame82 />
        <Frame116 />
      </div>
      <Frame121 />
      <Frame93 />
      <Frame142 />
      <Frame103 />
      <Frame119 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute flex inset-[0_52.37%_31.46%_32.32%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.336 20.4718">
              <path d={svgPaths.p247fc880} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.62%_42.12%_0.51%_40.9%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.079 20.2698">
              <path d={svgPaths.pa117100} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[58.15%_52.1%_0_42.98%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0492 12.4987">
              <path d={svgPaths.pd36c100} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[74.88%_43.87%_17.99%_55.18%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.1319 2.13054">
              <path d={svgPaths.p12625500} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.62%_95.79%_30.53%_0] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.43843 11.6042">
              <path d={svgPaths.pe45d200} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[29.98%_87.92%_29.89%_6.8%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8266 11.9859">
              <path d={svgPaths.p24495a00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.62%_81.1%_30.53%_15.34%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.98888 11.6039">
              <path d={svgPaths.p185eb3f0} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.62%_73.99%_30.53%_21.44%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2503 11.6039">
              <path d={svgPaths.p1cfc6b00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.62%_33.97%_30.53%_61.61%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.90514 11.6036">
              <path d={svgPaths.p12067200} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[29.98%_26.5%_29.89%_68.23%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8269 11.9859">
              <path d={svgPaths.p1537fe00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.62%_19.59%_29.94%_76.07%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.7403 11.7794">
              <path d={svgPaths.p30971000} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.62%_12.82%_30.53%_83.08%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.19991 11.6045">
              <path d={svgPaths.p3ee3d300} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.62%_6.43%_30.53%_89.74%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.59359 11.6045">
              <path d={svgPaths.pfb35a80} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.09%_0_29.99%_96.04%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88964 11.9229">
              <path d={svgPaths.p254c84f0} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BoldRoutesLogo() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[0.13%] left-[calc(50%+0.14px)] top-[-0.13%] w-[224.272px]" data-name="Bold Routes Logo">
      <Group21 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <div className="h-[29.867px] overflow-clip relative shrink-0 w-[224px]" data-name="Bold Routes Logo">
        <BoldRoutesLogo />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#f4f4f4] text-[16px] tracking-[-0.408px] w-[288px]">Boldly expanding unlimited potential to conquer the world of real estate brokerage.</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start relative shrink-0 text-[#f4f4f4] text-[14px]">
      <p className="relative shrink-0">About us</p>
      <p className="relative shrink-0">Contact Us</p>
      <p className="relative shrink-0">Blog</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start leading-[22px] not-italic relative shrink-0 text-center tracking-[-0.408px] whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[20px] text-white">About</p>
      <Frame107 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start relative shrink-0 text-[#f4f4f4] text-[14px]">
      <p className="relative shrink-0">Units</p>
      <p className="relative shrink-0">Developers</p>
      <p className="relative shrink-0">Projects</p>
      <p className="relative shrink-0">Locations</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start leading-[22px] not-italic relative shrink-0 text-center tracking-[-0.408px] whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[20px] text-white">Quick Links</p>
      <Frame109 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[8.33%_13.39%_8.34%_13.39%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5716 20">
        <g id="Group">
          <path d={svgPaths.p24a4c200} fill="var(--fill-0, #7A7C7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Group22 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[10%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 19.2">
        <g id="Group">
          <path d={svgPaths.p3d7e1930} fill="var(--fill-0, #7A7C7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Group23 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[10.1%_28.5%_10%_28.4%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.344 19.176">
        <g id="Group">
          <path d={svgPaths.pda58270} fill="var(--fill-0, #7A7C7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Group24 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[8.33%_8.18%_8.33%_8.51%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9962 20">
        <g id="Group">
          <path d={svgPaths.p36f7df40} fill="var(--fill-0, #7A7C7D)" id="Vector" />
          <path d={svgPaths.p252c800} fill="var(--fill-0, #7A7C7D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Group25 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[-0.408px] whitespace-nowrap">Social Media</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#f4f4f4] text-[16px] tracking-[-0.408px] w-[288px]">Follow us on social media to find out the latest updates on your progress</p>
      <Frame124 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame123 />
      <Frame106 />
      <Frame108 />
      <Frame110 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[13px] items-center leading-[0] left-1/2 not-italic text-center top-[167px] w-[921px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[54px] text-white w-full">
        <p className="leading-[normal]">Your Dream Home Awaits</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#e5e7eb] text-[32px] w-full">
        <p className="leading-[normal]">From modern apartments to luxury villas — explore properties that match your lifestyle.</p>
      </div>
    </div>
  );
}

function SearchNormal() {
  return (
    <div className="absolute inset-[8.34%_8.33%_8.33%_8.34%]" data-name="search-normal">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9992 19.9992">
        <g id="search-normal">
          <path d={svgPaths.p26c6b280} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24995" />
          <path d={svgPaths.p1d33ce20} id="Vector_2" stroke="var(--stroke-0, #7A7C7D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24995" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearSearchNormal() {
  return (
    <div className="absolute contents inset-[8.34%_8.33%_8.33%_8.34%]" data-name="vuesax/linear/search-normal">
      <SearchNormal />
    </div>
  );
}

function Input4() {
  const animatedPlaceholder = useTypingPlaceholder(searchPlaceholderPhrases);

  return (
    <div className="bg-white h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d3d3d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="search-normal">
            <VuesaxLinearSearchNormal />
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-px not-italic relative text-[#a6a7a9] text-[16px]">{animatedPlaceholder}</p>
        </div>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="absolute inset-[8.34%_8.33%_8.33%_8.34%]" data-name="arrow-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9992 19.9992">
        <g id="arrow-down">
          <path d={svgPaths.p2fab6e80} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.24995" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearArrowDown() {
  return (
    <div className="absolute contents inset-[8.34%_8.33%_8.33%_8.34%]" data-name="vuesax/linear/arrow-down">
      <ArrowDown />
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#d3d3d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d5052] text-[16px] whitespace-nowrap">
            <p className="leading-[16px]">Property Type</p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-name="arrow-down">
            <VuesaxLinearArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowDown1() {
  return (
    <div className="absolute inset-[8.34%_8.33%_8.33%_8.34%]" data-name="arrow-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9992 19.9992">
        <g id="arrow-down">
          <path d={svgPaths.p2fab6e80} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.24995" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearArrowDown1() {
  return (
    <div className="absolute contents inset-[8.34%_8.33%_8.33%_8.34%]" data-name="vuesax/linear/arrow-down">
      <ArrowDown1 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#d3d3d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d5052] text-[16px] whitespace-nowrap">
            <p className="leading-[16px]">Price Range</p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-name="arrow-down">
            <VuesaxLinearArrowDown1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowDown2() {
  return (
    <div className="absolute inset-[8.34%_8.33%_8.33%_8.34%]" data-name="arrow-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9992 19.9992">
        <g id="arrow-down">
          <path d={svgPaths.p2fab6e80} id="Vector" stroke="var(--stroke-0, #7A7C7D)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.24995" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearArrowDown2() {
  return (
    <div className="absolute contents inset-[8.34%_8.33%_8.33%_8.34%]" data-name="vuesax/linear/arrow-down">
      <ArrowDown2 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#d3d3d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d5052] text-[16px] whitespace-nowrap">
            <p className="leading-[16px]">{`Beds & Baths`}</p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-name="arrow-down">
            <VuesaxLinearArrowDown2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame64 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame65 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame66 />
      </div>
      <div className="bg-[#212427] content-stretch flex h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[216px]" data-name="Buttons">
        <div className="flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
          <p className="leading-[24px]">Search</p>
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col gap-[12px] items-start justify-end left-1/2 p-[16px] rounded-[16px] top-[410px] w-[1184px]">
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
      <Input4 />
      <Frame76 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute flex inset-[0_52.37%_31.46%_32.32%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.6572 18.2784">
              <path d={svgPaths.p18ee3d00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.62%_42.12%_0.51%_40.9%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.9991 18.098">
              <path d={svgPaths.p2923e500} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[58.15%_52.1%_0_42.98%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.86536 11.1596">
              <path d={svgPaths.p1707f000} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[74.88%_43.87%_17.99%_55.18%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.90348 1.90227">
              <path d={svgPaths.p3b3bd970} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.62%_95.79%_30.53%_0] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.42717 10.3609">
              <path d={svgPaths.p2abe4c00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[29.98%_87.92%_29.89%_6.8%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5594 10.7017">
              <path d={svgPaths.p2d0cee80} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.62%_81.1%_30.53%_15.34%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.13293 10.3606">
              <path d={svgPaths.p4765300} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.62%_73.99%_30.53%_21.44%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.15207 10.3606">
              <path d={svgPaths.p360c700} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.62%_33.97%_30.53%_61.61%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84387 10.3603">
              <path d={svgPaths.p155d0200} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[29.98%_26.5%_29.89%_68.23%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5597 10.7017">
              <path d={svgPaths.p2da00b70} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.62%_19.59%_29.94%_76.07%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.6967 10.5173">
              <path d={svgPaths.p299ed170} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.62%_12.82%_30.53%_83.08%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.21421 10.3612">
              <path d={svgPaths.p1391a072} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.62%_6.43%_30.53%_89.74%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.67285 10.3612">
              <path d={svgPaths.p18088480} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.09%_0_29.99%_96.04%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.93718 10.6454">
              <path d={svgPaths.p1b256a00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BoldRoutesLogo1() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[0.13%] left-[calc(50%+0.12px)] top-[-0.13%] w-[200.243px]" data-name="Bold Routes Logo">
      <Group26 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[59px] items-center justify-center leading-[22px] min-w-px not-italic relative text-[16px] text-center text-white tracking-[-0.408px] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0">Home</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">Explore</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">Developers</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">About</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-between left-0 px-[48px] top-0 w-full">
      <div className="h-[26.667px] overflow-clip relative shrink-0 w-[200px]" data-name="Bold Routes Logo">
        <BoldRoutesLogo1 />
      </div>
      <Frame71 />
      <div className="h-[40px] relative rounded-[6px] shrink-0 w-[72px]" data-name="Buttons">
        <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">Login</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="h-[590px] overflow-clip relative rounded-[16px] self-stretch mx-[24px] mt-[24px]">
      <div className="absolute h-[1740px] left-0 top-[-148px] w-full" data-name="image 24">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage24} />
          <div className="absolute bg-[rgba(0,0,0,0.7)] inset-0" />
        </div>
      </div>
      <Frame74 />
      <Frame77 />
      <Frame72 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[96px] min-h-screen w-full" data-name="Home">
      <Frame73 />
      <Frame94 />
      <div className="bg-black content-stretch flex flex-col items-start px-[114px] py-[71px] w-full" data-name="Footer">
        <Frame114 />
      </div>
    </div>
  );
}
