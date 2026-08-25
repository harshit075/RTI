import { FirstAppealRequest, SecondAppealRequest, RTIApplication } from './types';
import { rtiService } from './rtiService';
import { notificationService } from './notificationService';

export const appealService = {
  async fileFirstAppeal(request: FirstAppealRequest): Promise<{ appealRef: string; application: RTIApplication }> {
    const rand = Math.floor(10000 + Math.random() * 90000);
    const appealRef = `FAA-2026-${rand}`;

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
    const rand = Math.floor(10000 + Math.random() * 90000);
    const appealRef = `CIC/MEXTA/A/2026/${rand}`;

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
