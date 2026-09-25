import imgScreenshot20260820At121232Am1 from "./1fabb6006b2b2026a2aa6f647b1aff16b1c50164.png"

function Container() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div
        className="h-[290.965px] relative shrink-0 w-[464.272px]"
        data-name="Screenshot 2026-08-20 at 12.12.32 AM 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgScreenshot20260820At121232Am1}
        />
      </div>
    </div>
  )
}

function Image() {
  return (
    <div
      className="bg-[#edf1f4] content-stretch flex flex-col items-start overflow-clip px-[51.324px] py-[25.662px] relative rounded-[25.662px] shrink-0 w-full"
      data-name="Image"
    >
      <Container />
    </div>
  )
}

function Left() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-[809px] top-[438px] w-[537px]"
      data-name="Left"
    >
      <Image />
    </div>
  )
}

function Item() {
  return (
    <div
      className="absolute backdrop-blur-[4px] border border-[#e91e63] border-solid content-stretch flex h-[42px] items-center justify-center left-[161px] px-[12px] py-[6px] rounded-[12px] top-[10px] w-[99px]"
      style={{
        backgroundImage:
          "linear-gradient(130.6272782459436deg, rgba(233, 30, 99, 0.12) 8.4861%, rgba(156, 39, 176, 0.12) 91.514%)",
      }}
      data-name="Item"
    >
      <div
        className="[word-break:break-word] bg-clip-text flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11.1px] text-[transparent] text-center whitespace-nowrap"
        style={{
          backgroundImage:
            "linear-gradient(144.75901644395958deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)",
        }}
      >
        <p className="leading-[18px]">Meet Solace</p>
      </div>
    </div>
  )
}

function Container1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container" />
  )
}

function Text() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-[392px]"
      data-name="Text"
    >
      <Container1 />
    </div>
  )
}

function Arrow() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[11.314px]">
      <div className="-rotate-45 flex-none">
        <div className="content-stretch flex flex-col items-start justify-center relative size-[8px]">
          <div
            className="border-black border-r border-solid border-t flex-[1_0_0] min-h-px relative w-full"
            data-name="Border"
          />
        </div>
      </div>
    </div>
  )
}

function Icons() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-1.66px)] size-[16px] top-[calc(50%-55.81px)]">
      <div className="flex-none rotate-45">
        <div
          className="content-stretch flex flex-col h-[11.314px] items-center relative"
          data-name="Icons"
        >
          <Arrow />
        </div>
      </div>
    </div>
  )
}

function Icon() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[8px]"
      data-name="Icon"
    >
      <Icons />
    </div>
  )
}

function Content() {
  return (
    <div
      className="content-stretch flex gap-[144px] items-start overflow-clip relative shrink-0"
      data-name="Content"
    >
      <Text />
      <Icon />
    </div>
  )
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black text-center tracking-[-1.7px] w-[431px]">
        <p className="text-[56px]">
          <span className="leading-[56px]">{`Meet `}</span>
          <span
            className="[word-break:break-word] bg-clip-text font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[56px] text-[transparent] tracking-[-1.7px]"
            style={{
              backgroundImage:
                "linear-gradient(160.35441009875302deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)",
            }}
          >
            Solace
          </span>
        </p>
      </div>
    </div>
  )
}

function LineAlignStretch() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full"
      data-name="Line:align-stretch"
    >
      <Frame />
    </div>
  )
}

function LinkDark() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[10.01px] items-start justify-center left-0 overflow-clip top-0"
      data-name="Link - Dark"
    >
      <Content />
      <LineAlignStretch />
    </div>
  )
}

function Frame1() {
  return (
    <div className="absolute h-[155px] left-0 top-[37px] w-[544px]">
      <LinkDark />
      <div className="absolute h-0 left-[75px] top-[97px] w-[57px]">
        <div className="absolute inset-[-2.5px_-4.39%]">
          <svg
            className="block size-full"
            fill="none"
            height="5"
            preserveAspectRatio="none"
            viewBox="0 0 62 5"
            width="62"
          >
            <path
              d="M2.5 2.5H59.5"
              id="Vector 63"
              stroke="url(#paint0_linear_0_4)"
              strokeLinecap="round"
              strokeWidth="5"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_0_4"
                x1="2.5"
                x2="2.64963"
                y1="2.81801"
                y2="5.92225"
              >
                <stop stopColor="#E91E63" />
                <stop offset="1" stopColor="#9C27B0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

function Frame2() {
  return (
    <div className="absolute h-[192px] left-[445px] top-[14px] w-[544px]">
      <Item />
      <Frame1 />
    </div>
  )
}

function Container4() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[13.3px] whitespace-nowrap">
        <p className="leading-[18.2px]">How it works</p>
      </div>
    </div>
  )
}

