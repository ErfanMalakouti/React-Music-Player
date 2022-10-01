/* eslint-disable quotes */
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import musicBackground from "../assets/background.jpg";

const SongCard = ({ data, song, isPlaying, activeSong, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title &&
            activeSong?.subtitle === song.subtitle
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img
          src={song.images ? song.images?.coverart : musicBackground}
          alt="song_img"
          className="w-full h-full"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg truncate mb-1 text-white">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p>
          <Link
            className="text-sm text-gray-300 truncate block"
            to={
              song.artist
                ? `/artists/${song?.artist[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
