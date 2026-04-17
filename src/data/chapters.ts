export type Priority = 'star2' | 'star1' | 'none';

export interface ServiceItem {
  name: string;
  slug: string;
  priority: Priority;
  hasDiagram: boolean;
  isNew: boolean;
}

export interface Chapter {
  num: string;
  icon: string;
  iconBg: string;
  title: string;
  primaryServices: ServiceItem[];
  moreServices: ServiceItem[];
}

export const chapters: Chapter[] = [
  {
    num: '01', icon: '🌐', iconBg: '#eff6ff', title: 'ネットワークとコンテンツ配信',
    primaryServices: [
      { name: 'VPC',               slug: 'network/vpc',               priority: 'star2', hasDiagram: true,  isNew: false },
      { name: 'ELB',               slug: 'network/elb',               priority: 'star2', hasDiagram: true,  isNew: false },
      { name: 'Route 53',          slug: 'network/route53',           priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'CloudFront',        slug: 'network/cloudfront',        priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Transit Gateway',   slug: 'network/tgw',               priority: 'star1', hasDiagram: false, isNew: false },
    ],
    moreServices: [
      { name: 'Global Accelerator',slug: 'network/global-accelerator',priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Direct Connect',    slug: 'network/direct-connect',    priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'PrivateLink',       slug: 'network/privatelink',       priority: 'star1', hasDiagram: true,  isNew: true  },
      { name: 'VPN',               slug: 'network/vpn',               priority: 'none',  hasDiagram: false, isNew: false },
    ],
  },
  {
    num: '02', icon: '💻', iconBg: '#fff7ed', title: 'コンピューティング',
    primaryServices: [
      { name: 'EC2',               slug: 'compute/ec2',               priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'Auto Scaling',      slug: 'compute/auto-scaling',      priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'ECS',               slug: 'compute/ecs',               priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'EKS',               slug: 'compute/eks',               priority: 'star1', hasDiagram: false, isNew: true  },
    ],
    moreServices: [
      { name: 'Batch',             slug: 'compute/batch',             priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'Fargate',           slug: 'compute/fargate',           priority: 'star1', hasDiagram: false, isNew: false },
    ],
  },
  {
    num: '03', icon: '🗄️', iconBg: '#fdf4ff', title: 'ストレージ',
    primaryServices: [
      { name: 'S3',                slug: 'storage/s3',                priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'EBS',               slug: 'storage/ebs',               priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'EFS',               slug: 'storage/efs',               priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Glacier',           slug: 'storage/glacier',           priority: 'star1', hasDiagram: false, isNew: false },
    ],
    moreServices: [
      { name: 'FSx',               slug: 'storage/fsx',               priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Storage Gateway',   slug: 'storage/storage-gateway',   priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Snow Family',       slug: 'storage/snow-family',       priority: 'none',  hasDiagram: false, isNew: false },
    ],
  },
  {
    num: '04', icon: '🗃️', iconBg: '#ecfdf5', title: 'データベース',
    primaryServices: [
      { name: 'RDS',               slug: 'database/rds',              priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'Aurora',            slug: 'database/aurora',           priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'DynamoDB',          slug: 'database/dynamodb',         priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'ElasticCache',       slug: 'database/elasticache',      priority: 'star1', hasDiagram: false, isNew: false },
    ],
    moreServices: [
      { name: 'Redshift',          slug: 'database/redshift',         priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Neptune',           slug: 'database/neptune',          priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'DocumentDB',        slug: 'database/documentdb',       priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'Keyspaces',         slug: 'database/keyspaces',        priority: 'none',  hasDiagram: false, isNew: true  },
      { name: 'MemoryDB',          slug: 'database/memorydb',         priority: 'none',  hasDiagram: false, isNew: true  },
    ],
  },
  {
    num: '05', icon: '🔐', iconBg: '#fef2f2', title: 'セキュリティ・アイデンティティ',
    primaryServices: [
      { name: 'IAM',               slug: 'security/iam',              priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'KMS',               slug: 'security/kms',              priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'Shield / WAF',      slug: 'security/waf',              priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'Cognito',           slug: 'security/cognito',          priority: 'star1', hasDiagram: false, isNew: false },
    ],
    moreServices: [
      { name: 'GuardDuty',         slug: 'security/guardduty',        priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Macie',             slug: 'security/macie',            priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Secrets Manager',   slug: 'security/secrets-manager',  priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'ACM',               slug: 'security/acm',              priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Security Hub',      slug: 'security/security-hub',     priority: 'none',  hasDiagram: false, isNew: true  },
      { name: 'Inspector',         slug: 'security/inspector',        priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'Detective',         slug: 'security/detective',        priority: 'none',  hasDiagram: false, isNew: true  },
      { name: 'SSO',               slug: 'security/sso',              priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Directory Service', slug: 'security/directory-service',priority: 'none',  hasDiagram: false, isNew: false },
    ],
  },
  {
    num: '06', icon: '⚙️', iconBg: '#f0fdf4', title: 'マネジメントとガバナンス',
    primaryServices: [
      { name: 'CloudWatch',        slug: 'management/cloudwatch',     priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'CloudTrail',        slug: 'management/cloudtrail',     priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'CloudFormation',    slug: 'management/cloudformation', priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'AWS Config',        slug: 'management/aws-config',     priority: 'star1', hasDiagram: false, isNew: false },
    ],
    moreServices: [
      { name: 'Systems Manager',   slug: 'management/ssm',            priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Organizations',     slug: 'management/organizations',  priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Trusted Advisor',   slug: 'management/trusted-advisor',priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Control Tower',     slug: 'management/control-tower',  priority: 'none',  hasDiagram: false, isNew: true  },
      { name: 'License Manager',   slug: 'management/license-manager',priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'Service Catalog',   slug: 'management/service-catalog',priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'Well-Architected Tool', slug: 'management/well-architected-tool', priority: 'none', hasDiagram: false, isNew: false },
    ],
  },
  {
    num: '07', icon: '⚡', iconBg: '#fef9c3', title: 'サーバーレス',
    primaryServices: [
      { name: 'Lambda',            slug: 'serverless/lambda',         priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'API Gateway',       slug: 'serverless/api-gateway',    priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'Step Functions',    slug: 'serverless/step-functions', priority: 'star1', hasDiagram: false, isNew: false },
    ],
    moreServices: [],
  },
  {
    num: '08', icon: '📦', iconBg: '#f0f9ff', title: 'コンテナ',
    primaryServices: [
      { name: 'ECS',               slug: 'container/ecs',             priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'EKS',               slug: 'container/eks',             priority: 'star2', hasDiagram: false, isNew: true  },
      { name: 'ECR',               slug: 'container/ecr',             priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Fargate',           slug: 'container/fargate',         priority: 'star1', hasDiagram: false, isNew: false },
    ],
    moreServices: [
      { name: 'App Runner',        slug: 'container/app-runner',      priority: 'none',  hasDiagram: false, isNew: true  },
    ],
  },
  {
    num: '09', icon: '💰', iconBg: '#ecfdf5', title: 'AWSコスト管理',
    primaryServices: [
      { name: 'Cost Explorer',     slug: 'cost-management/cost-explorer', priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'AWS Budgets',       slug: 'cost-management/aws-budgets',   priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Savings Plans',     slug: 'cost-management/savings-plans', priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'Cost & Usage Report',slug: 'cost-management/cur',          priority: 'none',  hasDiagram: false, isNew: false },
    ],
    moreServices: [],
  },
  {
    num: '10', icon: '🔗', iconBg: '#f0f9ff', title: 'アプリケーション統合',
    primaryServices: [
      { name: 'SQS',               slug: 'integration/sqs',           priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'SNS',               slug: 'integration/sns',           priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'EventBridge',       slug: 'integration/eventbridge',   priority: 'star1', hasDiagram: false, isNew: true  },
      { name: 'AppSync',           slug: 'integration/appsync',       priority: 'star1', hasDiagram: false, isNew: true  },
    ],
    moreServices: [
      { name: 'MQ',                slug: 'integration/mq',            priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'AppFlow',           slug: 'integration/appflow',       priority: 'none',  hasDiagram: false, isNew: true  },
    ],
  },
  {
    num: '11', icon: '📊', iconBg: '#fdf4ff', title: '分析',
    primaryServices: [
      { name: 'Kinesis',           slug: 'analysis/kinesis',          priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'Athena',            slug: 'analysis/athena',           priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Glue',              slug: 'analysis/glue',             priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'EMR',               slug: 'analysis/emr',              priority: 'star1', hasDiagram: false, isNew: false },
    ],
    moreServices: [
      { name: 'QuickSight',        slug: 'analysis/quicksight',       priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'OpenSearch Service',slug: 'analysis/opensearch-service',priority: 'star1',hasDiagram: false, isNew: false },
      { name: 'Lake Formation',    slug: 'analysis/lake-formation',   priority: 'none',  hasDiagram: false, isNew: true  },
      { name: 'Data Exchange',     slug: 'analysis/data-exchange',    priority: 'none',  hasDiagram: false, isNew: true  },
      { name: 'MSK',               slug: 'analysis/msk',              priority: 'star1', hasDiagram: false, isNew: true  },
      { name: 'Data Pipeline',     slug: 'analysis/data-pipeline',    priority: 'none',  hasDiagram: false, isNew: false },
    ],
  },
  {
    num: '12', icon: '🚚', iconBg: '#fff7ed', title: '移行と転送',
    primaryServices: [
      { name: 'DMS',               slug: 'migration/dms',             priority: 'star2', hasDiagram: false, isNew: false },
      { name: 'Migration Hub',     slug: 'migration/migration-hub',   priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'DataSync',          slug: 'migration/datasync',        priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Snow Family',       slug: 'migration/snow-family',     priority: 'star1', hasDiagram: false, isNew: false },
    ],
    moreServices: [
      { name: 'Transfer Family',   slug: 'migration/transfer-family', priority: 'star1', hasDiagram: false, isNew: true  },
      { name: 'Application Discovery Service', slug: 'migration/ads', priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'Server Migration Service', slug: 'migration/sms',      priority: 'none',  hasDiagram: false, isNew: false },
    ],
  },
  {
    num: '13', icon: '🤖', iconBg: '#f5f3ff', title: '機械学習',
    primaryServices: [
      { name: 'SageMaker',         slug: 'ml/sagemaker',              priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'Rekognition',       slug: 'ml/rekognition',            priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'Textract',          slug: 'ml/textract',               priority: 'none',  hasDiagram: false, isNew: true  },
      { name: 'Comprehend',        slug: 'ml/comprehend',             priority: 'none',  hasDiagram: false, isNew: false },
    ],
    moreServices: [
      { name: 'Translate',         slug: 'ml/translate',              priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'Polly',             slug: 'ml/polly',                  priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'Lex',               slug: 'ml/lex',                    priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'Forecast',          slug: 'ml/forecast',               priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'Kendra',            slug: 'ml/kendra',                 priority: 'none',  hasDiagram: false, isNew: true  },
      { name: 'Personalize',       slug: 'ml/personalize',            priority: 'none',  hasDiagram: false, isNew: false },
    ],
  },
  {
    num: '14', icon: '🛠️', iconBg: '#f8fafc', title: '開発者ツール',
    primaryServices: [
      { name: 'CodePipeline',      slug: 'devtools/codepipeline',     priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'CodeBuild',         slug: 'devtools/codebuild',        priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'CodeDeploy',        slug: 'devtools/codedeploy',       priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'CodeCommit',        slug: 'devtools/codecommit',       priority: 'none',  hasDiagram: false, isNew: false },
    ],
    moreServices: [
      { name: 'X-Ray',             slug: 'devtools/xray',             priority: 'star1', hasDiagram: false, isNew: false },
      { name: 'CodeArtifact',      slug: 'devtools/codeartifact',     priority: 'none',  hasDiagram: false, isNew: true  },
    ],
  },
  {
    num: '15', icon: '🌍', iconBg: '#ecfeff', title: 'フロントエンドとモバイル',
    primaryServices: [
      { name: 'Amplify',           slug: 'frontend/amplify',          priority: 'star1', hasDiagram: false, isNew: true  },
      { name: 'AppSync',           slug: 'frontend/appsync',          priority: 'star1', hasDiagram: false, isNew: true  },
      { name: 'Pinpoint',          slug: 'frontend/pinpoint',         priority: 'none',  hasDiagram: false, isNew: false },
    ],
    moreServices: [],
  },
  {
    num: '16', icon: '🔌', iconBg: '#fafaf9', title: 'IoT・その他',
    primaryServices: [
      { name: 'IoT Core',          slug: 'other/iot-core',            priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'Greengrass',        slug: 'other/greengrass',          priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'WorkSpaces',        slug: 'other/workspaces',          priority: 'none',  hasDiagram: false, isNew: false },
      { name: 'AppStream 2.0',     slug: 'other/appstream',           priority: 'none',  hasDiagram: false, isNew: false },
    ],
    moreServices: [],
  },
];