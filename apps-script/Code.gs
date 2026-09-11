/**
 * DO NOT DEPLOY THIS FILE.
 *
 * The canonical, deployed Google Apps Script backend for BOTH
 * catering.miaso.ca (this site) and events.miaso.ca (the corporate site)
 * lives in the miaso-corporate-landing repo, not here:
 *
 *   miaso-corporate-landing/apps-script/Code.gs
 *
 * Both sites' src/lib/submitLead.js POST to the SAME deployed Apps Script
 * Web App URL, tagging each lead with a `site` field ('catering' or
 * 'corporate'). That shared script routes leads to a per-site Google Sheet
 * tab and Telegram topic based on that field. There is only ONE Apps
 * Script deployment for both sites - editing or deploying from a copy in
 * this repo would silently break routing for both sites at once.
 *
 * If you need to change backend behavior, edit and redeploy
 * miaso-corporate-landing/apps-script/Code.gs instead.
 */
