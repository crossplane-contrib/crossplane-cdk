// generated by cdk8s
import { ApiObject } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * A Cluster is a managed resource that represents an AWS Elastic Kubernetes Service cluster.
 *
 * @schema Cluster
 */
export class Cluster extends ApiObject {
  /**
   * Defines a "Cluster" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialiation props
   */
  public constructor(scope: Construct, id: string, props: ClusterProps) {
    super(scope, id, {
      ...props,
      kind: 'Cluster',
      apiVersion: 'eks.aws.crossplane.io/v1beta1',
    });
  }
}

/**
 * A Cluster is a managed resource that represents an AWS Elastic Kubernetes Service cluster.
 *
 * @schema Cluster
 */
export interface ClusterProps {
  /**
   * @schema Cluster#metadata
   */
  readonly metadata?: any;

  /**
   * A ClusterSpec defines the desired state of an EKS Cluster.
   *
   * @schema Cluster#spec
   */
  readonly spec: ClusterSpec;

}

/**
 * A ClusterSpec defines the desired state of an EKS Cluster.
 *
 * @schema ClusterSpec
 */
export interface ClusterSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema ClusterSpec#deletionPolicy
   */
  readonly deletionPolicy?: ClusterSpecDeletionPolicy;

  /**
   * ClusterParameters define the desired state of an AWS Elastic Kubernetes Service cluster.
   *
   * @schema ClusterSpec#forProvider
   */
  readonly forProvider: ClusterSpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema ClusterSpec#providerConfigRef
   */
  readonly providerConfigRef?: ClusterSpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema ClusterSpec#providerRef
   */
  readonly providerRef?: ClusterSpecProviderRef;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema ClusterSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: ClusterSpecWriteConnectionSecretToRef;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema ClusterSpecDeletionPolicy
 */
export enum ClusterSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = "Orphan",
  /** Delete */
  DELETE = "Delete",
}

/**
 * ClusterParameters define the desired state of an AWS Elastic Kubernetes Service cluster.
 *
 * @schema ClusterSpecForProvider
 */
export interface ClusterSpecForProvider {
  /**
   * The encryption configuration for the cluster.
   *
   * @schema ClusterSpecForProvider#encryptionConfig
   */
  readonly encryptionConfig?: ClusterSpecForProviderEncryptionConfig[];

  /**
   * Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs (https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html) in the Amazon EKS User Guide . 
 CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing (http://aws.amazon.com/cloudwatch/pricing/).
   *
   * @schema ClusterSpecForProvider#logging
   */
  readonly logging?: ClusterSpecForProviderLogging;

  /**
   * Region is the region you'd like your Cluster to be created in.
   *
   * @schema ClusterSpecForProvider#region
   */
  readonly region?: string;

  /**
   * The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see Cluster VPC Considerations (https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html) and Cluster Security Group Considerations (https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the Amazon EKS User Guide. You must specify at least two subnets. You can specify up to five security groups, but we recommend that you use a dedicated security group for your cluster control plane. 
 ResourcesVpcConfig is a required field
   *
   * @schema ClusterSpecForProvider#resourcesVpcConfig
   */
  readonly resourcesVpcConfig: ClusterSpecForProviderResourcesVpcConfig;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions for Amazon EKS to make calls to other AWS API operations on your behalf. For more information, see Amazon EKS Service IAM Role (https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html) in the Amazon EKS User Guide . 
 RoleArn is a required field
   *
   * @schema ClusterSpecForProvider#roleArn
   */
  readonly roleArn?: string;

  /**
   * RoleArnRef is a reference to an IAMRole used to set the RoleArn.
   *
   * @schema ClusterSpecForProvider#roleArnRef
   */
  readonly roleArnRef?: ClusterSpecForProviderRoleArnRef;

  /**
   * RoleArnSelector selects references to IAMRole used to set the RoleArn.
   *
   * @schema ClusterSpecForProvider#roleArnSelector
   */
  readonly roleArnSelector?: ClusterSpecForProviderRoleArnSelector;

