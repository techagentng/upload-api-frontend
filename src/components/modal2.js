import "../css/modal.css";

const Modal2 = ({ setIsOpen }) => {
  return (
    <div className=" modal-general-container">
      <div className="modal-container">
        <div className="modal-wrapper">
          <div className="modal-header">
            <div className="modal-title">
              <p>Join Waitlist</p>
              <i>
                <Cancel handleClick={setIsOpen} />
              </i>
            </div>
            <p className="modal-description">
              A confirmation link would be sent to your email for early users
              and starters.
            </p>
          </div>
          <iframe
            src="https://waitlist.formstack.com/forms/join_wait_list"
            title="Join Wait List"
            width="100%"
            height="420"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal2;

function Cancel({ handleClick }) {
  return (
    <svg
      onClick={handleClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.35"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.382812 11.75C0.382812 5.26065 5.64347 0 12.1328 0C18.6222 0 23.8828 5.26065 23.8828 11.75C23.8828 18.2393 18.6222 23.5 12.1328 23.5C5.64347 23.5 0.382812 18.2393 0.382812 11.75Z"
        fill="#CCCCCC"
      />
      <path
        d="M17.7647 7.65638L17.2265 7.11823C17.077 6.96873 16.8347 6.96873 16.6852 7.11823L12.6328 11.1706L8.58042 7.11823C8.43092 6.96873 8.18854 6.96873 8.03904 7.11823L7.50089 7.65638C7.35139 7.80588 7.35139 8.04826 7.50089 8.19776L11.5533 12.2501L7.50089 16.3025C7.3514 16.452 7.3514 16.6944 7.50089 16.8439L8.03905 17.382C8.18854 17.5315 8.43093 17.5315 8.58043 17.382L12.6328 13.3296L16.6852 17.382C16.8347 17.5315 17.077 17.5315 17.2265 17.382L17.7647 16.8439C17.9142 16.6944 17.9142 16.452 17.7647 16.3025L13.7123 12.2501L17.7647 8.19776C17.9142 8.04826 17.9142 7.80588 17.7647 7.65638Z"
        fill="black"
        fill-opacity="0.65"
      />
    </svg>
  );
}
