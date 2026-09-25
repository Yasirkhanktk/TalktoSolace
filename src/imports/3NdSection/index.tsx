import svgPaths from "./svg-d43nts3254"
import imgBgImageBgImage from "./452655ecec9eeba9e3ade8328b7d7d1b0083fa45.png"
import imgImage1 from "./30e513f7515e0de820633689d8febfe6dea7e482.png"
import imgPictureChatMessagesWithReplikaShowcasingTheAIsAbilityToUnderstandAndRespondToHumanEmotions from "./1740c6a6c0d7dcbfa48ff727eb32ef753d91d4ad.png"

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
            "linear-gradient(135.31420570180842deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)",
        }}
      >
        <p className="leading-[18px]">Features</p>
      </div>
    </div>
  )
}

function Container() {
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
      <Container />
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

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black text-center tracking-[-1.7px] w-[431px]">
        <p className="text-[56px]">
          <span className="leading-[56px] tracking-[-1.7px]">Highlighted</span>
          <span className="leading-[56px]">{` `}</span>
          <span
            className="[word-break:break-word] bg-clip-text font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[56px] text-[transparent] tracking-[-1.7px]"
            style={{
              backgroundImage:
                "linear-gradient(144.47461906070686deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)",
            }}
          >
            Features
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
      <Frame20 />
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

function Frame21() {
  return (
    <div className="absolute h-[155px] left-0 top-[37px] w-[544px]">
      <LinkDark />
      <div className="absolute h-0 left-[76px] top-[155px] w-[57px]">
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
              stroke="url(#paint0_linear_0_9)"
              strokeLinecap="round"
              strokeWidth="5"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_0_9"
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
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[190px] not-italic opacity-33 text-[#1d1d1d] text-[14.9px] top-[201.37px] whitespace-nowrap">
        <p className="leading-[20.8px]">Talk it out</p>
      </div>
    </div>
  )
}

function Frame22() {
  return (
    <div className="absolute h-[192px] left-[731px] top-0 w-[544px]">
      <Item />
      <Frame21 />
    </div>
  )
}

function PictureChatMessagesWithReplikaShowcasingTheAIsAbilityToUnderstandAndRespondToHumanEmotions() {
  return (
    <div
      className="h-[304.17px] max-w-[240px] relative shadow-[0px_18px_28px_0px_rgba(0,16,48,0.18)] shrink-0 w-[239.98px]"
      data-name="Picture → Chat messages with Replika, showcasing the AI's ability to understand and respond to human emotions."
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute left-0 max-w-none size-[100.01%] top-0"
          src={
            imgPictureChatMessagesWithReplikaShowcasingTheAIsAbilityToUnderstandAndRespondToHumanEmotions
          }
        />
      </div>
    </div>
  )
}

function Container2() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-[713px] pb-[3px] top-[43.2px]"
      data-name="Container"
    >
      <PictureChatMessagesWithReplikaShowcasingTheAIsAbilityToUnderstandAndRespondToHumanEmotions />
    </div>
  )
}

function ParagraphBackground() {
  return (
    <div className="absolute flex h-[71.878px] items-center justify-center left-[735.77px] top-[350.37px] w-[194.447px]">
      <div className="flex-none rotate-[-6.09deg]">
        <div
          className="[word-break:break-word] bg-white content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] items-start justify-center leading-[0] not-italic pb-[11.502px] pt-[11.503px] px-[12px] relative rounded-[40px] text-[#242433] text-[13px] text-center whitespace-nowrap"
          data-name="Paragraph+Background"
        >
          <div className="flex flex-col justify-center mb-[-1px] relative shrink-0">
            <p className="leading-[15px]">this song for your walk home</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="leading-[15px]">tonight. trust me.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function BgImageBgImage() {
  return (
    <div
      className="flex-[1_0_0] h-full min-w-px overflow-clip relative"
      data-name="BG Image → BG Image"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute h-full left-[-9.81%] max-w-none top-0 w-[119.62%]"
          src={imgBgImageBgImage}
        />
      </div>
      <div
        className="absolute h-[1089px] left-[-136px] top-[5.4px] w-[1014px]"
        data-name="image 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage1}
        />
      </div>
      <Container2 />
      <ParagraphBackground />
    </div>
  )
}

function BgItem1() {
  return (
    <div
      className="absolute content-stretch flex inset-[-6px] items-center justify-center overflow-clip"
      data-name="BG Item"
    >
      <BgImageBgImage />
    </div>
  )
}

function Heading() {
  return (
    <div
      className="absolute h-[77.605px] left-0 right-[-0.25px] top-[-0.8px]"
      data-name="Heading 3"
    />
  )
}

function CU6Yacp6C42TcwsRq8QtycxvNeYSvg() {
  return (
    <div
      className="h-[9.998px] relative shrink-0 w-[13.33px]"
      data-name="cU6Yacp6C42TCWSRq8qtycxvNeY.svg"
    />
  )
}

function Icon2() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip relative w-full"
      data-name="Icon"
    >
      <CU6Yacp6C42TcwsRq8QtycxvNeYSvg />
    </div>
  )
}

function Container3() {
  return (
    <div
      className="aspect-[13.329999923706055/10] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0"
      data-name="Container"
    >
      <Icon2 />
    </div>
  )
}

function Icon1() {
  return (
    <div
      className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0"
      data-name="Icon"
    >
      <Container3 />
    </div>
  )
}

function Lg() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="LG"
    >
      <Icon1 />
    </div>
  )
}

function CU6Yacp6C42TcwsRq8QtycxvNeYSvg1() {
  return (
    <div
      className="h-[9.998px] relative shrink-0 w-[13.33px]"
      data-name="cU6Yacp6C42TCWSRq8qtycxvNeY.svg"
    />
  )
}

function Icon4() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip relative w-full"
      data-name="Icon"
    >
      <CU6Yacp6C42TcwsRq8QtycxvNeYSvg1 />
    </div>
  )
}

function Container4() {
  return (
    <div
      className="aspect-[13.329999923706055/10] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0"
      data-name="Container"
    >
      <Icon4 />
    </div>
  )
}

