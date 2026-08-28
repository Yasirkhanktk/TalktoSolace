import svgPaths from "./svg-jsdz3eqg2p";
import imgMan from "./45f1bcbe2a295e2466d94f9e694653e00545f002.png";
import imgMan1 from "./285cb81d1803e135c1f00b00eedd9ab25e601b19.png";
import imgManInBlueBg from "./60435868beca1bf5fcd288752e2ce2dc031c0d44.png";
import imgManInBlueBg1 from "./141fdb7bf66120704255629fbd3acc8cdb3d4bc6.png";
import imgWomenOnTheChair from "./90f354a9a06e95c6f4115c3e72de97f16fc882d7.png";
import imgWomenOnTheChair1 from "./357e6fa693eebbf6f9fb3555348fd2b13af72fb4.png";
import imgAthletes from "./c5a297d0252bc641d8d543cdb0db6fe7d2290e57.png";
import imgAthletes1 from "./bc07016c8c4e3f240776b464f9521d286372372f.png";

function Container() {
  return <div className="-translate-y-1/2 absolute h-[143.01px] left-[84px] top-[calc(50%-920px)] w-[544px]" data-name="Container" />;
}

function Man() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Man">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-2.22%] max-w-none top-0 w-[104.43%]" src={imgMan} />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[106.6%] left-0 max-w-none top-[-3.3%] w-full" src={imgMan1} />
        </div>
      </div>
    </div>
  );
}

function BgImage() {
  return (
    <div className="absolute blur-[4px] content-stretch flex flex-col inset-[-4.97%_-5%_-5.03%_-5%] items-start justify-center opacity-95 overflow-clip" data-name="BG Image">
      <Man />
    </div>
  );
}

function Man1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[5px] w-full" data-name="Man">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[5px]">
        <div className="absolute inset-0 overflow-hidden rounded-[5px]">
          <img alt="" className="absolute h-full left-[-4.77%] max-w-none top-0 w-[109.53%]" src={imgMan} />
        </div>
        <div className="absolute inset-0 overflow-hidden rounded-[5px]">
          <img alt="" className="absolute h-[106.6%] left-0 max-w-none top-[-3.3%] w-full" src={imgMan1} />
        </div>
      </div>
    </div>
  );
}

function ContentInnerImage() {
  return (
    <div className="content-stretch flex flex-col h-[233px] items-start justify-center overflow-clip relative rounded-[5px] shrink-0 w-[392px]" data-name="Content → Inner Image">
      <Man1 />
    </div>
  );
}

function Top() {
  return (
    <div className="-translate-y-1/2 absolute bg-black content-stretch flex h-[316.4px] items-center justify-center left-0 overflow-clip right-0 rounded-[5px] top-[calc(50%-37.09px)]" data-name="Top">
      <BgImage />
      <ContentInnerImage />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] bg-clip-text flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.445px] text-[transparent] tracking-[-0.6019px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(114.46376911054944deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)" }}>
        <p className="leading-[19.501px]">(01)</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <Container1 />
    </div>
  );
}

function RollNo() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 top-[-2px]" data-name="Roll No">
      <Text />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[21.324px] text-black tracking-[-0.6019px] whitespace-nowrap">
        <p className="leading-[19.501px]">When the day is finally quiet...</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-10px)]" data-name="Title">
      <Container2 />
    </div>
  );
}

function Container3() {
  return <div className="h-[20px] relative shrink-0 w-full" data-name="Container" />;
}

function Category() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%+10px)] w-[370px]" data-name="Category">
      <Container3 />
    </div>
  );
}

function Container4() {
  return <div className="h-[20.636px] relative shrink-0 w-full" data-name="Container" />;
}

function Year() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+329.46px)] top-0 w-[49.87px]" data-name="Year">
      <Container4 />
    </div>
  );
}

function TextYear() {
  return (
    <div className="absolute h-[40px] left-[55.64px] overflow-clip top-[-2px] w-[708.787px]" data-name="Text+Year">
      <Title />
      <Category />
      <Year />
    </div>
  );
}

