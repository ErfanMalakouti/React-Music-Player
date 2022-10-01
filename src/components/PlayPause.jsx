import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => {
  if (song?.hub?.actions) {
    if (
      isPlaying &&
      activeSong?.title === song.title &&
      activeSong?.subtitle === song.subtitle
    ) {
      return (
        <FaPauseCircle
          size={35}
          className="text-gray-300"
          onClick={handlePause}
        />
      );
    }
    return (
      <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
    );
  }
  return <p className="text-white">not available</p>;
};

export default PlayPause;
