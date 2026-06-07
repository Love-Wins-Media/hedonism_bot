/**
 * @generated SignedSource<<a75415b72c68594bdf94e15bfad7f525>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FacesQuery$variables = Record<PropertyKey, never>;
export type FacesQuery$data = {
  readonly faces: {
    readonly nodes: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"FaceFragment">;
    } | null | undefined> | null | undefined;
  };
};
export type FacesQuery = {
  response: FacesQuery$data;
  variables: FacesQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FacesQuery",
    "selections": [
      {
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
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FaceFragment"
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
    "name": "FacesQuery",
    "selections": [
      {
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
                "name": "thumbnailUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "label",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "photoCount",
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
    "cacheID": "af1515c92aa62ec770f05b3b69a3e640",
    "id": null,
    "metadata": {},
    "name": "FacesQuery",
    "operationKind": "query",
    "text": "query FacesQuery {\n  faces {\n    nodes {\n      ...FaceFragment\n      id\n    }\n  }\n}\n\nfragment FaceFragment on Face {\n  id\n  thumbnailUrl\n  label\n  photoCount\n}\n"
  }
};

(node as any).hash = "2b654ea31b914b43e718cae4b5df54dd";

export default node;
