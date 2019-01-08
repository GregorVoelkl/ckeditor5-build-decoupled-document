import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import Model from '@ckeditor/ckeditor5-ui/src/model';
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
import imageIconButton from "../img/qr-wqf.svg";
import {addListToDropdown, createDropdown} from "@ckeditor/ckeditor5-ui/src/dropdown/utils";
import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import {normalizeOptions} from "@ckeditor/ckeditor5-font/src/fontsize/utils";


export default class Variables extends Plugin {
    init() {
        const editor = this.editor;

        const variables = editor.config.get('variables')

        editor.ui.componentFactory.add( 'variables', locale => {


            const dropdown = createDropdown( locale );

            const items = new Collection();

            variables.forEach(function(variable) {
                items.add( {
                    type: 'button',
                    model: new Model( {
                        withText: true,
                        label: variable.label,
                        variable_value: variable.value
                    })
                });
            });

            dropdown.buttonView.set( {
                label: 'Variablen',
                withText: true,
            });

            dropdown.extendTemplate( {
                attributes: {
                    class: [
                        'ck-heading-variables'
                    ]
                }
            } );

            addListToDropdown(dropdown, items)
            // dropdown.render();

            this.listenTo( dropdown, 'execute', evt => {
                editor.model.change( writer => {
                    editor.model.insertContent( writer.createText(evt.source.variable_value) );
                } );
            })

            return dropdown;
        } );
    }
}