function Bottom() {
  return (
    <div className="-translate-y-1/2 absolute h-[41px] left-0 right-0 top-[calc(50%+157.5px)]" data-name="Bottom">
      <RollNo />
      <TextYear />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] left-[57px] text-[#434343] text-[14.445px] top-[33px] tracking-[-0.6019px] whitespace-nowrap">
        <p className="leading-[19.501px]">Some nights, your thoughts are louder than the silence.</p>
      </div>
    </div>
  );
}

function Primary() {
  return (
    <div className="absolute h-[390px] left-0 overflow-clip right-0 top-[499px]" data-name="Primary">
      <Top />
      <Bottom />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bottom-0 h-[calc(100%-calc(50%-1096.5px)+0px)] left-[660px] pointer-events-none top-[calc(50%-1096.5px)]">
      <div className="-translate-y-1/2 h-[968px] pointer-events-auto sticky top-0 w-[560px]" data-name="1">
        <Primary />
        <div className="absolute flex h-[42.19px] items-center justify-center left-[535.88px] top-[480.37px] w-[43.188px]">
          <div className="flex-none rotate-[78.08deg]">
            <div className="h-[36.67px] relative w-[35.377px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="36.6704" preserveAspectRatio="none" viewBox="0 0 35.3771 36.6704" width="35.3771">
                <path d={svgPaths.peb644f0} fill="url(#paint0_linear_0_13)" id="Rectangle 11" stroke="white" strokeWidth="0.795427" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_13" x1="-4.0037e-07" x2="35.6662" y1="11.6617" y2="24.1853">
                    <stop stopColor="#E91E63" />
                    <stop offset="1" stopColor="#9C27B0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ManInBlueBg() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Man in Blue BG">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-0.22%] max-w-none top-0 w-[100.44%]" src={imgManInBlueBg} />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[106.8%] left-0 max-w-none top-[-3.4%] w-full" src={imgManInBlueBg1} />
        </div>
      </div>
    </div>
  );
}

function BgImage1() {
  return (
    <div className="absolute blur-[4px] content-stretch flex flex-col inset-[-4.97%_-5%_-5.03%_-5%] items-start justify-center opacity-95 overflow-clip" data-name="BG Image">
      <ManInBlueBg />
    </div>
  );
}

function ManInBlueBg1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[5px] w-full" data-name="Man in Blue BG">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[5px]">
        <div className="absolute inset-0 overflow-hidden rounded-[5px]">
          <img alt="" className="absolute h-full left-[-2.67%] max-w-none top-0 w-[105.35%]" src={imgManInBlueBg} />
        </div>
        <div className="absolute inset-0 overflow-hidden rounded-[5px]">
          <img alt="" className="absolute h-[106.8%] left-0 max-w-none top-[-3.4%] w-full" src={imgManInBlueBg1} />
        </div>
      </div>
    </div>
  );
}

function ContentInnerImage1() {
  return (
    <div className="content-stretch flex flex-col h-[243px] items-start justify-center overflow-clip relative rounded-[5px] shrink-0 w-[411px]" data-name="Content → Inner Image">
      <ManInBlueBg1 />
    </div>
  );
}

function Top1() {
  return (
    <div className="bg-black content-stretch flex h-[361.6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-full" data-name="Top">
      <BgImage1 />
      <ContentInnerImage1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] bg-clip-text flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.445px] text-[transparent] tracking-[-0.6019px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(116.16764742705078deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)" }}>
        <p className="leading-[19.501px]">(02)</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <Container6 />
    </div>
  );
}

function RollNo1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 top-[-2px]" data-name="Roll No">
      <Text1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[21.324px] text-black tracking-[-0.6019px] whitespace-nowrap">
        <p className="leading-[19.501px]">After a small win...</p>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-10px)]" data-name="Title">
      <Container7 />
    </div>
  );
}

function Container8() {
  return <div className="h-[20px] relative shrink-0 w-full" data-name="Container" />;
}

function Category1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%+10px)] w-[370px]" data-name="Category">
      <Container8 />
    </div>
  );
}

