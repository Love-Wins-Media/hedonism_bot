/**
 * @generated SignedSource<<5095fd2e55c76e60c2d4f5d12450d65f>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type PhotoPurchaseQuery$variables = {
  photoId: string;
};
export type PhotoPurchaseQuery$data = {
  readonly photo: {
    readonly alternateDescription: string;
    readonly id: string;
    readonly previewUrl: string | null | undefined;
    readonly takenAt: any;
  } | null | undefined;
};
export type PhotoPurchaseQuery = {
  response: PhotoPurchaseQuery$data;
  variables: PhotoPurchaseQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "photoId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "photoId"
      }
    ],
    "concreteType": "Photo",
    "kind": "LinkedField",
    "name": "photo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "alternateDescription",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "previewUrl",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "takenAt",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*:: as any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PhotoPurchaseQuery",
    "selections": (v1/*:: as any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*:: as any*/),
    "kind": "Operation",
    "name": "PhotoPurchaseQuery",
    "selections": (v1/*:: as any*/)
  },
  "params": {
    "cacheID": "52207fb875ece93c106fa9413f96ab1d",
    "id": null,
    "metadata": {},
    "name": "PhotoPurchaseQuery",
    "operationKind": "query",
    "text": "query PhotoPurchaseQuery(\n  $photoId: ID!\n) {\n  photo(id: $photoId) {\n    id\n    alternateDescription\n    previewUrl\n    takenAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "c569e07a1607dfbe19fb5f24e3695b7b";

export default node;
