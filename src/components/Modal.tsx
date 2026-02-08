import { X } from 'lucide-react';
import { useTheme } from '../ThemeContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
}

function Modal({ isOpen, onClose, title, url }: ModalProps) {
  const { isDark } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        className={`relative w-full max-w-6xl h-[90vh] rounded-lg shadow-2xl flex flex-col ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`flex items-center justify-between p-6 border-b ${isDark ? 'border-[#C5A059]/20' : 'border-gray-200'}`}>
          <h2 className={`text-xl font-['Cairo'] font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`}
            aria-label="إغلاق"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden">
          <iframe
            src={url}
            title={title}
            className="w-full h-full border-0"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