function Container9() {
  return <div className="h-[20.636px] relative shrink-0 w-full" data-name="Container" />;
}

function Year1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+329.46px)] top-0 w-[49.87px]" data-name="Year">
      <Container9 />
    </div>
  );
}

function TextYear1() {
  return (
    <div className="absolute h-[40px] left-[55.64px] overflow-clip top-[-2px] w-[708.787px]" data-name="Text+Year">
      <Title1 />
      <Category1 />
      <Year1 />
    </div>
  );
}

function Bottom1() {
  return (
    <div className="h-[41px] relative shrink-0 w-[560px]" data-name="Bottom">
      <RollNo1 />
      <TextYear1 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] left-[57px] text-[#434343] text-[14.445px] top-[33px] tracking-[-0.6019px] whitespace-nowrap">
        <p className="leading-[19.501px]">Growth deserves to be noticed.</p>
      </div>
    </div>
  );
}

function Primary1() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Primary">
      <Top1 />
      <Bottom1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[640px]" data-name="Container">
      <Primary1 />
    </div>
  );
}

function LinkProject() {
  return (
    <div className="bg-white content-stretch flex items-center pb-[149.45px] px-[80px] relative shrink-0 w-full" data-name="Link - Project">
      <Container5 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[calc(100%-calc(50%+266.04px)+0px)] inset-[calc(50%+266.04px)_0_0_0] pointer-events-none">
      <div className="-translate-y-1/2 content-stretch flex flex-col items-start justify-center pointer-events-auto sticky top-0" data-name="2">
        <LinkProject />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bottom-0 h-[2303px] left-[578px] pointer-events-none top-[48px]">
      <div className="h-[1102px] pointer-events-auto sticky top-0 w-[800px]">
        <Component1 />
      </div>
    </div>
  );
}

function WomenOnTheChair() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Women on the Chair">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[123.76%] left-0 max-w-none top-[-11.88%] w-full" src={imgWomenOnTheChair} />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[106.6%] left-0 max-w-none top-[-3.3%] w-full" src={imgWomenOnTheChair1} />
        </div>
      </div>
    </div>
  );
}

function BgImage2() {
  return (
    <div className="absolute blur-[4px] content-stretch flex flex-col inset-[-4.97%_-5%_-5.03%_-5%] items-start justify-center opacity-95 overflow-clip" data-name="BG Image">
      <WomenOnTheChair />
    </div>
  );
}

function WomenOnTheChair1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[5px] w-full" data-name="Women on the Chair">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[5px]">
        <div className="absolute inset-0 overflow-hidden rounded-[5px]">
          <img alt="" className="absolute h-[117.99%] left-0 max-w-none top-[-9%] w-full" src={imgWomenOnTheChair} />
        </div>
        <div className="absolute inset-0 overflow-hidden rounded-[5px]">
          <img alt="" className="absolute h-[106.6%] left-0 max-w-none top-[-3.3%] w-full" src={imgWomenOnTheChair1} />
        </div>
      </div>
    </div>
  );
}

function ContentInnerImage2() {
  return (
    <div className="content-stretch flex flex-col h-[284px] items-start justify-center overflow-clip relative rounded-[5px] shrink-0 w-[479px]" data-name="Content → Inner Image">
      <WomenOnTheChair1 />
    </div>
  );
}

function Top2() {
  return (
    <div className="bg-black content-stretch flex h-[406.8px] items-center overflow-clip relative rounded-[5px] shrink-0 w-full" data-name="Top">
      <BgImage2 />
      <ContentInnerImage2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] bg-clip-text flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.445px] text-[transparent] tracking-[-0.6019px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(114.46376911054944deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)" }}>
        <p className="leading-[19.501px]">(01)</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <Container11 />
    </div>
  );
}

function RollNo2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 top-[-2px]" data-name="Roll No">
      <Text2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[21.324px] text-black tracking-[-0.6019px] w-[305px]">
        <p className="leading-[19.501px]">During everyday life...</p>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-10px)]" data-name="Title">
      <Container12 />
    </div>
  );
}