function Icon3() {
  return (
    <div
      className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0"
      data-name="Icon"
    >
      <Container4 />
    </div>
  )
}

function Lg1() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="LG"
    >
      <Icon3 />
    </div>
  )
}

function CU6Yacp6C42TcwsRq8QtycxvNeYSvg2() {
  return (
    <div
      className="h-[9.998px] relative shrink-0 w-[13.33px]"
      data-name="cU6Yacp6C42TCWSRq8qtycxvNeY.svg"
    />
  )
}

function Icon6() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip relative w-full"
      data-name="Icon"
    >
      <CU6Yacp6C42TcwsRq8QtycxvNeYSvg2 />
    </div>
  )
}

function Container5() {
  return (
    <div
      className="aspect-[13.329999923706055/10] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0"
      data-name="Container"
    >
      <Icon6 />
    </div>
  )
}

function Icon5() {
  return (
    <div
      className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0"
      data-name="Icon"
    >
      <Container5 />
    </div>
  )
}

function Lg2() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="LG"
    >
      <Icon5 />
    </div>
  )
}

function CU6Yacp6C42TcwsRq8QtycxvNeYSvg3() {
  return (
    <div
      className="h-[9.998px] relative shrink-0 w-[13.33px]"
      data-name="cU6Yacp6C42TCWSRq8qtycxvNeY.svg"
    />
  )
}

function Icon8() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip relative w-full"
      data-name="Icon"
    >
      <CU6Yacp6C42TcwsRq8QtycxvNeYSvg3 />
    </div>
  )
}

function Container6() {
  return (
    <div
      className="aspect-[13.329999923706055/10] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0"
      data-name="Container"
    >
      <Icon8 />
    </div>
  )
}

function Icon7() {
  return (
    <div
      className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0"
      data-name="Icon"
    >
      <Container6 />
    </div>
  )
}

function Lg3() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="LG"
    >
      <Icon7 />
    </div>
  )
}

function List() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 right-[-0.25px] top-[96.81px]"
      data-name="List"
    >
      <Lg />
      <Lg1 />
      <Lg2 />
      <Lg3 />
    </div>
  )
}

function TitleDescription() {
  return (
    <div
      className="col-1 h-[314.06px] justify-self-stretch relative row-1 self-start shrink-0"
      data-name="Title/Description"
    >
      <Heading />
      <List />
    </div>
  )
}

function Bottom2() {
  return (
    <div
      className="col-2 h-[100.39px] justify-self-stretch relative row-1 self-start shrink-0"
      data-name="Bottom"
    />
  )
}

function Content3() {
  return (
    <div
      className="bg-black flex-[1_0_0] grid grid-cols-[__minmax(0,1fr)_minmax(0,0.60fr)] grid-rows-[_314.06px] min-h-px overflow-clip pb-[30px] pt-[90px] px-[30px] relative rounded-[24px] w-full"
      data-name="Content"
    >
      <BgItem1 />
      <TitleDescription />
      <Bottom2 />
    </div>
  )
}

function Bottom1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col h-full items-center min-w-px overflow-clip p-[6px] relative rounded-[30px]"
      data-name="Bottom"
    >
      <Content3 />
      <div
        className="absolute border border-[#dde5ed] border-solid inset-0 rounded-[30px]"
        data-name="Border"
      />
    </div>
  )
}

function BgItem() {
  return (
    <div
      className="absolute content-stretch flex inset-[-6px] items-center justify-center overflow-clip"
      data-name="BG Item"
    >
      <Bottom1 />
    </div>
  )
}

function Heading1() {
  return (
    <div
      className="absolute h-[77.605px] left-0 right-[-0.25px] top-[-0.8px]"
      data-name="Heading 3"
    />
  )
}

function CU6Yacp6C42TcwsRq8QtycxvNeYSvg4() {
  return (
    <div
      className="h-[9.998px] relative shrink-0 w-[13.33px]"
      data-name="cU6Yacp6C42TCWSRq8qtycxvNeY.svg"
    />
  )
}

function Icon10() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip relative w-full"
      data-name="Icon"
    >
      <CU6Yacp6C42TcwsRq8QtycxvNeYSvg4 />
    </div>
  )
}

function Container7() {
  return (
    <div
      className="aspect-[13.329999923706055/10] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0"
      data-name="Container"
    >
      <Icon10 />
    </div>
  )
}

function Icon9() {
  return (
    <div
      className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0"
      data-name="Icon"
    >
      <Container7 />
    </div>
  )
}

function Lg4() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="LG"
    >
      <Icon9 />
    </div>
  )
}

function CU6Yacp6C42TcwsRq8QtycxvNeYSvg5() {
  return (
    <div
      className="h-[9.998px] relative shrink-0 w-[13.33px]"
      data-name="cU6Yacp6C42TCWSRq8qtycxvNeY.svg"
    />
  )
}

function Icon12() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip relative w-full"
      data-name="Icon"
    >
      <CU6Yacp6C42TcwsRq8QtycxvNeYSvg5 />
    </div>
  )
}

function Container8() {
  return (
    <div
      className="aspect-[13.329999923706055/10] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0"
      data-name="Container"
    >
      <Icon12 />
    </div>
  )
}

function Icon11() {
  return (
    <div
      className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0"
      data-name="Icon"
    >
      <Container8 />
    </div>
  )
}

function Lg5() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="LG"
    >
      <Icon11 />
    </div>
  )
}

function CU6Yacp6C42TcwsRq8QtycxvNeYSvg6() {
  return (
    <div
      className="h-[9.998px] relative shrink-0 w-[13.33px]"
      data-name="cU6Yacp6C42TCWSRq8qtycxvNeY.svg"
    />
  )
}

function Icon14() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip relative w-full"
      data-name="Icon"
    >
      <CU6Yacp6C42TcwsRq8QtycxvNeYSvg6 />
    </div>
  )
}

function Container9() {
  return (
    <div
      className="aspect-[13.329999923706055/10] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0"
      data-name="Container"
    >
      <Icon14 />
    </div>
  )
}

