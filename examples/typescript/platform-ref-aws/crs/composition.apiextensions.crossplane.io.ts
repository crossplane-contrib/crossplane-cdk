// generated by cdk8s
import { Chart, ApiObject } from 'cdk8s';
import * as group from '../imports/apiextensions.crossplane.io';

export function compositeclustersAwsPlatformrefCrossplaneIo(chart: Chart, name: string = 'compositeclusters.aws.platformref.crossplane.io/composition/apiextensions.crossplane.io') : ApiObject {
  return new group.Composition(chart, name,
    {
      metadata: {
        name: 'compositeclusters.aws.platformref.crossplane.io',
      },
      spec: {
        writeConnectionSecretsToNamespace: 'crossplane-system',
        compositeTypeRef: {
          apiVersion: 'aws.platformref.crossplane.io/v1alpha1',
          kind: 'CompositeCluster',
        },
        resources: [
          {
            base: {
              apiVersion: 'aws.platformref.crossplane.io/v1alpha1',
              kind: 'EKS',
            },
            connectionDetails: [
              {
                fromConnectionSecretKey: 'kubeconfig',
              },
            ],
            patches: [
              {
                fromFieldPath: 'spec.id',
                toFieldPath: 'spec.id',
              },
              {
                fromFieldPath: 'spec.id',
                toFieldPath: 'metadata.annotations[crossplane.io/external-name]',
              },
              {
                fromFieldPath: 'metadata.uid',
                toFieldPath: 'spec.writeConnectionSecretToRef.name',
                transforms: [
                  {
                    type: 'string',
                    string: {
                      fmt: '%s-eks',
                    },
                  },
                ],
              },
              {
                fromFieldPath: 'spec.writeConnectionSecretToRef.namespace',
                toFieldPath: 'spec.writeConnectionSecretToRef.namespace',
              },
              {
                fromFieldPath: 'spec.parameters.nodes.count',
                toFieldPath: 'spec.parameters.nodes.count',
              },
              {
                fromFieldPath: 'spec.parameters.nodes.size',
                toFieldPath: 'spec.parameters.nodes.size',
              },
              {
                fromFieldPath: 'spec.parameters.networkRef.id',
                toFieldPath: 'spec.parameters.networkRef.id',
              },
            ],
          },
          {
            base: {
              apiVersion: 'aws.platformref.crossplane.io/v1alpha1',
              kind: 'Services',
            },
            patches: [
              {
                fromFieldPath: 'spec.id',
                toFieldPath: 'spec.providerConfigRef.name',
              },
              {
                fromFieldPath: 'spec.parameters.services.operators.prometheus.version',
                toFieldPath: 'spec.operators.prometheus.version',
              },
            ],
          },
        ],
      },
    }
  );
}

