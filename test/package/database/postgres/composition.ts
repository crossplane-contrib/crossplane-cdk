import { App, Chart } from 'cdk8s';
import { Composition } from '../../../../src/imports/apiextensions.crossplane.io';

export default function generate(crossplanePackage: App) {

  const compositionYaml = new Chart(crossplanePackage, 'database-postgres-composition');

  new Composition(compositionYaml, 'compositepostgresqlinstances.aws.platformref.crossplane.io', {
    metadata: {
      name: 'compositepostgresqlinstances.aws.platformref.crossplane.io',
      labels: {
        provider: 'aws',
      },
    },
    spec: {
      writeConnectionSecretsToNamespace: 'crossplane-system',
      compositeTypeRef: {
        apiVersion: 'aws.platformref.crossplane.io/v1alpha1',
        kind: 'CompositePostgreSQLInstance',
      },
      resources: [
        {
          base: {
            apiVersion: 'database.aws.crossplane.io/v1beta1',
            kind: 'DBSubnetGroup',
            spec: {
              forProvider: {
                region: 'us-west-2',
                description: 'An excellent formation of subnetworks.',
              },
              reclaimPolicy: 'Delete',
            },
          },
          patches: [
            {
              fromFieldPath: 'spec.parameters.networkRef.id',
              toFieldPath: 'spec.forProvider.subnetIdSelector.matchLabels[networks.aws.platformref.crossplane.io/network-id]',
            },
          ],
        },
        {
          base: {
            apiVersion: 'database.aws.crossplane.io/v1beta1',
            kind: 'RDSInstance',
            spec: {
              forProvider: {
                region: 'us-west-2',
                dbSubnetGroupNameSelector: {
                  matchControllerRef: true,
                },
                dbInstanceClass: 'db.t2.small',
                masterUsername: 'masteruser',
                engine: 'postgres',
                engineVersion: '9.6',
                skipFinalSnapshotBeforeDeletion: true,
                publiclyAccessible: false,
              },
              writeConnectionSecretToRef: {
                namespace: 'crossplane-system',
              },
              reclaimPolicy: 'Delete',
            },
          },
          patches: [
            {
              fromFieldPath: 'metadata.uid',
              toFieldPath: 'spec.writeConnectionSecretToRef.name',
              transforms: [
                {
                  type: 'string',
                  string: {
                    fmt: '%s-postgresql',
                  },
                },
              ],
            },
            {
              fromFieldPath: 'spec.parameters.storageGB',
              toFieldPath: 'spec.forProvider.allocatedStorage',
            },
            {
              fromFieldPath: 'spec.parameters.networkRef.id',
              toFieldPath: 'spec.forProvider.vpcSecurityGroupIDSelector.matchLabels[networks.aws.platformref.crossplane.io/network-id]',
            },
          ],
          connectionDetails: [
            {
              fromConnectionSecretKey: 'username',
            },
            {
              fromConnectionSecretKey: 'password',
            },
            {
              fromConnectionSecretKey: 'endpoint',
            },
            {
              fromConnectionSecretKey: 'port',
            },
          ],
        },
      ],
    },
  });
}