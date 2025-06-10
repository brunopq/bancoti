import { relations } from "drizzle-orm/relations"
import {
  tpuAssuntos,
  process,
  tpuClasses,
  users,
  segments,
  groupclients,
  states,
  closereasons,
  clients,
  origin,
  businessunities,
  businessdepartments,
  positions,
  offices,
  lawyersexternal,
  districts,
  registries,
  lawyers,
  areas,
  actiontypes,
  phases,
  histories,
  accompanimentcontrolhistory,
  perfilConsultation,
  activityTypesopinionscombo,
  activityTypesopinionscombodata,
  typesopinions,
  actionobjects,
  appointments,
  accompanimentcontrolappointment,
  addressforumdistrict,
  aiCalculation,
  documents,
  aiPredictive,
  agreementuserstats,
  aiDocumentGenerator,
  dbpartsNames,
  consultationandadvice,
  appointmentcomments,
  appcommentnotifys,
  agreementclient,
  proceedingtypes,
  agreements,
  agreementuseragenda,
  appointmentsagreement,
  appointmenttypes,
  appointmenttypescombos,
  justicetype,
  intimationtypes,
  publicationsWarning,
  appointmenttypeshearingcombos,
  hearingtypes,
  appointmentstypeRelClients,
  appointmenttypeshearingcombosdata,
  appointmenttypeRelJusticetype,
  timesheettypes,
  appointmenttimesheets,
  archiveaccessusers,
  caldavRecurrence,
  caldavEvent,
  caldavEventParticipant,
  caldavEventInvite,
  archiveregistries,
  areaagreementspecifics,
  checklistProceedingtype,
  caldavUser,
  caldavParentEventInvite,
  caldavParticipantInviteNotification,
  checklistformalCampos,
  checklistformal,
  checklistmeritoCampos,
  checklistmeritoValues,
  checklistSave,
  checklistmerito,
  clientdocuments,
  clientsCustomfieldsdatas,
  clientsCustomfields,
  clientannotations,
  subareas,
  clientspecifics,
  controldiligencelawyers,
  controlfinancial,
  controlfinancialRegras,
  controlspecialmonitoringlawyers,
  coordinators,
  departmentsoverallstats,
  depositvalues,
  depositvaluesStatus,
  depositvaluesType,
  correspondents,
  diligencetypes,
  diligencesCopies,
  copiestype,
  diligencesGuide,
  documentFiles,
  documentQueue,
  financialreceipts,
  valuetypes,
  processparticipants,
  participants,
  forumDistricts,
  forum,
  garnishments,
  historytimesheets,
  groupClientRel,
  holidays,
  intimations,
  hearings,
  hearingstimesheets,
  lawyerfields,
  lawyerstats,
  legalExpenses,
  despesaTypes,
  processparticipantslawyers,
  participantslawyers,
  logger,
  liberations,
  logisticusers,
  monetaryIndices,
  monetaryTaxaindice,
  observationshistory,
  themes,
  perfilConsultationDados,
  permitsreceived,
  perfilProcessDados,
  processmonitoredlogs,
  processactionobjects,
  processedDocument,
  profilesclients,
  protocolaccessusers,
  partner,
  publications,
  publicationsDescriptions,
  queryreportsclients,
  queryreports,
  queryreportsSchedule,
  querydetails,
  reschedulingHistories,
  reschedulingReason,
  serviceActivityChecklist,
  serviceactivities,
  serviceHistories,
  servicedocuments,
  servicelinked,
  servicedocumentFiles,
  serviceSegments,
  systemLogin,
  stopwatchHistories,
  servicesprocess,
  servicesLog,
  systemaccessusers,
  systemTabsUsersViewing,
  userclientAppointmenttypes,
  termPublication,
  userAccessCourt,
  termPublicationStates,
  systemTabs,
  systemTabsUsers,
  userclientService,
  userSettings,
  shippingTypes,
  servicesCustomfields,
  levels,
  appeals,
  appealtypes,
  agreementspart,
  appointmenttypescombosdata,
  clientdocumentFiles,
  servicesubjects,
  coordinatorsUsers,
  diligencesHearingIntegracao,
  diligencesHearingIntegracaoFiles,
  dynamicItems,
  dynamicpartsPreliminary,
  dynamicpartsRelPreliminary,
  processStopwatch,
  justificationsnonconforming,
  nonconformings,
  nonconformingtypes,
  systemProfiles,
  systemProfilesUsers,
  publicationsRelationship,
  requestScheduling,
  monetaryCalc,
  monetaryParcelas,
  publicationsTemp,
  publicationsTempRelationship,
  contingencyvaluetypes,
  contingencyvaluehistory,
  resourcesfinancialMotivoadiantamento,
  resourcesfinancial,
  areasmanagers,
  controlnotelawyers,
  officesmanagers,
  agreementusersareas,
  controluserslawyers,
  officesstats,
  areaagreementspecificdatas,
  departmentsstats,
  clientspecificdatas,
  financialprovides,
  servicesCustomfieldsdatas,
  tpuItens,
} from "./schema.ts"

export const processRelations = relations(process, ({ one, many }) => ({
  tpuAssunto: one(tpuAssuntos, {
    fields: [process.fAssuntocnj],
    references: [tpuAssuntos.codAssunto],
  }),
  tpuClass: one(tpuClasses, {
    fields: [process.fClassecnj],
    references: [tpuClasses.codClasse],
  }),
  user_fCreateUser: one(users, {
    fields: [process.fCreateUser],
    references: [users.fId],
    relationName: "process_fCreateUser_users_fId",
  }),
  segment: one(segments, {
    fields: [process.fSegment],
    references: [segments.fId],
  }),
  groupclient: one(groupclients, {
    fields: [process.fGroup],
    references: [groupclients.fId],
  }),
  state: one(states, {
    fields: [process.fState],
    references: [states.fId],
  }),
  closereason: one(closereasons, {
    fields: [process.fClosereason],
    references: [closereasons.fId],
  }),
  user_fInactiveUser: one(users, {
    fields: [process.fInactiveUser],
    references: [users.fId],
    relationName: "process_fInactiveUser_users_fId",
  }),
  user_fActiveUser: one(users, {
    fields: [process.fActiveUser],
    references: [users.fId],
    relationName: "process_fActiveUser_users_fId",
  }),
  user_fCloseUser: one(users, {
    fields: [process.fCloseUser],
    references: [users.fId],
    relationName: "process_fCloseUser_users_fId",
  }),
  user_fAgreementuser: one(users, {
    fields: [process.fAgreementuser],
    references: [users.fId],
    relationName: "process_fAgreementuser_users_fId",
  }),
  client: one(clients, {
    fields: [process.fClient],
    references: [clients.fId],
  }),
  origin: one(origin, {
    fields: [process.fOrigin],
    references: [origin.fId],
  }),
  businessunity: one(businessunities, {
    fields: [process.fBusinessUnit],
    references: [businessunities.fId],
  }),
  businessdepartment: one(businessdepartments, {
    fields: [process.fBusinessDepartment],
    references: [businessdepartments.fId],
  }),
  position: one(positions, {
    fields: [process.fClientposition],
    references: [positions.fId],
  }),
  office: one(offices, {
    fields: [process.fExternalOffice],
    references: [offices.fId],
  }),
  lawyersexternal: one(lawyersexternal, {
    fields: [process.fExternalLawyer],
    references: [lawyersexternal.fId],
  }),
  district: one(districts, {
    fields: [process.fDistrict],
    references: [districts.fId],
  }),
  registry: one(registries, {
    fields: [process.fRegistry],
    references: [registries.fId],
  }),
  lawyer: one(lawyers, {
    fields: [process.fLawyer],
    references: [lawyers.fId],
  }),
  area: one(areas, {
    fields: [process.fArea],
    references: [areas.fId],
  }),
  actiontype: one(actiontypes, {
    fields: [process.fActiontype],
    references: [actiontypes.fId],
  }),
  phase: one(phases, {
    fields: [process.fPhase],
    references: [phases.fId],
  }),
  aiCalculations: many(aiCalculation),
  aiPredictives: many(aiPredictive),
  aiDocumentGenerators: many(aiDocumentGenerator),
  agreements: many(agreements),
  agreementuseragenda: many(agreementuseragenda),
  archiveregistries: many(archiveregistries),
  depositvalues: many(depositvalues),
  diligencesGuides: many(diligencesGuide),
  documentQueues: many(documentQueue),
  financialreceipts: many(financialreceipts),
  processparticipants: many(processparticipants),
  histories: many(histories),
  intimations: many(intimations),
  loggers: many(logger),
  liberations: many(liberations),
  processmonitoredlogs_fProcess: many(processmonitoredlogs, {
    relationName: "processmonitoredlogs_fProcess_process_fId",
  }),
  processactionobjects: many(processactionobjects),
  servicesprocesses: many(servicesprocess),
  appointments: many(appointments),
  documents: many(documents),
  hearings: many(hearings),
  appeals: many(appeals),
  processStopwatches: many(processStopwatch),
  publicationsRelationships: many(publicationsRelationship),
  contingencyvaluehistories: many(contingencyvaluehistory),
  resourcesfinancials: many(resourcesfinancial),
  clientspecificdatas: many(clientspecificdatas),
}))

export const tpuAssuntosRelations = relations(tpuAssuntos, ({ many }) => ({
  processes: many(process),
}))

export const tpuClassesRelations = relations(tpuClasses, ({ many }) => ({
  processes: many(process),
}))

