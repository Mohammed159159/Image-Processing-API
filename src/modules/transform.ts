import sharp from "sharp";
import checkParams from "./checkParams";

const transform = async (
    inpath: string,
    outpath: string,
    width: number,
    height: number
): Promise<void> => {
    try {
        //validate parameters
        checkParams(width, height, inpath);

        //resize image
        await sharp(inpath).resize(width, height).toFile(outpath);
    } catch (err: unknown) {
        throw new Error(err as string);
    }
};

export default transform;
