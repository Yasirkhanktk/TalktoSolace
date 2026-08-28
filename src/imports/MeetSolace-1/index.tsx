import imgUseCaseImage from "./141fdb7bf66120704255629fbd3acc8cdb3d4bc6.png";
import imgContent from "./efecd8b2ced1ea351533f05753cd6733910d8c0f.png";
import imgContent1 from "./bc07016c8c4e3f240776b464f9521d286372372f.png";
import imgUseCaseImage1 from "./357e6fa693eebbf6f9fb3555348fd2b13af72fb4.png";
import imgAvatar from "./2ccd8c672594e6da94186349c234e9c6c4b23f45.png";

function Item() {
  return (
    <div className="absolute backdrop-blur-[3.384px] border-[#e91e63] border-[0.846px] border-solid content-stretch flex h-[35.529px] items-center justify-center left-[112.19px] px-[10.151px] py-[5.076px] rounded-[10.151px] top-[8.3px] w-[83.746px]" style={{ backgroundImage: "linear-gradient(130.62727750893833deg, rgba(233, 30, 99, 0.12) 8.4861%, rgba(156, 39, 176, 0.12) 91.514%)" }} data-name="Item">
      <div className="[word-break:break-word] bg-clip-text flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[9.39px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(144.2216002278426deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)" }}>
        <p className="leading-[15.227px]">Testimonials</p>
      </div>
    </div>
  );
}

function Container() {
  return <div className="h-[17.764px] relative shrink-0 w-full" data-name="Container" />;
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[331.601px]" data-name="Text">
      <Container />
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[9.571px]">
      <div className="-rotate-45 flex-none">
        <div className="content-stretch flex flex-col items-start justify-center relative size-[6.767px]">
          <div className="border-black border-r-[0.846px] border-solid border-t-[0.846px] flex-[1_0_0] min-h-px relative w-full" data-name="Border" />
        </div>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-1.41px)] size-[13.535px] top-[calc(50%-47.21px)]">
      <div className="flex-none rotate-45">
        <div className="content-stretch flex flex-col h-[9.571px] items-center relative" data-name="Icons">
          <Arrow />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[6.767px]" data-name="Icon">
      <Icons />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[121.813px] items-start overflow-clip relative shrink-0" data-name="Content">
      <Text />
      <Icon />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black text-center tracking-[-1.4381px] w-[364.592px]">
        <p className="text-[47.372px]">
          <span className="leading-[47.372px]">{`Platform `}</span>
          <span className="[word-break:break-word] bg-clip-text font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[47.372px] text-[transparent]" style={{ backgroundImage: "linear-gradient(144.40124444306673deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)" }}>
            Built for.....
          </span>
        </p>
      </div>
    </div>
  );
}

function LineAlignStretch() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Line:align-stretch">
      <Frame />
    </div>
  );
}

function LinkDark() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8.468px] items-start justify-center left-0 overflow-clip top-0" data-name="Link - Dark">
      <Content />
      <LineAlignStretch />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[131.118px] left-[-24px] top-[31.14px] w-[460.181px]">
      <LinkDark />
      <div className="absolute h-0 left-[102.17px] top-[131.12px] w-[48.218px]">
        <div className="absolute inset-[-2.11px_-4.39%]">
          <svg className="block size-full" fill="none" height="4.22961" preserveAspectRatio="none" viewBox="0 0 52.4471 4.22961" width="52.4471">
            <path d="M2.1148 2.1148H50.3323" id="Vector 63" stroke="url(#paint0_linear_0_4)" strokeLinecap="round" strokeWidth="4.22961" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_4" x1="2.1148" x2="2.29152" y1="2.43282" y2="5.5342">
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

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute h-[162px] left-1/2 top-[163px] w-[318px]">
      <Item />
      <Frame1 />
    </div>
  );
}