export const usersRelations = relations(users, ({ one, many }) => ({
  processes_fCreateUser: many(process, {
    relationName: "process_fCreateUser_users_fId",
  }),
  processes_fInactiveUser: many(process, {
    relationName: "process_fInactiveUser_users_fId",
  }),
  processes_fActiveUser: many(process, {
    relationName: "process_fActiveUser_users_fId",
  }),
  processes_fCloseUser: many(process, {
    relationName: "process_fCloseUser_users_fId",
  }),
  processes_fAgreementuser: many(process, {
    relationName: "process_fAgreementuser_users_fId",
  }),
  accompanimentcontrolhistories: many(accompanimentcontrolhistory),
  activityTypesopinionscombos_fCreateUser: many(activityTypesopinionscombo, {
    relationName: "activityTypesopinionscombo_fCreateUser_users_fId",
  }),
  activityTypesopinionscombos_fLastuser: many(activityTypesopinionscombo, {
    relationName: "activityTypesopinionscombo_fLastuser_users_fId",
  }),
  accompanimentcontrolappointments: many(accompanimentcontrolappointment),
  aiCalculations_fCreateUser: many(aiCalculation, {
    relationName: "aiCalculation_fCreateUser_users_fId",
  }),
  aiCalculations_fLastuser: many(aiCalculation, {
    relationName: "aiCalculation_fLastuser_users_fId",
  }),
  aiPredictives_fCreateUser: many(aiPredictive, {
    relationName: "aiPredictive_fCreateUser_users_fId",
  }),
  aiPredictives_fLastuser: many(aiPredictive, {
    relationName: "aiPredictive_fLastuser_users_fId",
  }),
  agreementuserstats: many(agreementuserstats),
  aiDocumentGenerators: many(aiDocumentGenerator),
  agreements: many(agreements),
  agreementuseragenda: many(agreementuseragenda),
  appointmentcomments: many(appointmentcomments),
  archiveaccessusers: many(archiveaccessusers),
  caldavEvents_fOrganizer: many(caldavEvent, {
    relationName: "caldavEvent_fOrganizer_users_fId",
  }),
  caldavEvents_fOwner: many(caldavEvent, {
    relationName: "caldavEvent_fOwner_users_fId",
  }),
  archiveregistries_fUser: many(archiveregistries, {
    relationName: "archiveregistries_fUser_users_fId",
  }),
  archiveregistries_fAuthor: many(archiveregistries, {
    relationName: "archiveregistries_fAuthor_users_fId",
  }),
  caldavUsers: many(caldavUser),
  caldavEventParticipants: many(caldavEventParticipant),
  clientsCustomfieldsdatas: many(clientsCustomfieldsdatas),
  clientannotations: many(clientannotations),
  controldiligencelawyers: many(controldiligencelawyers),
  controlfinancials: many(controlfinancial),
  controlfinancialRegras: many(controlfinancialRegras),
  controlspecialmonitoringlawyers: many(controlspecialmonitoringlawyers),
  coordinators: many(coordinators),
  depositvalues_fLastuser: many(depositvalues, {
    relationName: "depositvalues_fLastuser_users_fId",
  }),
  depositvalues_fCreateUser: many(depositvalues, {
    relationName: "depositvalues_fCreateUser_users_fId",
  }),
  correspondents: many(correspondents),
  diligencesGuides: many(diligencesGuide),
  financialreceipts: many(financialreceipts),
  participants_fCreateUser: many(participants, {
    relationName: "participants_fCreateUser_users_fId",
  }),
  participants_fLastuser: many(participants, {
    relationName: "participants_fLastuser_users_fId",
  }),
  histories_fCreateUser: many(histories, {
    relationName: "histories_fCreateUser_users_fId",
  }),
  histories_fLastuser: many(histories, {
    relationName: "histories_fLastuser_users_fId",
  }),
  garnishments: many(garnishments),
  intimations: many(intimations),
  lawyers_fUser: many(lawyers, {
    relationName: "lawyers_fUser_users_fId",
  }),
  lawyers_fTrainee: many(lawyers, {
    relationName: "lawyers_fTrainee_users_fId",
  }),
  legalExpenses: many(legalExpenses),
  logisticusers: many(logisticusers),
  observationshistories: many(observationshistory),
  permitsreceiveds: many(permitsreceived),
  processmonitoredlogs_fCreateUser: many(processmonitoredlogs, {
    relationName: "processmonitoredlogs_fCreateUser_users_fId",
  }),
  profilesclients: many(profilesclients),
  protocolaccessusers: many(protocolaccessusers),
  queryreports: many(queryreports),
  queryreportsSchedules: many(queryreportsSchedule),
  serviceActivityChecklists_fCreateUser: many(serviceActivityChecklist, {
    relationName: "serviceActivityChecklist_fCreateUser_users_fId",
  }),
  serviceActivityChecklists_fLastuser: many(serviceActivityChecklist, {
    relationName: "serviceActivityChecklist_fLastuser_users_fId",
  }),
  serviceHistories_fCreateUser: many(serviceHistories, {
    relationName: "serviceHistories_fCreateUser_users_fId",
  }),
  serviceHistories_fLastuser: many(serviceHistories, {
    relationName: "serviceHistories_fLastuser_users_fId",
  }),
  serviceSegments_fCreateUser: many(serviceSegments, {
    relationName: "serviceSegments_fCreateUser_users_fId",
  }),
  serviceSegments_fLastuser: many(serviceSegments, {
    relationName: "serviceSegments_fLastuser_users_fId",
  }),
  systemLogins: many(systemLogin),
  stopwatchHistories_fLastuser: many(stopwatchHistories, {
    relationName: "stopwatchHistories_fLastuser_users_fId",
  }),
  stopwatchHistories_fUser: many(stopwatchHistories, {
    relationName: "stopwatchHistories_fUser_users_fId",
  }),
  systemaccessusers: many(systemaccessusers),
  systemTabsUsersViewings_fUser: many(systemTabsUsersViewing, {
    relationName: "systemTabsUsersViewing_fUser_users_fId",
  }),
  systemTabsUsersViewings_fView: many(systemTabsUsersViewing, {
    relationName: "systemTabsUsersViewing_fView_users_fId",
  }),
  userclientAppointmenttypes: many(userclientAppointmenttypes),
  termPublications_fLastuser: many(termPublication, {
    relationName: "termPublication_fLastuser_users_fId",
  }),
  termPublications_fCreateUser: many(termPublication, {
    relationName: "termPublication_fCreateUser_users_fId",
  }),
  userAccessCourts_fCreateUser: many(userAccessCourt, {
    relationName: "userAccessCourt_fCreateUser_users_fId",
  }),
  systemTabsUsers: many(systemTabsUsers),
  userclientServices: many(userclientService),
  userSettings: many(userSettings),
  appointments: many(appointments),
  documents: many(documents),
  hearings: many(hearings),
  clientsCustomfields: many(clientsCustomfields),
  level: one(levels, {
    fields: [users.fLevels],
    references: [levels.fId],
  }),
  office: one(offices, {
    fields: [users.fOffice],
    references: [offices.fId],
  }),
  consultationandadvices_fCloseUser: many(consultationandadvice, {
    relationName: "consultationandadvice_fCloseUser_users_fId",
  }),
  consultationandadvices_fResponsible: many(consultationandadvice, {
    relationName: "consultationandadvice_fResponsible_users_fId",
  }),
  consultationandadvices_fUserins: many(consultationandadvice, {
    relationName: "consultationandadvice_fUserins_users_fId",
  }),
  coordinatorsUsers: many(coordinatorsUsers),
  processStopwatches: many(processStopwatch),
  nonconformings: many(nonconformings),
  systemProfilesUsers: many(systemProfilesUsers),
  requestSchedulings: many(requestScheduling),
  areasmanagers: many(areasmanagers),
  controlnotelawyers: many(controlnotelawyers),
  officesmanagers: many(officesmanagers),
  agreementusersareas: many(agreementusersareas),
  controluserslawyers: many(controluserslawyers),
  financialprovides: many(financialprovides),
  servicesCustomfieldsdatas_fCreateUser: many(servicesCustomfieldsdatas, {
    relationName: "servicesCustomfieldsdatas_fCreateUser_users_fId",
  }),
  servicesCustomfieldsdatas_fLastuser: many(servicesCustomfieldsdatas, {
    relationName: "servicesCustomfieldsdatas_fLastuser_users_fId",
  }),
}))

export const segmentsRelations = relations(segments, ({ many }) => ({
  processes: many(process),
}))

export const groupclientsRelations = relations(groupclients, ({ many }) => ({
  processes: many(process),
  activityTypesopinionscombos: many(activityTypesopinionscombo),
  appointmenttypescombos: many(appointmenttypescombos),
  appointmenttypeshearingcombos: many(appointmenttypeshearingcombos),
  clientspecifics: many(clientspecifics),
  groupClientRels: many(groupClientRel),
  clientsCustomfields: many(clientsCustomfields),
  servicesCustomfields: many(servicesCustomfields),
}))

export const statesRelations = relations(states, ({ many }) => ({
  processes: many(process),
  appointmenttypescombos: many(appointmenttypescombos),
  appointmenttypeshearingcombos: many(appointmenttypeshearingcombos),
  checklistProceedingtypes: many(checklistProceedingtype),
  checklistformals: many(checklistformal),
  clients: many(clients),
  districts: many(districts),
  holidays: many(holidays),
  offices: many(offices),
  profilesclients: many(profilesclients),
  termPublications: many(termPublication),
  termPublicationStates: many(termPublicationStates),
}))

export const closereasonsRelations = relations(closereasons, ({ many }) => ({
  processes: many(process),
  consultationandadvices: many(consultationandadvice),
}))

export const clientsRelations = relations(clients, ({ one, many }) => ({
  processes: many(process),
  activityTypesopinionscombos: many(activityTypesopinionscombo),
  actionobjects: many(actionobjects),
  aiDocumentGenerators: many(aiDocumentGenerator),
  agreementclients: many(agreementclient),
  appointmenttypescombos: many(appointmenttypescombos),
  appointmenttypeshearingcombos: many(appointmenttypeshearingcombos),
  appointmentstypeRelClients: many(appointmentstypeRelClients),
  businessunities: many(businessunities),
  checklistformalCampos: many(checklistformalCampos),
  checklistmeritoCampos: many(checklistmeritoCampos),
  clientdocuments: many(clientdocuments),
  clientsCustomfieldsdatas: many(clientsCustomfieldsdatas),
  clientannotations: many(clientannotations),
  clientspecifics: many(clientspecifics),
  state: one(states, {
    fields: [clients.fState],
    references: [states.fId],
  }),
  departmentsoverallstats: many(departmentsoverallstats),
  groupClientRels: many(groupClientRel),
  observationshistories: many(observationshistory),
  profilesclients: many(profilesclients),
  queryreportsclients: many(queryreportsclients),
  queryreports: many(queryreports),
  userclientServices: many(userclientService),
  clientsCustomfields: many(clientsCustomfields),
  servicesCustomfields: many(servicesCustomfields),
  consultationandadvices: many(consultationandadvice),
  dynamicItems: many(dynamicItems),
  publicationsRelationships: many(publicationsRelationship),
  departmentsstats: many(departmentsstats),
}))

export const originRelations = relations(origin, ({ many }) => ({
  processes: many(process),
}))

export const businessunitiesRelations = relations(
  businessunities,
  ({ one, many }) => ({
    processes: many(process),
    client: one(clients, {
      fields: [businessunities.fClient],
      references: [clients.fId],
    }),
  }),
)

export const businessdepartmentsRelations = relations(
  businessdepartments,
  ({ many }) => ({
    processes: many(process),
  }),
)

export const positionsRelations = relations(positions, ({ many }) => ({
  processes: many(process),
  processparticipants: many(processparticipants),
  queryreports: many(queryreports),
  consultationandadvices: many(consultationandadvice),
}))

export const officesRelations = relations(offices, ({ one, many }) => ({
  processes: many(process),
  lawyersexternals: many(lawyersexternal),
  state: one(states, {
    fields: [offices.fState],
    references: [states.fId],
  }),
  users: many(users),
  officesmanagers: many(officesmanagers),
  officesstats: many(officesstats),
}))

export const lawyersexternalRelations = relations(
  lawyersexternal,
  ({ one, many }) => ({
    processes: many(process),
    office: one(offices, {
      fields: [lawyersexternal.fOffice],
      references: [offices.fId],
    }),
  }),
)

export const districtsRelations = relations(districts, ({ one, many }) => ({
  processes: many(process),
  addressforumdistricts: many(addressforumdistrict),
  state: one(states, {
    fields: [districts.fState],
    references: [states.fId],
  }),
  forumDistricts: many(forumDistricts),
  holidays: many(holidays),
  hearings: many(hearings),
}))

export const registriesRelations = relations(registries, ({ many }) => ({
  processes: many(process),
  hearings: many(hearings),
  appeals: many(appeals),
}))

export const lawyersRelations = relations(lawyers, ({ one, many }) => ({
  processes: many(process),
  histories: many(histories),
  lawyerfields: many(lawyerfields),
  user_fUser: one(users, {
    fields: [lawyers.fUser],
    references: [users.fId],
    relationName: "lawyers_fUser_users_fId",
  }),
  user_fTrainee: one(users, {
    fields: [lawyers.fTrainee],
    references: [users.fId],
    relationName: "lawyers_fTrainee_users_fId",
  }),
  lawyerstats: many(lawyerstats),
  liberations: many(liberations),
  perfilProcessDados: many(perfilProcessDados),
  reschedulingHistories: many(reschedulingHistories),
  userAccessCourts_fLawyer: many(userAccessCourt, {
    relationName: "userAccessCourt_fLawyer_lawyers_fId",
  }),
  appointments: many(appointments),
  hearings: many(hearings),
  nonconformings: many(nonconformings),
  publicationsRelationships: many(publicationsRelationship),
  controlnotelawyers: many(controlnotelawyers),
  controluserslawyers: many(controluserslawyers),
}))

