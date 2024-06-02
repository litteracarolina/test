import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import annotationPlugins from 'mirador-annotations';
import LocalStorageAdapter from 'mirador-annotations/es/LocalStorageAdapter';

const config = {
    annotation: {
       adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
        adapter: (canvasId) => new AnnototAdapter(canvasId, endpointUrl),
        exportLocalStorageAnnotations: true, // display annotation JSON export button
    },
    id: 'demo',
    windows: [{manifestId: 'https://www.e-codices.unifr.ch/metadata/iiif/bbb-0611/manifest.json'}],
    workspace: {
        type: "elastic"
    }
};

Mirador.viewer(config, [
    ...miradorImageToolsPlugin,
    ...annotationPlugins
]);
