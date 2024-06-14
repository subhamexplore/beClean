import React, { useEffect } from 'react';

const Form = () => {
  useEffect(() => {
    (function(h, b, s, n, i, p, e, t) {
      h._HB_ = h._HB_ || {};
      h._HB_.pid = i;
      t = b.createElement(s);
      t.type = "text/javascript";
      t.async = !0;
      t.src = n;
      e = b.getElementsByTagName(s)[0];
      e.parentNode.insertBefore(t, e);
    })(window, document, "script", "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js", "666b72c762383900258d8244");
  }, []);

  return (
    <div className="hb-p-666b72c762383900258d8244-1">
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.honeybook.com/p.png?pid=666b72c762383900258d8244"
        alt=""
      />
    </div>
  );
};

export default Form;