export const areasRelations = relations(areas, ({ many }) => ({
  processes: many(process),
  actionobjects: many(actionobjects),
  actiontypes: many(actiontypes),
  appointmenttypes: many(appointmenttypes),
  appointmenttypescombos: many(appointmenttypescombos),
  appointmenttypeshearingcombos: many(appointmenttypeshearingcombos),
  areaagreementspecifics: many(areaagreementspecifics),
  checklistmeritoCampos: many(checklistmeritoCampos),
  clientspecifics: many(clientspecifics),
  proceedingtypes: many(proceedingtypes),
  queryreports: many(queryreports),
  areasmanagers: many(areasmanagers),
  agreementusersareas: many(agreementusersareas),
  officesstats: many(officesstats),
  departmentsstats: many(departmentsstats),
}))

export const actiontypesRelations = relations(actiontypes, ({ one, many }) => ({
  processes: many(process),
  actionobjects: many(actionobjects),
  area: one(areas, {
    fields: [actiontypes.fArea],
    references: [areas.fId],
  }),
  lawyerfields: many(lawyerfields),
}))

export const phasesRelations = relations(phases, ({ many }) => ({
  processes: many(process),
  histories: many(histories),
}))

export const accompanimentcontrolhistoryRelations = relations(
  accompanimentcontrolhistory,
  ({ one }) => ({
    history: one(histories, {
      fields: [accompanimentcontrolhistory.fHistory],
      references: [histories.fId],
    }),
    user: one(users, {
      fields: [accompanimentcontrolhistory.fUser],
      references: [users.fId],
    }),
  }),
)

export const historiesRelations = relations(histories, ({ one, many }) => ({
  accompanimentcontrolhistories: many(accompanimentcontrolhistory),
  user_fCreateUser: one(users, {
    fields: [histories.fCreateUser],
    references: [users.fId],
    relationName: "histories_fCreateUser_users_fId",
  }),
  user_fLastuser: one(users, {
    fields: [histories.fLastuser],
    references: [users.fId],
    relationName: "histories_fLastuser_users_fId",
  }),
  proceedingtype: one(proceedingtypes, {
    fields: [histories.fType],
    references: [proceedingtypes.fId],
  }),
  document: one(documents, {
    fields: [histories.fProtocolDocument],
    references: [documents.fId],
  }),
  process: one(process, {
    fields: [histories.fProcess],
    references: [process.fId],
  }),
  lawyer: one(lawyers, {
    fields: [histories.fLawyer],
    references: [lawyers.fId],
  }),
  phase: one(phases, {
    fields: [histories.fPhase],
    references: [phases.fId],
  }),
  historytimesheets: many(historytimesheets),
  nonconformings: many(nonconformings),
}))

export const activityTypesopinionscomboRelations = relations(
  activityTypesopinionscombo,
  ({ one, many }) => ({
    perfilConsultation: one(perfilConsultation, {
      fields: [activityTypesopinionscombo.fArea],
      references: [perfilConsultation.fId],
    }),
    client: one(clients, {
      fields: [activityTypesopinionscombo.fClient],
      references: [clients.fId],
    }),
    user_fCreateUser: one(users, {
      fields: [activityTypesopinionscombo.fCreateUser],
      references: [users.fId],
      relationName: "activityTypesopinionscombo_fCreateUser_users_fId",
    }),
    groupclient: one(groupclients, {
      fields: [activityTypesopinionscombo.fGroup],
      references: [groupclients.fId],
    }),
    user_fLastuser: one(users, {
      fields: [activityTypesopinionscombo.fLastuser],
      references: [users.fId],
      relationName: "activityTypesopinionscombo_fLastuser_users_fId",
    }),
    activityTypesopinionscombodata_fActivityTypesopinionscombo: many(
      activityTypesopinionscombodata,
      {
        relationName:
          "activityTypesopinionscombodata_fActivityTypesopinionscombo_activityTypesopinionscombo_fId",
      },
    ),
  }),
)

export const perfilConsultationRelations = relations(
  perfilConsultation,
  ({ many }) => ({
    activityTypesopinionscombos: many(activityTypesopinionscombo),
    perfilConsultationDados: many(perfilConsultationDados),
    servicesCustomfields: many(servicesCustomfields),
    consultationandadvices: many(consultationandadvice),
  }),
)

export const activityTypesopinionscombodataRelations = relations(
  activityTypesopinionscombodata,
  ({ one }) => ({
    activityTypesopinionscombo_fActivityTypesopinionscombo: one(
      activityTypesopinionscombo,
      {
        fields: [activityTypesopinionscombodata.fActivityTypesopinionscombo],
        references: [activityTypesopinionscombo.fId],
        relationName:
          "activityTypesopinionscombodata_fActivityTypesopinionscombo_activityTypesopinionscombo_fId",
      },
    ),
    typesopinion: one(typesopinions, {
      fields: [activityTypesopinionscombodata.fTypesopinions],
      references: [typesopinions.fId],
    }),
  }),
)

export const typesopinionsRelations = relations(typesopinions, ({ many }) => ({
  activityTypesopinionscombodata: many(activityTypesopinionscombodata),
  serviceHistories: many(serviceHistories),
  serviceactivities: many(serviceactivities),
  stopwatchHistories_fTypetask: many(stopwatchHistories, {
    relationName: "stopwatchHistories_fTypetask_typesopinions_fId",
  }),
}))

export const actionobjectsRelations = relations(
  actionobjects,
  ({ one, many }) => ({
    area: one(areas, {
      fields: [actionobjects.fArea],
      references: [areas.fId],
    }),
    client: one(clients, {
      fields: [actionobjects.fClient],
      references: [clients.fId],
    }),
    actiontype: one(actiontypes, {
      fields: [actionobjects.fActiontype],
      references: [actiontypes.fId],
    }),
    processactionobjects: many(processactionobjects),
  }),
)

export const accompanimentcontrolappointmentRelations = relations(
  accompanimentcontrolappointment,
  ({ one }) => ({
    appointment: one(appointments, {
      fields: [accompanimentcontrolappointment.fAppointment],
      references: [appointments.fId],
    }),
    user: one(users, {
      fields: [accompanimentcontrolappointment.fUser],
      references: [users.fId],
    }),
  }),
)

export const appointmentsRelations = relations(
  appointments,
  ({ one, many }) => ({
    accompanimentcontrolappointments: many(accompanimentcontrolappointment),
    appointmentcomments: many(appointmentcomments),
    appointmenttimesheets: many(appointmenttimesheets),
    shippingType: one(shippingTypes, {
      fields: [appointments.fShippingType],
      references: [shippingTypes.fId],
    }),
    user: one(users, {
      fields: [appointments.fLastuser],
      references: [users.fId],
    }),
    document: one(documents, {
      fields: [appointments.fProtocolDocument],
      references: [documents.fId],
    }),
    process: one(process, {
      fields: [appointments.fProcess],
      references: [process.fId],
    }),
    appointmenttype: one(appointmenttypes, {
      fields: [appointments.fType],
      references: [appointmenttypes.fId],
    }),
    proceedingtype: one(proceedingtypes, {
      fields: [appointments.fProceedingtype],
      references: [proceedingtypes.fId],
    }),
    intimation: one(intimations, {
      fields: [appointments.fIntimation],
      references: [intimations.fId],
    }),
    hearing: one(hearings, {
      fields: [appointments.fHearing],
      references: [hearings.fId],
    }),
    lawyer: one(lawyers, {
      fields: [appointments.fLawyer],
      references: [lawyers.fId],
    }),
    processStopwatches: many(processStopwatch),
    nonconformings: many(nonconformings),
  }),
)

export const addressforumdistrictRelations = relations(
  addressforumdistrict,
  ({ one }) => ({
    district: one(districts, {
      fields: [addressforumdistrict.fDistrict],
      references: [districts.fId],
    }),
  }),
)

export const aiCalculationRelations = relations(aiCalculation, ({ one }) => ({
  user_fCreateUser: one(users, {
    fields: [aiCalculation.fCreateUser],
    references: [users.fId],
    relationName: "aiCalculation_fCreateUser_users_fId",
  }),
  document_fDocumentOrigem: one(documents, {
    fields: [aiCalculation.fDocumentOrigem],
    references: [documents.fId],
    relationName: "aiCalculation_fDocumentOrigem_documents_fId",
  }),
  document_fDocumentResult: one(documents, {
    fields: [aiCalculation.fDocumentResult],
    references: [documents.fId],
    relationName: "aiCalculation_fDocumentResult_documents_fId",
  }),
  user_fLastuser: one(users, {
    fields: [aiCalculation.fLastuser],
    references: [users.fId],
    relationName: "aiCalculation_fLastuser_users_fId",
  }),
  process: one(process, {
    fields: [aiCalculation.fProcess],
    references: [process.fId],
  }),
}))

export const documentsRelations = relations(documents, ({ one, many }) => ({
  aiCalculations_fDocumentOrigem: many(aiCalculation, {
    relationName: "aiCalculation_fDocumentOrigem_documents_fId",
  }),
  aiCalculations_fDocumentResult: many(aiCalculation, {
    relationName: "aiCalculation_fDocumentResult_documents_fId",
  }),
  diligencesGuides: many(diligencesGuide),
  documentFiles: many(documentFiles),
  histories: many(histories),
  appointments: many(appointments),
  user: one(users, {
    fields: [documents.fLastuser],
    references: [users.fId],
  }),
  process: one(process, {
    fields: [documents.fProcess],
    references: [process.fId],
  }),
}))

export const aiPredictiveRelations = relations(aiPredictive, ({ one }) => ({
  user_fCreateUser: one(users, {
    fields: [aiPredictive.fCreateUser],
    references: [users.fId],
    relationName: "aiPredictive_fCreateUser_users_fId",
  }),
  user_fLastuser: one(users, {
    fields: [aiPredictive.fLastuser],
    references: [users.fId],
    relationName: "aiPredictive_fLastuser_users_fId",
  }),
  process: one(process, {
    fields: [aiPredictive.fProcess],
    references: [process.fId],
  }),
}))

export const agreementuserstatsRelations = relations(
  agreementuserstats,
  ({ one }) => ({
    user: one(users, {
      fields: [agreementuserstats.fUser],
      references: [users.fId],
    }),
  }),
)

export const aiDocumentGeneratorRelations = relations(
  aiDocumentGenerator,
  ({ one }) => ({
    client: one(clients, {
      fields: [aiDocumentGenerator.fClient],
      references: [clients.fId],
    }),
    dbpartsName: one(dbpartsNames, {
      fields: [aiDocumentGenerator.fPiece],
      references: [dbpartsNames.fId],
    }),
    process: one(process, {
      fields: [aiDocumentGenerator.fProcess],
      references: [process.fId],
    }),
    consultationandadvice: one(consultationandadvice, {
      fields: [aiDocumentGenerator.fService],
      references: [consultationandadvice.fId],
    }),
    user: one(users, {
      fields: [aiDocumentGenerator.fUser],
      references: [users.fId],
    }),
  }),
)

export const dbpartsNamesRelations = relations(dbpartsNames, ({ many }) => ({
  aiDocumentGenerators: many(aiDocumentGenerator),
  queryreportsSchedules: many(queryreportsSchedule),
}))

