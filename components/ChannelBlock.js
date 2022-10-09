import { useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const today = ['Kill Adi', 'Lmao'];
const tomorrow = ['Kill Me', 'Presentation'];
const ChannelBar = () => {
    return (
        <div className='channel-bar shadow-lg'>
            <ChannelBlock />
            < Divider />
            <div className='channel-container'>
                <Dropdown header=" Today's Tasks" selections={today} />
                <Dropdown header="Tomorrow's Tasks" selections={tomorrow} />
            </div>
        </div>
    );
};

const Dropdown = ({ header, selections }) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className='dropdown'>
            <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
                <ChevronIcon expanded={expanded} />
                <h5
                    className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}
                >
                    {header}
                </h5>
                <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto' />
            </div>
            {expanded &&
                selections &&
                selections.map((selection) => <TopicSelection selection={selection} /> )}
        </div>
    );
};

const ChevronIcon = ({ expanded }) => {
    const chevClass = 'text-accent text-opacity-80 my-auto mr-4';
    return expanded ? (
        <FaChevronDown size='14' className={chevClass} />
    ) : (
        <FaChevronRight size='14' className={chevClass} />
    );
};

const TopicSelection = ({ selection }) => (
    <div className='dropdown-selection'>
        <FiCheckSquare size='18' className='text-gray-400 mr-2' />   
        <h5 className='dropdown-selection-text'>{selection}</h5>
    </div>
);

const ChannelBlock = () => (
    
    <div className='channel-block'>
        <h5 className='channel-block-text'>{new Date().toLocaleString("en-US", { month: "long" })}, { new Date().toLocaleString("en-US", { day : '2-digit'}) }</h5>
    </div>
);
const Divider = () => <hr className="content-hr" />;
export default ChannelBar;