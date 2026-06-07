/**
 * @generated SignedSource<<96e588e14d08242f086ebb7d57794197>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PhotoViewerFragment$data = {
  readonly alternateDescription: string;
  readonly id: string;
  readonly isPurchased: boolean;
  readonly previewUrl: string | null | undefined;
  readonly takenAt: any;
  readonly " $fragmentType": "PhotoViewerFragment";
};
export type PhotoViewerFragment$key = {
  readonly " $data"?: PhotoViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PhotoViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PhotoViewerFragment",
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
      "name": "previewUrl",
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
      "name": "isPurchased",
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
  "type": "Photo",
  "abstractKey": null
};

(node as any).hash = "9c799bf8e0a3d262b258478cf684b27d";

export default node;
