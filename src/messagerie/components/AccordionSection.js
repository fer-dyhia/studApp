import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
       { this.props.isOpen ?
          <div className="bg-yellow-400 border-1 pl-3 pt-6">
              <div onClick={onClick} className="cursor-pointer">
                  {label}
                  <div className="right-0">
                  {!isOpen && <span>&#9650;</span>}
                   {isOpen && <span>&#9660;</span>}
                  </div>
             </div>
             {isOpen && (
                 <div className="bg-green-400 border-1 mt-5 pl-3 pt-6">
                 {this.props.children}
                </div>
            )}
        </div> 
      :
       <div className="bg-green-400 border-1 pl-3 pt-6">
            <div className="bg-yellow-400 border-1 pl-3 pt-6">
                <div onClick={onClick} className="cursor-pointer">
                    {label}
                    <div className="right-0">
                    {!isOpen && <span>&#9650;</span>}
                    {isOpen && <span>&#9660;</span>}
                    </div>
                </div>
                {isOpen && (
                <div className="bg-green-400 border-1 mt-5 pl-3 pt-6">
                {this.props.children}
                 </div>
                )}
            </div>
        </div>
        }
    );
    }


export default AccordionSection;