export const consultationandadviceRelations = relations(
  consultationandadvice,
  ({ one, many }) => ({
    aiDocumentGenerators: many(aiDocumentGenerator),
    financialreceipts: many(financialreceipts),
    serviceHistories: many(serviceHistories),
    servicedocuments: many(servicedocuments),
    servicelinkeds_fService: many(servicelinked, {
      relationName: "servicelinked_fService_consultationandadvice_fId",
    }),
    servicelinkeds_fServicelinked: many(servicelinked, {
      relationName: "servicelinked_fServicelinked_consultationandadvice_fId",
    }),
    serviceactivities: many(serviceactivities),
    servicesprocesses: many(servicesprocess),
    servicesLogs: many(servicesLog),
    client: one(clients, {
      fields: [consultationandadvice.fClient],
      references: [clients.fId],
    }),
    closereason: one(closereasons, {
      fields: [consultationandadvice.fClosereason],
      references: [closereasons.fId],
    }),
    user_fCloseUser: one(users, {
      fields: [consultationandadvice.fCloseUser],
      references: [users.fId],
      relationName: "consultationandadvice_fCloseUser_users_fId",
    }),
    serviceSegment: one(serviceSegments, {
      fields: [consultationandadvice.fSegment],
      references: [serviceSegments.fId],
    }),
    servicesubject: one(servicesubjects, {
      fields: [consultationandadvice.fSubjectId],
      references: [servicesubjects.fId],
    }),
    user_fResponsible: one(users, {
      fields: [consultationandadvice.fResponsible],
      references: [users.fId],
      relationName: "consultationandadvice_fResponsible_users_fId",
    }),
    position: one(positions, {
      fields: [consultationandadvice.fClientPosition],
      references: [positions.fId],
    }),
    perfilConsultation: one(perfilConsultation, {
      fields: [consultationandadvice.fAreaId],
      references: [perfilConsultation.fId],
    }),
    subarea: one(subareas, {
      fields: [consultationandadvice.fSubareaId],
      references: [subareas.fId],
    }),
    user_fUserins: one(users, {
      fields: [consultationandadvice.fUserins],
      references: [users.fId],
      relationName: "consultationandadvice_fUserins_users_fId",
    }),
    servicesCustomfieldsdatas: many(servicesCustomfieldsdatas),
  }),
)

export const appcommentnotifysRelations = relations(
  appcommentnotifys,
  ({ one }) => ({
    appointmentcomment: one(appointmentcomments, {
      fields: [appcommentnotifys.fAppointmentcomments],
      references: [appointmentcomments.fId],
    }),
  }),
)

export const appointmentcommentsRelations = relations(
  appointmentcomments,
  ({ one, many }) => ({
    appcommentnotifys: many(appcommentnotifys),
    appointment: one(appointments, {
      fields: [appointmentcomments.fAppointment],
      references: [appointments.fId],
    }),
    user: one(users, {
      fields: [appointmentcomments.fUser],
      references: [users.fId],
    }),
  }),
)

export const agreementclientRelations = relations(
  agreementclient,
  ({ one }) => ({
    client: one(clients, {
      fields: [agreementclient.fClient],
      references: [clients.fId],
    }),
  }),
)

export const agreementsRelations = relations(agreements, ({ one, many }) => ({
  proceedingtype: one(proceedingtypes, {
    fields: [agreements.fProceedingtype],
    references: [proceedingtypes.fId],
  }),
  process: one(process, {
    fields: [agreements.fProcess],
    references: [process.fId],
  }),
  user: one(users, {
    fields: [agreements.fUser],
    references: [users.fId],
  }),
  appointmentsagreements: many(appointmentsagreement),
  agreementsparts: many(agreementspart),
  areaagreementspecificdatas: many(areaagreementspecificdatas),
}))

export const proceedingtypesRelations = relations(
  proceedingtypes,
  ({ one, many }) => ({
    agreements: many(agreements),
    histories: many(histories),
    area: one(areas, {
      fields: [proceedingtypes.fArea],
      references: [areas.fId],
    }),
    appointments: many(appointments),
    hearings: many(hearings),
    processStopwatches: many(processStopwatch),
  }),
)

export const agreementuseragendaRelations = relations(
  agreementuseragenda,
  ({ one }) => ({
    user: one(users, {
      fields: [agreementuseragenda.fLastuser],
      references: [users.fId],
    }),
    process: one(process, {
      fields: [agreementuseragenda.fProcess],
      references: [process.fId],
    }),
  }),
)

export const appointmentsagreementRelations = relations(
  appointmentsagreement,
  ({ one }) => ({
    agreement: one(agreements, {
      fields: [appointmentsagreement.fAgreement],
      references: [agreements.fId],
    }),
  }),
)

export const appointmenttypesRelations = relations(
  appointmenttypes,
  ({ one, many }) => ({
    area: one(areas, {
      fields: [appointmenttypes.fArea],
      references: [areas.fId],
    }),
    appointmentstypeRelClients: many(appointmentstypeRelClients),
    appointmenttypeshearingcombosdata: many(appointmenttypeshearingcombosdata),
    appointmenttypeRelJusticetypes: many(appointmenttypeRelJusticetype),
    userclientAppointmenttypes: many(userclientAppointmenttypes),
    appointments: many(appointments),
    appointmenttypescombosdata: many(appointmenttypescombosdata),
  }),
)

export const appointmenttypescombosRelations = relations(
  appointmenttypescombos,
  ({ one, many }) => ({
    groupclient: one(groupclients, {
      fields: [appointmenttypescombos.fClientGroup],
      references: [groupclients.fId],
    }),
    area: one(areas, {
      fields: [appointmenttypescombos.fArea],
      references: [areas.fId],
    }),
    justicetype: one(justicetype, {
      fields: [appointmenttypescombos.fJusticetype],
      references: [justicetype.fId],
    }),
    intimationtype: one(intimationtypes, {
      fields: [appointmenttypescombos.fIntimationtype],
      references: [intimationtypes.fId],
    }),
    state: one(states, {
      fields: [appointmenttypescombos.fState],
      references: [states.fId],
    }),
    client: one(clients, {
      fields: [appointmenttypescombos.fClient],
      references: [clients.fId],
    }),
    publicationsWarning: one(publicationsWarning, {
      fields: [appointmenttypescombos.fWarning],
      references: [publicationsWarning.fId],
    }),
    appointmenttypescombosdata: many(appointmenttypescombosdata),
  }),
)

export const justicetypeRelations = relations(justicetype, ({ many }) => ({
  appointmenttypescombos: many(appointmenttypescombos),
  appointmenttypeRelJusticetypes: many(appointmenttypeRelJusticetype),
}))

export const intimationtypesRelations = relations(
  intimationtypes,
  ({ many }) => ({
    appointmenttypescombos: many(appointmenttypescombos),
    intimations: many(intimations),
  }),
)

export const publicationsWarningRelations = relations(
  publicationsWarning,
  ({ many }) => ({
    appointmenttypescombos: many(appointmenttypescombos),
  }),
)

export const appointmenttypeshearingcombosRelations = relations(
  appointmenttypeshearingcombos,
  ({ one, many }) => ({
    client: one(clients, {
      fields: [appointmenttypeshearingcombos.fClient],
      references: [clients.fId],
    }),
    area: one(areas, {
      fields: [appointmenttypeshearingcombos.fArea],
      references: [areas.fId],
    }),
    hearingtype: one(hearingtypes, {
      fields: [appointmenttypeshearingcombos.fHearingtype],
      references: [hearingtypes.fId],
    }),
    groupclient: one(groupclients, {
      fields: [appointmenttypeshearingcombos.fClientGroup],
      references: [groupclients.fId],
    }),
    state: one(states, {
      fields: [appointmenttypeshearingcombos.fState],
      references: [states.fId],
    }),
    appointmenttypeshearingcombosdata: many(appointmenttypeshearingcombosdata),
  }),
)

export const hearingtypesRelations = relations(hearingtypes, ({ many }) => ({
  appointmenttypeshearingcombos: many(appointmenttypeshearingcombos),
  hearings: many(hearings),
}))

export const appointmentstypeRelClientsRelations = relations(
  appointmentstypeRelClients,
  ({ one }) => ({
    appointmenttype: one(appointmenttypes, {
      fields: [appointmentstypeRelClients.fAppointmenttype],
      references: [appointmenttypes.fId],
    }),
    client: one(clients, {
      fields: [appointmentstypeRelClients.fClient],
      references: [clients.fId],
    }),
  }),
)

export const appointmenttypeshearingcombosdataRelations = relations(
  appointmenttypeshearingcombosdata,
  ({ one }) => ({
    appointmenttypeshearingcombo: one(appointmenttypeshearingcombos, {
      fields: [appointmenttypeshearingcombosdata.fHearingcombo],
      references: [appointmenttypeshearingcombos.fId],
    }),
    appointmenttype: one(appointmenttypes, {
      fields: [appointmenttypeshearingcombosdata.fAppointmenttype],
      references: [appointmenttypes.fId],
    }),
  }),
)

export const appointmenttypeRelJusticetypeRelations = relations(
  appointmenttypeRelJusticetype,
  ({ one }) => ({
    appointmenttype: one(appointmenttypes, {
      fields: [appointmenttypeRelJusticetype.fAppointmenttype],
      references: [appointmenttypes.fId],
    }),
    justicetype: one(justicetype, {
      fields: [appointmenttypeRelJusticetype.fJusticetype],
      references: [justicetype.fId],
    }),
  }),
)

export const appointmenttimesheetsRelations = relations(
  appointmenttimesheets,
  ({ one }) => ({
    timesheettype: one(timesheettypes, {
      fields: [appointmenttimesheets.fType],
      references: [timesheettypes.fId],
    }),
    appointment: one(appointments, {
      fields: [appointmenttimesheets.fAppointment],
      references: [appointments.fId],
    }),
  }),
)

export const timesheettypesRelations = relations(
  timesheettypes,
  ({ many }) => ({
    appointmenttimesheets: many(appointmenttimesheets),
    historytimesheets: many(historytimesheets),
    hearingstimesheets: many(hearingstimesheets),
  }),
)

export const archiveaccessusersRelations = relations(
  archiveaccessusers,
  ({ one }) => ({
    user: one(users, {
      fields: [archiveaccessusers.fUser],
      references: [users.fId],
    }),
  }),
)

export const caldavEventRelations = relations(caldavEvent, ({ one, many }) => ({
  caldavRecurrence: one(caldavRecurrence, {
    fields: [caldavEvent.fRecurrenceId],
    references: [caldavRecurrence.fId],
  }),
  user_fOrganizer: one(users, {
    fields: [caldavEvent.fOrganizer],
    references: [users.fId],
    relationName: "caldavEvent_fOrganizer_users_fId",
  }),
  user_fOwner: one(users, {
    fields: [caldavEvent.fOwner],
    references: [users.fId],
    relationName: "caldavEvent_fOwner_users_fId",
  }),
  caldavParentEventInvites_fEvent: many(caldavParentEventInvite, {
    relationName: "caldavParentEventInvite_fEvent_caldavEvent_fUuid",
  }),
  caldavParentEventInvites_fParentEvent: many(caldavParentEventInvite, {
    relationName: "caldavParentEventInvite_fParentEvent_caldavEvent_fUuid",
  }),
  caldavEventParticipants: many(caldavEventParticipant),
}))

export const caldavRecurrenceRelations = relations(
  caldavRecurrence,
  ({ many }) => ({
    caldavEvents: many(caldavEvent),
  }),
)

export const caldavEventInviteRelations = relations(
  caldavEventInvite,
  ({ one, many }) => ({
    caldavEventParticipant: one(caldavEventParticipant, {
      fields: [caldavEventInvite.fParticipant],
      references: [caldavEventParticipant.fId],
    }),
    caldavParentEventInvites: many(caldavParentEventInvite),
  }),
)

export const caldavEventParticipantRelations = relations(
  caldavEventParticipant,
  ({ one, many }) => ({
    caldavEventInvites: many(caldavEventInvite),
    caldavEvent: one(caldavEvent, {
      fields: [caldavEventParticipant.fEvent],
      references: [caldavEvent.fUuid],
    }),
    user: one(users, {
      fields: [caldavEventParticipant.fUser],
      references: [users.fId],
    }),
    caldavParticipantInviteNotifications: many(
      caldavParticipantInviteNotification,
    ),
  }),
)

export const archiveregistriesRelations = relations(
  archiveregistries,
  ({ one }) => ({
    user_fUser: one(users, {
      fields: [archiveregistries.fUser],
      references: [users.fId],
      relationName: "archiveregistries_fUser_users_fId",
    }),
    user_fAuthor: one(users, {
      fields: [archiveregistries.fAuthor],
      references: [users.fId],
      relationName: "archiveregistries_fAuthor_users_fId",
    }),
    process: one(process, {
      fields: [archiveregistries.fProcess],
      references: [process.fId],
    }),
  }),
)