export function eksAwsPlatformrefCrossplaneIo(chart: Chart, name: string = 'eks.aws.platformref.crossplane.io/composition/apiextensions.crossplane.io') : ApiObject {
  return new group.Composition(chart, name,
    {
      metadata: {
        name: 'eks.aws.platformref.crossplane.io',
        labels: {
          provider: 'aws',
        },
      },
      spec: {
        writeConnectionSecretsToNamespace: 'crossplane-system',
        compositeTypeRef: {
          apiVersion: 'aws.platformref.crossplane.io/v1alpha1',
          kind: 'EKS',
        },
        resources: [
          {
            base: {
              apiVersion: 'identity.aws.crossplane.io/v1beta1',
              kind: 'IAMRole',
              metadata: {
                labels: {
                  role: 'controlplane',
                },
              },
              spec: {
                forProvider: {
                  assumeRolePolicyDocument: '{\n  "Version": "2012-10-17",\n  "Statement": [\n      {\n          "Effect": "Allow",\n          "Principal": {\n              "Service": [\n                  "eks.amazonaws.com"\n              ]\n          },\n          "Action": [\n              "sts:AssumeRole"\n          ]\n      }\n  ]\n}\n',
                },
              },
            },
          },
          {
            base: {
              apiVersion: 'identity.aws.crossplane.io/v1beta1',
              kind: 'IAMRolePolicyAttachment',
              spec: {
                forProvider: {
                  policyArn: 'arn:aws:iam::aws:policy/AmazonEKSClusterPolicy',
                  roleNameSelector: {
                    matchControllerRef: true,
                    matchLabels: {
                      role: 'controlplane',
                    },
                  },
                },
              },
            },
          },
          {
            base: {
              apiVersion: 'eks.aws.crossplane.io/v1beta1',
              kind: 'Cluster',
              spec: {
                forProvider: {
                  region: 'us-west-2',
                  roleArnSelector: {
                    matchControllerRef: true,
                    matchLabels: {
                      role: 'controlplane',
                    },
                  },
                  resourcesVpcConfig: {
                    endpointPrivateAccess: true,
                    endpointPublicAccess: true,
                  },
                  version: '1.16',
                },
              },
            },
            patches: [
              {
                fromFieldPath: 'metadata.annotations[crossplane.io/external-name]',
                toFieldPath: 'metadata.annotations[crossplane.io/external-name]',
              },
              {
                fromFieldPath: 'metadata.uid',
                toFieldPath: 'spec.writeConnectionSecretToRef.name',
                transforms: [
                  {
                    type: 'string',
                    string: {
                      fmt: '%s-ekscluster',
                    },
                  },
                ],
              },
              {
                fromFieldPath: 'spec.writeConnectionSecretToRef.namespace',
                toFieldPath: 'spec.writeConnectionSecretToRef.namespace',
              },
              {
                fromFieldPath: 'spec.parameters.networkRef.id',
                toFieldPath: 'spec.forProvider.resourcesVpcConfig.securityGroupIdSelector.matchLabels[networks.aws.platformref.crossplane.io/network-id]',
              },
              {
                fromFieldPath: 'spec.parameters.networkRef.id',
                toFieldPath: 'spec.forProvider.resourcesVpcConfig.subnetIdSelector.matchLabels[networks.aws.platformref.crossplane.io/network-id]',
              },
            ],
            connectionDetails: [
              {
                fromConnectionSecretKey: 'kubeconfig',
              },
            ],
          },
          {
            base: {
              apiVersion: 'identity.aws.crossplane.io/v1beta1',
              kind: 'IAMRole',
              metadata: {
                labels: {
                  role: 'nodegroup',
                },
              },
              spec: {
                forProvider: {
                  assumeRolePolicyDocument: '{\n  "Version": "2012-10-17",\n  "Statement": [\n      {\n          "Effect": "Allow",\n          "Principal": {\n              "Service": [\n                  "ec2.amazonaws.com"\n              ]\n          },\n          "Action": [\n              "sts:AssumeRole"\n          ]\n      }\n  ]\n}\n',
                },
              },
            },
          },
          {
            base: {
              apiVersion: 'identity.aws.crossplane.io/v1beta1',
              kind: 'IAMRolePolicyAttachment',
              spec: {
                forProvider: {
                  policyArn: 'arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy',
                  roleNameSelector: {
                    matchControllerRef: true,
                    matchLabels: {
                      role: 'nodegroup',
                    },
                  },
                },
              },
            },
          },
          {
            base: {
              apiVersion: 'identity.aws.crossplane.io/v1beta1',
              kind: 'IAMRolePolicyAttachment',
              spec: {
                forProvider: {
                  policyArn: 'arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy',
                  roleNameSelector: {
                    matchControllerRef: true,
                    matchLabels: {
                      role: 'nodegroup',
                    },
                  },
                },
              },
            },
          },
          {
            base: {
              apiVersion: 'identity.aws.crossplane.io/v1beta1',
              kind: 'IAMRolePolicyAttachment',
              spec: {
                forProvider: {
                  policyArn: 'arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly',
                  roleNameSelector: {
                    matchControllerRef: true,
                    matchLabels: {
                      role: 'nodegroup',
                    },
                  },
                },
              },
            },
          },
          {
            base: {
              apiVersion: 'eks.aws.crossplane.io/v1alpha1',
              kind: 'NodeGroup',
              spec: {
                forProvider: {
                  region: 'us-west-2',
                  clusterNameSelector: {
                    matchControllerRef: true,
                  },
                  nodeRoleSelector: {
                    matchControllerRef: true,
                    matchLabels: {
                      role: 'nodegroup',
                    },
                  },
                  subnetSelector: {
                    matchLabels: {
                      access: 'public',
                    },
                  },
                  scalingConfig: {
                    minSize: 1,
                    maxSize: 100,
                    desiredSize: 1,
                  },
                  instanceTypes: [
                    't3.medium',
                  ],
                },
              },
            },
            patches: [
              {
                fromFieldPath: 'metadata.annotations[crossplane.io/external-name]',
                toFieldPath: 'metadata.annotations[crossplane.io/external-name]',
              },
              {
                fromFieldPath: 'spec.parameters.nodes.count',
                toFieldPath: 'spec.forProvider.scalingConfig.desiredSize',
              },
              {
                fromFieldPath: 'spec.parameters.nodes.size',
                toFieldPath: 'spec.forProvider.instanceTypes[0]',
                transforms: [
                  {
                    type: 'map',
                    map: {
                      small: 't3.small',
                      medium: 't3.medium',
                      large: 't3.large',
                    },
                  },
                ],
              },
              {
                fromFieldPath: 'spec.parameters.networkRef.id',
                toFieldPath: 'spec.forProvider.subnetSelector.matchLabels[networks.aws.platformref.crossplane.io/network-id]',
              },
            ],
          },
          {
            base: {
              apiVersion: 'helm.crossplane.io/v1alpha1',
              kind: 'ProviderConfig',
              spec: {
                credentials: {
                  source: 'Secret',
                  secretRef: {
                    namespace: 'crossplane-system',
                    key: 'kubeconfig',
                  },
                },
              },
            },
            patches: [
              {
                fromFieldPath: 'spec.id',
                toFieldPath: 'metadata.name',
              },
              {
                fromFieldPath: 'metadata.uid',
                toFieldPath: 'spec.credentials.secretRef.name',
                transforms: [
                  {
                    type: 'string',
                    string: {
                      fmt: '%s-ekscluster',
                    },
                  },
                ],
              },
            ],
            readinessChecks: [
              {
                type: group.CompositionSpecResourcesReadinessChecksType.NONE,
              },
            ],
          },
        ],
      },
    }
  );
}

