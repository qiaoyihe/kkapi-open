import { HttpService } from '@nestjs/axios';
import { Controller, Get, Query, Req, Response, Request } from '@nestjs/common';
import { ErrorModal } from 'src/Model/Response.modal';
import { NoAuth } from '../../../common/decorator/customize';
import { OpenApiHttpService } from '../service/http.service';

@Controller('/open/wechat')
export class OpenApiWechatController {
  constructor(
    private readonly httpService: HttpService,
    private readonly openApiHttpService: OpenApiHttpService,
  ) {}
}
