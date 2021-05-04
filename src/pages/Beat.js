import React, { useState, useEffect } from 'react';
import './Beat.css';
import BtnClose from '../components/BtnClose';

let timePrev = new Date().getTime();
let timeInit;
// let avgRecords = 0;

const Beat = () => {
  const [onMeasure, setOnMeasure] = useState(false);
  const [stateSlider, setStateSlider] = useState(false);
  const initialTimer = 5;
  const [timer, setTimer] = useState(initialTimer);
  // const [avgBPM, setAvgBPM] = useState(0);
  const [avgBPM, setAvgBPM] = useState(0);
  const [BPMs, setBPMs] = useState([]);
  const [instBPM, setInstBPM] = useState(0);
  const [records, setRecords] = useState([]); //[1, 2, 3, 4, 5, 6]); //new Array();

  const [avgRecords, setAvgRecords] = useState(0);

  // decreasing timer

  useEffect(() => {
    let interval = null;

    if (onMeasure) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }
    if (timer == 0 && onMeasure) {
      // hit();
      clearInterval(interval);
      setOnMeasure(false);
    }
    return () => clearInterval(interval);
  }, [onMeasure, timer]);

  useEffect(() => {
    console.log(`avgRecords: ${avgRecords}`);
    if (records.length > 0) {
      let summed = records.reduce((a, b) => a + b);
      console.log(`summed: ${summed}`);
      setAvgRecords(summed / (records.length + 1e-12));
    }
  }, [records]);
  const resetMeasure = () => {
    setOnMeasure(false);
    setBPMs([]);
    // timeInit = new Date().getTime(); no need
    setInstBPM(0); //_curBpm);
    setAvgBPM(0);
    setTimer(initialTimer);
  };
  const resetRecords = () => {
    setRecords([]);
    setAvgRecords(0);
  };
  const nbDigitsTimer = 3;
  const nbDigitsBPM = 1;

  const hit = () => {
    let timeCur, timeDiff, timeTotal;
    if (timer == 0) return;
    if (onMeasure === false) {
      setOnMeasure(true);
      timeInit = new Date().getTime();
      timePrev = timeInit; // initialize
      console.log('=============================');
      console.log(`onMeasure: ${onMeasure}`);
      console.log(`timeInit: ${timeInit}`);
      console.log(`timePrev: ${timePrev}`);
    } else {
      timeCur = new Date().getTime();
      timeDiff = timeCur - timePrev;
      // console.log('-----------------------------');
      // console.log(`onMeasure: ${onMeasure}`);
      // console.log(`timeInit: ${timeInit}`);
      // console.log(`timeCur: ${timeCur}`);
      // console.log(`timePrev: ${timePrev}`);
      // console.log(`timeDiff: ${timeDiff}`);

      const timeTotal = timeCur - timeInit;
      console.log(`timeTotal: ${timeTotal}`);
      const _instBPM = (1 / timeDiff) * 60 * 1000;
      const _BPMs = [...BPMs, _instBPM];
      setInstBPM(_instBPM);
      setBPMs(_BPMs);
      // console.log(`BPMs: ${BPMs}`);
      // console.log(`BPMs.length: ${BPMs.length}`);

      timePrev = timeCur;
      let summedBPM = _BPMs.reduce((a, b) => a + b, 0);
      // console.log(`summedBPM: ${summedBPM}`);
      let _avgBPM = (_BPMs.length / timeTotal) * 60 * 1000;
      // console.log(`_BPMs.length: ${_BPMs.length}`);
      // console.log(`_avgBPM: ${_avgBPM}`);
      setAvgBPM(_avgBPM);
    }
  };

  // let avgBPM = new Date().getTime();
  // const [bpms, set]

  // early return
  const timerHandler = (v) => {
    const timerAlert = () => {
      const message = `0 에서 ${maxTimer} 사이의 값을 입력해주세요.`;
      alert(message);
    };
    const maxTimer = initialTimer * 2; // sec
    if (v < 0) {
      timerAlert(0);
      return setTimer(0);
    } //return 0;
    if (v > maxTimer) {
      timerAlert(maxTimer);
      return setTimer(maxTimer);
    } //return maxTimer;
    return setTimer(Number(v)); //return Number(v);
  };
  const saveOneMeasure = () => {
    let arr = [...records, avgBPM];
    setRecords(arr);
    console.log(`after records: ${records}`);
    resetMeasure();
    // avgRecords = arr.reduce((a, b) => a + b) / arr.length;
    // setAvgRecords(arr.reduce((a, b) => a + b) / arr.length);
  };
  const recordRemoveHandler = (id) => {
    console.log(`hi remove ${id}`);
    console.log(`before : ${records}`);
    const newRecords = records.filter((e, i) => i !== id);
    console.log(`after : ${records}`);
    setRecords(newRecords);
  };
  return (
    <div className="page-beat-layout">
      <div className="page-beat-content">
        <div className="pannel">
          <div className="row timer">
            <div className="timer-display">
              <input
                value={timer.toFixed(nbDigitsTimer)}
                onChange={(e) => timerHandler(e.target.value)}
                onBlur={(e) => {
                  e.target.value = timer.toFixed(nbDigitsTimer);
                }}
              />
              <span>sec</span>
            </div>
            <div className="timer-controller">
              <div
                className="prevent-drag"
                onClick={() => timerHandler(timer + 1)}
              >
                🔼
              </div>
              <div
                className="prevent-drag"
                onClick={() => timerHandler(timer - 1)}
              >
                🔽
              </div>
            </div>
          </div>
          <div className="row bpm">
            <div className="avg-bpm">
              <dl>
                <dt>평균 BPM</dt>
                <dd>{avgBPM.toFixed(nbDigitsBPM)}</dd>
              </dl>
            </div>
            <div className="inst-bpm">
              <dl>
                <dt>순간 BPM</dt>
                <dd>{instBPM.toFixed(nbDigitsBPM)}</dd>
              </dl>
            </div>
          </div>
          <div className="flow-controller">
            <div className="reset-measure" onClick={resetMeasure}>
              리셋
            </div>
            <div className="save-measure" onClick={saveOneMeasure}>
              기록
            </div>
          </div>
          <div className="row records">
            <div className="record-summary">
              <dl>
                <dt>기록 평균</dt>
                <dd>{avgRecords.toFixed(nbDigitsBPM)}</dd>
                <dt>측정 횟수</dt>
                <dd>{records.length}</dd>
              </dl>
            </div>
            <div className="record-items">
              <ul>
                {records.map((e, i) => (
                  <li key={i}>
                    <div>
                      [{i}] {e.toFixed(nbDigitsBPM)}
                    </div>
                    <BtnClose
                      onClickHandler={() => {
                        console.log('hi from parent!');
                        recordRemoveHandler(i);
                        console.log(records);
                      }}
                      fontFamily="gulim"
                      fontWeight="bolder"
                      fontSize="1rem"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="slider-reset-records"
              style={{ right: stateSlider === true ? '0' : '-25vw' }}
            >
              <div
                className=""
                onClick={() => {
                  setStateSlider(!stateSlider);
                }}
              >
                {stateSlider === true ? '▶' : '◀'}
              </div>
              <div
                className=""
                onClick={() => {
                  resetRecords();
                  resetMeasure();
                  setStateSlider(!stateSlider);
                }}
              >
                reset
              </div>
            </div>
          </div>
        </div>
        <div className="hit">
          <span className="tab-area prevent-drag" onClick={hit}>
            {onMeasure === true ? '' : '측정 시작'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Beat;