function Icon13() {
  return (
    <div
      className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0"
      data-name="Icon"
    >
      <Container9 />
    </div>
  )
}

function Lg6() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="LG"
    >
      <Icon13 />
    </div>
  )
}

function CU6Yacp6C42TcwsRq8QtycxvNeYSvg7() {
  return (
    <div
      className="h-[9.998px] relative shrink-0 w-[13.33px]"
      data-name="cU6Yacp6C42TCWSRq8qtycxvNeY.svg"
    />
  )
}

function Icon16() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip relative w-full"
      data-name="Icon"
    >
      <CU6Yacp6C42TcwsRq8QtycxvNeYSvg7 />
    </div>
  )
}

function Container10() {
  return (
    <div
      className="aspect-[13.329999923706055/10] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0"
      data-name="Container"
    >
      <Icon16 />
    </div>
  )
}

function Icon15() {
  return (
    <div
      className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0"
      data-name="Icon"
    >
      <Container10 />
    </div>
  )
}

function Lg7() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="LG"
    >
      <Icon15 />
    </div>
  )
}

function List1() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 right-[-0.25px] top-[96.81px]"
      data-name="List"
    >
      <Lg4 />
      <Lg5 />
      <Lg6 />
      <Lg7 />
    </div>
  )
}

function TitleDescription1() {
  return (
    <div
      className="col-1 h-[314.06px] justify-self-stretch relative row-1 self-start shrink-0"
      data-name="Title/Description"
    >
      <Heading1 />
      <List1 />
    </div>
  )
}

function Bottom3() {
  return (
    <div
      className="col-2 h-[100.39px] justify-self-stretch relative row-1 self-start shrink-0"
      data-name="Bottom"
    />
  )
}

function Content2() {
  return (
    <div
      className="bg-black flex-[1_0_0] grid grid-cols-[__minmax(0,1fr)_minmax(0,0.60fr)] grid-rows-[_314.06px] min-h-px overflow-clip pb-[30px] pt-[90px] px-[30px] relative rounded-[24px] w-full"
      data-name="Content"
    >
      <BgItem />
      <TitleDescription1 />
      <Bottom3 />
    </div>
  )
}

function Bottom() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[471px] items-center left-0 overflow-clip p-[6px] right-0 rounded-[30px] top-[115px]"
      data-name="Bottom"
    >
      <Content2 />
      <div
        className="absolute border border-[#dde5ed] border-solid inset-0 rounded-[30px]"
        data-name="Border"
      />
    </div>
  )
}

function Container12() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15.1px] text-black whitespace-nowrap">
        <p className="leading-[20.8px]">Journel</p>
      </div>
    </div>
  )
}

function Container11() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <Container12 />
    </div>
  )
}

function Before() {
  return (
    <div
      className="absolute content-stretch flex inset-[0_383.14px_0_0] items-end justify-end pb-[20px] pr-[20px] rounded-br-[20px]"
      data-name="Before"
    >
      <div
        className="absolute border-[#dde5ed] border-b border-r border-solid inset-[0_-0.14px_3px_0] rounded-br-[20px]"
        data-name="Border"
      />
      <Container11 />
    </div>
  )
}

function Container14() {
  return (
    <div className="absolute flex items-center justify-center left-[-44.74px] size-[182.5px] top-[-44.74px]">
      <div className="flex-none rotate-[60.16deg]">
        <div
          className="blur-[3.183px] relative rounded-[66.851px] size-[133.702px]"
          data-name="Container"
        />
      </div>
    </div>
  )
}

function Container13() {
  return (
    <div className="absolute flex items-center justify-center left-[18px] size-[93.155px] top-[51.4px]">
      <div className="flex-none rotate-[0.09deg]">
        <div
          className="overflow-clip relative rounded-[46.507px] shadow-[0px_8.859px_19.932px_-4.429px_#6577b1,0px_0px_31.005px_-2.215px_#8fb1df] size-[93.014px]"
          data-name="Container"
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none rounded-[46.507px]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 93.014 93.014' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -9.3478 -9.3478 0 29.765 24.184)'><stop stop-color='rgba(255,255,255,0.95)' offset='0'/><stop stop-color='rgba(175,224,231,0.975)' offset='0.04'/><stop stop-color='rgba(135,208,218,0.9875)' offset='0.06'/><stop stop-color='rgba(95,192,206,1)' offset='0.08'/><stop stop-color='rgba(111,180,215,1)' offset='0.21'/><stop stop-color='rgba(127,170,224,1)' offset='0.34'/><stop stop-color='rgba(132,165,228,1)' offset='0.64'/><stop stop-color='rgba(145,155,236,1)' offset='0.82'/><stop stop-color='rgba(152,151,241,1)' offset='1'/></radialGradient></defs></svg>\")",
            }}
          />
          <Container14 />
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-6.644px_-6.644px_15.502px_0px_rgba(20,0,40,0.75),inset_5.315px_5.315px_13.288px_0px_rgba(255,255,255,0.28)]" />
        </div>
      </div>
    </div>
  )
}

function Vector() {
  return (
    <div
      className="h-[160px] overflow-clip relative shrink-0 w-full"
      data-name="Vector"
    >
      <Container13 />
    </div>
  )
}

function Shadow() {
  return (
    <div
      className="-translate-x-1/2 absolute content-stretch drop-shadow-[0px_7px_4.5px_rgba(0,0,0,0.3),0px_2px_1px_rgba(0,0,0,0.2)] flex flex-col items-start justify-center left-[calc(50%+20.32px)] overflow-clip top-[-19px] w-[130px]"
      data-name="Shadow"
    >
      <Vector />
    </div>
  )
}

function Center() {
  return (
    <div
      className="-translate-x-1/2 absolute bottom-[-42px] left-[calc(50%-18.64px)] top-[-42px] w-[89px]"
      data-name="Center"
    >
      <Shadow />
    </div>
  )
}

function Container16() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic opacity-38 relative shrink-0 text-[#1d1d1d] text-[14.9px] whitespace-nowrap">
        <p className="leading-[20.8px]">Wellness tool</p>
      </div>
    </div>
  )
}