function UseCaseImage() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[28.406px] w-full" data-name="Use Case Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[28.406px]">
        <div className="absolute bg-[#b9b9b9] inset-0 rounded-[28.406px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[28.406px]">
          <img alt="" className="absolute h-[106.8%] left-0 max-w-none top-[-3.4%] w-full" src={imgUseCaseImage} />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[397.688px] items-start justify-center overflow-clip relative rounded-[28.406px] shrink-0 w-[359.813px]" data-name="Container">
      <UseCaseImage />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Container2 />
    </div>
  );
}

function BgImage() {
  return <div className="absolute inset-0 rounded-[28.406px]" style={{ backgroundImage: "linear-gradient(108.2270451944077deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)" }} data-name="BG Image" />;
}

function Heading() {
  return <div className="content-stretch flex flex-col h-[32.752px] items-start pb-[0.559px] relative shrink-0 w-full" data-name="Heading 3" />;
}

function Container4() {
  return <div className="h-[89.006px] relative shrink-0 w-full" data-name="Container" />;
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[5.691px] items-start pb-[28.406px] relative shrink-0 w-full" data-name="Top">
      <Heading />
      <Container4 />
    </div>
  );
}

function Heading1() {
  return <div className="h-[27.459px] relative shrink-0 w-full" data-name="Heading 4" />;
}

function Container5() {
  return <div className="h-[19.884px] relative shrink-0 w-full" data-name="Container" />;
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col gap-[5.672px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Heading1 />
      <Container5 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[114.752px] h-[378.75px] items-start overflow-clip pb-[28.406px] pt-[27.459px] px-[28.406px] relative rounded-[18.938px] shrink-0 w-full" data-name="Content">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[18.938px]">
        <div className="absolute bg-white inset-0 rounded-[18.938px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[18.938px]">
          <img alt="" className="absolute h-[106.8%] left-0 max-w-none top-[-3.4%] w-full" src={imgUseCaseImage} />
        </div>
        <div className="absolute backdrop-blur-[9.469px] inset-0 overflow-hidden rounded-[18.938px]">
          <img alt="" className="absolute h-[118.52%] left-0 max-w-none top-[-9.26%] w-full" src={imgContent} />
        </div>
      </div>
      <Top />
      <Bottom />
      <div className="absolute border-[0.947px] border-[rgba(255,255,255,0.3)] border-solid inset-0 rounded-[18.938px]" data-name="Border" />
    </div>
  );
}

function Desktop() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip p-[9.469px] relative rounded-[28.406px] w-full" data-name="Desktop">
      <BgImage />
      <Content2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[397.688px] items-start justify-center relative shrink-0 w-[359.813px]" data-name="Container">
      <Desktop />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Container3 />
    </div>
  );
}

function UseCaseImage1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[28.406px] w-full" data-name="Use Case Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[28.406px]">
        <div className="absolute bg-[#b1b1b1] inset-0 rounded-[28.406px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[28.406px]">
          <img alt="" className="absolute h-[106.8%] left-0 max-w-none top-[-3.4%] w-full" src={imgUseCaseImage} />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[397.688px] items-start justify-center overflow-clip relative rounded-[28.406px] shrink-0 w-[359.813px]" data-name="Container">
      <UseCaseImage1 />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Container6 />
    </div>
  );
}

function BgImage1() {
  return <div className="absolute inset-0 rounded-[28.406px]" style={{ backgroundImage: "linear-gradient(108.2270451944077deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)" }} data-name="BG Image" />;
}

function Heading2() {
  return <div className="content-stretch flex flex-col h-[32.752px] items-start pb-[0.559px] relative shrink-0 w-full" data-name="Heading 3" />;
}

