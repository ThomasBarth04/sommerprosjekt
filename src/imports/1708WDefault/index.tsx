import svgPaths from "./svg-6vze7hckkw";

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip px-[12px] right-0 top-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#123236] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Flood</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#123236] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">ood</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[24px] items-start overflow-clip relative shrink-0" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[#123236] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">l</p>
      </div>
      <Container7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex items-center left-0 min-w-[20.1875px] opacity-0 pl-[12px] right-0 top-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#123236] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">F</p>
      </div>
      <Container6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-[42px] overflow-clip relative" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function LinkOutlineGroup() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[44px] items-center min-w-[44px] relative" data-name="Link:outline-group">
      <div className="bg-[#e2eced] content-stretch flex flex-[1_0_0] h-[44px] items-center min-w-[44px] overflow-clip relative rounded-[50px]" data-name="Component 1">
        <Container3 />
      </div>
      <div className="absolute h-[48px] left-[-2px] right-[-2px] rounded-[52px] top-[-2px]" data-name="Link:outline">
        <div aria-hidden className="absolute border-2 border-[#e2eced] border-solid inset-[-2px] pointer-events-none rounded-[54px]" />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-[44px] relative w-full" data-name="Container">
      <LinkOutlineGroup />
    </div>
  );
}

function UnifiedIncidentButton() {
  return (
    <div className="h-[52px] max-h-[52px] min-w-[52px] relative shrink-0 w-full" data-name="unified-incident-button">
      <div className="flex flex-col justify-center max-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-h-[inherit] min-w-[inherit] p-[4px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bottom-[258.5px] content-stretch flex flex-col items-start left-0 max-w-[200px] min-w-[200px] overflow-x-clip overflow-y-auto pb-[16px] pt-[52px] px-[6px] top-[72px] w-[200px]" data-name="Container">
      <UnifiedIncidentButton />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[28.51%_16.17%_28.51%_49.9%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5711 17.1904">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p29e31b00} fill="var(--fill-0, #1A1A1A)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pa6ae780} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5711 17.1904">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.pf8e4d80} fill="var(--fill-0, #212121)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2c8baa70} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[28.51%_16.17%]" data-name="Group">
      <Group2 />
      <div className="absolute flex inset-[28.51%_49.9%_28.51%_16.17%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <Group3 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[28.51%_16.17%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function LogoSafeAreaSvg() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="logo-safe-area.svg">
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Component 2">
        <Group />
      </div>
    </div>
  );
}

function SlotIonImg() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[20px] shrink-0 w-full" data-name="Slot → ion-img">
      <LogoSafeAreaSvg />
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f0f5f6] text-[13px] tracking-[0.2px] uppercase w-full">
            <p className="leading-[20px]">ThomasAPI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pr-[8px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="relative shrink-0 w-full" data-name="Component 3">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
            <div className="bg-white content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 size-[40px]" data-name="Component 4">
              <SlotIonImg />
            </div>
            <Container12 />
          </div>
        </div>
      </div>
    </div>
  );
}

function SlotIonTitle() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Slot → ion-title">
      <Container11 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <SlotIonTitle />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center min-h-[56px] overflow-clip py-[8px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
    </div>
  );
}

function IonToolbar() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[200px] min-w-[200px] py-[8px] relative shrink-0 w-[200px]" data-name="ion-toolbar">
      <div className="absolute bg-[#123236] inset-0" data-name="Background" />
      <Container9 />
    </div>
  );
}

function Banner() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_769px_0] items-start" data-name="Banner">
      <IonToolbar />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[17.5px]" data-name="Component 5">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 20">
              <path d={svgPaths.p2f8e2900} fill="var(--fill-0, #F0F5F6)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function UnifiedIcon() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="unified-icon">
      <Container19 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" data-name="Container">
      <UnifiedIcon />
    </div>
  );
}

function ButtonNotifications() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative" data-name="Button - Notifications">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f0f5f6] text-[13px] w-full">
        <p className="leading-[20px]">Notifications</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pr-[8px] relative size-full">
          <ButtonNotifications />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[20px]" data-name="Component 5">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p15813100} fill="var(--fill-0, #F0F5F6)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function UnifiedIcon1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="unified-icon">
      <Container22 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" data-name="Container">
      <UnifiedIcon1 />
    </div>
  );
}

function ButtonHelp() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative" data-name="Button - Help">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f0f5f6] text-[13px] w-full">
        <p className="leading-[20px]">Help</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pr-[8px] relative size-full">
          <ButtonHelp />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[20px]" data-name="Component 5">
            <div className="absolute inset-[-3.13%_-0.59%_-3.13%_-0.49%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2166 21.25">
                <path d={svgPaths.p3fa55600} fill="var(--fill-0, #F0F5F6)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UnifiedIcon2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="unified-icon">
      <Container25 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" data-name="Container">
      <UnifiedIcon2 />
    </div>
  );
}

function ButtonSettings() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative" data-name="Button - Settings">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f0f5f6] text-[13px] w-full">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pr-[8px] relative size-full">
          <ButtonSettings />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14.5px] items-center pl-[14.5px] relative size-full">
            <div className="content-stretch flex items-center justify-center relative rounded-[17.5px] shrink-0 size-[35px]" data-name="Component 7">
              <Container18 />
            </div>
            <Container20 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14.5px] items-center pl-[14.5px] relative size-full">
            <div className="content-stretch flex items-center justify-center relative rounded-[17.5px] shrink-0 size-[35px]" data-name="Component 7">
              <Container21 />
            </div>
            <Container23 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14.5px] items-center pl-[14.5px] relative size-full">
            <div className="content-stretch flex items-center justify-center relative rounded-[17.5px] shrink-0 size-[35px]" data-name="Component 7">
              <Container24 />
            </div>
            <Container26 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[17.5px]" data-name="Component 5">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 20">
              <path d={svgPaths.p27ac2300} fill="var(--fill-0, #123236)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function UnifiedIcon3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="unified-icon">
      <Container29 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <UnifiedIcon3 />
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px overflow-clip relative" data-name="Container">
      <div className="absolute bg-[#123236] inset-0 mix-blend-color opacity-0 rounded-[21px]" data-name="Background" />
      <Container28 />
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6.5px] relative shrink-0" data-name="Profile">
      <div className="bg-[#f0f5f6] content-stretch flex items-center justify-center relative rounded-[21px] shrink-0 size-[42px]" data-name="Component 8">
        <Container27 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f0f5f6] text-[13px] whitespace-nowrap">
        <p className="leading-[16px]">Thomas Barth</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-85 overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f0f5f6] text-[13px] whitespace-nowrap">
        <p className="leading-[16px]">ThomasAPI</p>
      </div>
    </div>
  );
}

function ButtonOpenProfile() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[136px] overflow-clip relative shrink-0 w-[87px]" data-name="Button - Open profile">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pr-[8px] relative size-full">
          <ButtonOpenProfile />
        </div>
      </div>
    </div>
  );
}