function Container15() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <Container16 />
    </div>
  )
}

function After() {
  return (
    <div
      className="absolute content-stretch flex inset-[0_0_0_383.14px] items-end pb-[20px] pl-[20px] rounded-bl-[20px]"
      data-name="After"
    >
      <div
        className="absolute border-[#dde5ed] border-b border-l border-solid inset-[0_0_7px_-0.14px] rounded-bl-[20px]"
        data-name="Border"
      />
      <Container15 />
    </div>
  )
}

function Top() {
  return (
    <div
      className="absolute h-[90px] left-[50px] right-[50px] top-0"
      data-name="Top"
    >
      <Before />
      <div
        className="absolute bg-white bottom-0 h-px left-[50px] right-[50px]"
        data-name="White Line"
      />
      <div
        className="absolute bg-gradient-to-b from-white h-[45px] left-[150px] to-[rgba(255,255,255,0)] top-0 w-[300px]"
        data-name="BG Overlay Top"
      />
      <Center />
      <div className="absolute h-[86.5px] left-[232px] top-[-3.87px] w-[25px]">
        <div className="absolute inset-[1.2%_3.8%_0.78%_3.39%]">
          <svg
            className="block size-full"
            fill="none"
            height="84.7831"
            preserveAspectRatio="none"
            viewBox="0 0 23.2015 84.7831"
            width="23.2015"
          >
            <path
              d={svgPaths.p278ee200}
              fill="url(#paint0_linear_0_11)"
              id="Vector 68"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_0_11"
                x1="-0.848731"
                x2="24.1513"
                y1="45.99"
                y2="45.99"
              >
                <stop stopColor="#5BC3CC" />
                <stop offset="0.306997" stopColor="#7EAAE0" />
                <stop offset="1" stopColor="#9896F1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <After />
    </div>
  )
}

function AfterAfter() {
  return (
    <div
      className="h-[560px] relative shrink-0 w-[700px]"
      data-name="After → After"
    >
      <Bottom />
      <Top />
    </div>
  )
}

function Container1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <AfterAfter />
    </div>
  )
}

function Top1() {
  return (
    <div
      className="content-stretch flex flex-col h-[58px] items-center px-[30px] relative shrink-0 w-full"
      data-name="Top"
    />
  )
}

function Content1() {
  return (
    <div
      className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[50px] items-center left-0 right-0 top-[calc(50%+141.93px)]"
      data-name="Content"
    >
      <Container1 />
      <Top1 />
    </div>
  )
}

function Frame23() {
  return (
    <div className="absolute h-[951.87px] left-[-16px] top-[60px] w-[1920px]">
      <Frame22 />
      <Content1 />
    </div>
  )
}

function Frame1() {
  return (
    <div className="absolute h-[91.161px] left-[2.97px] top-[-16.84px] w-[90.47px]" />
  )
}

function Svg() {
  return <div className="relative shrink-0 size-[23.409px]" data-name="SVG" />
}

function OverlayBorder() {
  return (
    <div className="absolute flex items-center justify-center left-[3.68px] size-[54.738px] top-[3.65px]">
      <div className="flex-none rotate-[89.88deg]">
        <div
          className="bg-[rgba(168,85,247,0.1)] border-[0.975px] border-[rgba(168,85,247,0.3)] border-solid content-stretch flex items-center justify-center relative rounded-[9752.95px] size-[54.622px]"
          data-name="Overlay+Border"
        >
          <div
            className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] border-[#e91e63] border-[0.975px] border-solid left-1/2 rounded-[9752.949px] shadow-[0px_0px_27.311px_-9.754px_rgba(168,85,247,0.6)] size-[54.622px] top-[-0.97px]"
            data-name="Overlay+Shadow"
          />
          <Svg />
        </div>
      </div>
    </div>
  )
}

function Frame() {
  return (
    <div className="absolute flex items-center justify-center left-[11.71px] size-[67.471px] top-[-20.24px]">
      <div className="flex-none rotate-[0.12deg]">
        <div className="border-[#e91e63] border-[2.762px] border-solid relative rounded-[33.664px] size-[67.328px]">
          <div className="absolute flex h-[46.12px] items-center justify-center left-[50.62px] top-[0.07px] w-[16.269px]">
            <div className="flex-none rotate-[-0.72deg]">
              <div className="h-[45.926px] relative w-[15.692px]">
                <div className="absolute inset-[-0.63%_-2.21%_-0.29%_-1.19%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    height="46.3466"
                    preserveAspectRatio="none"
                    viewBox="0 0 16.2259 46.3466"
                    width="16.2259"
                  >
                    <path
                      d={svgPaths.pf5e4ec0}
                      id="Vector 14"
                      stroke="url(#paint0_linear_0_8)"
                      strokeWidth="0.690611"
                    />
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_0_8"
                        x1="0.187243"
                        x2="17.6873"
                        y1="14.8952"
                        y2="17.0715"
                      >
                        <stop stopColor="#E91E63" />
                        <stop offset="1" stopColor="#9C27B0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[43.317px] items-center justify-center left-[-15.54px] top-[24.9px] w-[43.817px]">
            <div className="-scale-y-100 flex-none rotate-[134.33deg]">
              <div className="h-[45.926px] relative w-[15.692px]">
                <div className="absolute inset-[-0.63%_-2.21%_-0.29%_-1.19%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    height="46.3466"
                    preserveAspectRatio="none"
                    viewBox="0 0 16.2259 46.3466"
                    width="16.2259"
                  >
                    <path
                      d={svgPaths.pf5e4ec0}
                      id="Vector 15"
                      stroke="url(#paint0_linear_0_7)"
                      strokeWidth="0.690611"
                    />
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_0_7"
                        x1="0.187243"
                        x2="17.6873"
                        y1="14.8952"
                        y2="17.0715"
                      >
                        <stop stopColor="#E91E63" />
                        <stop offset="1" stopColor="#9C27B0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <OverlayBorder />
        </div>
      </div>
    </div>
  )
}