export function servicesAwsPlatformrefCrossplaneIo(chart: Chart, name: string = 'services.aws.platformref.crossplane.io/composition/apiextensions.crossplane.io') : ApiObject {
  return new group.Composition(chart, name,
    {
      metadata: {
        name: 'services.aws.platformref.crossplane.io',
        labels: {
          plan: 'full',
          provider: 'helm',
        },
      },
      spec: {
        writeConnectionSecretsToNamespace: 'crossplane-system',
        compositeTypeRef: {
          apiVersion: 'aws.platformref.crossplane.io/v1alpha1',
          kind: 'Services',
        },
        resources: [
          {
            base: {
              apiVersion: 'helm.crossplane.io/v1alpha1',
              kind: 'Release',
              spec: {
                rollbackLimit: 3,
                forProvider: {
                  namespace: 'operators',
                  chart: {
                    name: 'kube-prometheus-stack',
                    repository: 'https://prometheus-community.github.io/helm-charts',
                    version: '10.1.0',
                  },
                  values: {},
                },
              },
            },
            patches: [
              {
                fromFieldPath: 'metadata.labels',
                toFieldPath: 'metadata.labels',
              },
              {
                fromFieldPath: 'metadata.annotations',
                toFieldPath: 'metadata.annotations',
              },
              {
                fromFieldPath: 'spec.providerConfigRef.name',
                toFieldPath: 'spec.providerConfigRef.name',
              },
              {
                fromFieldPath: 'spec.operators.prometheus.version',
                toFieldPath: 'spec.forProvider.chart.version',
              },
            ],
          },
        ],
      },
    }
  );
}

export function compositepostgresqlinstancesAwsPlatformrefCrossplaneIo(chart: Chart, name: string = 'compositepostgresqlinstances.aws.platformref.crossplane.io/composition/apiextensions.crossplane.io') : ApiObject {
  return new group.Composition(chart, name,
    {
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
    }
  );
}

