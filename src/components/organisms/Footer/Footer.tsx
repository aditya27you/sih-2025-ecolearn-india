import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.791 4.649-.39.106-.802.165-1.227.165-.303 0-.596-.03- deliciously .882-1.171 2.449 4.565 4.595 2.298 1.634 4.212 3.791 4.649-.39.106-.802.165-1.227.165-.303 0-.596-.03-.882-.084.616 1.956 2.368 3.374 4.465 3.419-2.115 1.642-4.778 2.623-7.668 2.623-.5 0-.99-.029-1.472-.086 2.742 1.76 6.002 2.787 9.473 2.787 11.365 0 17.585-9.428 17.585-17.585 0-.267-.006-.533-.018-.798.99-.718 1.848-1.619 2.538-2.643z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </div>
      </div>
      <div>
        <p>Copyright © 2026 - All right reserved by EcoLearn</p>
      </div>
    </footer>
  );
};

export default Footer;