function Container13() {
  return <div className="h-[20px] relative shrink-0 w-full" data-name="Container" />;
}

function Category2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%+10px)] w-[370px]" data-name="Category">
      <Container13 />
    </div>
  );
}

function Container14() {
  return <div className="h-[20.636px] relative shrink-0 w-full" data-name="Container" />;
}

function Year2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+329.46px)] top-0 w-[49.87px]" data-name="Year">
      <Container14 />
    </div>
  );
}

function TextYear2() {
  return (
    <div className="absolute h-[40px] left-[55.64px] overflow-clip top-[-2px] w-[708.787px]" data-name="Text+Year">
      <Title2 />
      <Category2 />
      <Year2 />
    </div>
  );
}

function Bottom2() {
  return (
    <div className="h-[41px] relative shrink-0 w-[560px]" data-name="Bottom">
      <RollNo2 />
      <TextYear2 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] left-[57px] text-[#434343] text-[14.445px] top-[33px] tracking-[-0.6019px] whitespace-nowrap">
        <p className="leading-[19.501px]">Not every conversation starts with something difficult.</p>
      </div>
    </div>
  );
}

function Primary2() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Primary">
      <Top2 />
      <Bottom2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[720px]" data-name="Container">
      <Primary2 />
    </div>
  );
}

function LinkProject1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-0 pb-[124.72px] px-[40px] right-0 top-1/2" data-name="Link - Project">
      <Container10 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[594.52px] relative shrink-0 w-full">
      <LinkProject1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col items-start justify-center left-0 right-0 top-[calc(50%+246.58px)]" data-name="3">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bottom-0 h-[1770px] left-[617px] pointer-events-none top-[581px]">
      <div className="h-[1087px] pointer-events-auto sticky top-0 w-[800px]">
        <Component2 />
        <div className="absolute flex h-[42.19px] items-center justify-center left-[23px] top-[475px] w-[43.188px]">
          <div className="flex-none rotate-[78.08deg]">
            <div className="h-[36.67px] relative w-[35.377px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="36.6704" preserveAspectRatio="none" viewBox="0 0 35.3771 36.6704" width="35.3771">
                <path d={svgPaths.peb644f0} fill="url(#paint0_linear_0_13)" id="Rectangle 11" stroke="white" strokeWidth="0.795427" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_13" x1="-4.0037e-07" x2="35.6662" y1="11.6617" y2="24.1853">
                    <stop stopColor="#E91E63" />
                    <stop offset="1" stopColor="#9C27B0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Athletes() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Athletes">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-1.84%] max-w-none top-0 w-[103.68%]" src={imgAthletes} />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[106.67%] left-0 max-w-none top-[-3.33%] w-full" src={imgAthletes1} />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[106.67%] left-0 max-w-none top-[-3.33%] w-full" src={imgAthletes1} />
        </div>
      </div>
    </div>
  );
}

function BgImage3() {
  return (
    <div className="absolute blur-[4px] content-stretch flex flex-col inset-[-4.97%_-5%_-5.03%_-5%] items-start justify-center opacity-95 overflow-clip" data-name="BG Image">
      <Athletes />
    </div>
  );
}

function Athletes1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[5px] w-full" data-name="Athletes">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[5px]">
        <div className="absolute inset-0 overflow-hidden rounded-[5px]">
          <img alt="" className="absolute h-full left-[-4.37%] max-w-none top-0 w-[108.75%]" src={imgAthletes} />
        </div>
        <div className="absolute inset-0 overflow-hidden rounded-[5px]">
          <img alt="" className="absolute h-[106.67%] left-0 max-w-none top-[-3.33%] w-full" src={imgAthletes1} />
        </div>
      </div>
    </div>
  );
}

function ContentInnerImage3() {
  return (
    <div className="content-stretch flex flex-col h-[324px] items-start justify-center overflow-clip relative rounded-[5px] shrink-0 w-[548px]" data-name="Content → Inner Image">
      <Athletes1 />
    </div>
  );
}