function Container3() {
  return (
    <div
      className="h-[18.2px] relative shrink-0 w-[80.14px]"
      data-name="Container"
    >
      <Container4 />
    </div>
  )
}

function Default() {
  return (
    <div
      className="bg-[#edf1f4] content-stretch flex items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[100px] shrink-0"
      data-name="Default"
    >
      <Container3 />
      <div
        className="absolute border border-[#dde5ed] border-solid inset-0 rounded-[100px]"
        data-name="Border"
      />
    </div>
  )
}

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-[502.22px]"
      data-name="Heading 2"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1d1d] text-[48px] tracking-[-1px] whitespace-nowrap"
        style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}
      >
        <p className="leading-[57.6px]">Talk It Out</p>
      </div>
    </div>
  )
}

function Container5() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-[502.22px]"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d585f] text-[16.7px] w-[474px]">
        <p className="leading-[23.4px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labo.
        </p>
      </div>
    </div>
  )
}

function Heading1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1d1d] text-[32px] w-full"
        style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}
      >
        <p className="leading-[38.4px]">100%</p>
      </div>
    </div>
  )
}

function Container7() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d585f] text-[14.8px] w-full">
        <p className="leading-[20.8px] mb-0">Secure, encrypted</p>
        <p className="leading-[20.8px]">data protection</p>
      </div>
    </div>
  )
}

function Default1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[5.4px] items-start relative shrink-0 w-full"
      data-name="Default"
    >
      <Heading1 />
      <Container7 />
    </div>
  )
}

function Container6() {
  return (
    <div
      className="absolute content-stretch flex flex-col inset-[-1px_266.11px_0.6px_0] items-start"
      data-name="Container"
    >
      <Default1 />
    </div>
  )
}

function Heading2() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1d1d] text-[32px] w-full"
        style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}
      >
        <p className="leading-[38.4px]">2 Minutes</p>
      </div>
    </div>
  )
}

function Container9() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d585f] text-[14.9px] w-full">
        <p className="leading-[20.8px] mb-0">Set up to connect</p>
        <p className="leading-[20.8px]">and begin instantly</p>
      </div>
    </div>
  )
}

function Default2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[5.4px] items-start relative shrink-0 w-full"
      data-name="Default"
    >
      <Heading2 />
      <Container9 />
    </div>
  )
}

function Container8() {
  return (
    <div
      className="absolute content-stretch flex flex-col inset-[-1px_0_0.6px_266.11px] items-start"
      data-name="Container"
    >
      <Default2 />
    </div>
  )
}

function Bottom() {
  return (
    <div className="h-[86px] relative shrink-0 w-full" data-name="Bottom">
      <Container6 />
      <Container8 />
    </div>
  )
}

function Left1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[26px] items-start min-w-px pt-[59px] relative"
      data-name="Left"
    >
      <Default />
      <Heading />
      <Container5 />
      <Bottom />
    </div>
  )
}

function LeftLine() {
  return (
    <div
      className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-[-39px] rounded-br-[20px] top-0 w-[40px]"
      data-name="Left Line"
    >
      <div
        className="border-[#dde5ed] border-b border-r border-solid flex-[1_0_0] min-h-px relative rounded-br-[20px] w-[40px]"
        data-name="Border"
      />
    </div>
  )
}

function RightLine() {
  return (
    <div
      className="absolute bottom-[-1px] content-stretch flex flex-col items-start right-[-39.01px] rounded-bl-[20px] top-0 w-[40px]"
      data-name="Right Line"
    >
      <div
        className="border-[#dde5ed] border-b border-l border-solid flex-[1_0_0] min-h-px relative rounded-bl-[20px] w-[40px]"
        data-name="Border"
      />
    </div>
  )
}

function Component() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="1">
      <div
        className="absolute bg-gradient-to-b from-[#57c6ca] inset-[0_15.35%_0.2px_0.03%] to-[#9e92f4] via-[#7aaddf] via-[51.923%]"
        data-name="Background"
      />
    </div>
  )
}

function Container13() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.7px] text-white whitespace-nowrap">
        <p className="leading-[18.2px]">Step 01</p>
      </div>
    </div>
  )
}

function Container12() {
  return (
    <div
      className="h-[18.2px] relative shrink-0 w-[46.27px]"
      data-name="Container"
    >
      <Container13 />
    </div>
  )
}

function Active() {
  return (
    <div
      className="bg-[#edf1f4] content-stretch flex items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[100px] shrink-0"
      data-name="Active"
    >
      <Component />
      <Container12 />
    </div>
  )
}

