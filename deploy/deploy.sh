#! /bin/sh
kubectl apply -f configMap.yaml
kubectl apply -f deployment.yaml 
kubectl apply -f service.yaml
gcloud builds submit --config clouddeploy.yaml .