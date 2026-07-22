// My Info — この端末（localStorage）だけに保存。コードには一切含めない。
window.MoveInfo = (function(){
  const KEY = 'moveInfo';
  const FP_KEY = 'moveFloorplan';
  function get(){ try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch(e){ return {}; } }
  function set(o){ localStorage.setItem(KEY, JSON.stringify(o)); }
  function getFloorplan(){ return localStorage.getItem(FP_KEY) || ''; }
  function setFloorplan(dataUrl){ localStorage.setItem(FP_KEY, dataUrl); }
  function clearFloorplan(){ localStorage.removeItem(FP_KEY); }
  // [data-info="key"] の要素に値を差し込む。未設定ならプレースホルダ表示。
  function fill(){
    const info = get();
    document.querySelectorAll('[data-info]').forEach(el => {
      const k = el.dataset.info;
      const v = (info[k] || '').trim();
      el.textContent = v || (el.dataset.ph || '（端末に未設定）');
      el.classList.toggle('info-empty', !v);
    });
  }
  return { KEY, FP_KEY, get, set, getFloorplan, setFloorplan, clearFloorplan, fill };
})();
