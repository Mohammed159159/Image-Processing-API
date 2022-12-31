import transform from "../../../src/modules/transform";
import path from "path";

describe("2. Suite for testing transform.ts", async () => {
    //define test variables
    const infilename = "fjord";
    const wrong_infliname = "no-image";
    const width = 500;
    const height = 500;
    const inpath: string = path.join("./images/", infilename + ".jpg");
    const wrong_inpath: string = path.join(
        "./images/",
        wrong_infliname + ".jpg"
    );
    const outfilename =
        ((((infilename + "_" + width) as string) + "_" + height) as string) +
        ".jpg";
    const outpath: string = path.join("./images/thumbnails", outfilename);

    it("a. Should expect transform not to throw error when using correct params", () => {
        //implement test
        expect(async () => {
            await transform(inpath, outpath, width, height);
        }).not.toThrow;
    });

    it("b. Should expect transform to throw error when using an unavailble image", async () => {
        //implement test
        expect(async () => {
            await transform(wrong_inpath, outpath, width, height);
        }).toThrow;
    });
});