function Icon17() {
  return (
    <div className="absolute flex h-[94.318px] items-center justify-center left-0 top-0 w-[53.619px]">
      <div className="-rotate-90 flex-none">
        <div className="h-[53.619px] relative w-[94.318px]" data-name="Icon">
          <Frame1 />
          <Frame />
        </div>
      </div>
    </div>
  )
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[105.98px] top-[27.04px] w-[123.638px]">
      <p
        className="[word-break:break-word] bg-clip-text font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[18.992px] relative shrink-0 text-[14.313px] text-[transparent] w-[117.75px]"
        style={{
          backgroundImage:
            "linear-gradient(156.0909566670544deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)",
        }}
      >
        Lorem ipsum
      </p>
    </div>
  )
}

function Frame13() {
  return (
    <div className="absolute h-[72.642px] left-[53.62px] rounded-[45.09px] top-[10.84px] w-[303.742px]">
      <div
        className="absolute backdrop-blur-[4.771px] border-[2.258px] border-solid border-white h-[69.255px] left-[3.76px] rounded-[36.509px] top-[3.76px] w-[296.214px]"
        style={{
          backgroundImage:
            "linear-gradient(147.28500806174944deg, rgba(233, 30, 99, 0) 8.4861%, rgba(156, 39, 176, 0.03) 91.514%)",
        }}
      />
      <div className="absolute h-[42.908px] left-[-0.75px] top-0 w-[96.354px]">
        <div className="absolute inset-[-0.44%_0_0_-0.2%]">
          <svg
            className="block size-full"
            fill="none"
            height="43.096"
            preserveAspectRatio="none"
            viewBox="0 0 96.5426 43.096"
            width="96.5426"
          >
            <path
              d={svgPaths.p1314e0ca}
              id="Vector 45"
              stroke="url(#paint0_linear_0_6)"
              strokeWidth="0.376384"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_0_6"
                x1="0.188192"
                x2="96.5426"
                y1="23.5179"
                y2="23.5179"
              >
                <stop stopColor="#5BC3CC" />
                <stop offset="0.306997" stopColor="#7EAAE0" />
                <stop offset="1" stopColor="#9896F1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[42.531px] items-center justify-center left-[245.78px] top-[35.38px] w-[57.21px]">
        <div className="flex-none rotate-180">
          <div className="h-[42.531px] relative w-[57.21px]">
            <div className="absolute inset-[-0.44%_0_0_-0.33%]">
              <svg
                className="block size-full"
                fill="none"
                height="42.7196"
                preserveAspectRatio="none"
                viewBox="0 0 57.3986 42.7196"
                width="57.3986"
              >
                <path
                  d={svgPaths.p29744080}
                  id="Vector 46"
                  opacity="0.19"
                  stroke="url(#paint0_linear_0_10)"
                  strokeWidth="0.376384"
                />
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_0_10"
                    x1="28.7934"
                    x2="-0.540077"
                    y1="42.7196"
                    y2="5.65556"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#020618" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame8 />
    </div>
  )
}

function Frame18() {
  return (
    <div className="absolute flex h-[151.05px] items-center justify-center left-[1346.62px] top-[522px] w-[367.929px]">
      <div className="flex-none rotate-[-9.34deg]">
        <div className="h-[94.318px] relative w-[357.361px]">
          <Icon17 />
          <Frame13 />
        </div>
      </div>
    </div>
  )
}

function Frame2() {
  return (
    <div className="absolute h-[91.161px] left-[2.97px] top-[-16.84px] w-[90.47px]" />
  )
}

function Svg2() {
  return (
    <div
      className="absolute inset-[0.44%_0.65%_0.05%_-0.16%]"
      data-name="SVG"
    />
  )
}

function Svg1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[23.409px]"
      data-name="SVG"
    >
      <Svg2 />
    </div>
  )
}

function OverlayBorder1() {
  return (
    <div className="absolute flex items-center justify-center left-[3.68px] size-[54.738px] top-[3.65px]">
      <div className="flex-none rotate-[89.88deg]">
        <div
          className="bg-[rgba(168,85,247,0.1)] border-[0.975px] border-[rgba(168,85,247,0.3)] border-solid content-stretch flex items-center justify-center relative rounded-[9752.95px] size-[54.622px]"
          data-name="Overlay+Border"
        >
          <div
            className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] border-[#e91e63] border-[0.975px] border-solid left-1/2 rounded-[9752.949px] shadow-[0px_0px_27.311px_-9.754px_rgba(168,85,247,0.6)] size-[54.622px] top-[-0.97px]"
            data-name="Overlay+Shadow"
          />
          <Svg1 />
        </div>
      </div>
    </div>
  )
}

function Frame3() {
  return (
    <div className="absolute flex items-center justify-center left-[11.71px] size-[67.471px] top-[-20.24px]">
      <div className="flex-none rotate-[0.12deg]">
        <div className="border-[#e91e63] border-[2.762px] border-solid relative rounded-[33.664px] size-[67.328px]">
          <div className="absolute flex h-[46.12px] items-center justify-center left-[50.62px] top-[0.07px] w-[16.269px]">
            <div className="flex-none rotate-[-0.72deg]">
              <div className="h-[45.926px] relative w-[15.692px]">
                <div className="absolute inset-[-0.63%_-2.21%_-0.29%_-1.19%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    height="46.3466"
                    preserveAspectRatio="none"
                    viewBox="0 0 16.2259 46.3466"
                    width="16.2259"
                  >
                    <path
                      d={svgPaths.pf5e4ec0}
                      id="Vector 14"
                      stroke="url(#paint0_linear_0_8)"
                      strokeWidth="0.690611"
                    />
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_0_8"
                        x1="0.187243"
                        x2="17.6873"
                        y1="14.8952"
                        y2="17.0715"
                      >
                        <stop stopColor="#E91E63" />
                        <stop offset="1" stopColor="#9C27B0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[43.317px] items-center justify-center left-[-15.53px] top-[24.9px] w-[43.817px]">
            <div className="-scale-y-100 flex-none rotate-[134.33deg]">
              <div className="h-[45.926px] relative w-[15.692px]">
                <div className="absolute inset-[-0.63%_-2.21%_-0.29%_-1.19%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    height="46.3466"
                    preserveAspectRatio="none"
                    viewBox="0 0 16.2259 46.3466"
                    width="16.2259"
                  >
                    <path
                      d={svgPaths.pf5e4ec0}
                      id="Vector 15"
                      stroke="url(#paint0_linear_0_7)"
                      strokeWidth="0.690611"
                    />
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_0_7"
                        x1="0.187243"
                        x2="17.6873"
                        y1="14.8952"
                        y2="17.0715"
                      >
                        <stop stopColor="#E91E63" />
                        <stop offset="1" stopColor="#9C27B0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <OverlayBorder1 />
        </div>
      </div>
    </div>
  )
}