function Slot() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-end py-[8px] relative shrink-0 w-full" data-name="Slot">
      <Container17 />
      <div className="relative shrink-0 w-full" data-name="Component 9">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[11px] items-center pl-[11px] relative size-full">
            <Profile />
            <Container30 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="bg-black h-px opacity-10 relative shrink-0 w-full" data-name="Slot" />
      <Slot />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center min-h-[56px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container16 />
    </div>
  );
}

function IonToolbar1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ion-toolbar">
      <div className="absolute bg-[#123236] inset-0" data-name="Background" />
      <Container15 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0 w-[64px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[36px]" data-name="Component 11">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <div className="h-[14px] overflow-clip relative w-[18px]" data-name="Component 10">
              <div className="absolute inset-[1.79%_0]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13.5">
                  <path d={svgPaths.p2024a580} fill="var(--fill-0, #BDCED1)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-end left-0 max-w-[200px] min-w-[200px] overflow-clip top-[582.5px] w-[200px]" data-name="Container">
      <IonToolbar1 />
      <Container33 />
    </div>
  );
}

function QtUnifiedAppSidepanel() {
  return (
    <div className="bg-[#123236] h-[841px] max-h-[841px] overflow-clip relative shrink-0 w-[200px]" data-name="qt-unified-app-sidepanel">
      <Container1 />
      <Banner />
      <Container14 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <QtUnifiedAppSidepanel />
    </div>
  );
}

function NgIfCtrlIncidentsCtrlExercises() {
  return (
    <div className="content-stretch flex h-[841px] items-start relative shrink-0" data-name="ngIf: $ctrl.incidents && $ctrl.exercises">
      <Container />
    </div>
  );
}

function NgIfCtrlHideUnifiedSidebar() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="ngIf: !$ctrl.hideUnifiedSidebar()">
      <NgIfCtrlIncidentsCtrlExercises />
    </div>
  );
}

function OrderedList() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Ordered List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="h-[42px] relative rounded-[100px] shrink-0 w-[108.88px]" data-name="Component 12">
          <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-10.35px)] not-italic text-[#202627] text-[16px] text-center top-[20.75px] w-[86.18px]">
            <p className="leading-[24px]">{`ThomasAPI `}</p>
          </div>
          <div className="-translate-x-1/2 absolute border-[#202627] border-dashed border-l-4 border-r-4 border-t-4 h-[4px] left-[calc(50%+41.44px)] top-[20.13px] w-[8px]" data-name="end ngIf: $last" />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[14px] w-full">
          <p className="leading-[normal]">Account search</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="h-[34px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0.8)] inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[13px] py-[8.5px] relative size-full">
          <Container35 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_1px_rgba(0,0,0,0.08)]" />
      <div aria-hidden className="absolute border border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function AccountOverview() {
  return (
    <div className="relative shrink-0 w-[250px]" data-name="account-overview">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Input />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#f9fbfb] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#dbe8e9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[9px] py-[7px] relative size-full">
          <OrderedList />
          <AccountOverview />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[17.5px]" data-name="Component 5">
            <div className="absolute inset-[0_3.57%_1.56%_3.57%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 19.6875">
                <path d={svgPaths.p2cf4fd00} fill="var(--fill-0, #505050)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="Container">
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#505050] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Users</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center pl-[2.42px] pr-[2.43px] relative shrink-0" data-name="Container">
      <Container37 />
      <Container39 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[17.5px]" data-name="Component 5">
            <div className="absolute inset-[0_3.57%_-6.25%_3.57%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 21.25">
                <path d={svgPaths.p1f212300} fill="var(--fill-0, #505050)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="Container">
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#505050] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Responders</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Container">
      <Container41 />
      <Container43 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[15px]" data-name="Component 5">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20">
              <path d={svgPaths.p32dc6800} fill="var(--fill-0, #505050)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="Container">
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#505050] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Contacts</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Container">
      <Container45 />
      <Container47 />
    </div>
  );
}