export function compositenetworksAwsPlatformrefCrossplaneIo(chart: Chart, name: string = 'compositenetworks.aws.platformref.crossplane.io/composition/apiextensions.crossplane.io') : ApiObject {
  return new group.Composition(chart, name,
    {
      metadata: {
        name: 'compositenetworks.aws.platformref.crossplane.io',
        labels: {
          provider: 'aws',
        },
      },
      spec: {
        writeConnectionSecretsToNamespace: 'crossplane-system',
        compositeTypeRef: {
          apiVersion: 'aws.platformref.crossplane.io/v1alpha1',
          kind: 'CompositeNetwork',
        },
        resources: [
          {
            base: {
              apiVersion: 'ec2.aws.crossplane.io/v1beta1',
              kind: 'VPC',
              spec: {
                forProvider: {
                  region: 'us-west-2',
                  cidrBlock: '192.168.0.0/16',
                  enableDnsSupport: true,
                  enableDnsHostNames: true,
                },
              },
            },
            patches: [
              {
                fromFieldPath: 'spec.id',
                toFieldPath: 'metadata.labels[networks.aws.platformref.crossplane.io/network-id]',
              },
            ],
          },
          {
            base: {
              apiVersion: 'ec2.aws.crossplane.io/v1beta1',
              kind: 'InternetGateway',
              spec: {
                forProvider: {
                  region: 'us-west-2',
                  vpcIdSelector: {
                    matchControllerRef: true,
                  },
                },
              },
            },
            patches: [
              {
                fromFieldPath: 'spec.id',
                toFieldPath: 'metadata.labels[networks.aws.platformref.crossplane.io/network-id]',
              },
            ],
          },
          {
            base: {
              apiVersion: 'ec2.aws.crossplane.io/v1beta1',
              kind: 'Subnet',
              metadata: {
                labels: {
                  zone: 'us-west-2a',
                  access: 'public',
                },
              },
              spec: {
                forProvider: {
                  region: 'us-west-2',
                  mapPublicIPOnLaunch: true,
                  cidrBlock: '192.168.0.0/18',
                  vpcIdSelector: {
                    matchControllerRef: true,
                  },
                  availabilityZone: 'us-west-2a',
                  tags: [
                    {
                      key: 'kubernetes.io/role/elb',
                      value: '1',
                    },
                  ],
                },
              },
            },
            patches: [
              {
                fromFieldPath: 'spec.id',
                toFieldPath: 'metadata.labels[networks.aws.platformref.crossplane.io/network-id]',
              },
            ],
          },
          {
            base: {
              apiVersion: 'ec2.aws.crossplane.io/v1beta1',
              kind: 'Subnet',
              metadata: {
                labels: {
                  zone: 'us-west-2b',
                  access: 'public',
                },
              },
              spec: {
                forProvider: {
                  region: 'us-west-2',
                  mapPublicIPOnLaunch: true,
                  cidrBlock: '192.168.64.0/18',
                  vpcIdSelector: {
                    matchControllerRef: true,
                  },
                  availabilityZone: 'us-west-2b',
                  tags: [
                    {
                      key: 'kubernetes.io/role/elb',
                      value: '1',
                    },
                  ],
                },
              },
            },
            patches: [
              {
                fromFieldPath: 'spec.id',
                toFieldPath: 'metadata.labels[networks.aws.platformref.crossplane.io/network-id]',
              },
            ],
          },
          {
            base: {
              apiVersion: 'ec2.aws.crossplane.io/v1beta1',
              kind: 'Subnet',
              metadata: {
                labels: {
                  zone: 'us-west-2a',
                  access: 'private',
                },
              },
              spec: {
                forProvider: {
                  region: 'us-west-2',
                  cidrBlock: '192.168.128.0/18',
                  vpcIdSelector: {
                    matchControllerRef: true,
                  },
                  availabilityZone: 'us-west-2a',
                  tags: [
                    {
                      value: 'shared',
                      key: '',
                    },
                    {
                      key: 'kubernetes.io/role/internal-elb',
                      value: '1',
                    },
                  ],
                },
              },
            },
            patches: [
              {
                fromFieldPath: 'spec.id',
                toFieldPath: 'metadata.labels[networks.aws.platformref.crossplane.io/network-id]',
              },
              {
                fromFieldPath: 'spec.clusterRef.id',
                toFieldPath: 'spec.forProvider.tags[0].key',
                transforms: [
                  {
                    type: 'string',
                    string: {
                      fmt: 'kubernetes.io/cluster/%s',
                    },
                  },
                ],
              },
            ],
          },
          {
            base: {
              apiVersion: 'ec2.aws.crossplane.io/v1beta1',
              kind: 'Subnet',
              metadata: {
                labels: {
                  zone: 'us-west-2b',
                  access: 'private',
                },
              },
              spec: {
                forProvider: {
                  region: 'us-west-2',
                  cidrBlock: '192.168.192.0/18',
                  vpcIdSelector: {
                    matchControllerRef: true,
                  },
                  availabilityZone: 'us-west-2b',
                  tags: [
                    {
                      value: 'shared',
                      key: '',
                    },
                    {
                      key: 'kubernetes.io/role/internal-elb',
                      value: '1',
                    },
                  ],
                },
              },
            },
            patches: [
              {
                fromFieldPath: 'spec.id',
                toFieldPath: 'metadata.labels[networks.aws.platformref.crossplane.io/network-id]',
              },
              {
                fromFieldPath: 'spec.clusterRef.id',
                toFieldPath: 'spec.forProvider.tags[0].key',
                transforms: [
                  {
                    type: 'string',
                    string: {
                      fmt: 'kubernetes.io/cluster/%s',
                    },
                  },
                ],
              },
            ],
          },
          {
            base: {
              apiVersion: 'ec2.aws.crossplane.io/v1alpha4',
              kind: 'RouteTable',
              spec: {
                forProvider: {
                  region: 'us-west-2',
                  vpcIdSelector: {
                    matchControllerRef: true,
                  },
                  routes: [
                    {
                      destinationCidrBlock: '0.0.0.0/0',
                      gatewayIdSelector: {
                        matchControllerRef: true,
                      },
                    },
                  ],
                  associations: [
                    {
                      subnetIdSelector: {
                        matchControllerRef: true,
                        matchLabels: {
                          zone: 'us-west-2a',
                          access: 'public',
                        },
                      },
                    },
                    {
                      subnetIdSelector: {
                        matchControllerRef: true,
                        matchLabels: {
                          zone: 'us-west-2b',
                          access: 'public',
                        },
                      },
                    },
                    {
                      subnetIdSelector: {
                        matchControllerRef: true,
                        matchLabels: {
                          zone: 'us-west-2a',
                          access: 'private',
                        },
                      },
                    },
                    {
                      subnetIdSelector: {
                        matchControllerRef: true,
                        matchLabels: {
                          zone: 'us-west-2b',
                          access: 'private',
                        },
                      },
                    },
                  ],
                },
              },
            },
            patches: [
              {
                fromFieldPath: 'spec.id',
                toFieldPath: 'metadata.labels[networks.aws.platformref.crossplane.io/network-id]',
              },
            ],
          },
          {
            base: {
              apiVersion: 'ec2.aws.crossplane.io/v1beta1',
              kind: 'SecurityGroup',
              spec: {
                forProvider: {
                  region: 'us-west-2',
                  vpcIdSelector: {
                    matchControllerRef: true,
                  },
                  groupName: 'platform-ref-aws-cluster',
                  description: 'Allow access to PostgreSQL',
                  ingress: [
                    {
                      fromPort: 5432,
                      toPort: 5432,
                      ipProtocol: 'tcp',
                      ipRanges: [
                        {
                          cidrIp: '0.0.0.0/0',
                          description: 'Everywhere',
                        },
                      ],
                    },
                  ],
                },
              },
            },
            patches: [
              {
                fromFieldPath: 'spec.id',
                toFieldPath: 'metadata.labels[networks.aws.platformref.crossplane.io/network-id]',
              },
            ],
          },
        ],
      },
    }
  );
}