  /**
   * The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define.
   *
   * @schema ClusterSpecForProvider#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * The desired Kubernetes version for your cluster. If you don't specify a value here, the latest version available in Amazon EKS is used. Example: 1.15
   *
   * @schema ClusterSpecForProvider#version
   */
  readonly version?: string;

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema ClusterSpecProviderConfigRef
 */
export interface ClusterSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema ClusterSpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema ClusterSpecProviderRef
 */
export interface ClusterSpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema ClusterSpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema ClusterSpecWriteConnectionSecretToRef
 */
export interface ClusterSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema ClusterSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema ClusterSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * EncryptionConfig is the encryption configuration for a cluster.
 *
 * @schema ClusterSpecForProviderEncryptionConfig
 */
export interface ClusterSpecForProviderEncryptionConfig {
  /**
   * AWS Key Management Service (AWS KMS) customer master key (CMK). Either the ARN or the alias can be used.
   *
   * @schema ClusterSpecForProviderEncryptionConfig#provider
   */
  readonly provider: ClusterSpecForProviderEncryptionConfigProvider;

  /**
   * Specifies the resources to be encrypted. The only supported value is "secrets".
   *
   * @schema ClusterSpecForProviderEncryptionConfig#resources
   */
  readonly resources: string[];

}

/**
 * Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs (https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html) in the Amazon EKS User Guide . 
 CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing (http://aws.amazon.com/cloudwatch/pricing/).
 *
 * @schema ClusterSpecForProviderLogging
 */
export interface ClusterSpecForProviderLogging {
  /**
   * The cluster control plane logging configuration for your cluster.
   *
   * @schema ClusterSpecForProviderLogging#clusterLogging
   */
  readonly clusterLogging: ClusterSpecForProviderLoggingClusterLogging[];

}

/**
 * The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see Cluster VPC Considerations (https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html) and Cluster Security Group Considerations (https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the Amazon EKS User Guide. You must specify at least two subnets. You can specify up to five security groups, but we recommend that you use a dedicated security group for your cluster control plane. 
 ResourcesVpcConfig is a required field
 *
 * @schema ClusterSpecForProviderResourcesVpcConfig
 */
export interface ClusterSpecForProviderResourcesVpcConfig {
  /**
   * Set this value to true to enable private access for your cluster's Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster's VPC use the private VPC endpoint. The default value for this parameter is false, which disables private access for your Kubernetes API server. For more information, see Amazon EKS Cluster Endpoint Access Control (https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the Amazon EKS User Guide.
   *
   * @schema ClusterSpecForProviderResourcesVpcConfig#endpointPrivateAccess
   */
  readonly endpointPrivateAccess?: boolean;

  /**
   * Set this value to false to disable public access for your cluster's Kubernetes API server endpoint. If you disable public access, your cluster's Kubernetes API server can receive only requests from within the cluster VPC. The default value for this parameter is true, which enables public access for your Kubernetes API server. For more information, see Amazon EKS Cluster Endpoint Access Control (https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the Amazon EKS User Guide.
   *
   * @schema ClusterSpecForProviderResourcesVpcConfig#endpointPublicAccess
   */
  readonly endpointPublicAccess?: boolean;

  /**
   * The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is 0.0.0.0/0. If you've disabled private endpoint access and you have worker nodes or AWS Fargate pods in the cluster, then ensure that you specify the necessary CIDR blocks. For more information, see Amazon EKS Cluster Endpoint Access Control (https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the Amazon EKS User Guide.
   *
   * @schema ClusterSpecForProviderResourcesVpcConfig#publicAccessCidrs
   */
  readonly publicAccessCidrs?: string[];

  /**
   * SecurityGroupIDRefs are references to SecurityGroups used to set the SecurityGroupIDs.
   *
   * @schema ClusterSpecForProviderResourcesVpcConfig#securityGroupIdRefs
   */
  readonly securityGroupIdRefs?: ClusterSpecForProviderResourcesVpcConfigSecurityGroupIdRefs[];

  /**
   * SecurityGroupIDSelector selects references to SecurityGroups used to set the SecurityGroupIDs.
   *
   * @schema ClusterSpecForProviderResourcesVpcConfig#securityGroupIdSelector
   */
  readonly securityGroupIdSelector?: ClusterSpecForProviderResourcesVpcConfigSecurityGroupIdSelector;

