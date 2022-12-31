import express, { Request, Response } from "express";
import transform from "../modules/transform";
import fs from "fs";
import path from "path";

//initalize route
const images = express.Router();

images.use("/", (req: Request, res: Response): void => {
    //define thumbnails path
    const thumbnails = "./images/thumbnails";

    //create thumbnails folder if it does not exist
    if (!fs.existsSync(thumbnails)) {
        fs.mkdirSync(thumbnails);
    }

    //get the paramters from the query
    const infilename: string = req.query.name as string;
    const width: number = (req.query.width as unknown as number) * 1;
    const height: number = (req.query.height as unknown as number) * 1;
    const inpath: string = path.join(
        "./images/",
        (infilename as string) + ".jpg"
    );
    const outfilename =
        (((((infilename as string) + "_" + width) as string) +
            "_" +
            height) as string) + ".jpg";
    const outpath: string = path.join("./images/thumbnails", outfilename);

    //try fetching and resizing image
    (async () => {
        try {
            //only transform if the image is NOT cached
            if (!fs.existsSync(outpath)) {
                await transform(inpath, outpath, width, height);
            }
            // fetch resized image
            res.sendFile(outfilename, { root: "./images/thumbnails/" });

            //catch error and output to console
        } catch (error: unknown) {
            const err: Error = error as Error;
            res.status(parseInt(err.message.substring(7, 10))).send(
                err.message
            );
        }
    })();
});

export default images;