function Container11() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <Active />
    </div>
  )
}

function Container16() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d585f] text-[13.8px] whitespace-nowrap">
        <p className="leading-[18.2px]">Step 02</p>
      </div>
    </div>
  )
}

function Container15() {
  return (
    <div
      className="content-stretch flex flex-col items-start mix-blend-difference relative shrink-0"
      data-name="Container"
    >
      <Container16 />
    </div>
  )
}

function Default3() {
  return (
    <div
      className="bg-[#edf1f4] content-stretch flex items-center justify-center overflow-clip pb-[10px] pt-[9px] px-[20px] relative rounded-[100px] shrink-0"
      data-name="Default"
    >
      <Container15 />
    </div>
  )
}

function Container14() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <Default3 />
    </div>
  )
}

function Container19() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d585f] text-[13.6px] whitespace-nowrap">
        <p className="leading-[18.2px]">Step 03</p>
      </div>
    </div>
  )
}

function Container18() {
  return (
    <div
      className="content-stretch flex flex-col items-start mix-blend-difference relative shrink-0"
      data-name="Container"
    >
      <Container19 />
    </div>
  )
}

function Default4() {
  return (
    <div
      className="bg-[#edf1f4] content-stretch flex items-center justify-center overflow-clip pb-[10px] pt-[9px] px-[20px] relative rounded-[100px] shrink-0"
      data-name="Default"
    >
      <Container18 />
    </div>
  )
}

function Container17() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <Default4 />
    </div>
  )
}

function Top() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 z-[2]"
      data-name="Top"
    >
      <div
        className="absolute bg-white bottom-[-1px] h-px left-[-39px] right-[-39px]"
        data-name="Bottom Line"
      />
      <LeftLine />
      <RightLine />
      <div
        className="absolute bg-gradient-to-b from-white inset-[-0.38%_-2px_-20.62%_-2px] to-[rgba(255,255,255,0)]"
        data-name="Grad Overlay"
      />
      <Container11 />
      <Container14 />
      <Container17 />
    </div>
  )
}

function Container20() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="h-[336px] relative shrink-0 w-[536px]"
        data-name="Screenshot 2026-08-20 at 12.12.32 AM 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgScreenshot20260820At121232Am1}
        />
      </div>
    </div>
  )
}

function Heading3() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1d1d] text-[24px] text-center whitespace-nowrap"
        style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}
      >
        <p className="leading-[28.8px]">Talk it out</p>
      </div>
    </div>
  )
}

function Container21() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d585f] text-[16.7px] text-center whitespace-nowrap">
        <p className="leading-[23.4px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
    </div>
  )
}

function TitleDescription() {
  return (
    <div
      className="content-stretch flex flex-col gap-[5.99px] items-start relative shrink-0 w-full"
      data-name="Title/Description"
    >
      <Heading3 />
      <Container21 />
    </div>
  )
}

function Component1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full"
      data-name="01"
    >
      <Container20 />
      <TitleDescription />
    </div>
  )
}

function Content2() {
  return (
    <div
      className="bg-[#edf1f4] content-stretch flex flex-col items-center overflow-clip p-[40px] relative rounded-[24px] shrink-0 w-full"
      data-name="Content"
    >
      <Component1 />
    </div>
  )
}

function Bottom1() {
  return (
    <div
      className="content-stretch flex flex-col items-center overflow-clip p-[6px] relative rounded-[30px] shrink-0 w-full z-[1]"
      data-name="Bottom"
    >
      <Content2 />
      <div
        className="absolute border border-[#dde5ed] border-solid inset-[0_0_-0.13px_0] rounded-[30px]"
        data-name="Border"
      />
    </div>
  )
}

function Component2() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-center relative shrink-0 w-full"
      data-name="01"
    >
      <Top />
      <Bottom1 />
    </div>
  )
}

function Container10() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-[627.78px]"
      data-name="Container"
    >
      <Component2 />
    </div>
  )
}

function Content1() {
  return (
    <div
      className="content-stretch flex gap-[70px] items-start relative shrink-0 w-full"
      data-name="Content"
    >
      <Left1 />
      <Container10 />
    </div>
  )
}

function Container2() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-center justify-center left-0 max-w-[1260px] px-[30px] top-[280px] w-[1260px]"
      data-name="Container"
    >
      <Content1 />
    </div>
  )
}

function Frame3() {
  return (
    <div className="absolute h-[865.19px] left-[238px] top-[36px] w-[1346px]">
      <Left />
      <Frame2 />
      <Container2 />
    </div>
  )
}

export default function MeetSolace() {
  return (
    <div className="bg-white relative size-full" data-name="Meet Solace">
      <Frame3 />
    </div>
  )
}