function Top3() {
  return (
    <div className="bg-black content-stretch flex h-[452px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-full" data-name="Top">
      <BgImage3 />
      <ContentInnerImage3 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] bg-clip-text flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.445px] text-[transparent] tracking-[-0.6019px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(116.16764742705078deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)" }}>
        <p className="leading-[19.501px]">(04)</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <Container16 />
    </div>
  );
}

function RollNo3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 top-[-2px]" data-name="Roll No">
      <Text3 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[21.324px] text-black tracking-[-0.6019px] whitespace-nowrap">
        <p className="leading-[19.501px]">Before a big decision...</p>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-10px)]" data-name="Title">
      <Container17 />
    </div>
  );
}

function Container18() {
  return <div className="h-[20px] relative shrink-0 w-full" data-name="Container" />;
}

function Category3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%+10px)] w-[370px]" data-name="Category">
      <Container18 />
    </div>
  );
}

function Container19() {
  return <div className="h-[20.636px] relative shrink-0 w-full" data-name="Container" />;
}

function Year3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+329.46px)] top-0 w-[49.87px]" data-name="Year">
      <Container19 />
    </div>
  );
}

function TextYear3() {
  return (
    <div className="absolute h-[40px] left-[55.64px] overflow-clip top-[-2px] w-[708.787px]" data-name="Text+Year">
      <Title3 />
      <Category3 />
      <Year3 />
    </div>
  );
}

function Bottom3() {
  return (
    <div className="h-[41px] relative shrink-0 w-[560px]" data-name="Bottom">
      <RollNo3 />
      <TextYear3 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] left-[57px] text-[#434343] text-[14.445px] top-[33px] tracking-[-0.6019px] whitespace-nowrap">
        <p className="leading-[19.501px]">Sometimes clarity begins with a conversation.</p>
      </div>
    </div>
  );
}

function Secondary() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[22px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Secondary">
      <Top3 />
      <Bottom3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[74px] top-[-0.38px] w-[800px]" data-name="Container">
      <Secondary />
    </div>
  );
}

function Container21() {
  return <div className="h-[21px] relative shrink-0 w-full" data-name="Container" />;
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[392px]" data-name="Text">
      <Container21 />
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[11.314px]">
      <div className="-rotate-45 flex-none">
        <div className="content-stretch flex flex-col items-start justify-center relative size-[8px]">
          <div className="border-black border-r border-solid border-t flex-[1_0_0] min-h-px relative w-full" data-name="Border" />
        </div>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-1.66px)] size-[16px] top-[calc(50%-55.81px)]">
      <div className="flex-none rotate-45">
        <div className="content-stretch flex flex-col h-[11.314px] items-center relative" data-name="Icons">
          <Arrow />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[8px]" data-name="Icon">
      <Icons />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[144px] items-start overflow-clip relative shrink-0" data-name="Content">
      <Text4 />
      <Icon />
    </div>
  );
}

function Line() {
  return <div className="bg-gradient-to-b from-[#57c6ca] h-px relative shrink-0 to-[#9e92f4] via-[#7aaddf] via-[51.923%] w-[418px]" data-name="Line" />;
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black tracking-[-1.7px] w-[431px]">
        <p className="text-[56px]">
          <span className="leading-[56px]">{`Whatever is on your `}</span>
          <span className="[word-break:break-word] bg-clip-text font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[56px] text-[transparent]" style={{ backgroundImage: "linear-gradient(144.47461906070686deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)" }}>
            mind,
          </span>
        </p>
      </div>
      <Line />
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
    <div className="content-stretch flex flex-col gap-[10.01px] items-start justify-center overflow-clip relative shrink-0" data-name="Link - Dark">
      <Content />
      <LineAlignStretch />
    </div>
  );
}

function Container20() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-116px)]" data-name="Container">
      <LinkDark />
    </div>
  );
}

function SectionAbout() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="SectionAbout">
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[26.25px] relative shrink-0 text-[19.85px] text-black w-[384px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}

