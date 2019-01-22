/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import Qrcode from '../plugins/src/qrcode';
import Variables from '../plugins/src/variables';
import Vardate from '../plugins/src/vardate';
export default class DecoupledEditor extends DecoupledEditorBase {}





// Plugins to include in the build.
DecoupledEditor.builtinPlugins = [
	Essentials,
	Alignment,
	FontSize,
	FontFamily,
	Highlight,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Strikethrough,
	Underline,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Autosave,
    Qrcode,
	Variables,
	Vardate,
];

// Editor configuration.
DecoupledEditor.defaultConfig = {
	toolbar: {
		items: [
			'qrCode',
			'|',
			'variables',
			'|',
			'vardate',
			'|',
			'heading',
			'|',
			'fontsize',
			'fontfamily',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'highlight',
			'|',
			'alignment',
			'|',
			'numberedList',
			'bulletedList',
			'insertTable',
			'|',
			'undo',
			'redo'
		]
	},
	image: {
		styles: [
			'full',
			'alignLeft',
			'alignRight'
		],
		toolbar: [
			'imageStyle:alignLeft',
			'imageStyle:full',
			'imageStyle:alignRight',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	qrCode: {
		sizes: {
			sm: '100x100',
			md: '150x150',
			lg: '200x200',
		},
		previewQrCodes: {
			sm: 'http://place-hold.it/100x100',
			md: 'http://place-hold.it/150x150',
			lg: 'http://place-hold.it/200x200',
		}
	},
	variables: [
		{
			'label' : 'Variable 1',
			'value' : '[Variable 1]'
		},
		{
			'label' : 'Variable 2',
			'value' : '[Variable 2]'
		}
	],
	vardate: [
		{
			'label' : 'Heute',
			'value' : '[Date.date]'
		},
		{
			'label' : 'Morgen',
			'value' : '[Date.date+1D]'
		}
	],

	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'de'
};
