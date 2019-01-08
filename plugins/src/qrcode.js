import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import Model from '@ckeditor/ckeditor5-ui/src/model';
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
import imageIconButton from "../img/qr-wqf.svg";
import {addListToDropdown, createDropdown} from "@ckeditor/ckeditor5-ui/src/dropdown/utils";
import Collection from '@ckeditor/ckeditor5-utils/src/collection';


export default class Qrcode extends Plugin {
    init() {
        const editor = this.editor;

        const config = editor.config.get('qrCode')

        editor.ui.componentFactory.add( 'qrCode', locale => {


            const dropdown = createDropdown( locale );

            const items = new Collection();

            items.add( {
                type: 'button',
                model: new Model( {
                    withText: true,
                    label: 'Klein ('+config.sizes.sm+')',
                    labelStyle: '',
                    qr_size: 'sm',
                })
            });
            items.add( {
                type: 'button',
                model: new Model( {
                    withText: true,
                    label: 'Mittel ('+config.sizes.md+')',
                    labelStyle: '',
                    class: '',
                    qr_size: 'md',
                } )
            } );
            items.add( {
                type: 'button',
                model: new Model( {
                    withText: true,
                    label: 'Groß ('+config.sizes.lg+')',
                    labelStyle: '',
                    qr_size: 'lg',
                } )
            } );

            dropdown.buttonView.set( {
                label: 'QrCode',
                withText: true,
                icon: imageIconButton
            });

            addListToDropdown(dropdown, items)
            // dropdown.render();

            this.listenTo( dropdown, 'execute', evt => {
                const size = evt.source.qr_size;

                editor.model.change( writer => {
                    const imageElement = writer.createElement( 'image', {
                        src: config.previewQrCodes[size]
                    } );

                    // // Insert the image in the current selection location.
                    editor.model.insertContent( imageElement, editor.model.document.selection );
                } );
            })

            return dropdown;

            // const view = new ButtonView( locale );
            // view.set( {
            //     label: 'Insert QrCode',
            //     icon: imageIconButton,
            //     tooltip: true
            // } );
            //
            // // Callback executed once the image is clicked.
            // view.on( 'execute', () => {
            //     editor.model.change( writer => {
            //         const imageElement = writer.createElement( 'image', {
            //             src: config.previewQrCodes[0]
            //         } );
            //
            //         // // Insert the image in the current selection location.
            //         editor.model.insertContent( imageElement, editor.model.document.selection );
            //     } );
            // } );
            //
            // return view;
        } );
    }
}