function Icon18() {
  return (
    <div className="flex h-[94.318px] items-center justify-center relative shrink-0 w-[53.619px]">
      <div className="-rotate-90 flex-none">
        <div className="h-[53.619px] relative w-[94.318px]" data-name="Icon">
          <Frame2 />
          <Frame3 />
        </div>
      </div>
    </div>
  )
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+31.7px)] top-[27.04px] w-[123.638px]">
      <p
        className="[word-break:break-word] bg-clip-text font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[18.992px] relative shrink-0 text-[14.313px] text-[transparent] w-[117.75px]"
        style={{
          backgroundImage:
            "linear-gradient(156.0909566670544deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)",
        }}
      >
        Lorem i
      </p>
    </div>
  )
}

function Frame12() {
  return (
    <div className="h-[72.642px] relative rounded-[45.09px] shrink-0 w-[303.742px]">
      <div
        className="absolute backdrop-blur-[4.771px] border-[2.258px] border-solid border-white h-[69.255px] left-[3.76px] rounded-[36.509px] top-[3.76px] w-[296.214px]"
        style={{
          backgroundImage:
            "linear-gradient(147.28500806174944deg, rgba(233, 30, 99, 0) 8.4861%, rgba(156, 39, 176, 0.03) 91.514%)",
        }}
      />
      <div className="absolute h-[42.908px] left-[-0.75px] top-0 w-[96.354px]">
        <div className="absolute inset-[-0.44%_0_0_-0.2%]">
          <svg
            className="block size-full"
            fill="none"
            height="43.096"
            preserveAspectRatio="none"
            viewBox="0 0 96.5426 43.096"
            width="96.5426"
          >
            <path
              d={svgPaths.p1314e0ca}
              id="Vector 45"
              stroke="url(#paint0_linear_0_6)"
              strokeWidth="0.376384"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_0_6"
                x1="0.188192"
                x2="96.5426"
                y1="23.5179"
                y2="23.5179"
              >
                <stop stopColor="#5BC3CC" />
                <stop offset="0.306997" stopColor="#7EAAE0" />
                <stop offset="1" stopColor="#9896F1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[42.531px] items-center justify-center left-[245.78px] top-[35.38px] w-[57.21px]">
        <div className="flex-none rotate-180">
          <div className="h-[42.531px] relative w-[57.21px]">
            <div className="absolute inset-[-0.44%_0_0_-0.33%]">
              <svg
                className="block size-full"
                fill="none"
                height="42.7196"
                preserveAspectRatio="none"
                viewBox="0 0 57.3986 42.7196"
                width="57.3986"
              >
                <path
                  d={svgPaths.p29744080}
                  id="Vector 46"
                  opacity="0.19"
                  stroke="url(#paint0_linear_0_10)"
                  strokeWidth="0.376384"
                />
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_0_10"
                    x1="28.7934"
                    x2="-0.540077"
                    y1="42.7196"
                    y2="5.65556"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#020618" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame9 />
    </div>
  )
}

function Frame16() {
  return (
    <div className="absolute flex h-[97.453px] items-center justify-center left-[1401.43px] top-[668.14px] w-[358.176px]">
      <div className="flex-none rotate-[-0.5deg]">
        <div className="content-stretch flex items-center relative">
          <Icon18 />
          <Frame12 />
        </div>
      </div>
    </div>
  )
}

function Frame4() {
  return (
    <div className="absolute h-[91.161px] left-[2.97px] top-[-16.84px] w-[90.47px]" />
  )
}

function Svg4() {
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[21.688px] top-[calc(50%+0.01px)]"
      data-name="SVG"
    />
  )
}

function Svg3() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[23.409px]"
      data-name="SVG"
    >
      <Svg4 />
    </div>
  )
}

function OverlayBorder2() {
  return (
    <div className="absolute flex items-center justify-center left-[3.68px] size-[54.738px] top-[3.65px]">
      <div className="flex-none rotate-[89.88deg]">
        <div
          className="bg-[rgba(168,85,247,0.1)] border-[0.975px] border-[rgba(168,85,247,0.3)] border-solid content-stretch flex items-center justify-center relative rounded-[9752.95px] size-[54.622px]"
          data-name="Overlay+Border"
        >
          <div
            className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] border-[#e91e63] border-[0.975px] border-solid left-1/2 rounded-[9752.949px] shadow-[0px_0px_27.311px_-9.754px_rgba(168,85,247,0.6)] size-[54.622px] top-[-0.97px]"
            data-name="Overlay+Shadow"
          />
          <Svg3 />
        </div>
      </div>
    </div>
  )
}

