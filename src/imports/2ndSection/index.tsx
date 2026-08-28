import svgPaths from "./svg-49ujxxcd0l";

function SectionAbout() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="SectionAbout">
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[26.25px] relative shrink-0 text-[19.85px] text-black w-[384px]">Some conversations help you process. Others help you celebrate, reflect, dream, and grow.</p>
    </div>
  );
}

function SectionAbout1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[32px] py-[14px] rounded-[14px] top-[103px] w-[210px]" style={{ backgroundImage: "linear-gradient(147.3369587003122deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)" }} data-name="SectionAbout">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.28px] whitespace-nowrap">Meet Your Companion</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-black whitespace-nowrap">10+ founding members</p>
    </div>
  );
}

function SectionAbout2() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-0 right-[242px] top-[160px]" data-name="SectionAbout">
      <Text />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[24.866px] left-[236px] top-[102px] w-[191.5px]">
      <div className="absolute inset-[-7.1%_0_-5.88%_-0.6%]">
        <svg className="block size-full" fill="none" height="28.0938" preserveAspectRatio="none" viewBox="0 0 192.752 28.0938" width="192.752">
          <g id="Frame 346">
            <path d={svgPaths.p3bf54f80} fill="url(#paint0_linear_0_6)" id="Vector 59" />
            <path d={svgPaths.p2b5e9b00} id="Vector 60" stroke="url(#paint1_linear_0_6)" strokeLinecap="round" strokeWidth="2.92366" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_6" x1="1.14138" x2="19.5851" y1="8.52298" y2="69.0184">
              <stop stopColor="#E91E63" />
              <stop offset="1" stopColor="#9C27B0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_6" x1="1.87185" x2="12.6787" y1="17.1867" y2="20.093">
              <stop stopColor="#E91E63" />
              <stop offset="1" stopColor="#9C27B0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Reveal() {
  return (
    <div className="absolute h-[204px] left-[1286px] top-[92px] w-[384px]" data-name="Reveal">
      <SectionAbout />
      <SectionAbout1 />
      <SectionAbout2 />
      <Frame1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col h-[229px] items-start overflow-clip relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[68px] text-black tracking-[-1.5px] w-[831px]">
        <p className="mb-0">
          <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[68px]">{`Because life isn't just about `}</span>
          <span className="bg-clip-text font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[68px] text-[transparent]" style={{ backgroundImage: "linear-gradient(146.00147801704207deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)" }}>
            getting
          </span>
          <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[68px]">{` through`}</span>
        </p>
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[68px]">hard days.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[204px] items-start left-0 top-[58px] w-[942px]" data-name="Container">
      <Text1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[262px] left-[64px] top-[32px] w-[942px]">
      <Container1 />
      <div className="absolute flex h-[50.922px] items-center justify-center left-[-3px] top-[2px] w-[50.953px]">
        <div className="flex-none rotate-[45.98deg]">
          <div className="h-[36.67px] relative w-[35.377px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="36.6704" preserveAspectRatio="none" viewBox="0 0 35.3771 36.6704" width="35.3771">
              <path d={svgPaths.peb644f0} fill="url(#paint0_linear_0_5)" id="Rectangle 11" stroke="white" strokeWidth="0.795427" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_5" x1="-4.0037e-07" x2="35.6662" y1="11.6617" y2="24.1853">
                  <stop stopColor="#E91E63" />
                  <stop offset="1" stopColor="#9C27B0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[374px] left-[33px] top-[124px] w-[1822px]" data-name="Container">
      <Reveal />
      <Frame />
      <div className="absolute h-0 left-[70px] top-[309px] w-[57px]">
        <div className="absolute inset-[-2.5px_-4.39%]">
          <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 62 5" width="62">
            <path d="M2.5 2.5H59.5" id="Vector 64" stroke="url(#paint0_linear_0_4)" strokeLinecap="round" strokeWidth="5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_4" x1="2.5" x2="2.64963" y1="2.81801" y2="5.92225">
                <stop stopColor="#E91E63" />
                <stop offset="1" stopColor="#9C27B0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Component2ndSection() {
  return (
    <div className="bg-white relative size-full" data-name="2nd section">
      <Container />
    </div>
  );
}