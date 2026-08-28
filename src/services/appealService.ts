import { FirstAppealRequest, SecondAppealRequest, RTIApplication } from './types';
import { rtiService } from './rtiService';
import { notificationService } from './notificationService';

const getAuthorityCode = (authorityId?: string): string => {
  const map: Record<string, string> = {
    morth: 'MORTH',
    ugc: 'UGEDN',
    passport: 'MEXTA',
    railways: 'MORLY',
    uidai: 'UIDAI',
    epfo: 'EPFOH',
    djb: 'DELJB',
    uppolice: 'UPPOL',
    bbmp: 'BBMPK'
  };
  if (!authorityId) return 'GENRL';
  return map[authorityId.toLowerCase()] || authorityId.toUpperCase().substring(0, 5);
};

export const appealService = {
  async fileFirstAppeal(request: FirstAppealRequest): Promise<{ appealRef: string; application: RTIApplication }> {
    const originalApp = await rtiService.getRTIById(request.rtiId);
    const authCode = originalApp ? getAuthorityCode(originalApp.authorityId) : 'GENRL';
    const rand = Math.floor(10000 + Math.random() * 90000);
    const appealRef = `${authCode}/A/E/26/${rand}`;

    const updatedApp = await rtiService.updateRTI(request.rtiId, {
      status: 'First Appeal Filed',
      appealReason: request.reason,
      appealDate: new Date().toISOString().substring(0, 10),
      notes: request.petitionText
    });

    await notificationService.addNotification(
      `First Appeal successfully registered under Ref: ${appealRef}. Senior Appellate Authority will decide within 30-45 days.`,
      'update',
      request.rtiId
    );

    return { appealRef, application: updatedApp };
  },

  async fileSecondAppeal(request: SecondAppealRequest): Promise<{ appealRef: string; application: RTIApplication }> {
    const originalApp = await rtiService.getRTIById(request.rtiId);
    const authCode = originalApp ? getAuthorityCode(originalApp.authorityId) : 'GENRL';
    const rand = Math.floor(10000 + Math.random() * 90000);
    const appealRef = `CIC/${authCode}/A/26/${rand}`;

    const updatedApp = await rtiService.updateRTI(request.rtiId, {
      status: 'Second Appeal Filed',
      secondAppealReason: request.reason,
      secondAppealDate: new Date().toISOString().substring(0, 10),
      secondAppealText: request.petitionText,
      secondAppealRegNo: appealRef
    });

    await notificationService.addNotification(
      `Second Appeal filed with Central Information Commission (CIC) under Ref: ${appealRef}.`,
      'alert',
      request.rtiId
    );

    return { appealRef, application: updatedApp };
  }
};