  /**
   * Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your worker nodes and the Kubernetes control plane. If you don't specify a security group, the default security group for your VPC is used.
   *
   * @schema ClusterSpecForProviderResourcesVpcConfig#securityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * SubnetIDRefs are references to Subnets used to set the SubnetIDs.
   *
   * @schema ClusterSpecForProviderResourcesVpcConfig#subnetIdRefs
   */
  readonly subnetIdRefs?: ClusterSpecForProviderResourcesVpcConfigSubnetIdRefs[];

  /**
   * SubnetIDSelector selects references to Subnets used to set the SubnetIDs.
   *
   * @schema ClusterSpecForProviderResourcesVpcConfig#subnetIdSelector
   */
  readonly subnetIdSelector?: ClusterSpecForProviderResourcesVpcConfigSubnetIdSelector;

  /**
   * Specify subnets for your Amazon EKS worker nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your worker nodes and the Kubernetes control plane.
   *
   * @schema ClusterSpecForProviderResourcesVpcConfig#subnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * RoleArnRef is a reference to an IAMRole used to set the RoleArn.
 *
 * @schema ClusterSpecForProviderRoleArnRef
 */
export interface ClusterSpecForProviderRoleArnRef {
  /**
   * Name of the referenced object.
   *
   * @schema ClusterSpecForProviderRoleArnRef#name
   */
  readonly name: string;

}

/**
 * RoleArnSelector selects references to IAMRole used to set the RoleArn.
 *
 * @schema ClusterSpecForProviderRoleArnSelector
 */
export interface ClusterSpecForProviderRoleArnSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema ClusterSpecForProviderRoleArnSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema ClusterSpecForProviderRoleArnSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * AWS Key Management Service (AWS KMS) customer master key (CMK). Either the ARN or the alias can be used.
 *
 * @schema ClusterSpecForProviderEncryptionConfigProvider
 */
export interface ClusterSpecForProviderEncryptionConfigProvider {
  /**
   * Amazon Resource Name (ARN) or alias of the customer master key (CMK). The CMK must be symmetric, created in the same region as the cluster, and if the CMK was created in a different account, the user must have access to the CMK. For more information, see Allowing Users in Other Accounts to Use a CMK (https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html) in the AWS Key Management Service Developer Guide.
   *
   * @schema ClusterSpecForProviderEncryptionConfigProvider#keyArn
   */
  readonly keyArn: string;

}

/**
 * LogSetup specifies the logging types that are enabled.
 *
 * @schema ClusterSpecForProviderLoggingClusterLogging
 */
export interface ClusterSpecForProviderLoggingClusterLogging {
  /**
   * If a log type is enabled, that log type exports its control plane logs to CloudWatch Logs. If a log type isn't enabled, that log type doesn't export its control plane logs. Each individual log type can be enabled or disabled independently.
   *
   * @schema ClusterSpecForProviderLoggingClusterLogging#enabled
   */
  readonly enabled?: boolean;

  /**
   * The available cluster control plane log types.
   *
   * @schema ClusterSpecForProviderLoggingClusterLogging#types
   */
  readonly types?: string[];

}

/**
 * A Reference to a named object.
 *
 * @schema ClusterSpecForProviderResourcesVpcConfigSecurityGroupIdRefs
 */
export interface ClusterSpecForProviderResourcesVpcConfigSecurityGroupIdRefs {
  /**
   * Name of the referenced object.
   *
   * @schema ClusterSpecForProviderResourcesVpcConfigSecurityGroupIdRefs#name
   */
  readonly name: string;

}

/**
 * SecurityGroupIDSelector selects references to SecurityGroups used to set the SecurityGroupIDs.
 *
 * @schema ClusterSpecForProviderResourcesVpcConfigSecurityGroupIdSelector
 */
export interface ClusterSpecForProviderResourcesVpcConfigSecurityGroupIdSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema ClusterSpecForProviderResourcesVpcConfigSecurityGroupIdSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema ClusterSpecForProviderResourcesVpcConfigSecurityGroupIdSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * A Reference to a named object.
 *
 * @schema ClusterSpecForProviderResourcesVpcConfigSubnetIdRefs
 */
export interface ClusterSpecForProviderResourcesVpcConfigSubnetIdRefs {
  /**
   * Name of the referenced object.
   *
   * @schema ClusterSpecForProviderResourcesVpcConfigSubnetIdRefs#name
   */
  readonly name: string;

}

/**
 * SubnetIDSelector selects references to Subnets used to set the SubnetIDs.
 *
 * @schema ClusterSpecForProviderResourcesVpcConfigSubnetIdSelector
 */
export interface ClusterSpecForProviderResourcesVpcConfigSubnetIdSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema ClusterSpecForProviderResourcesVpcConfigSubnetIdSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema ClusterSpecForProviderResourcesVpcConfigSubnetIdSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * A NodeGroup is a managed resource that represents an AWS Elastic Kubernetes Service NodeGroup.
 *
 * @schema NodeGroup
 */
export class NodeGroup extends ApiObject {
  /**
   * Defines a "NodeGroup" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialiation props
   */
  public constructor(scope: Construct, id: string, props: NodeGroupProps) {
    super(scope, id, {
      ...props,
      kind: 'NodeGroup',
      apiVersion: 'eks.aws.crossplane.io/v1alpha1',
    });
  }
}

/**
 * A NodeGroup is a managed resource that represents an AWS Elastic Kubernetes Service NodeGroup.
 *
 * @schema NodeGroup
 */
export interface NodeGroupProps {
  /**
   * @schema NodeGroup#metadata
   */
  readonly metadata?: any;