function Frame5() {
  return (
    <div className="absolute flex items-center justify-center left-[11.71px] size-[67.471px] top-[-20.24px]">
      <div className="flex-none rotate-[0.12deg]">
        <div className="border-[#e91e63] border-[2.762px] border-solid relative rounded-[33.664px] size-[67.328px]">
          <div className="absolute flex h-[46.12px] items-center justify-center left-[50.62px] top-[0.07px] w-[16.269px]">
            <div className="flex-none rotate-[-0.72deg]">
              <div className="h-[45.926px] relative w-[15.692px]">
                <div className="absolute inset-[-0.63%_-2.21%_-0.29%_-1.19%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    height="46.3466"
                    preserveAspectRatio="none"
                    viewBox="0 0 16.2259 46.3466"
                    width="16.2259"
                  >
                    <path
                      d={svgPaths.pf5e4ec0}
                      id="Vector 14"
                      stroke="url(#paint0_linear_0_4)"
                      strokeWidth="0.690611"
                    />
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_0_4"
                        x1="0.187243"
                        x2="17.6873"
                        y1="14.8952"
                        y2="17.0715"
                      >
                        <stop stopColor="#E91E63" />
                        <stop offset="1" stopColor="#9C27B0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[43.317px] items-center justify-center left-[-15.54px] top-[24.9px] w-[43.817px]">
            <div className="-scale-y-100 flex-none rotate-[134.33deg]">
              <div className="h-[45.926px] relative w-[15.692px]">
                <div className="absolute inset-[-0.63%_-2.21%_-0.29%_-1.19%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    height="46.3466"
                    preserveAspectRatio="none"
                    viewBox="0 0 16.2259 46.3466"
                    width="16.2259"
                  >
                    <path
                      d={svgPaths.pf5e4ec0}
                      id="Vector 15"
                      stroke="url(#paint0_linear_0_7)"
                      strokeWidth="0.690611"
                    />
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_0_7"
                        x1="0.187243"
                        x2="17.6873"
                        y1="14.8952"
                        y2="17.0715"
                      >
                        <stop stopColor="#E91E63" />
                        <stop offset="1" stopColor="#9C27B0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <OverlayBorder2 />
        </div>
      </div>
    </div>
  )
}

function Icon19() {
  return (
    <div className="flex h-[94.318px] items-center justify-center relative shrink-0 w-[53.619px]">
      <div className="-rotate-90 flex-none">
        <div className="h-[53.619px] relative w-[94.318px]" data-name="Icon">
          <Frame4 />
          <Frame5 />
        </div>
      </div>
    </div>
  )
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[124.85px] top-[27.04px] w-[123.638px]">
      <div className="flex h-[23.187px] items-center justify-center relative shrink-0 w-[118.353px]">
        <div className="-scale-y-100 flex-none rotate-[-177.96deg]">
          <p
            className="[word-break:break-word] bg-clip-text font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[18.992px] relative text-[14.313px] text-[transparent] w-[117.75px]"
            style={{
              backgroundImage:
                "linear-gradient(156.0909566670544deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)",
            }}
          >
            Lore
          </p>
        </div>
      </div>
    </div>
  )
}

function Frame14() {
  return (
    <div className="h-[72.642px] relative rounded-[45.09px] shrink-0 w-[303.742px]">
      <div
        className="absolute backdrop-blur-[4.771px] border-[2.258px] border-solid border-white h-[69.255px] left-[3.76px] rounded-[36.509px] top-[3.76px] w-[296.214px]"
        style={{
          backgroundImage:
            "linear-gradient(147.28500806174944deg, rgba(233, 30, 99, 0) 8.4861%, rgba(156, 39, 176, 0.03) 91.514%)",
        }}
      />
      <div className="absolute h-[42.908px] left-[-0.75px] top-0 w-[96.354px]">
        <div className="absolute inset-[-0.44%_0_0_-0.2%]">
          <svg
            className="block size-full"
            fill="none"
            height="43.096"
            preserveAspectRatio="none"
            viewBox="0 0 96.5426 43.096"
            width="96.5426"
          >
            <path
              d={svgPaths.p1314e0ca}
              id="Vector 45"
              stroke="url(#paint0_linear_0_5)"
              strokeWidth="0.376384"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_0_5"
                x1="0.188192"
                x2="96.5426"
                y1="23.5179"
                y2="23.5179"
              >
                <stop stopColor="#5BC3CC" />
                <stop offset="0.306997" stopColor="#7EAAE0" />
                <stop offset="1" stopColor="#9896F1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[42.531px] items-center justify-center left-[245.78px] top-[35.38px] w-[57.21px]">
        <div className="flex-none rotate-180">
          <div className="h-[42.531px] relative w-[57.21px]">
            <div className="absolute inset-[-0.44%_0_0_-0.33%]">
              <svg
                className="block size-full"
                fill="none"
                height="42.7196"
                preserveAspectRatio="none"
                viewBox="0 0 57.3986 42.7196"
                width="57.3986"
              >
                <path
                  d={svgPaths.p29744080}
                  id="Vector 46"
                  opacity="0.19"
                  stroke="url(#paint0_linear_0_10)"
                  strokeWidth="0.376384"
                />
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_0_10"
                    x1="28.7934"
                    x2="-0.540077"
                    y1="42.7196"
                    y2="5.65556"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#020618" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame10 />
    </div>
  )
}

function Frame17() {
  return (
    <div className="absolute flex h-[121.839px] items-center justify-center left-[163px] top-[564.41px] w-[363.617px]">
      <div className="-scale-y-100 flex-none rotate-[175.54deg]">
        <div className="content-stretch flex items-center relative">
          <Icon19 />
          <Frame14 />
        </div>
      </div>
    </div>
  )
}

function Frame6() {
  return (
    <div className="absolute h-[91.161px] left-[2.97px] top-[-16.84px] w-[90.47px]" />
  )
}

function Svg6() {
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.23px)] size-[21.688px] top-[calc(50%+0.01px)]"
      data-name="SVG"
    />
  )
}

function Svg5() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[23.409px]"
      data-name="SVG"
    >
      <Svg6 />
    </div>
  )
}

function OverlayBorder3() {
  return (
    <div className="absolute flex items-center justify-center left-[3.68px] size-[54.738px] top-[3.65px]">
      <div className="flex-none rotate-[89.88deg]">
        <div
          className="bg-[rgba(168,85,247,0.1)] border-[0.975px] border-[rgba(168,85,247,0.3)] border-solid content-stretch flex items-center justify-center relative rounded-[9752.95px] size-[54.622px]"
          data-name="Overlay+Border"
        >
          <div
            className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] border-[#e91e63] border-[0.975px] border-solid left-1/2 rounded-[9752.949px] shadow-[0px_0px_27.311px_-9.754px_rgba(168,85,247,0.6)] size-[54.622px] top-[-0.97px]"
            data-name="Overlay+Shadow"
          />
          <Svg5 />
        </div>
      </div>
    </div>
  )
}