function PeopleUsersRespondersContacts() {
  return (
    <div className="bg-[#fafcfc] flex-[1_0_0] min-h-px relative rounded-[12px]" data-name="People: Users, Responders, Contacts">
      <div className="content-stretch flex gap-[4px] items-start px-[6px] py-[2px] relative size-full">
        <div className="h-full min-w-[65px] relative rounded-[12px] shrink-0" data-name="Component 13">
          <div className="flex flex-row justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-start justify-center min-w-[inherit] px-[8px] py-[6px] relative size-full">
              <Container36 />
            </div>
          </div>
        </div>
        <div className="h-full min-w-[65px] relative rounded-[12px] shrink-0" data-name="Component 13">
          <div className="flex flex-row justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-start justify-center min-w-[inherit] px-[8px] py-[6px] relative size-full">
              <Container40 />
            </div>
          </div>
        </div>
        <div className="h-full min-w-[65px] relative rounded-[12px] shrink-0" data-name="Component 13">
          <div className="flex flex-row justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-start justify-center min-w-[inherit] px-[8px] py-[6px] relative size-full">
              <Container44 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PeopleUsersRespondersContactsMargin() {
  return (
    <div className="absolute bottom-[69px] content-stretch flex flex-col items-start justify-center left-[5px] max-w-[1548px] pr-[8px] top-[5px]" data-name="People: Users, Responders, Contacts:margin">
      <PeopleUsersRespondersContacts />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[20px]" data-name="Component 5">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p36d5ef80} fill="var(--fill-0, #505050)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="Container">
      <Container50 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#505050] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Teams</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Container">
      <Container49 />
      <Container51 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[20px]" data-name="Component 5">
            <div className="absolute inset-[0_0_0_6.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 20">
                <path d={svgPaths.p3e36fe00} fill="var(--fill-0, #505050)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="Container">
      <Container54 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#505050] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Contact lists</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Container">
      <Container53 />
      <Container55 />
    </div>
  );
}

function ListsTeamsContactGroups() {
  return (
    <div className="bg-[#fafcfc] flex-[1_0_0] min-h-px relative rounded-[12px]" data-name="Lists: Teams, Contact groups">
      <div className="content-stretch flex gap-[4px] items-start pl-[6px] pr-[5.99px] py-[2px] relative size-full">
        <div className="h-full min-w-[65px] relative rounded-[12px] shrink-0" data-name="Component 13">
          <div className="flex flex-row justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-start justify-center min-w-[inherit] px-[8px] py-[6px] relative size-full">
              <Container48 />
            </div>
          </div>
        </div>
        <div className="h-full min-w-[65px] relative rounded-[12px] shrink-0" data-name="Component 13">
          <div className="flex flex-row justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-start justify-center min-w-[inherit] px-[8px] py-[6px] relative size-full">
              <Container52 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListsTeamsContactGroupsMargin() {
  return (
    <div className="absolute bottom-[69px] content-stretch flex flex-col items-start justify-center left-[287.97px] max-w-[1548px] pr-[8px] top-[5px]" data-name="Lists: Teams, Contact groups:margin">
      <ListsTeamsContactGroups />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[25px]" data-name="Component 5">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 20">
              <path d={svgPaths.p25143c80} fill="var(--fill-0, #505050)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="Container">
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#505050] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Collaboration</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Container">
      <Container57 />
      <Container59 />
    </div>
  );
}

function NetworkStakeholders() {
  return (
    <div className="bg-[#fafcfc] flex-[1_0_0] min-h-px relative rounded-[12px]" data-name="Network: Stakeholders">
      <div className="content-stretch flex items-start px-[6px] py-[2px] relative size-full">
        <div className="h-full min-w-[65px] relative rounded-[12px] shrink-0" data-name="Component 13">
          <div className="flex flex-row justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-start justify-center min-w-[inherit] px-[8px] py-[6px] relative size-full">
              <Container56 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NetworkStakeholdersMargin() {
  return (
    <div className="absolute bottom-[69px] content-stretch flex flex-col items-start justify-center left-[487.6px] max-w-[1548px] pr-[8px] top-[5px]" data-name="Network: Stakeholders:margin">
      <NetworkStakeholders />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[15px]" data-name="Component 5">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20">
              <path d={svgPaths.pd3e4e80} fill="var(--fill-0, #123236)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="Container">
      <Container62 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#123236] text-[0px] text-center whitespace-nowrap">
        <p className="leading-[24px] text-[16px]">Log templates</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Container">
      <Container61 />
      <Container63 />
    </div>
  );
}

function ItemLink() {
  return (
    <div className="h-full min-w-[65px] relative rounded-[12px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(18, 50, 54, 0.1) 0%, rgba(18, 50, 54, 0.1) 100%), linear-gradient(90deg, rgb(249, 251, 251) 0%, rgb(249, 251, 251) 100%)" }} data-name="Item → Link">
      <div className="flex flex-row justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-w-[inherit] px-[8px] py-[6px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_10px_0px_rgba(4,22,25,0.16),0px_1px_2px_0px_rgba(4,22,25,0.1),0px_0px_0px_1.5px_#123236]" data-name="Link:shadow" />
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[22.5px]" data-name="Component 5">
            <div className="absolute inset-[-6.25%_0_0_5.56%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.25 21.25">
                <path d={svgPaths.p281b8600} fill="var(--fill-0, #505050)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="Container">
      <Container66 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#505050] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Report templates</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Container">
      <Container65 />
      <Container67 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[15px]" data-name="Component 5">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20">
              <path d={svgPaths.p3ff32500} fill="var(--fill-0, #505050)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="Container">
      <Container70 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#505050] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Meeting templates</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Container">
      <Container69 />
      <Container71 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[20px]" data-name="Component 5">
            <div className="absolute inset-[-6.25%_0_6.25%_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p224a4d00} fill="var(--fill-0, #505050)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="Container">
      <Container74 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#505050] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Message templates</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Container">
      <Container73 />
      <Container75 />
    </div>
  );
}

function TemplatesIncidentReportMeetingMessageTemplates() {
  return (
    <div className="bg-[#fafcfc] flex-[1_0_0] min-h-px relative rounded-[12px]" data-name="Templates: Incident, Report, Meeting, Message templates">
      <div className="content-stretch flex gap-[4px] items-start px-[6px] py-[2px] relative size-full">
        <ItemLink />
        <div className="h-full min-w-[65px] relative rounded-[12px] shrink-0" data-name="Component 13">
          <div className="flex flex-row justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-start justify-center min-w-[inherit] px-[8px] py-[6px] relative size-full">
              <Container64 />
            </div>
          </div>
        </div>
        <div className="h-full min-w-[65px] relative rounded-[12px] shrink-0" data-name="Component 13">
          <div className="flex flex-row justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-start justify-center min-w-[inherit] px-[8px] py-[6px] relative size-full">
              <Container68 />
            </div>
          </div>
        </div>
        <div className="h-full min-w-[65px] relative rounded-[12px] shrink-0" data-name="Component 13">
          <div className="flex flex-row justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-start justify-center min-w-[inherit] px-[8px] py-[6px] relative size-full">
              <Container72 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TemplatesIncidentReportMeetingMessageTemplatesMargin() {
  return (
    <div className="absolute bottom-[69px] content-stretch flex flex-col items-start justify-center left-[624.17px] max-w-[1548px] pr-[8px] top-[5px]" data-name="Templates: Incident, Report, Meeting, Message templates:margin">
      <TemplatesIncidentReportMeetingMessageTemplates />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[20px]" data-name="Component 5">
            <div className="absolute inset-[6.25%_0_0_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.75">
                <path d={svgPaths.p11d09580} fill="var(--fill-0, #505050)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="Container">
      <Container78 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#505050] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Resources</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Container">
      <Container77 />
      <Container79 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[20px]" data-name="Component 5">
            <div className="absolute inset-[6.25%_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17.5">
                <path d={svgPaths.p3a1a7a00} fill="var(--fill-0, #505050)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="Container">
      <Container82 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#505050] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Sites</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center pl-[6px] pr-[6.01px] relative shrink-0" data-name="Container">
      <Container81 />
      <Container83 />
    </div>
  );
}

function AssetsResourcesSites() {
  return (
    <div className="bg-[#fafcfc] flex-[1_0_0] min-h-px relative rounded-[12px]" data-name="Assets: Resources, Sites">
      <div className="content-stretch flex gap-[4px] items-start px-[6px] py-[2px] relative size-full">
        <div className="h-full min-w-[65px] relative rounded-[12px] shrink-0" data-name="Component 13">
          <div className="flex flex-row justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-start justify-center min-w-[inherit] px-[8px] py-[6px] relative size-full">
              <Container76 />
            </div>
          </div>
        </div>
        <div className="h-full min-w-[65px] relative rounded-[12px] shrink-0" data-name="Component 13">
          <div className="flex flex-row justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-start justify-center min-w-[inherit] px-[8px] py-[6px] relative size-full">
              <Container80 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetsResourcesSitesMargin() {
  return (
    <div className="absolute bottom-[69px] content-stretch flex flex-col items-start justify-center left-[1245.33px] max-w-[1548px] pr-[8px] top-[5px]" data-name="Assets: Resources, Sites:margin">
      <AssetsResourcesSites />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[22.5px]" data-name="Component 5">
            <div className="absolute inset-[6.25%_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 17.5">
                <path d={svgPaths.p58e8280} fill="var(--fill-0, #505050)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="Container">
      <Container86 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#505050] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Imports</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Container">
      <Container85 />
      <Container87 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[22.5px]" data-name="Component 5">
            <div className="absolute inset-[10.99%_1.04%_6.25%_5.56%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0156 16.5527">
                <path d={svgPaths.p1e257040} fill="var(--fill-0, #505050)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="Container">
      <Container90 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#505050] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Tags</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-[6.3px] relative shrink-0" data-name="Container">
      <Container89 />
      <Container91 />
    </div>
  );
}

function MetaImportsTags() {
  return (
    <div className="absolute bg-[#fafcfc] bottom-[5px] content-stretch flex gap-[4px] items-start left-[5px] px-[6px] py-[2px] rounded-[12px] top-[69px]" data-name="Meta: Imports, Tags">
      <div className="h-full min-w-[65px] relative rounded-[12px] shrink-0" data-name="Component 13">
        <div className="flex flex-row justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-start justify-center min-w-[inherit] px-[8px] py-[6px] relative size-full">
            <Container84 />
          </div>
        </div>
      </div>
      <div className="h-full min-w-[65px] relative rounded-[12px] shrink-0" data-name="Component 13">
        <div className="flex flex-row justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-start justify-center min-w-[inherit] px-[8px] py-[6px] relative size-full">
            <Container88 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[22.5px]" data-name="Component 5">
            <div className="absolute inset-[6.25%_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 17.5">
                <path d={svgPaths.p58e8280} fill="var(--fill-0, #505050)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="Container">
      <Container94 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#505050] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Modules</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Container">
      <Container93 />
      <Container95 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[22.5px]" data-name="Component 5">
            <div className="absolute inset-[10.99%_1.04%_6.25%_5.56%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0156 16.5527">
                <path d={svgPaths.p1e257040} fill="var(--fill-0, #505050)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[25px]" data-name="Container">
      <Container98 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#505050] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Views</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-[6.3px] relative shrink-0" data-name="Container">
      <Container97 />
      <Container99 />
    </div>
  );
}

function MetaImportsTags1() {
  return (
    <div className="absolute bg-[#fafcfc] bottom-[6.5px] content-stretch flex gap-[4px] items-start left-[171px] px-[6px] py-[2px] rounded-[12px] top-[67.5px]" data-name="Meta: Imports, Tags">
      <div className="h-full min-w-[65px] relative rounded-[12px] shrink-0" data-name="Component 13">
        <div className="flex flex-row justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-start justify-center min-w-[inherit] px-[8px] py-[6px] relative size-full">
            <Container92 />
          </div>
        </div>
      </div>
      <div className="h-full min-w-[65px] relative rounded-[12px] shrink-0" data-name="Component 13">
        <div className="flex flex-row justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-start justify-center min-w-[inherit] px-[8px] py-[6px] relative size-full">
            <Container96 />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavAccountSettingsList() {
  return (
    <div className="bg-[#ebf2f3] h-[134px] relative rounded-[16px] shrink-0 w-full" data-name="Nav - Account settings → List">
      <div aria-hidden className="absolute border border-[#dbe8e9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <PeopleUsersRespondersContactsMargin />
      <ListsTeamsContactGroupsMargin />
      <NetworkStakeholdersMargin />
      <TemplatesIncidentReportMeetingMessageTemplatesMargin />
      <AssetsResourcesSitesMargin />
      <MetaImportsTags />
      <MetaImportsTags1 />
    </div>
  );
}

function Container103() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none">
            <div className="h-[12px] relative w-[12.25px]" data-name="Component 5">
              <div className="absolute inset-[0_1.02%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path d={svgPaths.p1ec97d80} fill="var(--fill-0, #202627)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#ebf2f3] content-stretch flex flex-col items-center pb-[9.15px] pl-[14.53px] pr-[18.53px] pt-[8.85px] relative rounded-bl-[16px] rounded-tl-[16px] shrink-0 w-[45.31px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-[#dbe8e9] border-b border-l border-solid border-t inset-0 pointer-events-none rounded-bl-[16px] rounded-tl-[16px]" />
      <Container103 />
    </div>
  );
}

function Container104() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[12px] w-full">
          <p className="leading-[normal]">Filter</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[30px] relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-[509.22px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip pl-[10px] pr-[11px] py-[7.75px] relative rounded-[inherit] size-full">
        <Container104 />
      </div>
      <div aria-hidden className="absolute border-[#c9c9c9] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[16px] rounded-tr-[16px]" />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px relative rounded-[16px] w-full" data-name="Container">
      <BackgroundBorder1 />
      <Input1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative size-full">
          <Container102 />
        </div>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="relative shrink-0 w-[16.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_5_Free:Solid','Noto_Sans:Black','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Black','Noto_Sans_Symbols2:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#202627] text-[13px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 900' }}>
          <p className="leading-[13px]">+</p>
        </div>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[107.22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+0.97px)] not-italic text-[#202627] text-[13px] text-center top-[7.75px] w-[109.154px]">
          <p className="leading-[20px]">New log template</p>
        </div>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px pr-[5px] relative" data-name="Container">
      <div className="bg-[#ebf2f3] content-stretch flex gap-[5px] items-center pb-[7.5px] pl-[9px] pr-[14px] pt-[7px] relative rounded-[100px] shrink-0" data-name="Component 14">
        <div aria-hidden className="absolute border border-[#dbe8e9] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <Container106 />
        <Container107 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[5px] relative self-stretch shrink-0" data-name="Margin">
      <Container105 />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex h-[30px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Margin />
      <Margin1 />
    </div>
  );
}

function Container109() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[89.24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+0.45px)] not-italic text-[#13808c] text-[13px] text-center top-[7.75px] w-[90.133px]">
          <p className="leading-[20px]">Move to group</p>
        </div>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cd0152] text-[13px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Delete (0)</p>
        </div>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute bg-white border border-[#767676] border-solid left-0 rounded-[2.5px] size-[13px] top-1/2" data-name="Input" />
      <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center left-[23px] opacity-60 px-px py-[5px] rounded-[100px] top-1/2" data-name="Component 15">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <Container109 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#13808c] text-[13px] text-center whitespace-nowrap">
          <p className="leading-[20px]">{` (0)`}</p>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[141.59px] opacity-60 px-px py-[5px] rounded-[100px] top-1/2" data-name="Component 16">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <Container110 />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f9fbfb] shrink-0 sticky top-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start pb-[11px] pt-px relative size-full">
        <Container101 />
        <Container108 />
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[40px]" data-name="Component 5">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
              <path d={svgPaths.p72aaf00} fill="var(--fill-0, #A9BCBF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Container">
      <Container113 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[15px]" data-name="Component 5">
            <div className="absolute inset-[-0.54%_0_0_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20.1074">
                <path d={svgPaths.p320fd00} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NgIfIncidentTemplateGroupScopeTypeLocal() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center py-[10px]" data-name="ngIf: incidentTemplate.groupScopeType=='LOCAL">
      <Container114 />
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[40px] relative shrink-0 w-[50px]" data-name="Container">
      <Container112 />
      <NgIfIncidentTemplateGroupScopeTypeLocal />
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#202627] text-[16px] w-full">
        <p className="leading-[24px]">Building Fire</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.75px] items-start min-w-px relative" data-name="Container">
      <Container116 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] whitespace-nowrap">
        <p className="leading-[24px]">A building is on fire</p>
      </div>
    </div>
  );
}

function NgIfIncidentTemplatePublished() {
  return (
    <div className="bg-[rgba(255,161,73,0.15)] content-stretch flex items-start justify-center pb-[5.84px] pt-[4.65px] px-[8.2px] relative rounded-[3px] shrink-0" data-name="ngIf: !incidentTemplate.published">
      <div aria-hidden className="absolute border border-[rgba(255,161,73,0.3)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#a34003] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[12px]">Unpublished</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[2.6px] relative shrink-0" data-name="Container">
      <NgIfIncidentTemplatePublished />
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[13.6px]" data-name="Component 5">
            <div className="absolute inset-[0_0.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
                <path d={svgPaths.p12a3a400} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container121 />
    </div>
  );
}

function Small() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container120 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 0`}</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[11.91px]" data-name="Component 5">
            <div className="absolute inset-[6.25%_0.41%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8125 11.8125">
                <path d={svgPaths.p2ec0b000} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container123 />
    </div>
  );
}

function Small1() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container122 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 0`}</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[11.91px]" data-name="Component 5">
            <div className="absolute inset-[0_0.41%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8125 13.5">
                <path d={svgPaths.pba95b30} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container125 />
    </div>
  );
}

function Small2() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container124 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 0`}</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0" data-name="Container">
      <Small />
      <Small1 />
      <Small2 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[5px] relative shrink-0" data-name="Margin">
      <Container119 />
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col gap-[2.91px] items-end relative shrink-0" data-name="Container">
      <Container118 />
      <Margin2 />
    </div>
  );
}

function NgRepeatIncidentTemplateInCtrlIncidentTemplatesOrderByGroupScopeTypeNameFilter() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="ngRepeat: incidentTemplate in $ctrl.incidentTemplates | orderBy: ['groupScopeType', 'name'] | filter...">
      <div className="bg-white relative rounded-[2.5px] shrink-0 size-[13px]" data-name="Input">
        <div aria-hidden className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]" />
      </div>
      <div className="bg-[#fafcfc] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Component 17">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[15px] py-[10px] relative size-full">
            <Container111 />
            <Container115 />
            <Container117 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[40px]" data-name="Component 5">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
              <path d={svgPaths.p72aaf00} fill="var(--fill-0, #A9BCBF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Container">
      <Container128 />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[15px]" data-name="Component 5">
            <div className="absolute inset-[-0.54%_0_0_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20.1074">
                <path d={svgPaths.p320fd00} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NgIfIncidentTemplateGroupScopeTypeLocal1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center py-[10px]" data-name="ngIf: incidentTemplate.groupScopeType=='LOCAL">
      <Container129 />
    </div>
  );
}

function Container126() {
  return (
    <div className="h-[40px] relative shrink-0 w-[50px]" data-name="Container">
      <Container127 />
      <NgIfIncidentTemplateGroupScopeTypeLocal1 />
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#202627] text-[16px] w-full">
        <p className="leading-[24px]">defender:</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.75px] items-start min-w-px relative" data-name="Container">
      <Container131 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] whitespace-nowrap">
        <p className="leading-[24px]">default</p>
      </div>
    </div>
  );
}

function NgIfIncidentTemplatePublished1() {
  return (
    <div className="bg-[rgba(157,228,153,0.2)] content-stretch flex items-start justify-center pb-[5.84px] pt-[4.65px] px-[8.2px] relative rounded-[3px] shrink-0" data-name="ngIf: incidentTemplate.published">
      <div aria-hidden className="absolute border border-[rgba(157,228,153,0.4)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#23891e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[12px]">Published</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[2.6px] relative shrink-0" data-name="Container">
      <NgIfIncidentTemplatePublished1 />
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.51px] relative w-[13.61px]" data-name="Component 5">
            <div className="absolute inset-[0_0.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5099 13.5099">
                <path d={svgPaths.p3e4e1c00} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container136 />
    </div>
  );
}

function Small3() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container135 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 0`}</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[11.91px]" data-name="Component 5">
            <div className="absolute inset-[6.25%_0.41%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8125 11.8125">
                <path d={svgPaths.p2ec0b000} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container138 />
    </div>
  );
}

function Small4() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container137 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 1`}</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[11.91px]" data-name="Component 5">
            <div className="absolute inset-[0_0.41%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8125 13.5">
                <path d={svgPaths.pba95b30} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container140 />
    </div>
  );
}

function Small5() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container139 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 0`}</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0" data-name="Container">
      <Small3 />
      <Small4 />
      <Small5 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[5px] relative shrink-0" data-name="Margin">
      <Container134 />
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col gap-[2.91px] items-end relative shrink-0" data-name="Container">
      <Container133 />
      <Margin3 />
    </div>
  );
}

