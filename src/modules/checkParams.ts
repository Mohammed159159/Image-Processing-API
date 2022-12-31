import fs from "fs";

const checkParams = (
    width?: unknown,
    height?: unknown,
    filepath?: unknown
): boolean | void => {
    //check invalid paramters and add them to missingParams array
    const missingParams: string[] = [];
    if (!((width as number) >= 0) || isNaN(width as number)) {
        missingParams.push("Width");
    }
    if (!((height as number) >= 0) || isNaN(height as number)) {
        missingParams.push("Height");
    }
    if (!fs.existsSync(filepath as string)) {
        missingParams.push("Name");
    }

    //if there are no missing paramters return true
    if (missingParams.length == 0) {
        return true;
    }
    //otherwise throw relevant error
    else if (missingParams[0] == "Name") {
        throw new Error("404 | File not found");
    } else {
        throw new Error(
            "400 | Please Correct the Following Paramter(s): " +
                missingParams.join(", ")
        );
    }
};

export default checkParams;