export const areaagreementspecificsRelations = relations(
  areaagreementspecifics,
  ({ one, many }) => ({
    area: one(areas, {
      fields: [areaagreementspecifics.fArea],
      references: [areas.fId],
    }),
    areaagreementspecificdatas: many(areaagreementspecificdatas),
  }),
)

export const checklistProceedingtypeRelations = relations(
  checklistProceedingtype,
  ({ one }) => ({
    state: one(states, {
      fields: [checklistProceedingtype.fState],
      references: [states.fId],
    }),
  }),
)

export const caldavUserRelations = relations(caldavUser, ({ one }) => ({
  user: one(users, {
    fields: [caldavUser.fUser],
    references: [users.fId],
  }),
}))

export const caldavParentEventInviteRelations = relations(
  caldavParentEventInvite,
  ({ one }) => ({
    caldavEvent_fEvent: one(caldavEvent, {
      fields: [caldavParentEventInvite.fEvent],
      references: [caldavEvent.fUuid],
      relationName: "caldavParentEventInvite_fEvent_caldavEvent_fUuid",
    }),
    caldavEventInvite: one(caldavEventInvite, {
      fields: [caldavParentEventInvite.fInvite],
      references: [caldavEventInvite.fId],
    }),
    caldavEvent_fParentEvent: one(caldavEvent, {
      fields: [caldavParentEventInvite.fParentEvent],
      references: [caldavEvent.fUuid],
      relationName: "caldavParentEventInvite_fParentEvent_caldavEvent_fUuid",
    }),
  }),
)

export const caldavParticipantInviteNotificationRelations = relations(
  caldavParticipantInviteNotification,
  ({ one }) => ({
    caldavEventParticipant: one(caldavEventParticipant, {
      fields: [caldavParticipantInviteNotification.fParticipant],
      references: [caldavEventParticipant.fId],
    }),
  }),
)

export const checklistformalCamposRelations = relations(
  checklistformalCampos,
  ({ one }) => ({
    client: one(clients, {
      fields: [checklistformalCampos.fClient],
      references: [clients.fId],
    }),
    checklistformal: one(checklistformal, {
      fields: [checklistformalCampos.fIdchecklist],
      references: [checklistformal.fId],
    }),
  }),
)

export const checklistformalRelations = relations(
  checklistformal,
  ({ one, many }) => ({
    checklistformalCampos: many(checklistformalCampos),
    state: one(states, {
      fields: [checklistformal.fState],
      references: [states.fId],
    }),
  }),
)

export const checklistmeritoValuesRelations = relations(
  checklistmeritoValues,
  ({ one }) => ({
    checklistmeritoCampo: one(checklistmeritoCampos, {
      fields: [checklistmeritoValues.fCampochecklist],
      references: [checklistmeritoCampos.fId],
    }),
    checklistSave: one(checklistSave, {
      fields: [checklistmeritoValues.fChecklistSave],
      references: [checklistSave.fId],
    }),
  }),
)

export const checklistmeritoCamposRelations = relations(
  checklistmeritoCampos,
  ({ one, many }) => ({
    checklistmeritoValues: many(checklistmeritoValues),
    client: one(clients, {
      fields: [checklistmeritoCampos.fClient],
      references: [clients.fId],
    }),
    area: one(areas, {
      fields: [checklistmeritoCampos.fArea],
      references: [areas.fId],
    }),
    checklistmerito: one(checklistmerito, {
      fields: [checklistmeritoCampos.fIdchecklist],
      references: [checklistmerito.fId],
    }),
  }),
)

export const checklistSaveRelations = relations(checklistSave, ({ many }) => ({
  checklistmeritoValues: many(checklistmeritoValues),
}))

export const checklistmeritoRelations = relations(
  checklistmerito,
  ({ many }) => ({
    checklistmeritoCampos: many(checklistmeritoCampos),
  }),
)

export const clientdocumentsRelations = relations(
  clientdocuments,
  ({ one, many }) => ({
    client: one(clients, {
      fields: [clientdocuments.fClient],
      references: [clients.fId],
    }),
    clientdocumentFiles: many(clientdocumentFiles),
  }),
)

export const clientsCustomfieldsdatasRelations = relations(
  clientsCustomfieldsdatas,
  ({ one }) => ({
    client: one(clients, {
      fields: [clientsCustomfieldsdatas.fClient],
      references: [clients.fId],
    }),
    clientsCustomfield: one(clientsCustomfields, {
      fields: [clientsCustomfieldsdatas.fClientscustomfields],
      references: [clientsCustomfields.fId],
    }),
    user: one(users, {
      fields: [clientsCustomfieldsdatas.fLastuser],
      references: [users.fId],
    }),
  }),
)

export const clientsCustomfieldsRelations = relations(
  clientsCustomfields,
  ({ one, many }) => ({
    clientsCustomfieldsdatas: many(clientsCustomfieldsdatas),
    client: one(clients, {
      fields: [clientsCustomfields.fClient],
      references: [clients.fId],
    }),
    groupclient: one(groupclients, {
      fields: [clientsCustomfields.fGroup],
      references: [groupclients.fId],
    }),
    user: one(users, {
      fields: [clientsCustomfields.fLastuser],
      references: [users.fId],
    }),
  }),
)

export const clientannotationsRelations = relations(
  clientannotations,
  ({ one }) => ({
    client: one(clients, {
      fields: [clientannotations.fClient],
      references: [clients.fId],
    }),
    user: one(users, {
      fields: [clientannotations.fUsercreate],
      references: [users.fId],
    }),
  }),
)

export const clientspecificsRelations = relations(
  clientspecifics,
  ({ one, many }) => ({
    subarea: one(subareas, {
      fields: [clientspecifics.fSubarea],
      references: [subareas.fId],
    }),
    groupclient: one(groupclients, {
      fields: [clientspecifics.fGroup],
      references: [groupclients.fId],
    }),
    client: one(clients, {
      fields: [clientspecifics.fClient],
      references: [clients.fId],
    }),
    area: one(areas, {
      fields: [clientspecifics.fArea],
      references: [areas.fId],
    }),
    clientspecificdatas: many(clientspecificdatas),
  }),
)

export const subareasRelations = relations(subareas, ({ many }) => ({
  clientspecifics: many(clientspecifics),
  servicesCustomfields: many(servicesCustomfields),
  consultationandadvices: many(consultationandadvice),
}))

export const controldiligencelawyersRelations = relations(
  controldiligencelawyers,
  ({ one }) => ({
    user: one(users, {
      fields: [controldiligencelawyers.fUser],
      references: [users.fId],
    }),
  }),
)

export const controlfinancialRelations = relations(
  controlfinancial,
  ({ one }) => ({
    user: one(users, {
      fields: [controlfinancial.fUser],
      references: [users.fId],
    }),
  }),
)

export const controlfinancialRegrasRelations = relations(
  controlfinancialRegras,
  ({ one }) => ({
    user: one(users, {
      fields: [controlfinancialRegras.fUser],
      references: [users.fId],
    }),
  }),
)

export const controlspecialmonitoringlawyersRelations = relations(
  controlspecialmonitoringlawyers,
  ({ one }) => ({
    user: one(users, {
      fields: [controlspecialmonitoringlawyers.fUser],
      references: [users.fId],
    }),
  }),
)

export const coordinatorsRelations = relations(
  coordinators,
  ({ one, many }) => ({
    user: one(users, {
      fields: [coordinators.fUser],
      references: [users.fId],
    }),
    coordinatorsUsers: many(coordinatorsUsers),
  }),
)

export const departmentsoverallstatsRelations = relations(
  departmentsoverallstats,
  ({ one }) => ({
    client: one(clients, {
      fields: [departmentsoverallstats.fClient],
      references: [clients.fId],
    }),
  }),
)

export const depositvaluesRelations = relations(depositvalues, ({ one }) => ({
  user_fLastuser: one(users, {
    fields: [depositvalues.fLastuser],
    references: [users.fId],
    relationName: "depositvalues_fLastuser_users_fId",
  }),
  user_fCreateUser: one(users, {
    fields: [depositvalues.fCreateUser],
    references: [users.fId],
    relationName: "depositvalues_fCreateUser_users_fId",
  }),
  depositvaluesStatus: one(depositvaluesStatus, {
    fields: [depositvalues.fStatus],
    references: [depositvaluesStatus.fId],
  }),
  depositvaluesType: one(depositvaluesType, {
    fields: [depositvalues.fType],
    references: [depositvaluesType.fId],
  }),
  process: one(process, {
    fields: [depositvalues.fProcess],
    references: [process.fId],
  }),
}))

export const depositvaluesStatusRelations = relations(
  depositvaluesStatus,
  ({ many }) => ({
    depositvalues: many(depositvalues),
  }),
)

export const depositvaluesTypeRelations = relations(
  depositvaluesType,
  ({ many }) => ({
    depositvalues: many(depositvalues),
  }),
)

export const correspondentsRelations = relations(correspondents, ({ one }) => ({
  user: one(users, {
    fields: [correspondents.fUser],
    references: [users.fId],
  }),
}))

export const diligencesCopiesRelations = relations(
  diligencesCopies,
  ({ one }) => ({
    diligencetype: one(diligencetypes, {
      fields: [diligencesCopies.fDiligenciatype],
      references: [diligencetypes.fId],
    }),
    copiestype: one(copiestype, {
      fields: [diligencesCopies.fCopiestype],
      references: [copiestype.fId],
    }),
  }),
)

export const diligencetypesRelations = relations(
  diligencetypes,
  ({ many }) => ({
    diligencesCopies: many(diligencesCopies),
  }),
)

export const copiestypeRelations = relations(copiestype, ({ many }) => ({
  diligencesCopies: many(diligencesCopies),
}))

export const diligencesGuideRelations = relations(
  diligencesGuide,
  ({ one }) => ({
    user: one(users, {
      fields: [diligencesGuide.fCreateUser],
      references: [users.fId],
    }),
    document: one(documents, {
      fields: [diligencesGuide.fDocument],
      references: [documents.fId],
    }),
    process: one(process, {
      fields: [diligencesGuide.fProcess],
      references: [process.fId],
    }),
  }),
)

export const documentFilesRelations = relations(documentFiles, ({ one }) => ({
  document: one(documents, {
    fields: [documentFiles.fDocumentId],
    references: [documents.fId],
  }),
}))

export const documentQueueRelations = relations(
  documentQueue,
  ({ one, many }) => ({
    process: one(process, {
      fields: [documentQueue.processFId],
      references: [process.fId],
    }),
    processedDocuments: many(processedDocument),
  }),
)

export const financialreceiptsRelations = relations(
  financialreceipts,
  ({ one }) => ({
    consultationandadvice: one(consultationandadvice, {
      fields: [financialreceipts.fService],
      references: [consultationandadvice.fId],
    }),
    valuetype: one(valuetypes, {
      fields: [financialreceipts.fValuetype],
      references: [valuetypes.fId],
    }),
    process: one(process, {
      fields: [financialreceipts.fProcess],
      references: [process.fId],
    }),
    user: one(users, {
      fields: [financialreceipts.fCreateUser],
      references: [users.fId],
    }),
  }),
)

export const valuetypesRelations = relations(valuetypes, ({ many }) => ({
  financialreceipts: many(financialreceipts),
}))

export const processparticipantsRelations = relations(
  processparticipants,
  ({ one, many }) => ({
    position: one(positions, {
      fields: [processparticipants.fPosition],
      references: [positions.fId],
    }),
    participant: one(participants, {
      fields: [processparticipants.fParticipant],
      references: [participants.fId],
    }),
    process: one(process, {
      fields: [processparticipants.fProcess],
      references: [process.fId],
    }),
    processparticipantslawyers: many(processparticipantslawyers),
  }),
)