function EndNgRepeatIncidentTemplateInCtrlIncidentTemplatesOrderByGroupScopeTypeNameFi() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="end ngRepeat: incidentTemplate in $ctrl.incidentTemplates | orderBy: ['groupScopeType', 'name'] | fi...">
      <div className="bg-white relative rounded-[2.5px] shrink-0 size-[13px]" data-name="Input">
        <div aria-hidden className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]" />
      </div>
      <div className="bg-[#fafcfc] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Component 17">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[15px] py-[10px] relative size-full">
            <Container126 />
            <Container130 />
            <Container132 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[40px]" data-name="Component 5">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
              <path d={svgPaths.p72aaf00} fill="var(--fill-0, #A9BCBF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Container">
      <Container143 />
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[15px]" data-name="Component 5">
            <div className="absolute inset-[-0.54%_0_0_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20.1074">
                <path d={svgPaths.p320fd00} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NgIfIncidentTemplateGroupScopeTypeLocal2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center py-[10px]" data-name="ngIf: incidentTemplate.groupScopeType=='LOCAL">
      <Container144 />
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[40px] relative shrink-0 w-[50px]" data-name="Container">
      <Container142 />
      <NgIfIncidentTemplateGroupScopeTypeLocal2 />
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#202627] text-[16px] w-full">
        <p className="leading-[24px]">defender:severity=High</p>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.75px] items-start min-w-px relative" data-name="Container">
      <Container146 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] whitespace-nowrap">
        <p className="leading-[24px]">defender has triggerd this</p>
      </div>
    </div>
  );
}

