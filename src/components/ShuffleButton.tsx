import { motion } from "framer-motion";

interface ShuffleButtonProps {
  onClick: () => void;
  isShuffling: boolean;
}

export default function ShuffleButton({ onClick, isShuffling }: ShuffleButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={isShuffling}
      className={`px-6 py-3 rounded-lg text-white font-bold ${
        isShuffling ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
      }`}
      whileTap={{ scale: 0.95 }}
    >
      {isShuffling ? "Shuffling..." : "Shuffle"}
    </motion.button>
  );
}