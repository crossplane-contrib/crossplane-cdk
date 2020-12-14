// generated by cdk8s
import { Chart, ApiObject } from 'cdk8s';
import * as awsRefPlatform from '../imports/aws.platformref.crossplane.io';

export function postgresInstance(chart: Chart, name: string = 'postgres-instance/postgresqlinstance/aws.platformref.crossplane.io') : ApiObject {
  return new awsRefPlatform.PostgreSqlInstance(chart, name,
    {
      metadata: {
        name: 'postgres-instance',
      },
      spec: {
        parameters: {
          storageGB: 20,
          networkRef: {
            id: 'platform-ref-aws-network',
          },
        },
        writeConnectionSecretToRef: {
          name: 'my-db-conn',
        },
      },
    }
  );
}