function NgIfIncidentTemplatePublished2() {
  return (
    <div className="bg-[rgba(157,228,153,0.2)] content-stretch flex items-start justify-center pb-[5.84px] pt-[4.65px] px-[8.2px] relative rounded-[3px] shrink-0" data-name="ngIf: incidentTemplate.published">
      <div aria-hidden className="absolute border border-[rgba(157,228,153,0.4)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#23891e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[12px]">Published</p>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[2.6px] relative shrink-0" data-name="Container">
      <NgIfIncidentTemplatePublished2 />
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[13.6px]" data-name="Component 5">
            <div className="absolute inset-[0_0.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
                <path d={svgPaths.p12a3a400} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container151 />
    </div>
  );
}

function Small6() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container150 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 1`}</p>
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[11.91px]" data-name="Component 5">
            <div className="absolute inset-[6.25%_0.41%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8125 11.8125">
                <path d={svgPaths.p2ec0b000} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container153 />
    </div>
  );
}

function Small7() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container152 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 1`}</p>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[11.91px]" data-name="Component 5">
            <div className="absolute inset-[0_0.41%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8125 13.5">
                <path d={svgPaths.pba95b30} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container155 />
    </div>
  );
}

function Small8() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container154 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 0`}</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0" data-name="Container">
      <Small6 />
      <Small7 />
      <Small8 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[5px] relative shrink-0" data-name="Margin">
      <Container149 />
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex flex-col gap-[2.91px] items-end relative shrink-0" data-name="Container">
      <Container148 />
      <Margin4 />
    </div>
  );
}

function EndNgRepeatIncidentTemplateInCtrlIncidentTemplatesOrderByGroupScopeTypeNameFi1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="end ngRepeat: incidentTemplate in $ctrl.incidentTemplates | orderBy: ['groupScopeType', 'name'] | fi...">
      <div className="bg-white relative rounded-[2.5px] shrink-0 size-[13px]" data-name="Input">
        <div aria-hidden className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]" />
      </div>
      <div className="bg-[#fafcfc] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Component 17">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[15px] py-[10px] relative size-full">
            <Container141 />
            <Container145 />
            <Container147 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[40px]" data-name="Component 5">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
              <path d={svgPaths.p72aaf00} fill="var(--fill-0, #A9BCBF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Container">
      <Container158 />
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[15px]" data-name="Component 5">
            <div className="absolute inset-[-0.54%_0_0_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20.1074">
                <path d={svgPaths.p320fd00} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NgIfIncidentTemplateGroupScopeTypeLocal3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center py-[10px]" data-name="ngIf: incidentTemplate.groupScopeType=='LOCAL">
      <Container159 />
    </div>
  );
}

function Container156() {
  return (
    <div className="h-[40px] relative shrink-0 w-[50px]" data-name="Container">
      <Container157 />
      <NgIfIncidentTemplateGroupScopeTypeLocal3 />
    </div>
  );
}

function Container161() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#202627] text-[16px] w-full">
        <p className="leading-[24px]">defender:severity=Medium</p>
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.75px] items-start min-w-px relative" data-name="Container">
      <Container161 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] whitespace-nowrap">
        <p className="leading-[24px]">defender:severity=Medium</p>
      </div>
    </div>
  );
}

function NgIfIncidentTemplatePublished3() {
  return (
    <div className="bg-[rgba(157,228,153,0.2)] content-stretch flex items-start justify-center pb-[5.84px] pt-[4.65px] px-[8.2px] relative rounded-[3px] shrink-0" data-name="ngIf: incidentTemplate.published">
      <div aria-hidden className="absolute border border-[rgba(157,228,153,0.4)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#23891e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[12px]">Published</p>
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[2.6px] relative shrink-0" data-name="Container">
      <NgIfIncidentTemplatePublished3 />
    </div>
  );
}

function Container166() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[13.6px]" data-name="Component 5">
            <div className="absolute inset-[0_0.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
                <path d={svgPaths.p12a3a400} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container165() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container166 />
    </div>
  );
}

function Small9() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container165 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 0`}</p>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[11.91px]" data-name="Component 5">
            <div className="absolute inset-[6.25%_0.41%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8125 11.8125">
                <path d={svgPaths.p2ec0b000} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container168 />
    </div>
  );
}

