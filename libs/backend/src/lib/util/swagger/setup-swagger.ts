import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

interface DocumentConfigOptions {
  title: string;
  description: string;
  version: string;
  tag: string;
  docPath: string;
}

export const setupSwagger = (app: INestApplication, options: DocumentConfigOptions) => {
  const { title, description, version, tag, docPath } = options;
  const config = new DocumentBuilder()
  .setTitle(title)
  .setDescription(description)
  .setVersion(version)
  .addTag(tag)
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(docPath, app, document);
};
