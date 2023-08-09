/* @src/components/modal/Modal.module.css */
import "../../css/button.css"
import styles from "../modal/Modal.module.css.css";

import name from "./icons/name.svg"
import label from "./icons/label.svg"
import name2 from "./icons/name2.svg"

const Modal = ({ setIsOpen }) => {
    return (
      <>
       <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            {/* <RiCloseLine style={{ marginBottom: "-3px" }} /> */}
          </button>
          <div className={styles.modalContent}>
          <div class="containerr">
            <div class="details-modal-content">
                <div class="formbox">
                    <div class="formbox__text">
                        <h3>Join Waitlist</h3>
                        <p>A confirmation link would be sent to your email for early users and startersxxxx.</p>
                </div>
             <div class="formbox__text__fields">
               <div class="field__box1">
                 <label>Name</label>
                 <input type="text" name="name" placeholder="Name"/>
                 <div class="fieldbox"><img src={name2} alt="img"/></div>
                 <div class="fieldclear"><img src={label} alt="img"/></div>
               </div>
               <div class="field__box2">
                 <label for="email">Email</label>
                 <input type="text" name="email" placeholder="Email"/>
                 <div class="fieldbox"><img src={name} alt="img"/></div>
                 <div class="fieldclear"><img src={label} alt="img"/></div>
               </div>
               <div class="field__btn">Join Waitlist</div>
             </div>
   
         </div>
     </div>
   </div>
</div>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Modal