function Small10() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container167 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 0`}</p>
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[11.91px]" data-name="Component 5">
            <div className="absolute inset-[0_0.41%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8125 13.5">
                <path d={svgPaths.pba95b30} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container170 />
    </div>
  );
}

function Small11() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container169 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 0`}</p>
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0" data-name="Container">
      <Small9 />
      <Small10 />
      <Small11 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[5px] relative shrink-0" data-name="Margin">
      <Container164 />
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex flex-col gap-[2.91px] items-end relative shrink-0" data-name="Container">
      <Container163 />
      <Margin5 />
    </div>
  );
}

function EndNgRepeatIncidentTemplateInCtrlIncidentTemplatesOrderByGroupScopeTypeNameFi2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="end ngRepeat: incidentTemplate in $ctrl.incidentTemplates | orderBy: ['groupScopeType', 'name'] | fi...">
      <div className="bg-white relative rounded-[2.5px] shrink-0 size-[13px]" data-name="Input">
        <div aria-hidden className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]" />
      </div>
      <div className="bg-[#fafcfc] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Component 17">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[15px] py-[10px] relative size-full">
            <Container156 />
            <Container160 />
            <Container162 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[40px]" data-name="Component 5">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
              <path d={svgPaths.p72aaf00} fill="var(--fill-0, #A9BCBF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Container">
      <Container173 />
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[15px]" data-name="Component 5">
            <div className="absolute inset-[-0.54%_0_0_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20.1074">
                <path d={svgPaths.p320fd00} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NgIfIncidentTemplateGroupScopeTypeLocal4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center py-[10px]" data-name="ngIf: incidentTemplate.groupScopeType=='LOCAL">
      <Container174 />
    </div>
  );
}

function Container171() {
  return (
    <div className="h-[40px] relative shrink-0 w-[50px]" data-name="Container">
      <Container172 />
      <NgIfIncidentTemplateGroupScopeTypeLocal4 />
    </div>
  );
}

function Container176() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#202627] text-[16px] w-full">
        <p className="leading-[24px]">defender:tags=[partAOfCompany]</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.75px] items-start min-w-px relative" data-name="Container">
      <Container176 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] whitespace-nowrap">
        <p className="leading-[24px]">defender:tags=[partAOfCompany]</p>
      </div>
    </div>
  );
}

function NgIfIncidentTemplatePublished4() {
  return (
    <div className="bg-[rgba(157,228,153,0.2)] content-stretch flex items-start justify-center pb-[5.84px] pt-[4.65px] px-[8.2px] relative rounded-[3px] shrink-0" data-name="ngIf: incidentTemplate.published">
      <div aria-hidden className="absolute border border-[rgba(157,228,153,0.4)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#23891e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[12px]">Published</p>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[2.6px] relative shrink-0" data-name="Container">
      <NgIfIncidentTemplatePublished4 />
    </div>
  );
}

function Container181() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[13.6px]" data-name="Component 5">
            <div className="absolute inset-[0_0.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
                <path d={svgPaths.p12a3a400} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container181 />
    </div>
  );
}

function Small12() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container180 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 0`}</p>
      </div>
    </div>
  );
}

function Container183() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[11.91px]" data-name="Component 5">
            <div className="absolute inset-[6.25%_0.41%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8125 11.8125">
                <path d={svgPaths.p2ec0b000} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container182() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container183 />
    </div>
  );
}

function Small13() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container182 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 0`}</p>
      </div>
    </div>
  );
}

function Container185() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[11.91px]" data-name="Component 5">
            <div className="absolute inset-[0_0.41%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8125 13.5">
                <path d={svgPaths.pba95b30} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container184() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container185 />
    </div>
  );
}