function Frame7() {
  return (
    <div className="absolute flex items-center justify-center left-[11.7px] size-[67.471px] top-[-20.24px]">
      <div className="flex-none rotate-[0.12deg]">
        <div className="border-[#e91e63] border-[2.762px] border-solid relative rounded-[33.664px] size-[67.328px]">
          <div className="absolute flex h-[46.12px] items-center justify-center left-[50.62px] top-[0.07px] w-[16.269px]">
            <div className="flex-none rotate-[-0.72deg]">
              <div className="h-[45.926px] relative w-[15.692px]">
                <div className="absolute inset-[-0.63%_-2.21%_-0.29%_-1.19%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    height="46.3466"
                    preserveAspectRatio="none"
                    viewBox="0 0 16.2259 46.3466"
                    width="16.2259"
                  >
                    <path
                      d={svgPaths.pf5e4ec0}
                      id="Vector 14"
                      stroke="url(#paint0_linear_0_8)"
                      strokeWidth="0.690611"
                    />
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_0_8"
                        x1="0.187243"
                        x2="17.6873"
                        y1="14.8952"
                        y2="17.0715"
                      >
                        <stop stopColor="#E91E63" />
                        <stop offset="1" stopColor="#9C27B0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[43.317px] items-center justify-center left-[-15.54px] top-[24.9px] w-[43.817px]">
            <div className="-scale-y-100 flex-none rotate-[134.33deg]">
              <div className="h-[45.926px] relative w-[15.692px]">
                <div className="absolute inset-[-0.63%_-2.21%_-0.29%_-1.19%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    height="46.3466"
                    preserveAspectRatio="none"
                    viewBox="0 0 16.2259 46.3466"
                    width="16.2259"
                  >
                    <path
                      d={svgPaths.pf5e4ec0}
                      id="Vector 15"
                      stroke="url(#paint0_linear_0_7)"
                      strokeWidth="0.690611"
                    />
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_0_7"
                        x1="0.187243"
                        x2="17.6873"
                        y1="14.8952"
                        y2="17.0715"
                      >
                        <stop stopColor="#E91E63" />
                        <stop offset="1" stopColor="#9C27B0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <OverlayBorder3 />
        </div>
      </div>
    </div>
  )
}

function Icon20() {
  return (
    <div className="flex h-[94.318px] items-center justify-center relative shrink-0 w-[53.619px]">
      <div className="-rotate-90 flex-none">
        <div className="h-[53.619px] relative w-[94.318px]" data-name="Icon">
          <Frame6 />
          <Frame7 />
        </div>
      </div>
    </div>
  )
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[124.85px] top-[27.04px] w-[123.638px]">
      <div className="flex h-[19.869px] items-center justify-center relative shrink-0 w-[117.888px]">
        <div className="-scale-y-100 flex-none rotate-[179.58deg]">
          <p
            className="[word-break:break-word] bg-clip-text font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[18.992px] relative text-[14.313px] text-[transparent] w-[117.75px]"
            style={{
              backgroundImage:
                "linear-gradient(156.0909566670544deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)",
            }}
          >
            Lore
          </p>
        </div>
      </div>
    </div>
  )
}

function Frame15() {
  return (
    <div className="h-[72.642px] relative rounded-[45.09px] shrink-0 w-[303.742px]">
      <div
        className="absolute backdrop-blur-[4.771px] border-[2.258px] border-solid border-white h-[69.255px] left-[3.76px] rounded-[36.509px] top-[3.76px] w-[296.214px]"
        style={{
          backgroundImage:
            "linear-gradient(147.28500806174944deg, rgba(233, 30, 99, 0) 8.4861%, rgba(156, 39, 176, 0.03) 91.514%)",
        }}
      />
      <div className="absolute h-[42.908px] left-[-0.75px] top-0 w-[96.354px]">
        <div className="absolute inset-[-0.44%_0_0_-0.2%]">
          <svg
            className="block size-full"
            fill="none"
            height="43.096"
            preserveAspectRatio="none"
            viewBox="0 0 96.5426 43.096"
            width="96.5426"
          >
            <path
              d={svgPaths.p1314e0ca}
              id="Vector 45"
              stroke="url(#paint0_linear_0_6)"
              strokeWidth="0.376384"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_0_6"
                x1="0.188192"
                x2="96.5426"
                y1="23.5179"
                y2="23.5179"
              >
                <stop stopColor="#5BC3CC" />
                <stop offset="0.306997" stopColor="#7EAAE0" />
                <stop offset="1" stopColor="#9896F1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[42.531px] items-center justify-center left-[245.78px] top-[35.38px] w-[57.21px]">
        <div className="flex-none rotate-180">
          <div className="h-[42.531px] relative w-[57.21px]">
            <div className="absolute inset-[-0.44%_0_0_-0.33%]">
              <svg
                className="block size-full"
                fill="none"
                height="42.7196"
                preserveAspectRatio="none"
                viewBox="0 0 57.3986 42.7196"
                width="57.3986"
              >
                <path
                  d={svgPaths.p29744080}
                  id="Vector 46"
                  opacity="0.19"
                  stroke="url(#paint0_linear_0_10)"
                  strokeWidth="0.376384"
                />
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_0_10"
                    x1="28.7934"
                    x2="-0.540077"
                    y1="42.7196"
                    y2="5.65556"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#020618" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame11 />
    </div>
  )
}

function Frame19() {
  return (
    <div className="absolute flex h-[131.854px] items-center justify-center left-[172.12px] top-[689.4px] w-[365.376px]">
      <div className="-scale-y-100 flex-none rotate-[-173.88deg]">
        <div className="content-stretch flex items-center relative">
          <Icon20 />
          <Frame15 />
        </div>
      </div>
    </div>
  )
}

export default function Component3NdSection() {
  return (
    <div className="bg-white relative size-full" data-name="3nd section">
      <Frame23 />
      <Frame18 />
      <Frame16 />
      <Frame17 />
      <Frame19 />
    </div>
  )
}
