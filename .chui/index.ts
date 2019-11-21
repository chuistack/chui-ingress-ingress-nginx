import * as ingressController from "./ingress-controller";
import {INGRESS_CLASS_ANNOTATION} from "./constants";

ingressController.install();

export const ingressClassAnnotation = INGRESS_CLASS_ANNOTATION;