function Small14() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container184 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 0`}</p>
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0" data-name="Container">
      <Small12 />
      <Small13 />
      <Small14 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[5px] relative shrink-0" data-name="Margin">
      <Container179 />
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex flex-col gap-[2.91px] items-end relative shrink-0" data-name="Container">
      <Container178 />
      <Margin6 />
    </div>
  );
}

function EndNgRepeatIncidentTemplateInCtrlIncidentTemplatesOrderByGroupScopeTypeNameFi3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="end ngRepeat: incidentTemplate in $ctrl.incidentTemplates | orderBy: ['groupScopeType', 'name'] | fi...">
      <div className="bg-white relative rounded-[2.5px] shrink-0 size-[13px]" data-name="Input">
        <div aria-hidden className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]" />
      </div>
      <div className="bg-[#fafcfc] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Component 17">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[15px] py-[10px] relative size-full">
            <Container171 />
            <Container175 />
            <Container177 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container188() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[40px]" data-name="Component 5">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
              <path d={svgPaths.p72aaf00} fill="var(--fill-0, #A9BCBF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container187() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Container">
      <Container188 />
    </div>
  );
}

function Container189() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[15px]" data-name="Component 5">
            <div className="absolute inset-[-0.54%_0_0_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20.1074">
                <path d={svgPaths.p320fd00} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NgIfIncidentTemplateGroupScopeTypeLocal5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center py-[10px]" data-name="ngIf: incidentTemplate.groupScopeType=='LOCAL">
      <Container189 />
    </div>
  );
}

function Container186() {
  return (
    <div className="h-[40px] relative shrink-0 w-[50px]" data-name="Container">
      <Container187 />
      <NgIfIncidentTemplateGroupScopeTypeLocal5 />
    </div>
  );
}

function Container191() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#202627] text-[16px] w-full">
        <p className="leading-[24px]">Flood</p>
      </div>
    </div>
  );
}

function Small15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-px items-start leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] whitespace-nowrap" data-name="Small">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Flooding has been reported in the affected area. This log is activated to</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">coordinate evacuation, protect personnel and assets, and liaise with emergency</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">services.</p>
      </div>
    </div>
  );
}

function Container190() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.75px] items-start min-w-px relative" data-name="Container">
      <Container191 />
      <Small15 />
    </div>
  );
}

function NgIfIncidentTemplatePublished5() {
  return (
    <div className="bg-[rgba(157,228,153,0.2)] content-stretch flex items-start justify-center pb-[5.84px] pt-[4.65px] px-[8.2px] relative rounded-[3px] shrink-0" data-name="ngIf: incidentTemplate.published">
      <div aria-hidden className="absolute border border-[rgba(157,228,153,0.4)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#23891e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[12px]">Published</p>
      </div>
    </div>
  );
}

function Container193() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[2.6px] relative shrink-0" data-name="Container">
      <NgIfIncidentTemplatePublished5 />
    </div>
  );
}

function Container196() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[13.6px]" data-name="Component 5">
            <div className="absolute inset-[0_0.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
                <path d={svgPaths.p12a3a400} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container195() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container196 />
    </div>
  );
}

function Small16() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container195 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 1`}</p>
      </div>
    </div>
  );
}

function Container198() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[11.91px]" data-name="Component 5">
            <div className="absolute inset-[6.25%_0.41%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8125 11.8125">
                <path d={svgPaths.p2ec0b000} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container197() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container198 />
    </div>
  );
}

function Small17() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container197 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 1`}</p>
      </div>
    </div>
  );
}

function Container200() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[11.91px]" data-name="Component 5">
            <div className="absolute inset-[0_0.41%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8125 13.5">
                <path d={svgPaths.pba95b30} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container200 />
    </div>
  );
}

function Small18() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container199 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 0`}</p>
      </div>
    </div>
  );
}

function Container194() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0" data-name="Container">
      <Small16 />
      <Small17 />
      <Small18 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[5px] relative shrink-0" data-name="Margin">
      <Container194 />
    </div>
  );
}

function Container192() {
  return (
    <div className="content-stretch flex flex-col gap-[2.91px] items-end relative shrink-0" data-name="Container">
      <Container193 />
      <Margin7 />
    </div>
  );
}

function EndNgRepeatIncidentTemplateInCtrlIncidentTemplatesOrderByGroupScopeTypeNameFi4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="end ngRepeat: incidentTemplate in $ctrl.incidentTemplates | orderBy: ['groupScopeType', 'name'] | fi...">
      <div className="bg-white relative rounded-[2.5px] shrink-0 size-[13px]" data-name="Input">
        <div aria-hidden className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]" />
      </div>
      <div className="bg-[#fafcfc] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Component 17">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[15px] py-[10px] relative size-full">
            <Container186 />
            <Container190 />
            <Container192 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container203() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[40px]" data-name="Component 5">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
              <path d={svgPaths.p72aaf00} fill="var(--fill-0, #A9BCBF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container202() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Container">
      <Container203 />
    </div>
  );
}

function Container204() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[20px] relative w-[15px]" data-name="Component 5">
            <div className="absolute inset-[-0.54%_0_0_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20.1074">
                <path d={svgPaths.p320fd00} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NgIfIncidentTemplateGroupScopeTypeLocal6() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center py-[10px]" data-name="ngIf: incidentTemplate.groupScopeType=='LOCAL">
      <Container204 />
    </div>
  );
}

function Container201() {
  return (
    <div className="h-[40px] relative shrink-0 w-[50px]" data-name="Container">
      <Container202 />
      <NgIfIncidentTemplateGroupScopeTypeLocal6 />
    </div>
  );
}

function Container206() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#202627] text-[16px] w-full">
        <p className="leading-[24px]">StorageBreakin</p>
      </div>
    </div>
  );
}

function Container205() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.75px] items-start min-w-px relative" data-name="Container">
      <Container206 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] whitespace-nowrap">
        <p className="leading-[24px]">Some has broken in to our storage</p>
      </div>
    </div>
  );
}

function NgIfIncidentTemplatePublished6() {
  return (
    <div className="bg-[rgba(157,228,153,0.2)] content-stretch flex items-start justify-center pb-[5.84px] pt-[4.65px] px-[8.2px] relative rounded-[3px] shrink-0" data-name="ngIf: incidentTemplate.published">
      <div aria-hidden className="absolute border border-[rgba(157,228,153,0.4)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#23891e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[12px]">Published</p>
      </div>
    </div>
  );
}

function Container208() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[2.6px] relative shrink-0" data-name="Container">
      <NgIfIncidentTemplatePublished6 />
    </div>
  );
}

function Container211() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.51px] relative w-[13.61px]" data-name="Component 5">
            <div className="absolute inset-[0_0.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5099 13.5099">
                <path d={svgPaths.p3e4e1c00} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container210() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container211 />
    </div>
  );
}

function Small19() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container210 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 1`}</p>
      </div>
    </div>
  );
}

function Container213() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[11.91px]" data-name="Component 5">
            <div className="absolute inset-[6.25%_0.41%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8125 11.8125">
                <path d={svgPaths.p2ec0b000} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container212() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container213 />
    </div>
  );
}

function Small20() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container212 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 0`}</p>
      </div>
    </div>
  );
}

