import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import slugify from 'slugify';
import { Product } from 'src/product/entities/product.entity';
import { removeDiacritics } from 'src/utils/string.utils';

@Injectable()
export class SearchService {
  constructor(
    private readonly esService: ElasticsearchService,
    private readonly configService: ConfigService,
  ) {}
  // tslint:disable-next-line:no-big-function
  public async createProdIndex() {
    const productIndex = this.configService.get('ELASTICSEARCH_PRODUCT_INDEX');
    const blogIndex = this.configService.get('ELASTICSEARCH_BLOG_INDEX');
    const productIndexExist = await this.esService.indices.exists({
      index: productIndex,
    });
    const blogIndexExist = await this.esService.indices.exists({
      index: blogIndex,
    });
    if (!productIndexExist) {
      await this.esService.indices.create({
        index: productIndex,
        body: {
          mappings: {
            properties: {
              name: { type: 'text' },
            },
          },
        },
      });
      console.log(`Created index: ${productIndex}`);
    } else {
      console.log(`Index ${productIndex} already exists`);
    }
    if (!blogIndexExist) {
      await this.esService.indices.create({
        index: blogIndex,
        body: {
          mappings: {
            properties: {
              name: { type: 'text' },
              shortDescription: { type: 'text' },
            },
          },
        },
      });
      console.log(`Created index: ${blogIndex}`);
    } else {
      console.log(`Index ${blogIndex} already exists`);
    }
  }
  public async indexProduct(prod: Product) {
    const options = {
      lower: true, // Convert the slug to lowercase
      remove: /[*+~.()'"!:@]/g, // Remove special characters
      replacement: ' ', // Replace spaces with hyphens
    };
    const name = slugify(removeDiacritics(prod.name.toLowerCase()), options);
    prod.name = name;
    return await this.esService.index({
      index: this.configService.get('ELASTICSEARCH_PRODUCT_INDEX'),
      body: prod,
    });
  }
  public async removeProduct(prodId: number) {
    await this.esService.deleteByQuery({
      index: this.configService.get('ELASTICSEARCH_PRODUCT_INDEX'),
      body: {
        query: {
          match: {
            id: prodId,
          },
        },
      },
    });
  }

  public async updateProduct(prod: Product) {
    const options = {
      lower: true, // Convert the slug to lowercase
      remove: /[*+~.()'"!:@]/g, // Remove special characters
      replacement: ' ', // Replace spaces with hyphens
    };
    const name = slugify(removeDiacritics(prod.name.toLowerCase()), options);
    prod.name = name;
    return await this.esService.updateByQuery({
      index: this.configService.get('ELASTICSEARCH_PRODUCT_INDEX'),
      body: {
        query: {
          match: {
            id: prod.id,
          },
        },
        script: {
          source: `ctx._source = params`,
          params: prod,
        },
      },
    });
  }

  async searchProducts(query: any) {
    return await this.esService.search({
      index: this.configService.get('ELASTICSEARCH_PRODUCT_INDEX'),
      body: query,
    });
  }
}
