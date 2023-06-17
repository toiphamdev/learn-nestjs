import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
  constructor(
    private readonly esService: ElasticsearchService,
    private readonly configService: ConfigService,
  ) {}
  // tslint:disable-next-line:no-big-function
  public async createProdIndex() {
    const index = this.configService.get('ELASTICSEARCH_PRODUCT_INDEX');
    console.log(this.configService.get('ELASTICSEARCH_PRODUCT_INDEX'));
    const checkIndex = await this.esService.indices.exists({ index });
    if (!checkIndex) {
      await this.esService.indices.create({
        index,
        body: {
          mappings: {
            properties: {
              name: { type: 'text' },
              categoryId: { type: 'keyword' }, // keyword stand for filler
              statusId: { type: 'keyword' },
              brandId: { type: 'keyword' },
            },
          },
        },
      });
      console.log(`Created index: ${index}`);
    } else {
      console.log(`Index ${index} already exists`);
    }
  }
  public async indexProduct(post: any) {
    return await this.esService.index({
      index: this.configService.get('ELASTICSEARCH_PRODUCT_INDEX')!,
      body: post,
    });
  }
  public async remove(postId: number) {
    await this.esService.deleteByQuery({
      index: this.configService.get('ELASTICSEARCH_PRODUCT_INDEX')!,
      body: {
        query: {
          match: {
            id: postId,
          },
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
