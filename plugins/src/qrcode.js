import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
import imageIconButton from "../img/qr-wqf.svg";

export default class Qrcode extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'qrCode', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'Insert QrCode',
                icon: imageIconButton,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
                editor.model.change( writer => {
                    const imageElement = writer.createElement( 'image', {
                        src: 'http://placehold-it?100x100'
                    } );

                    // // Insert the image in the current selection location.
                    editor.model.insertContent( imageElement, editor.model.document.selection );
                } );
            } );

            return view;
        } );
    }
}