  /**
   * A NodeGroupSpec defines the desired state of an EKS NodeGroup.
   *
   * @schema NodeGroup#spec
   */
  readonly spec: NodeGroupSpec;

}

/**
 * A NodeGroupSpec defines the desired state of an EKS NodeGroup.
 *
 * @schema NodeGroupSpec
 */
export interface NodeGroupSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema NodeGroupSpec#deletionPolicy
   */
  readonly deletionPolicy?: NodeGroupSpecDeletionPolicy;

  /**
   * NodeGroupParameters define the desired state of an AWS Elastic Kubernetes Service NodeGroup.
   *
   * @schema NodeGroupSpec#forProvider
   */
  readonly forProvider: NodeGroupSpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema NodeGroupSpec#providerConfigRef
   */
  readonly providerConfigRef?: NodeGroupSpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema NodeGroupSpec#providerRef
   */
  readonly providerRef?: NodeGroupSpecProviderRef;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema NodeGroupSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: NodeGroupSpecWriteConnectionSecretToRef;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema NodeGroupSpecDeletionPolicy
 */
export enum NodeGroupSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = "Orphan",
  /** Delete */
  DELETE = "Delete",
}

/**
 * NodeGroupParameters define the desired state of an AWS Elastic Kubernetes Service NodeGroup.
 *
 * @schema NodeGroupSpecForProvider
 */
export interface NodeGroupSpecForProvider {
  /**
   * The AMI type for your node group. GPU instance types should use the AL2_x86_64_GPU AMI type, which uses the Amazon EKS-optimized Linux AMI with GPU support. Non-GPU instances should use the AL2_x86_64 AMI type, which uses the Amazon EKS-optimized Linux AMI.
   *
   * @schema NodeGroupSpecForProvider#amiType
   */
  readonly amiType?: string;

  /**
   * The name of the cluster to create the node group in. 
 ClusterName is a required field
   *
   * @schema NodeGroupSpecForProvider#clusterName
   */
  readonly clusterName?: string;

  /**
   * ClusterNameRef is a reference to a Cluster used to set the ClusterName.
   *
   * @schema NodeGroupSpecForProvider#clusterNameRef
   */
  readonly clusterNameRef?: NodeGroupSpecForProviderClusterNameRef;

  /**
   * ClusterNameSelector selects references to a Cluster used to set the ClusterName.
   *
   * @schema NodeGroupSpecForProvider#clusterNameSelector
   */
  readonly clusterNameSelector?: NodeGroupSpecForProviderClusterNameSelector;

  /**
   * The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB.
   *
   * @schema NodeGroupSpecForProvider#diskSize
   */
  readonly diskSize?: number;

  /**
   * The instance type to use for your node group. Currently, you can specify a single instance type for a node group. The default value for this parameter is t3.medium. If you choose a GPU instance type, be sure to specify the AL2_x86_64_GPU with the amiType parameter.
   *
   * @schema NodeGroupSpecForProvider#instanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * The Kubernetes labels to be applied to the nodes in the node group when they are created.
   *
   * @schema NodeGroupSpecForProvider#labels
   */
  readonly labels?: { [key: string]: string };

