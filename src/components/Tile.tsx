import { twMerge } from "tailwind-merge";
import { END_TILE_STYLE, MAX_ROWS, PATH_TILE_STYLE, START_TILE_STYLE, TILE_STYLE, TRAVERSED_TILE_STYLE, WALL_TILE_STYLE } from "../utils/constants";

interface MouseFunction {
    (row: number, col: number): void;
}

export function Tile({
    row,
    col,
    isStart,
    isWall,
    isEnd,
    isPath,
    isTraversed,
    handleMouseDown,
    handleMouseUp,
    handleMouseEnter
}: {
    row: number;
    col: number;
    isStart: boolean,
    isWall: boolean,
    isEnd: boolean,
    isPath: boolean,
    isTraversed: boolean,
    handleMouseDown: MouseFunction,
    handleMouseUp: MouseFunction,
    handleMouseEnter: MouseFunction,
}) {

    let tileTileStyle;

    if (isStart) {
        tileTileStyle = START_TILE_STYLE;
    } else if (isEnd) {
        tileTileStyle = END_TILE_STYLE;
    } else if (isWall) {
        tileTileStyle = WALL_TILE_STYLE;
    } else if (isPath) {
        tileTileStyle = PATH_TILE_STYLE;
    } else if (isTraversed) {
        tileTileStyle = TRAVERSED_TILE_STYLE;
    } else {
        tileTileStyle = TILE_STYLE;
    }

    const borderStyle = row === MAX_ROWS - 1 ? "border-b" : col === 0 ? 'border-l' : "";
    const edgeStyle = row === MAX_ROWS - 1 && col === 0 ? "border-l" : "";

    return (
        <div className={twMerge(tileTileStyle, borderStyle, edgeStyle)} id={`${row}-${col}`}
            onMouseDown={() => handleMouseDown(row, col)}
            onMouseUp={() => handleMouseUp(row, col)}
            onMouseEnter={() => handleMouseEnter(row, col)}
        />
    )
}