function Container215() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[13.5px] relative w-[11.91px]" data-name="Component 5">
            <div className="absolute inset-[0_0.41%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8125 13.5">
                <path d={svgPaths.pba95b30} fill="var(--fill-0, #7C787D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container214() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[17px]" data-name="Container">
      <Container215 />
    </div>
  );
}

function Small21() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0" data-name="Small">
      <Container214 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7c787d] text-[13.6px] text-right whitespace-nowrap">
        <p className="leading-[24px]">{` 0`}</p>
      </div>
    </div>
  );
}

function Container209() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0" data-name="Container">
      <Small19 />
      <Small20 />
      <Small21 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[5px] relative shrink-0" data-name="Margin">
      <Container209 />
    </div>
  );
}

function Container207() {
  return (
    <div className="content-stretch flex flex-col gap-[2.91px] items-end relative shrink-0" data-name="Container">
      <Container208 />
      <Margin8 />
    </div>
  );
}

function EndNgRepeatIncidentTemplateInCtrlIncidentTemplatesOrderByGroupScopeTypeNameFi5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="end ngRepeat: incidentTemplate in $ctrl.incidentTemplates | orderBy: ['groupScopeType', 'name'] | fi...">
      <div className="bg-white relative rounded-[2.5px] shrink-0 size-[13px]" data-name="Input">
        <div aria-hidden className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]" />
      </div>
      <div className="bg-[#fafcfc] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Component 17">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[15px] py-[10px] relative size-full">
            <Container201 />
            <Container205 />
            <Container207 />
          </div>
        </div>
      </div>
    </div>
  );
}

function NgIfCtrlLoadingIncidentTemplates() {
  return (
    <div className="bg-[#f9fbfb] flex-[1_0_0] min-h-px relative rounded-[16px] w-full" data-name="ngIf: !$ctrl.loadingIncidentTemplates">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
        <NgRepeatIncidentTemplateInCtrlIncidentTemplatesOrderByGroupScopeTypeNameFilter />
        <EndNgRepeatIncidentTemplateInCtrlIncidentTemplatesOrderByGroupScopeTypeNameFi />
        <EndNgRepeatIncidentTemplateInCtrlIncidentTemplatesOrderByGroupScopeTypeNameFi1 />
        <EndNgRepeatIncidentTemplateInCtrlIncidentTemplatesOrderByGroupScopeTypeNameFi2 />
        <EndNgRepeatIncidentTemplateInCtrlIncidentTemplatesOrderByGroupScopeTypeNameFi3 />
        <EndNgRepeatIncidentTemplateInCtrlIncidentTemplatesOrderByGroupScopeTypeNameFi4 />
        <EndNgRepeatIncidentTemplateInCtrlIncidentTemplatesOrderByGroupScopeTypeNameFi5 />
      </div>
    </div>
  );
}

function NgIfCtrlLoadingIncidentTemplatesMargin() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full z-[1]" data-name="ngIf: !$ctrl.loadingIncidentTemplates:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pb-[20px] relative size-full">
          <NgIfCtrlLoadingIncidentTemplates />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f9fbfb] flex-[1_0_0] min-h-px relative rounded-[16px] w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#dbe8e9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col isolate items-start p-[17px] relative size-full">
        <Background />
        <NgIfCtrlLoadingIncidentTemplatesMargin />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch z-[2]" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[15px] relative size-full">
          <BackgroundBorder />
        </div>
      </div>
    </div>
  );
}

function Container219() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[48px]" data-name="Component 5">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <path d={svgPaths.p19840480} fill="var(--fill-0, #336D77)" fillOpacity="0.65" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container218() {
  return (
    <div className="relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container219 />
      </div>
    </div>
  );
}

function Container220() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[4.42px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#336d77] text-[16px] whitespace-nowrap">
          <p className="leading-[24px] mb-0">Log templates contain your plans in case of critical events. Create log templates for</p>
          <p className="leading-[24px] mb-0">anticipated event types, and define necessary actions - such as notification text,</p>
          <p className="leading-[24px]">teams task and file storage</p>
        </div>
      </div>
    </div>
  );
}

function NgIfCtrlGetIncidentTemplate() {
  return (
    <div className="bg-[rgba(60,166,211,0.1)] relative rounded-[16px] shrink-0 w-full" data-name="ngIf: !$ctrl.getIncidentTemplate()">
      <div aria-hidden className="absolute border border-[rgba(51,109,119,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container218 />
          <Container220 />
        </div>
      </div>
    </div>
  );
}

function Container217() {
  return (
    <div className="shrink-0 sticky top-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[36px] pt-[16px] px-[16px] relative size-full">
        <NgIfCtrlGetIncidentTemplate />
      </div>
    </div>
  );
}

function Container216() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[15px] relative size-full">
        <Container217 />
      </div>
    </div>
  );
}

function NgIfCtrlActiveGroupCtrlIsTabActiveRayvnAccountIncidentTemplatesAccountIncidentTemplates() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 h-[755px] isolate items-start min-h-[755px] pt-[4px] relative shrink-0 w-[1570px]" data-name="ngIf: $ctrl.activeGroup && $ctrl.isTabActive('rayvn.account.incidentTemplates') → account-incident-templates">
      <Container100 />
      <Container216 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-0 pt-[12px] px-[15px] top-0 w-[1570px]" data-name="Container">
      <BackgroundBorderShadow />
      <NavAccountSettingsList />
      <NgIfCtrlActiveGroupCtrlIsTabActiveRayvnAccountIncidentTemplatesAccountIncidentTemplates />
    </div>
  );
}

function EndNgIfCtrlHideUnifiedSidebarUiViewAccountView() {
  return (
    <div className="flex-[1_0_0] min-w-px overflow-x-clip overflow-y-auto relative self-stretch" data-name="end ngIf: !$ctrl.hideUnifiedSidebar() → uiView → account-view">
      <Container34 />
    </div>
  );
}

function GlobalUnifiedSidepanelMainContentShell() {
  return (
    <div className="content-stretch flex h-[841px] items-start overflow-clip relative shrink-0 w-full" data-name="Global unified sidepanel + main content shell">
      <NgIfCtrlHideUnifiedSidebar />
      <EndNgIfCtrlHideUnifiedSidebarUiViewAccountView />
    </div>
  );
}

function FlexiteElu() {
  return (
    <div className="bg-[#f9fbfb] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-[841px] min-w-px relative self-stretch" data-name="flexite-elu">
      <GlobalUnifiedSidepanelMainContentShell />
    </div>
  );
}

function UiView() {
  return (
    <div className="content-stretch flex h-[841px] items-start justify-center relative shrink-0 w-full" data-name="uiView">
      <FlexiteElu />
    </div>
  );
}

export default function Component1708WDefault() {
  return (
    <div className="bg-[#f9fbfb] content-stretch flex flex-col items-start relative size-full" data-name="1708w default">
      <UiView />
    </div>
  );
}