export const participantsRelations = relations(
  participants,
  ({ one, many }) => ({
    processparticipants: many(processparticipants),
    user_fCreateUser: one(users, {
      fields: [participants.fCreateUser],
      references: [users.fId],
      relationName: "participants_fCreateUser_users_fId",
    }),
    user_fLastuser: one(users, {
      fields: [participants.fLastuser],
      references: [users.fId],
      relationName: "participants_fLastuser_users_fId",
    }),
  }),
)

export const forumDistrictsRelations = relations(forumDistricts, ({ one }) => ({
  district: one(districts, {
    fields: [forumDistricts.fDistrict],
    references: [districts.fId],
  }),
  forum: one(forum, {
    fields: [forumDistricts.fForum],
    references: [forum.fId],
  }),
}))

export const forumRelations = relations(forum, ({ many }) => ({
  forumDistricts: many(forumDistricts),
}))

export const garnishmentsRelations = relations(garnishments, ({ one }) => ({
  user: one(users, {
    fields: [garnishments.fCreateUser],
    references: [users.fId],
  }),
}))

export const historytimesheetsRelations = relations(
  historytimesheets,
  ({ one }) => ({
    history: one(histories, {
      fields: [historytimesheets.fHistory],
      references: [histories.fId],
    }),
    timesheettype: one(timesheettypes, {
      fields: [historytimesheets.fType],
      references: [timesheettypes.fId],
    }),
  }),
)

export const groupClientRelRelations = relations(groupClientRel, ({ one }) => ({
  client: one(clients, {
    fields: [groupClientRel.fClient],
    references: [clients.fId],
  }),
  groupclient: one(groupclients, {
    fields: [groupClientRel.fGroup],
    references: [groupclients.fId],
  }),
}))

export const holidaysRelations = relations(holidays, ({ one }) => ({
  state: one(states, {
    fields: [holidays.fState],
    references: [states.fId],
  }),
  district: one(districts, {
    fields: [holidays.fComarca],
    references: [districts.fId],
  }),
}))

export const intimationsRelations = relations(intimations, ({ one, many }) => ({
  user: one(users, {
    fields: [intimations.fLastuser],
    references: [users.fId],
  }),
  intimationtype: one(intimationtypes, {
    fields: [intimations.fType],
    references: [intimationtypes.fId],
  }),
  process: one(process, {
    fields: [intimations.fProcess],
    references: [process.fId],
  }),
  appointments: many(appointments),
  hearings: many(hearings),
}))

export const hearingstimesheetsRelations = relations(
  hearingstimesheets,
  ({ one }) => ({
    hearing: one(hearings, {
      fields: [hearingstimesheets.fHearing],
      references: [hearings.fId],
    }),
    timesheettype: one(timesheettypes, {
      fields: [hearingstimesheets.fType],
      references: [timesheettypes.fId],
    }),
  }),
)

export const hearingsRelations = relations(hearings, ({ one, many }) => ({
  hearingstimesheets: many(hearingstimesheets),
  appointments: many(appointments),
  user: one(users, {
    fields: [hearings.fLastuser],
    references: [users.fId],
  }),
  hearingtype: one(hearingtypes, {
    fields: [hearings.fType],
    references: [hearingtypes.fId],
  }),
  process: one(process, {
    fields: [hearings.fProcess],
    references: [process.fId],
  }),
  district: one(districts, {
    fields: [hearings.fDistrict],
    references: [districts.fId],
  }),
  registry: one(registries, {
    fields: [hearings.fRegistry],
    references: [registries.fId],
  }),
  proceedingtype: one(proceedingtypes, {
    fields: [hearings.fProceedingtype],
    references: [proceedingtypes.fId],
  }),
  intimation: one(intimations, {
    fields: [hearings.fIntimation],
    references: [intimations.fId],
  }),
  lawyer: one(lawyers, {
    fields: [hearings.fLawyer],
    references: [lawyers.fId],
  }),
  processStopwatches: many(processStopwatch),
}))

export const lawyerfieldsRelations = relations(lawyerfields, ({ one }) => ({
  lawyer: one(lawyers, {
    fields: [lawyerfields.fLawyer],
    references: [lawyers.fId],
  }),
  actiontype: one(actiontypes, {
    fields: [lawyerfields.fActiontype],
    references: [actiontypes.fId],
  }),
}))

export const lawyerstatsRelations = relations(lawyerstats, ({ one }) => ({
  lawyer: one(lawyers, {
    fields: [lawyerstats.fLawyer],
    references: [lawyers.fId],
  }),
}))

export const legalExpensesRelations = relations(legalExpenses, ({ one }) => ({
  user: one(users, {
    fields: [legalExpenses.fCreateUser],
    references: [users.fId],
  }),
  despesaType: one(despesaTypes, {
    fields: [legalExpenses.fTypeDespesa],
    references: [despesaTypes.fId],
  }),
}))

export const despesaTypesRelations = relations(despesaTypes, ({ many }) => ({
  legalExpenses: many(legalExpenses),
}))

export const processparticipantslawyersRelations = relations(
  processparticipantslawyers,
  ({ one }) => ({
    processparticipant: one(processparticipants, {
      fields: [processparticipantslawyers.fProcessparticipant],
      references: [processparticipants.fId],
    }),
    participantslawyer: one(participantslawyers, {
      fields: [processparticipantslawyers.fParticipantlawyer],
      references: [participantslawyers.fId],
    }),
  }),
)

export const participantslawyersRelations = relations(
  participantslawyers,
  ({ many }) => ({
    processparticipantslawyers: many(processparticipantslawyers),
  }),
)

export const loggerRelations = relations(logger, ({ one }) => ({
  process: one(process, {
    fields: [logger.fProcess],
    references: [process.fId],
  }),
}))

export const liberationsRelations = relations(liberations, ({ one }) => ({
  process: one(process, {
    fields: [liberations.fProcess],
    references: [process.fId],
  }),
  lawyer: one(lawyers, {
    fields: [liberations.fLawyer],
    references: [lawyers.fId],
  }),
}))

export const logisticusersRelations = relations(logisticusers, ({ one }) => ({
  user: one(users, {
    fields: [logisticusers.fUser],
    references: [users.fId],
  }),
}))

export const monetaryTaxaindiceRelations = relations(
  monetaryTaxaindice,
  ({ one }) => ({
    monetaryIndex: one(monetaryIndices, {
      fields: [monetaryTaxaindice.fIndice],
      references: [monetaryIndices.fId],
    }),
  }),
)

export const monetaryIndicesRelations = relations(
  monetaryIndices,
  ({ many }) => ({
    monetaryTaxaindices: many(monetaryTaxaindice),
  }),
)

export const observationshistoryRelations = relations(
  observationshistory,
  ({ one }) => ({
    client: one(clients, {
      fields: [observationshistory.fClientId],
      references: [clients.fId],
    }),
    theme: one(themes, {
      fields: [observationshistory.fThemeId],
      references: [themes.fId],
    }),
    user: one(users, {
      fields: [observationshistory.fUserId],
      references: [users.fId],
    }),
  }),
)

export const themesRelations = relations(themes, ({ many }) => ({
  observationshistories: many(observationshistory),
}))

export const perfilConsultationDadosRelations = relations(
  perfilConsultationDados,
  ({ one }) => ({
    perfilConsultation: one(perfilConsultation, {
      fields: [perfilConsultationDados.fPerfil],
      references: [perfilConsultation.fId],
    }),
  }),
)

export const permitsreceivedRelations = relations(
  permitsreceived,
  ({ one }) => ({
    user: one(users, {
      fields: [permitsreceived.fCreateUser],
      references: [users.fId],
    }),
  }),
)

export const perfilProcessDadosRelations = relations(
  perfilProcessDados,
  ({ one }) => ({
    lawyer: one(lawyers, {
      fields: [perfilProcessDados.fLawyer],
      references: [lawyers.fId],
    }),
  }),
)

export const processmonitoredlogsRelations = relations(
  processmonitoredlogs,
  ({ one }) => ({
    user_fCreateUser: one(users, {
      fields: [processmonitoredlogs.fCreateUser],
      references: [users.fId],
      relationName: "processmonitoredlogs_fCreateUser_users_fId",
    }),
    process_fProcess: one(process, {
      fields: [processmonitoredlogs.fProcess],
      references: [process.fId],
      relationName: "processmonitoredlogs_fProcess_process_fId",
    }),
  }),
)

export const processactionobjectsRelations = relations(
  processactionobjects,
  ({ one }) => ({
    actionobject: one(actionobjects, {
      fields: [processactionobjects.fActionobject],
      references: [actionobjects.fId],
    }),
    process: one(process, {
      fields: [processactionobjects.fProcess],
      references: [process.fId],
    }),
  }),
)

export const processedDocumentRelations = relations(
  processedDocument,
  ({ one }) => ({
    documentQueue: one(documentQueue, {
      fields: [processedDocument.idDocumentQueue],
      references: [documentQueue.id],
    }),
  }),
)

export const profilesclientsRelations = relations(
  profilesclients,
  ({ one }) => ({
    client: one(clients, {
      fields: [profilesclients.fClient],
      references: [clients.fId],
    }),
    state: one(states, {
      fields: [profilesclients.fState],
      references: [states.fId],
    }),
    user: one(users, {
      fields: [profilesclients.fUser],
      references: [users.fId],
    }),
  }),
)

export const protocolaccessusersRelations = relations(
  protocolaccessusers,
  ({ one }) => ({
    user: one(users, {
      fields: [protocolaccessusers.fUser],
      references: [users.fId],
    }),
  }),
)

export const publicationsRelations = relations(
  publications,
  ({ one, many }) => ({
    partner: one(partner, {
      fields: [publications.fPartner],
      references: [partner.fId],
    }),
    publicationsDescriptions: many(publicationsDescriptions),
    publicationsRelationships_fPublicationSimilar: many(
      publicationsRelationship,
      {
        relationName:
          "publicationsRelationship_fPublicationSimilar_publications_fId",
      },
    ),
    publicationsRelationships_fPublication: many(publicationsRelationship, {
      relationName: "publicationsRelationship_fPublication_publications_fId",
    }),
  }),
)

export const partnerRelations = relations(partner, ({ many }) => ({
  publications: many(publications),
}))

export const publicationsDescriptionsRelations = relations(
  publicationsDescriptions,
  ({ one }) => ({
    publication: one(publications, {
      fields: [publicationsDescriptions.fPublication],
      references: [publications.fId],
    }),
  }),
)

export const queryreportsclientsRelations = relations(
  queryreportsclients,
  ({ one }) => ({
    client: one(clients, {
      fields: [queryreportsclients.fClientId],
      references: [clients.fId],
    }),
    queryreport: one(queryreports, {
      fields: [queryreportsclients.fQueryreportsId],
      references: [queryreports.fId],
    }),
  }),
)

export const queryreportsRelations = relations(
  queryreports,
  ({ one, many }) => ({
    queryreportsclients: many(queryreportsclients),
    user: one(users, {
      fields: [queryreports.fUser],
      references: [users.fId],
    }),
    area: one(areas, {
      fields: [queryreports.fArea],
      references: [areas.fId],
    }),
    position: one(positions, {
      fields: [queryreports.fPosition],
      references: [positions.fId],
    }),
    client: one(clients, {
      fields: [queryreports.fClient],
      references: [clients.fId],
    }),
    queryreportsSchedules: many(queryreportsSchedule),
    querydetails: many(querydetails),
  }),
)

export const queryreportsScheduleRelations = relations(
  queryreportsSchedule,
  ({ one }) => ({
    dbpartsName: one(dbpartsNames, {
      fields: [queryreportsSchedule.fDbpartId],
      references: [dbpartsNames.fId],
    }),
    queryreport: one(queryreports, {
      fields: [queryreportsSchedule.fReportId],
      references: [queryreports.fId],
    }),
    user: one(users, {
      fields: [queryreportsSchedule.fUserId],
      references: [users.fId],
    }),
  }),
)

