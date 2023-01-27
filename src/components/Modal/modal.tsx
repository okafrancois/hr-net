import React, {ReactNode, useEffect} from 'react';
import './modal.scss'
import PropTypes from "prop-types";

/**
 * Configuration
 */

interface ModalProps {
    children: ReactNode;
    title?: string | ReactNode;
    state: boolean;
    closeHandler: any;
}

/**
 * Component definition
 */

/**
 @function

 @param {Object} props - The properties of the Re modal component
 @param {ReactNode} props.children - The content to be rendered within the modal body
 @param {string|ReactNode} props.title - The title of the modal. Can be a string or a ReactNode.
 @param {boolean} props.state - The state of the modal, whether it is opened or closed
 @param {Function} props.closeHandler - The function to handle the closing of the modal
 @returns {ReactNode} - Returns a modal component with a header containing the provided title (if provided), and a body containing the provided children
 */
const Modal: React.FC<ModalProps> = ({children, title, state, closeHandler}) => {
    let headerContent = null;

    /**
     @function
     @param {string|ReactNode} content - The content to be formatted as a header. Can be a string or a ReactNode.
     @returns {ReactNode} - Returns a formatted header, either a string wrapped in a paragraph element or the original ReactNode.
     */
    const formatHeaderContent = (content: string | ReactNode) => {
        if (typeof content === 'string') {
            return <p>{content}</p>
        } else {
            return content;
        }
    }

    if (title) {
        headerContent = formatHeaderContent(title);
    }

    const handleOutsideClick = (e: any) => {
        if (e.target.classList.contains('modal')) {
            closeHandler();
        }
    }

    const handleEscape = (e: any) => {
        e.preventDefault();
        if (e.key === 'Escape') {
            closeHandler();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('keydown', handleEscape);
        }
    })

    return (
        <div className={`modal${state ? ' --opened' : ''}`} onClick={handleOutsideClick}>
            <div className="modal__overlay"></div>
            <div className="modal__wrapper">
                <button className="modal__close" onClick={closeHandler}>
                    <i className="fa-solid fa-close"></i>
                </button>
                {
                    title &&
                    <div className={"modal__header"}>
                        {headerContent}
                    </div>
                }
                <div className="modal__body">
                    {children}
                </div>
            </div>
        </div>
    );
};

/**
 * Init props types
 */

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    state: PropTypes.bool.isRequired,
    closeHandler: PropTypes.func.isRequired
}

/**
 * Init and export
 */
export default Modal;