function SectionAbout1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[32px] py-[14px] rounded-[14px] top-[66px] w-[261px]" style={{ backgroundImage: "linear-gradient(152.7148668405415deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)" }} data-name="SectionAbout">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.28px] whitespace-nowrap">Become a Founding Member</p>
    </div>
  );
}

function Text5() {
  return <div className="h-[18px] relative shrink-0 w-[142px]" data-name="Text" />;
}

function SectionAbout2() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-0 right-[242px] top-[123px]" data-name="SectionAbout">
      <Text5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[24.866px] left-[288px] top-[67.99px] w-[191.5px]">
      <div className="absolute inset-[-7.1%_0_-5.88%_-0.6%]">
        <svg className="block size-full" fill="none" height="28.0938" preserveAspectRatio="none" viewBox="0 0 192.752 28.0938" width="192.752">
          <g id="Frame 346">
            <path d={svgPaths.p3bf54f80} fill="url(#paint0_linear_0_10)" id="Vector 59" />
            <path d={svgPaths.p2b5e9b00} id="Vector 60" stroke="url(#paint1_linear_0_10)" strokeLinecap="round" strokeWidth="2.92366" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_10" x1="1.14138" x2="19.5851" y1="8.52298" y2="69.0184">
              <stop stopColor="#E91E63" />
              <stop offset="1" stopColor="#9C27B0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_10" x1="1.87185" x2="12.6787" y1="17.1867" y2="20.093">
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
    <div className="absolute h-[204px] left-0 top-[174.01px] w-[384px]" data-name="Reveal">
      <SectionAbout />
      <SectionAbout1 />
      <SectionAbout2 />
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[389px] left-[-489px] top-[93px] w-[544px]">
      <Container20 />
      <Reveal />
    </div>
  );
}

function Component4LinkProject() {
  return (
    <div className="-translate-y-1/2 absolute bg-white h-[604px] left-[579px] right-[387px] top-[calc(50%+806.5px)]" data-name="4 → Link - Project">
      <Container15 />
      <Frame4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute flex h-[190.36px] items-center justify-center left-[37px] top-0 w-[80px]">
      <div className="flex-none rotate-[-72.92deg]">
        <div className="h-[24.866px] relative w-[191.5px]">
          <div className="absolute inset-[-7.1%_0_-5.88%_-0.6%]">
            <svg className="block size-full" fill="none" height="28.0936" preserveAspectRatio="none" viewBox="0 0 192.751 28.0936" width="192.751">
              <g id="Frame 346">
                <path d={svgPaths.p79d7680} fill="url(#paint0_linear_0_4)" id="Vector 59" />
                <path d={svgPaths.p3c35d800} id="Vector 60" stroke="url(#paint1_linear_0_4)" strokeLinecap="round" strokeWidth="2.92366" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_4" x1="1.14106" x2="19.5847" y1="8.52298" y2="69.0184">
                  <stop stopColor="#E91E63" />
                  <stop offset="1" stopColor="#9C27B0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_4" x1="1.87185" x2="12.6787" y1="17.1865" y2="20.0928">
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

function Frame10() {
  return (
    <div className="absolute h-[233px] left-[285px] top-[486px] w-[126px]">
      <Frame7 />
      <p className="[word-break:break-word] absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[26.25px] left-0 text-[19.85px] text-black top-[206px] w-[126px]">{`Scroll Down `}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute flex h-[190.36px] items-center justify-center left-[-3px] top-[-20px] w-[80px]">
      <div className="-scale-y-100 flex-none rotate-[-107.08deg]">
        <div className="h-[24.866px] relative w-[191.5px]">
          <div className="absolute inset-[-7.1%_0_-5.88%_-0.6%]">
            <svg className="block size-full" fill="none" height="28.0936" preserveAspectRatio="none" viewBox="0 0 192.751 28.0936" width="192.751">
              <g id="Frame 346">
                <path d={svgPaths.p79d7680} fill="url(#paint0_linear_0_7)" id="Vector 59" />
                <path d={svgPaths.p3c35d800} id="Vector 60" stroke="url(#paint1_linear_0_7)" strokeLinecap="round" strokeWidth="2.92366" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_7" x1="1.14106" x2="19.5847" y1="8.52298" y2="69.0184">
                  <stop stopColor="#E91E63" />
                  <stop offset="1" stopColor="#9C27B0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_7" x1="1.87185" x2="12.6787" y1="17.1865" y2="20.0928">
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

function Frame11() {
  return (
    <div className="absolute h-[233px] left-[1530px] top-[1080px] w-[126px]">
      <Frame8 />
      <p className="[word-break:break-word] absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[26.25px] left-0 text-[19.85px] text-black top-[206px] w-[126px]">{`Scroll Down `}</p>
    </div>
  );
}

function Item() {
  return (
    <div className="absolute backdrop-blur-[4px] border border-[#e91e63] border-solid content-stretch flex h-[42px] items-center justify-center left-px px-[12px] py-[6px] rounded-[12px] top-0 w-[99px]" style={{ backgroundImage: "linear-gradient(130.6272782459436deg, rgba(233, 30, 99, 0.12) 8.4861%, rgba(156, 39, 176, 0.12) 91.514%)" }} data-name="Item">
      <div className="[word-break:break-word] bg-clip-text flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11.1px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(138.03893207451017deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)" }}>
        <p className="leading-[18px]">Moments</p>
      </div>
    </div>
  );
}

function Container22() {
  return <div className="h-[21px] relative shrink-0 w-full" data-name="Container" />;
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[392px]" data-name="Text">
      <Container22 />
    </div>
  );
}

function Arrow1() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[11.314px]">
      <div className="-rotate-45 flex-none">
        <div className="content-stretch flex flex-col items-start justify-center relative size-[8px]">
          <div className="border-black border-r border-solid border-t flex-[1_0_0] min-h-px relative w-full" data-name="Border" />
        </div>
      </div>
    </div>
  );
}