function Top1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[28.406px] relative shrink-0 w-full" data-name="Top">
      <Heading2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[136.918px] h-[378.75px] items-start overflow-clip pb-[28.406px] pt-[27.459px] px-[28.406px] relative rounded-[18.938px] shrink-0 w-full" data-name="Content">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[18.938px]">
        <div className="absolute bg-white inset-0 rounded-[18.938px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[18.938px]">
          <img alt="" className="absolute h-[106.8%] left-0 max-w-none top-[-3.4%] w-full" src={imgUseCaseImage} />
        </div>
        <div className="absolute backdrop-blur-[9.469px] inset-0 overflow-hidden rounded-[18.938px]">
          <img alt="" className="absolute h-[106.67%] left-0 max-w-none top-[-3.33%] w-full" src={imgContent1} />
        </div>
      </div>
      <Top1 />
      <div className="absolute border-[0.947px] border-[rgba(255,255,255,0.3)] border-solid inset-0 rounded-[18.938px]" data-name="Border" />
    </div>
  );
}

function Desktop1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip p-[9.469px] relative rounded-[28.406px] w-full" data-name="Desktop">
      <BgImage1 />
      <Content3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-[397.688px] items-start justify-center relative shrink-0 w-[359.813px]" data-name="Container">
      <Desktop1 />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Container7 />
    </div>
  );
}

function UseCaseImage2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[28.406px] w-full" data-name="Use Case Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[28.406px]">
        <div className="absolute bg-[#b1b1b1] inset-0 rounded-[28.406px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[28.406px]">
          <img alt="" className="absolute h-[106.8%] left-0 max-w-none top-[-3.4%] w-full" src={imgUseCaseImage} />
        </div>
        <div className="absolute inset-0 overflow-hidden rounded-[28.406px]">
          <img alt="" className="absolute h-[106.6%] left-0 max-w-none top-[-3.3%] w-full" src={imgUseCaseImage1} />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col h-[397.688px] items-start justify-center overflow-clip relative rounded-[28.406px] shrink-0 w-[359.813px]" data-name="Container">
      <UseCaseImage2 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Container8 />
    </div>
  );
}

function BgImage2() {
  return <div className="absolute inset-0 rounded-[28.406px]" style={{ backgroundImage: "linear-gradient(108.2270451944077deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)" }} data-name="BG Image" />;
}

function Heading3() {
  return <div className="content-stretch flex flex-col h-[32.752px] items-start pb-[0.559px] relative shrink-0 w-full" data-name="Heading 3" />;
}

function Top2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[28.406px] relative shrink-0 w-full" data-name="Top">
      <Heading3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[136.918px] h-[378.75px] items-start overflow-clip pb-[28.406px] pt-[27.459px] px-[28.406px] relative rounded-[18.938px] shrink-0 w-full" data-name="Content">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[18.938px]">
        <div className="absolute bg-white inset-0 rounded-[18.938px]" />
        <div className="absolute backdrop-blur-[9.469px] inset-0 overflow-hidden rounded-[18.938px]">
          <img alt="" className="absolute h-[106.8%] left-0 max-w-none top-[-3.4%] w-full" src={imgUseCaseImage} />
        </div>
      </div>
      <Top2 />
      <div className="absolute border-[0.947px] border-[rgba(255,255,255,0.3)] border-solid inset-0 rounded-[18.938px]" data-name="Border" />
    </div>
  );
}

function Desktop2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip p-[9.469px] relative rounded-[28.406px] w-full" data-name="Desktop">
      <BgImage2 />
      <Content4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-[397.688px] items-start justify-center relative shrink-0 w-[359.813px]" data-name="Container">
      <Desktop2 />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Container9 />
    </div>
  );
}

function Desktop3() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px p-[9.469px] relative rounded-[28.406px] w-full" data-name="Desktop" />;
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col h-[397.688px] items-start justify-center relative shrink-0 w-[359.813px]" data-name="Container">
      <Desktop3 />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Container10 />
    </div>
  );
}

function Item8() {
  return <div className="h-[397.688px] relative shrink-0 w-[359.813px]" data-name="Item" />;
}

function Item9() {
  return <div className="h-[397.688px] relative shrink-0 w-[359.813px]" data-name="Item" />;
}