  /**
   * The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node kubelet daemon makes calls to AWS APIs on your behalf. Worker nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch worker nodes and register them into a cluster, you must create an IAM role for those worker nodes to use when they are launched. For more information, see Amazon EKS Worker Node IAM Role (https://docs.aws.amazon.com/eks/latest/userguide/worker_node_IAM_role.html) in the Amazon EKS User Guide . 
 NodeRole is a required field
   *
   * @schema NodeGroupSpecForProvider#nodeRole
   */
  readonly nodeRole?: string;

  /**
   * NodeRoleRef is a reference to a Cluster used to set the NodeRole.
   *
   * @schema NodeGroupSpecForProvider#nodeRoleRef
   */
  readonly nodeRoleRef?: NodeGroupSpecForProviderNodeRoleRef;

  /**
   * NodeRoleSelector selects references to a Cluster used to set the NodeRole.
   *
   * @schema NodeGroupSpecForProvider#nodeRoleSelector
   */
  readonly nodeRoleSelector?: NodeGroupSpecForProviderNodeRoleSelector;

  /**
   * Region is the region you'd like  the NodeGroup to be created in.
   *
   * @schema NodeGroupSpecForProvider#region
   */
  readonly region: string;

  /**
   * The AMI version of the Amazon EKS-optimized AMI to use with your node group. By default, the latest available AMI version for the node group's current Kubernetes version is used. For more information, see Amazon EKS-Optimized Linux AMI Versions (https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html) in the Amazon EKS User Guide.
   *
   * @schema NodeGroupSpecForProvider#releaseVersion
   */
  readonly releaseVersion?: string;

  /**
   * The remote access (SSH) configuration to use with your node group.
   *
   * @schema NodeGroupSpecForProvider#remoteAccess
   */
  readonly remoteAccess?: NodeGroupSpecForProviderRemoteAccess;

  /**
   * The scaling configuration details for the Auto Scaling group that is created for your node group.
   *
   * @schema NodeGroupSpecForProvider#scalingConfig
   */
  readonly scalingConfig?: NodeGroupSpecForProviderScalingConfig;

  /**
   * SubnetRefs are references to Subnets used to set the Subnets.
   *
   * @schema NodeGroupSpecForProvider#subnetRefs
   */
  readonly subnetRefs?: NodeGroupSpecForProviderSubnetRefs[];

  /**
   * SubnetSelector selects references to Subnets used to set the Subnets.
   *
   * @schema NodeGroupSpecForProvider#subnetSelector
   */
  readonly subnetSelector?: NodeGroupSpecForProviderSubnetSelector;

  /**
   * The subnets to use for the Auto Scaling group that is created for your node group. These subnets must have the tag key kubernetes.io/cluster/CLUSTER_NAME with a value of shared, where CLUSTER_NAME is replaced with the name of your cluster. 
 Subnets is a required field
   *
   * @schema NodeGroupSpecForProvider#subnets
   */
  readonly subnets?: string[];

  /**
   * The metadata to apply to the node group to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets.
   *
   * @schema NodeGroupSpecForProvider#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value.
   *
   * @schema NodeGroupSpecForProvider#version
   */
  readonly version?: string;

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema NodeGroupSpecProviderConfigRef
 */
export interface NodeGroupSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema NodeGroupSpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema NodeGroupSpecProviderRef
 */
export interface NodeGroupSpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema NodeGroupSpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema NodeGroupSpecWriteConnectionSecretToRef
 */
export interface NodeGroupSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema NodeGroupSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema NodeGroupSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * ClusterNameRef is a reference to a Cluster used to set the ClusterName.
 *
 * @schema NodeGroupSpecForProviderClusterNameRef
 */
export interface NodeGroupSpecForProviderClusterNameRef {
  /**
   * Name of the referenced object.
   *
   * @schema NodeGroupSpecForProviderClusterNameRef#name
   */
  readonly name: string;

}

/**
 * ClusterNameSelector selects references to a Cluster used to set the ClusterName.
 *
 * @schema NodeGroupSpecForProviderClusterNameSelector
 */
export interface NodeGroupSpecForProviderClusterNameSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema NodeGroupSpecForProviderClusterNameSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema NodeGroupSpecForProviderClusterNameSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * NodeRoleRef is a reference to a Cluster used to set the NodeRole.
 *
 * @schema NodeGroupSpecForProviderNodeRoleRef
 */
export interface NodeGroupSpecForProviderNodeRoleRef {
  /**
   * Name of the referenced object.
   *
   * @schema NodeGroupSpecForProviderNodeRoleRef#name
   */
  readonly name: string;

}

/**
 * NodeRoleSelector selects references to a Cluster used to set the NodeRole.
 *
 * @schema NodeGroupSpecForProviderNodeRoleSelector
 */
export interface NodeGroupSpecForProviderNodeRoleSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema NodeGroupSpecForProviderNodeRoleSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema NodeGroupSpecForProviderNodeRoleSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * The remote access (SSH) configuration to use with your node group.
 *
 * @schema NodeGroupSpecForProviderRemoteAccess
 */
export interface NodeGroupSpecForProviderRemoteAccess {
  /**
   * The Amazon EC2 SSH key that provides access for SSH communication with the worker nodes in the managed node group. For more information, see Amazon EC2 Key Pairs (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) in the Amazon Elastic Compute Cloud User Guide for Linux Instances.
   *
   * @schema NodeGroupSpecForProviderRemoteAccess#ec2SSHKey
   */
  readonly ec2SSHKey?: string;