function Icons1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-1.66px)] size-[16px] top-[calc(50%-55.81px)]">
      <div className="flex-none rotate-45">
        <div className="content-stretch flex flex-col h-[11.314px] items-center relative" data-name="Icons">
          <Arrow1 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[8px]" data-name="Icon">
      <Icons1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[144px] items-start overflow-clip relative shrink-0" data-name="Content">
      <Text6 />
      <Icon1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black tracking-[-1.7px] w-[431px]">
        <p className="text-[56px]">
          <span className="leading-[56px] tracking-[-1.7px]">Everyday</span>
          <span className="leading-[56px]">{` `}</span>
          <span className="[word-break:break-word] bg-clip-text font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[56px] text-[transparent] tracking-[-1.7px]" style={{ backgroundImage: "linear-gradient(144.47461906070686deg, rgb(233, 30, 99) 8.4861%, rgb(156, 39, 176) 91.514%)" }}>
            Moments.....
          </span>
        </p>
      </div>
    </div>
  );
}

function LineAlignStretch1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Line:align-stretch">
      <Frame5 />
    </div>
  );
}

function LinkDark1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.01px] items-start justify-center left-0 overflow-clip top-0" data-name="Link - Dark">
      <Content1 />
      <LineAlignStretch1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[155px] left-0 top-[37px] w-[544px]">
      <LinkDark1 />
      <div className="absolute h-0 left-[6px] top-[155px] w-[57px]">
        <div className="absolute inset-[-2.5px_-4.39%]">
          <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 62 5" width="62">
            <path d="M2.5 2.5H59.5" id="Vector 63" stroke="url(#paint0_linear_0_14)" strokeLinecap="round" strokeWidth="5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_14" x1="2.5" x2="2.64963" y1="2.81801" y2="5.92225">
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

function Frame12() {
  return (
    <div className="absolute h-[192px] left-[84px] top-[147px] w-[544px]">
      <Item />
      <Frame9 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-white relative size-full" data-name="Section 3 -">
      <Container />
      <Component />
      <Frame1 />
      <Frame3 />
      <Component4LinkProject />
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}