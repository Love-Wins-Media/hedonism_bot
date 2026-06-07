/**
 * @generated SignedSource<<5681de5d5eacbd3420e73d0fbd698c0f>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BaseApplicationQuery$variables = Record<PropertyKey, never>;
export type BaseApplicationQuery$data = {
  readonly faces: {
    readonly nodes: ReadonlyArray<{
      readonly id: string;
    } | null | undefined> | null | undefined;
  };
  readonly folders: {
    readonly nodes: ReadonlyArray<{
      readonly id: string;
      readonly name: string;
    } | null | undefined> | null | undefined;
  };
  readonly photos: {
    readonly nodes: ReadonlyArray<{
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"PhotoFragment" | "PhotoViewerFragment">;
    } | null | undefined> | null | undefined;
  };
};
export type BaseApplicationQuery = {
  response: BaseApplicationQuery$data;
  variables: BaseApplicationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "concreteType": "FolderConnection",
  "kind": "LinkedField",
  "name": "folders",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Folder",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v0/*:: as any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "FaceConnection",
  "kind": "LinkedField",
  "name": "faces",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Face",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v0/*:: as any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BaseApplicationQuery",
    "selections": [
      (v1/*:: as any*/),
      (v2/*:: as any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "PhotoConnection",
        "kind": "LinkedField",
        "name": "photos",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Photo",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v0/*:: as any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "PhotoFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "PhotoViewerFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BaseApplicationQuery",
    "selections": [
      (v1/*:: as any*/),
      (v2/*:: as any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "PhotoConnection",
        "kind": "LinkedField",
        "name": "photos",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Photo",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v0/*:: as any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isPurchased",
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "alternateDescription",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ae89d70e68e2ef45285699edc2a36255",
    "id": null,
    "metadata": {},
    "name": "BaseApplicationQuery",
    "operationKind": "query",
    "text": "query BaseApplicationQuery {\n  folders {\n    nodes {\n      id\n      name\n    }\n  }\n  faces {\n    nodes {\n      id\n    }\n  }\n  photos {\n    nodes {\n      id\n      ...PhotoFragment\n      ...PhotoViewerFragment\n    }\n  }\n}\n\nfragment PhotoFragment on Photo {\n  id\n  isPurchased\n  previewUrl\n  takenAt\n}\n\nfragment PhotoViewerFragment on Photo {\n  id\n  previewUrl\n  alternateDescription\n  isPurchased\n  takenAt\n}\n"
  }
};
})();

(node as any).hash = "7ebc909ab8adb9cea6cb6fd0b903f215";

export default node;
