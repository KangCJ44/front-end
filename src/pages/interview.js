import React from "react";
import Select from "react-select";
import Header from "../components/header.js"
import { useNavigate } from "react-router-dom";
import "../style/interviewai.css"
import { Octokit } from "octokit";

const joboption=[
    {value: "01", label: "서버 개발자"},
    {value: "02", label: "프론트엔드 개발자"},
    {value: "03", label: "안드로이드 개발자"},
    {value: "04", label: "iOS 개발자"},
    {value: "05", label: "임베디드 개발자"}
];

function InterviewAi(){

  const octokit = new Octokit({
    auth: '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'
  });

  const JobcustomSelect ={
      control: (provided) =>({
        ...provided,
        width: "250px",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "10px",
        border: '1px #DDDDDD solid',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'inline-flex',
        cursor: 'pointer'
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#4285F4" : state.isFocused ? "#ACCBFF": "#fff",
        color: state.isSelected ? "#fff" : "#000",
        cursor: 'pointer'
      }),
      indicatorSeparator: (provided) => ({
        ...provided,
        display: "none"
      }),
    }
  const navigate = useNavigate();
  const navigateToOutput = () => {
    navigate("/interviewai/output")
  }
  return(
      <div className="InterviewAibody">
          <Header/>
          <div className="AiSubtitleBox">
            <div className="AiSubtitleText">포트폴리오 제출</div>
          </div>
          <div className="AiSelectFrame">
            <div className="AiJobSelectFrame">
              <div className="JobSelectTitle">직무</div>
              <Select
                  className="Selection"
                  classNamePrefix="select"
                  defaultValue={joboption[0]}
                  name="Job"
                  options={joboption}
                  isSearchable={false}
                  styles={JobcustomSelect}
              />
              </div>
              <div style={{width: 229, height: 158, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 25, display: 'inline-flex'}}>
                <div className="Frame77" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div className="1" style={{width: 129, height: 38, color: '#808080', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word'}}>포트폴리오 1</div>
                  <div className="Frame76" style={{paddingTop: 11, paddingBottom: 2, paddingLeft: 18, paddingRight: 66, borderRadius: 5, border: '1px #DDDDDD solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                    <div className="SermadlChaezzic" style={{width: 145, height: 35, color: 'black', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '500', wordWrap: 'break-word'}}>Sermadl/chaezzic</div>
                  </div>
                </div>
                <button className="IncludeButton" onClick={()=>window.open()}>
                  <div style={{color: '#FCFDFF', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '500', wordWrap: 'break-word'}}>+ 포트폴리오 추가하기</div>
                </button>
              </div>
            <button className="OutputButton" onClick={navigateToOutput}>
              <div style={{color: 'white', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word'}}>제출하기</div>
            </button>
          </div>
      </div>
  )
}

export default InterviewAi;