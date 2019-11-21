import * as k8s from "@pulumi/kubernetes";
import {INGRESS_RELEASE_NAME} from "../constants";


/**
 * Install nginx ingress helm chart.
 */
export const install = () => {
    const ingress = new k8s.helm.v2.Chart(
        INGRESS_RELEASE_NAME,
        {
            "repo": "stable",
            "chart": "nginx-ingress",
            "version": "1.10.1",
            "values": {
                "controller": {
                    "publishService": {
                        "enabled": true
                    }
                }
            }
        }
    );

    return {
        ingress
    };
};