export const querydetailsRelations = relations(querydetails, ({ one }) => ({
  queryreport: one(queryreports, {
    fields: [querydetails.fQueryreport],
    references: [queryreports.fId],
  }),
}))

export const reschedulingHistoriesRelations = relations(
  reschedulingHistories,
  ({ one }) => ({
    lawyer: one(lawyers, {
      fields: [reschedulingHistories.fNewlawyer],
      references: [lawyers.fId],
    }),
    reschedulingReason: one(reschedulingReason, {
      fields: [reschedulingHistories.fReason],
      references: [reschedulingReason.fId],
    }),
  }),
)

export const reschedulingReasonRelations = relations(
  reschedulingReason,
  ({ many }) => ({
    reschedulingHistories: many(reschedulingHistories),
  }),
)

export const serviceActivityChecklistRelations = relations(
  serviceActivityChecklist,
  ({ one }) => ({
    user_fCreateUser: one(users, {
      fields: [serviceActivityChecklist.fCreateUser],
      references: [users.fId],
      relationName: "serviceActivityChecklist_fCreateUser_users_fId",
    }),
    user_fLastuser: one(users, {
      fields: [serviceActivityChecklist.fLastuser],
      references: [users.fId],
      relationName: "serviceActivityChecklist_fLastuser_users_fId",
    }),
    serviceactivity: one(serviceactivities, {
      fields: [serviceActivityChecklist.fServiceactivity],
      references: [serviceactivities.fId],
    }),
  }),
)

export const serviceactivitiesRelations = relations(
  serviceactivities,
  ({ one, many }) => ({
    serviceActivityChecklists: many(serviceActivityChecklist),
    typesopinion: one(typesopinions, {
      fields: [serviceactivities.fTypeactivity],
      references: [typesopinions.fId],
    }),
    consultationandadvice: one(consultationandadvice, {
      fields: [serviceactivities.fServiceId],
      references: [consultationandadvice.fId],
    }),
    stopwatchHistories: many(stopwatchHistories),
  }),
)

export const serviceHistoriesRelations = relations(
  serviceHistories,
  ({ one }) => ({
    user_fCreateUser: one(users, {
      fields: [serviceHistories.fCreateUser],
      references: [users.fId],
      relationName: "serviceHistories_fCreateUser_users_fId",
    }),
    user_fLastuser: one(users, {
      fields: [serviceHistories.fLastuser],
      references: [users.fId],
      relationName: "serviceHistories_fLastuser_users_fId",
    }),
    consultationandadvice: one(consultationandadvice, {
      fields: [serviceHistories.fService],
      references: [consultationandadvice.fId],
    }),
    typesopinion: one(typesopinions, {
      fields: [serviceHistories.fType],
      references: [typesopinions.fId],
    }),
  }),
)

export const servicedocumentsRelations = relations(
  servicedocuments,
  ({ one, many }) => ({
    consultationandadvice: one(consultationandadvice, {
      fields: [servicedocuments.fService],
      references: [consultationandadvice.fId],
    }),
    servicedocumentFiles: many(servicedocumentFiles),
  }),
)

export const servicelinkedRelations = relations(servicelinked, ({ one }) => ({
  consultationandadvice_fService: one(consultationandadvice, {
    fields: [servicelinked.fService],
    references: [consultationandadvice.fId],
    relationName: "servicelinked_fService_consultationandadvice_fId",
  }),
  consultationandadvice_fServicelinked: one(consultationandadvice, {
    fields: [servicelinked.fServicelinked],
    references: [consultationandadvice.fId],
    relationName: "servicelinked_fServicelinked_consultationandadvice_fId",
  }),
}))

export const servicedocumentFilesRelations = relations(
  servicedocumentFiles,
  ({ one }) => ({
    servicedocument: one(servicedocuments, {
      fields: [servicedocumentFiles.fServicedocumentId],
      references: [servicedocuments.fId],
    }),
  }),
)

export const serviceSegmentsRelations = relations(
  serviceSegments,
  ({ one, many }) => ({
    user_fCreateUser: one(users, {
      fields: [serviceSegments.fCreateUser],
      references: [users.fId],
      relationName: "serviceSegments_fCreateUser_users_fId",
    }),
    user_fLastuser: one(users, {
      fields: [serviceSegments.fLastuser],
      references: [users.fId],
      relationName: "serviceSegments_fLastuser_users_fId",
    }),
    consultationandadvices: many(consultationandadvice),
  }),
)

export const systemLoginRelations = relations(systemLogin, ({ one }) => ({
  user: one(users, {
    fields: [systemLogin.fUser],
    references: [users.fId],
  }),
}))

export const stopwatchHistoriesRelations = relations(
  stopwatchHistories,
  ({ one }) => ({
    serviceactivity: one(serviceactivities, {
      fields: [stopwatchHistories.fActivityId],
      references: [serviceactivities.fId],
    }),
    user_fLastuser: one(users, {
      fields: [stopwatchHistories.fLastuser],
      references: [users.fId],
      relationName: "stopwatchHistories_fLastuser_users_fId",
    }),
    typesopinion_fTypetask: one(typesopinions, {
      fields: [stopwatchHistories.fTypetask],
      references: [typesopinions.fId],
      relationName: "stopwatchHistories_fTypetask_typesopinions_fId",
    }),
    user_fUser: one(users, {
      fields: [stopwatchHistories.fUser],
      references: [users.fId],
      relationName: "stopwatchHistories_fUser_users_fId",
    }),
  }),
)

export const servicesprocessRelations = relations(
  servicesprocess,
  ({ one }) => ({
    consultationandadvice: one(consultationandadvice, {
      fields: [servicesprocess.fConsultationandadviceId],
      references: [consultationandadvice.fId],
    }),
    process: one(process, {
      fields: [servicesprocess.fProcessId],
      references: [process.fId],
    }),
  }),
)

export const servicesLogRelations = relations(servicesLog, ({ one }) => ({
  consultationandadvice: one(consultationandadvice, {
    fields: [servicesLog.fServiceId],
    references: [consultationandadvice.fId],
  }),
}))

export const systemaccessusersRelations = relations(
  systemaccessusers,
  ({ one }) => ({
    user: one(users, {
      fields: [systemaccessusers.fUser],
      references: [users.fId],
    }),
  }),
)

export const systemTabsUsersViewingRelations = relations(
  systemTabsUsersViewing,
  ({ one }) => ({
    user_fUser: one(users, {
      fields: [systemTabsUsersViewing.fUser],
      references: [users.fId],
      relationName: "systemTabsUsersViewing_fUser_users_fId",
    }),
    user_fView: one(users, {
      fields: [systemTabsUsersViewing.fView],
      references: [users.fId],
      relationName: "systemTabsUsersViewing_fView_users_fId",
    }),
  }),
)

export const userclientAppointmenttypesRelations = relations(
  userclientAppointmenttypes,
  ({ one }) => ({
    appointmenttype: one(appointmenttypes, {
      fields: [userclientAppointmenttypes.fAppointmenttype],
      references: [appointmenttypes.fId],
    }),
    user: one(users, {
      fields: [userclientAppointmenttypes.fUser],
      references: [users.fId],
    }),
  }),
)

export const termPublicationRelations = relations(
  termPublication,
  ({ one, many }) => ({
    user_fLastuser: one(users, {
      fields: [termPublication.fLastuser],
      references: [users.fId],
      relationName: "termPublication_fLastuser_users_fId",
    }),
    state: one(states, {
      fields: [termPublication.fOabuf],
      references: [states.fId],
    }),
    user_fCreateUser: one(users, {
      fields: [termPublication.fCreateUser],
      references: [users.fId],
      relationName: "termPublication_fCreateUser_users_fId",
    }),
    termPublicationStates: many(termPublicationStates),
  }),
)

export const userAccessCourtRelations = relations(
  userAccessCourt,
  ({ one }) => ({
    user_fCreateUser: one(users, {
      fields: [userAccessCourt.fCreateUser],
      references: [users.fId],
      relationName: "userAccessCourt_fCreateUser_users_fId",
    }),
    lawyer_fLawyer: one(lawyers, {
      fields: [userAccessCourt.fLawyer],
      references: [lawyers.fId],
      relationName: "userAccessCourt_fLawyer_lawyers_fId",
    }),
  }),
)

export const termPublicationStatesRelations = relations(
  termPublicationStates,
  ({ one }) => ({
    state: one(states, {
      fields: [termPublicationStates.fStateId],
      references: [states.fId],
    }),
    termPublication: one(termPublication, {
      fields: [termPublicationStates.fTermId],
      references: [termPublication.fId],
    }),
  }),
)

export const systemTabsUsersRelations = relations(
  systemTabsUsers,
  ({ one }) => ({
    systemTab: one(systemTabs, {
      fields: [systemTabsUsers.fTab],
      references: [systemTabs.fId],
    }),
    user: one(users, {
      fields: [systemTabsUsers.fUser],
      references: [users.fId],
    }),
  }),
)

export const systemTabsRelations = relations(systemTabs, ({ many }) => ({
  systemTabsUsers: many(systemTabsUsers),
}))

export const userclientServiceRelations = relations(
  userclientService,
  ({ one }) => ({
    client: one(clients, {
      fields: [userclientService.fClient],
      references: [clients.fId],
    }),
    user: one(users, {
      fields: [userclientService.fUser],
      references: [users.fId],
    }),
  }),
)

export const userSettingsRelations = relations(userSettings, ({ one }) => ({
  user: one(users, {
    fields: [userSettings.fUser],
    references: [users.fId],
  }),
}))

export const shippingTypesRelations = relations(shippingTypes, ({ many }) => ({
  appointments: many(appointments),
}))

export const servicesCustomfieldsRelations = relations(
  servicesCustomfields,
  ({ one, many }) => ({
    perfilConsultation: one(perfilConsultation, {
      fields: [servicesCustomfields.fArea],
      references: [perfilConsultation.fId],
    }),
    client: one(clients, {
      fields: [servicesCustomfields.fClient],
      references: [clients.fId],
    }),
    groupclient: one(groupclients, {
      fields: [servicesCustomfields.fGroup],
      references: [groupclients.fId],
    }),
    subarea: one(subareas, {
      fields: [servicesCustomfields.fSubarea],
      references: [subareas.fId],
    }),
    servicesCustomfieldsdatas: many(servicesCustomfieldsdatas),
  }),
)

export const levelsRelations = relations(levels, ({ many }) => ({
  users: many(users),
}))

export const appealsRelations = relations(appeals, ({ one }) => ({
  process: one(process, {
    fields: [appeals.fProcess],
    references: [process.fId],
  }),
  registry: one(registries, {
    fields: [appeals.fRegistry],
    references: [registries.fId],
  }),
  appealtype: one(appealtypes, {
    fields: [appeals.fType],
    references: [appealtypes.fId],
  }),
}))

export const appealtypesRelations = relations(appealtypes, ({ many }) => ({
  appeals: many(appeals),
}))

export const agreementspartRelations = relations(agreementspart, ({ one }) => ({
  agreement: one(agreements, {
    fields: [agreementspart.fAgreement],
    references: [agreements.fId],
  }),
}))

export const appointmenttypescombosdataRelations = relations(
  appointmenttypescombosdata,
  ({ one }) => ({
    appointmenttype: one(appointmenttypes, {
      fields: [appointmenttypescombosdata.fAppointmenttype],
      references: [appointmenttypes.fId],
    }),
    appointmenttypescombo: one(appointmenttypescombos, {
      fields: [appointmenttypescombosdata.fAppointmentcombo],
      references: [appointmenttypescombos.fId],
    }),
  }),
)

export const clientdocumentFilesRelations = relations(
  clientdocumentFiles,
  ({ one }) => ({
    clientdocument: one(clientdocuments, {
      fields: [clientdocumentFiles.fClientdocumentId],
      references: [clientdocuments.fId],
    }),
  }),
)

export const servicesubjectsRelations = relations(
  servicesubjects,
  ({ many }) => ({
    consultationandadvices: many(consultationandadvice),
  }),
)

