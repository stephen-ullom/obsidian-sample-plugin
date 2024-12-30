import { Plugin } from "obsidian";

export default class CanvasHeightPlugin extends Plugin {
    onload() {
        const workspace = this.app.workspace as any;

        console.log("onload");

        // this.registerEvent(
        //     workspace.on("canvas:node-menu", (...data: any) => {
        //         console.log("node", data);
        //     })
        // );

        this.registerEvent(
            workspace.on("canvas:node-edit-start", () => {
                console.log("Node editing started!");
            })
        );

        this.registerEvent(
            workspace.on("canvas:node-edit-end", () => {
                console.log("Node editing finished!");
            })
        );
    }
}
