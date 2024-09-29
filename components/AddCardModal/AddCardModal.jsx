import React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const AddCardModal = ({ visible, onClose, handleCardAdd }) => {
  const customStyles = {
    background: 'rgb(58 58 58)',
    padding: '20px',
    width: '50%',
    top: '-3rem',
    height: 'fit-content',
    maxWidth: '40rem',
  };

  const [title, setTitle] = React.useState('');
  const [detail, setDetail] = React.useState('');

  return (
    <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
      <div className="space-y-4">
        <div className="mb-4">
          <span className="block text-white mb-2">Card Title</span>
          <input
            type="text"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <span className="block text-white mb-2">Detail</span>
          <textarea
            rows={10}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>

        <button
          disabled={title === '' && detail === ''}
          className={`w-full py-2 rounded ${
            title === '' && detail === ''
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white`}
          onClick={() => {
            handleCardAdd(title, detail);
            setDetail('');
            setTitle('');
          }}
        >
          Add
        </button>
      </div>
    </Rodal>
  );
};

export default AddCardModal;