function List() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex gap-[9.469px] items-center left-[calc(50%+476.85px)] top-0" data-name="List">
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
    </div>
  );
}

function Ticker() {
  return (
    <div className="h-[397.688px] overflow-clip relative shrink-0 w-[1818px]" data-name="Ticker">
      <List />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d585f] text-[12.404px] whitespace-nowrap">
        <p className="leading-[17.233px]">10,000+ Users</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container13 />
    </div>
  );
}

function Default() {
  return (
    <div className="bg-[#edf1f4] content-stretch flex items-center justify-center overflow-clip pb-[5.681px] pt-[2.841px] px-[13.256px] relative rounded-[94.688px] shrink-0" data-name="Default">
      <Container12 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Default />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d585f] text-[12.593px] whitespace-nowrap">
        <p className="leading-[17.233px]">4.9 Rating</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container16 />
    </div>
  );
}

function Default1() {
  return (
    <div className="bg-[#edf1f4] content-stretch flex items-center justify-center overflow-clip pb-[5.681px] pt-[2.841px] px-[13.256px] relative rounded-[94.688px] shrink-0" data-name="Default">
      <Container15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Default1 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d585f] text-[12.593px] whitespace-nowrap">
        <p className="leading-[17.233px]">Real-time insights</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container19 />
    </div>
  );
}

function Default2() {
  return (
    <div className="bg-[#edf1f4] content-stretch flex items-center justify-center overflow-clip pb-[5.681px] pt-[2.841px] px-[13.256px] relative rounded-[94.688px] shrink-0" data-name="Default">
      <Container18 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Default2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d585f] text-[12.593px] whitespace-nowrap">
        <p className="leading-[17.233px]">{`Secure & compliant`}</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container22 />
    </div>
  );
}

function Default3() {
  return (
    <div className="bg-[#edf1f4] content-stretch flex items-center justify-center overflow-clip pb-[5.681px] pt-[2.841px] px-[13.256px] relative rounded-[94.688px] shrink-0" data-name="Default">
      <Container21 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Default3 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_9.469px] items-center justify-center relative shrink-0 w-full" data-name="List">
      <Container11 />
      <Container14 />
      <Container17 />
      <Container20 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[15.813px] text-center w-full">
        <p className="leading-[22.157px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.</p>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[14.203px] w-full" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[14.203px]">
        <img alt="" className="absolute h-[115%] left-0 max-w-none top-[-7.5%] w-full" src={imgAvatar} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[14.203px] shrink-0 size-[28.406px]" data-name="Avatar">
      <Avatar1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-0.95px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d585f] text-[13.256px] whitespace-nowrap">
        <p className="leading-[17.233px]">Alex James</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[17.233px] relative shrink-0 w-[93.996px]" data-name="Container">
      <Container26 />
    </div>
  );
}

function Bottom2() {
  return (
    <div className="content-stretch flex gap-[5.681px] items-center relative shrink-0" data-name="Bottom">
      <Avatar />
      <Container25 />
    </div>
  );
}

function Desktop4() {
  return (
    <div className="content-stretch flex flex-col gap-[15.159px] items-center relative shrink-0 w-full" data-name="Desktop">
      <Container24 />
      <Bottom2 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[473.4375px] min-w-[473.4375px] relative shrink-0" data-name="Container">
      <Desktop4 />
    </div>
  );
}

function Bottom1() {
  return (
    <div className="content-stretch flex flex-col gap-[28.406px] items-center max-w-[814.3125px] px-[28.406px] relative shrink-0 w-[574px]" data-name="Bottom">
      <List1 />
      <Container23 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[47.344px] items-center relative shrink-0 w-full" data-name="Content">
      <Ticker />
      <Bottom1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[2px] top-[395.38px] w-[1818px]" data-name="Container">
      <Content1 />
    </div>
  );
}

export default function MeetSolace() {
  return (
    <div className="bg-white relative size-full" data-name="Meet Solace">
      <Frame2 />
      <Container1 />
    </div>
  );
}