export const coordinatorsUsersRelations = relations(
  coordinatorsUsers,
  ({ one }) => ({
    user: one(users, {
      fields: [coordinatorsUsers.fUser],
      references: [users.fId],
    }),
    coordinator: one(coordinators, {
      fields: [coordinatorsUsers.fCoordinator],
      references: [coordinators.fId],
    }),
  }),
)

export const diligencesHearingIntegracaoFilesRelations = relations(
  diligencesHearingIntegracaoFiles,
  ({ one }) => ({
    diligencesHearingIntegracao: one(diligencesHearingIntegracao, {
      fields: [diligencesHearingIntegracaoFiles.fDiligence],
      references: [diligencesHearingIntegracao.fId],
    }),
  }),
)

export const diligencesHearingIntegracaoRelations = relations(
  diligencesHearingIntegracao,
  ({ many }) => ({
    diligencesHearingIntegracaoFiles: many(diligencesHearingIntegracaoFiles),
  }),
)

export const dynamicItemsRelations = relations(dynamicItems, ({ one }) => ({
  client: one(clients, {
    fields: [dynamicItems.fClient],
    references: [clients.fId],
  }),
}))

export const dynamicpartsRelPreliminaryRelations = relations(
  dynamicpartsRelPreliminary,
  ({ one }) => ({
    dynamicpartsPreliminary: one(dynamicpartsPreliminary, {
      fields: [dynamicpartsRelPreliminary.fPreliminary],
      references: [dynamicpartsPreliminary.fId],
    }),
  }),
)

export const dynamicpartsPreliminaryRelations = relations(
  dynamicpartsPreliminary,
  ({ many }) => ({
    dynamicpartsRelPreliminaries: many(dynamicpartsRelPreliminary),
  }),
)

export const processStopwatchRelations = relations(
  processStopwatch,
  ({ one }) => ({
    appointment: one(appointments, {
      fields: [processStopwatch.fAppointment],
      references: [appointments.fId],
    }),
    proceedingtype: one(proceedingtypes, {
      fields: [processStopwatch.fProceedingtype],
      references: [proceedingtypes.fId],
    }),
    process: one(process, {
      fields: [processStopwatch.fProcessId],
      references: [process.fId],
    }),
    user: one(users, {
      fields: [processStopwatch.fUser],
      references: [users.fId],
    }),
    hearing: one(hearings, {
      fields: [processStopwatch.fHearing],
      references: [hearings.fId],
    }),
  }),
)

export const nonconformingsRelations = relations(nonconformings, ({ one }) => ({
  justificationsnonconforming: one(justificationsnonconforming, {
    fields: [nonconformings.fSolution],
    references: [justificationsnonconforming.fId],
  }),
  nonconformingtype: one(nonconformingtypes, {
    fields: [nonconformings.fType],
    references: [nonconformingtypes.fId],
  }),
  lawyer: one(lawyers, {
    fields: [nonconformings.fLawyer],
    references: [lawyers.fId],
  }),
  appointment: one(appointments, {
    fields: [nonconformings.fAppointment],
    references: [appointments.fId],
  }),
  user: one(users, {
    fields: [nonconformings.fAuthorId],
    references: [users.fId],
  }),
  history: one(histories, {
    fields: [nonconformings.fHistory],
    references: [histories.fId],
  }),
}))

export const justificationsnonconformingRelations = relations(
  justificationsnonconforming,
  ({ many }) => ({
    nonconformings: many(nonconformings),
  }),
)

export const nonconformingtypesRelations = relations(
  nonconformingtypes,
  ({ many }) => ({
    nonconformings: many(nonconformings),
  }),
)

export const systemProfilesUsersRelations = relations(
  systemProfilesUsers,
  ({ one }) => ({
    systemProfile: one(systemProfiles, {
      fields: [systemProfilesUsers.fProfile],
      references: [systemProfiles.fId],
    }),
    user: one(users, {
      fields: [systemProfilesUsers.fUser],
      references: [users.fId],
    }),
  }),
)

export const systemProfilesRelations = relations(
  systemProfiles,
  ({ many }) => ({
    systemProfilesUsers: many(systemProfilesUsers),
  }),
)

export const publicationsRelationshipRelations = relations(
  publicationsRelationship,
  ({ one }) => ({
    client: one(clients, {
      fields: [publicationsRelationship.fClient],
      references: [clients.fId],
    }),
    publication_fPublicationSimilar: one(publications, {
      fields: [publicationsRelationship.fPublicationSimilar],
      references: [publications.fId],
      relationName:
        "publicationsRelationship_fPublicationSimilar_publications_fId",
    }),
    publication_fPublication: one(publications, {
      fields: [publicationsRelationship.fPublication],
      references: [publications.fId],
      relationName: "publicationsRelationship_fPublication_publications_fId",
    }),
    process: one(process, {
      fields: [publicationsRelationship.fProcess],
      references: [process.fId],
    }),
    lawyer: one(lawyers, {
      fields: [publicationsRelationship.fLawyer],
      references: [lawyers.fId],
    }),
  }),
)

export const requestSchedulingRelations = relations(
  requestScheduling,
  ({ one }) => ({
    user: one(users, {
      fields: [requestScheduling.fUserAnalyse],
      references: [users.fId],
    }),
  }),
)

export const monetaryParcelasRelations = relations(
  monetaryParcelas,
  ({ one }) => ({
    monetaryCalc: one(monetaryCalc, {
      fields: [monetaryParcelas.fMonetaryCalc],
      references: [monetaryCalc.fId],
    }),
  }),
)

export const monetaryCalcRelations = relations(monetaryCalc, ({ many }) => ({
  monetaryParcelas: many(monetaryParcelas),
}))

export const publicationsTempRelationshipRelations = relations(
  publicationsTempRelationship,
  ({ one }) => ({
    publicationsTemp: one(publicationsTemp, {
      fields: [publicationsTempRelationship.fPublication],
      references: [publicationsTemp.codigo],
    }),
  }),
)

export const publicationsTempRelations = relations(
  publicationsTemp,
  ({ many }) => ({
    publicationsTempRelationships: many(publicationsTempRelationship),
  }),
)

export const contingencyvaluehistoryRelations = relations(
  contingencyvaluehistory,
  ({ one }) => ({
    contingencyvaluetype: one(contingencyvaluetypes, {
      fields: [contingencyvaluehistory.fType],
      references: [contingencyvaluetypes.fId],
    }),
    process: one(process, {
      fields: [contingencyvaluehistory.fProcess],
      references: [process.fId],
    }),
  }),
)

export const contingencyvaluetypesRelations = relations(
  contingencyvaluetypes,
  ({ many }) => ({
    contingencyvaluehistories: many(contingencyvaluehistory),
  }),
)

export const resourcesfinancialRelations = relations(
  resourcesfinancial,
  ({ one }) => ({
    resourcesfinancialMotivoadiantamento: one(
      resourcesfinancialMotivoadiantamento,
      {
        fields: [resourcesfinancial.fMotivoadiantamento],
        references: [resourcesfinancialMotivoadiantamento.fId],
      },
    ),
    process: one(process, {
      fields: [resourcesfinancial.fProcess],
      references: [process.fId],
    }),
  }),
)

export const resourcesfinancialMotivoadiantamentoRelations = relations(
  resourcesfinancialMotivoadiantamento,
  ({ many }) => ({
    resourcesfinancials: many(resourcesfinancial),
  }),
)

export const areasmanagersRelations = relations(areasmanagers, ({ one }) => ({
  user: one(users, {
    fields: [areasmanagers.fUser],
    references: [users.fId],
  }),
  area: one(areas, {
    fields: [areasmanagers.fArea],
    references: [areas.fId],
  }),
}))

export const controlnotelawyersRelations = relations(
  controlnotelawyers,
  ({ one }) => ({
    lawyer: one(lawyers, {
      fields: [controlnotelawyers.fLawyer],
      references: [lawyers.fId],
    }),
    user: one(users, {
      fields: [controlnotelawyers.fUser],
      references: [users.fId],
    }),
  }),
)

export const officesmanagersRelations = relations(
  officesmanagers,
  ({ one }) => ({
    user: one(users, {
      fields: [officesmanagers.fUser],
      references: [users.fId],
    }),
    office: one(offices, {
      fields: [officesmanagers.fOffice],
      references: [offices.fId],
    }),
  }),
)

export const agreementusersareasRelations = relations(
  agreementusersareas,
  ({ one }) => ({
    area: one(areas, {
      fields: [agreementusersareas.fArea],
      references: [areas.fId],
    }),
    user: one(users, {
      fields: [agreementusersareas.fUser],
      references: [users.fId],
    }),
  }),
)

export const controluserslawyersRelations = relations(
  controluserslawyers,
  ({ one }) => ({
    lawyer: one(lawyers, {
      fields: [controluserslawyers.fLawyer],
      references: [lawyers.fId],
    }),
    user: one(users, {
      fields: [controluserslawyers.fUser],
      references: [users.fId],
    }),
  }),
)

export const officesstatsRelations = relations(officesstats, ({ one }) => ({
  office: one(offices, {
    fields: [officesstats.fOffice],
    references: [offices.fId],
  }),
  area: one(areas, {
    fields: [officesstats.fArea],
    references: [areas.fId],
  }),
}))

export const areaagreementspecificdatasRelations = relations(
  areaagreementspecificdatas,
  ({ one }) => ({
    areaagreementspecific: one(areaagreementspecifics, {
      fields: [areaagreementspecificdatas.fAreaagreementspecific],
      references: [areaagreementspecifics.fId],
    }),
    agreement: one(agreements, {
      fields: [areaagreementspecificdatas.fAgreement],
      references: [agreements.fId],
    }),
  }),
)

export const departmentsstatsRelations = relations(
  departmentsstats,
  ({ one }) => ({
    area: one(areas, {
      fields: [departmentsstats.fArea],
      references: [areas.fId],
    }),
    client: one(clients, {
      fields: [departmentsstats.fClient],
      references: [clients.fId],
    }),
  }),
)

export const clientspecificdatasRelations = relations(
  clientspecificdatas,
  ({ one }) => ({
    clientspecific: one(clientspecifics, {
      fields: [clientspecificdatas.fClientspecific],
      references: [clientspecifics.fId],
    }),
    process: one(process, {
      fields: [clientspecificdatas.fProcess],
      references: [process.fId],
    }),
  }),
)

export const financialprovidesRelations = relations(
  financialprovides,
  ({ one }) => ({
    user: one(users, {
      fields: [financialprovides.fUser],
      references: [users.fId],
    }),
  }),
)

export const servicesCustomfieldsdatasRelations = relations(
  servicesCustomfieldsdatas,
  ({ one }) => ({
    user_fCreateUser: one(users, {
      fields: [servicesCustomfieldsdatas.fCreateUser],
      references: [users.fId],
      relationName: "servicesCustomfieldsdatas_fCreateUser_users_fId",
    }),
    consultationandadvice: one(consultationandadvice, {
      fields: [servicesCustomfieldsdatas.fService],
      references: [consultationandadvice.fId],
    }),
    servicesCustomfield: one(servicesCustomfields, {
      fields: [servicesCustomfieldsdatas.fServicescustomfields],
      references: [servicesCustomfields.fId],
    }),
    user_fLastuser: one(users, {
      fields: [servicesCustomfieldsdatas.fLastuser],
      references: [users.fId],
      relationName: "servicesCustomfieldsdatas_fLastuser_users_fId",
    }),
  }),
)

export const tpuItensRelations = relations(tpuItens, ({ one, many }) => ({
  tpuIten: one(tpuItens, {
    fields: [tpuItens.codItemPai],
    references: [tpuItens.codItem],
    relationName: "tpuItens_codItemPai_tpuItens_codItem",
  }),
  tpuItens: many(tpuItens, {
    relationName: "tpuItens_codItemPai_tpuItens_codItem",
  }),
}))