  /**
   * SourceSecurityGroupRefs are references to SecurityGroups used to set the SourceSecurityGroups.
   *
   * @schema NodeGroupSpecForProviderRemoteAccess#sourceSecurityGroupRefs
   */
  readonly sourceSecurityGroupRefs?: NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupRefs[];

  /**
   * SourceSecurityGroupSelector selects references to SecurityGroups used to set the SourceSecurityGroups.
   *
   * @schema NodeGroupSpecForProviderRemoteAccess#sourceSecurityGroupSelector
   */
  readonly sourceSecurityGroupSelector?: NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupSelector;

  /**
   * The security groups that are allowed SSH access (port 22) to the worker nodes. If you specify an Amazon EC2 SSH key but do not specify a source security group when you create a managed node group, then port 22 on the worker nodes is opened to the internet (0.0.0.0/0). For more information, see Security Groups for Your VPC (https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) in the Amazon Virtual Private Cloud User Guide.
   *
   * @schema NodeGroupSpecForProviderRemoteAccess#sourceSecurityGroups
   */
  readonly sourceSecurityGroups?: string[];

}

/**
 * The scaling configuration details for the Auto Scaling group that is created for your node group.
 *
 * @schema NodeGroupSpecForProviderScalingConfig
 */
export interface NodeGroupSpecForProviderScalingConfig {
  /**
   * The current number of worker nodes that the managed node group should maintain.
   *
   * @schema NodeGroupSpecForProviderScalingConfig#desiredSize
   */
  readonly desiredSize?: number;

  /**
   * The maximum number of worker nodes that the managed node group can scale out to. Managed node groups can support up to 100 nodes by default.
   *
   * @schema NodeGroupSpecForProviderScalingConfig#maxSize
   */
  readonly maxSize?: number;

  /**
   * The minimum number of worker nodes that the managed node group can scale in to. This number must be greater than zero.
   *
   * @schema NodeGroupSpecForProviderScalingConfig#minSize
   */
  readonly minSize?: number;

}

/**
 * A Reference to a named object.
 *
 * @schema NodeGroupSpecForProviderSubnetRefs
 */
export interface NodeGroupSpecForProviderSubnetRefs {
  /**
   * Name of the referenced object.
   *
   * @schema NodeGroupSpecForProviderSubnetRefs#name
   */
  readonly name: string;

}

/**
 * SubnetSelector selects references to Subnets used to set the Subnets.
 *
 * @schema NodeGroupSpecForProviderSubnetSelector
 */
export interface NodeGroupSpecForProviderSubnetSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema NodeGroupSpecForProviderSubnetSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema NodeGroupSpecForProviderSubnetSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * A Reference to a named object.
 *
 * @schema NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupRefs
 */
export interface NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupRefs {
  /**
   * Name of the referenced object.
   *
   * @schema NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupRefs#name
   */
  readonly name: string;

}

/**
 * SourceSecurityGroupSelector selects references to SecurityGroups used to set the SourceSecurityGroups.
 *
 * @schema NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupSelector
 */
export interface NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema NodeGroupSpecForProviderRemoteAccessSourceSecurityGroupSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}
