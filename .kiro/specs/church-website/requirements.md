# Requirements Document

## Introduction

This document specifies the requirements for the More Than Conquerors Assemblies of God (MTC AG) church website. The website will serve as the primary digital presence for the church, providing essential information about services, ministries, events, and contact details to both current members and visitors.

The website will consist of 6 core pages with mobile-first responsive design, content management capabilities for 2-3 editors, and integration with Facebook for social media connectivity. The implementation will use Next.js with TypeScript, Tailwind CSS, and shadcn/ui components, deployed on Vercel.

**Architectural Principles:**
The website follows a modular, component-based architecture to ensure maintainability and scalability. All UI elements that appear in multiple places are implemented as reusable components following the DRY (Don't Repeat Yourself) principle. Modules are kept reasonably sized to support long-term maintenance, and any change to a visual or functional element should only require modification in one place.

**Content Management Approach:**
The website uses Google Sheets as the content management system. Church staff edit a private Google Sheet using the familiar spreadsheet interface they already know. Next.js fetches this data securely via the Google Sheets API, validates it using Zod schemas, caches it, and refreshes periodically (every 5 minutes). Only content marked as valid and published appears on the public website. This approach provides zero-cost content management with a familiar editing experience.

**Outstanding Decisions:**
- Website-first vs CMS-first development strategy
- Contact form vs contact details only
- Events/announcements layout (sections vs tabs vs separate pages)
- Specific content (service times, address, ministry details)

**Visual Design Direction:**
The website will follow a simple, modern aesthetic inspired by Elevation Church (elevationchurch.org) and Assemblies of God (ag.org), featuring bold typography, clean layouts, strong imagery, generous whitespace, and a mobile-first responsive design approach.

## Glossary

- **Website**: The MTC AG church website system
- **Content_Editor**: Church staff member authorized to edit website content
- **Visitor**: Any person viewing the website
- **Service_Information**: Church service times, location, and related details
- **Ministry**: Church ministry program or department
- **Event**: Church event or announcement
- **Page**: A distinct website page with its own URL
- **Responsive_Design**: Website design that adapts to different screen sizes and device types
- **Mobile_Phone**: Smartphone devices with screen widths typically below 768px (primary responsive design target)
- **Tablet**: Tablet devices including iPads with screen widths typically between 768px and 1023px
- **Laptop**: Desktop and laptop computers with screen widths typically 1024px and above
- **Navigation**: Website navigation menu
- **Facebook_Feed**: Embedded Facebook posts from the church's Facebook page
- **Reusable_Component**: A modular UI component that can be used in multiple locations across the website
- **DRY_Principle**: "Don't Repeat Yourself" - architectural principle where each piece of functionality exists in exactly one place
- **Google_Sheet**: The private Google Sheets spreadsheet used by Content_Editors to manage website content
- **Sheets_API**: Google Sheets API used to fetch content data from the Google_Sheet
- **Content_Row**: A single row in the Google_Sheet representing one piece of content (event, ministry, etc.)
- **Zod**: TypeScript schema validation library used to validate content from the Google_Sheet
- **Content_Schema**: Zod schema definition that specifies the structure and validation rules for content
- **Published_Flag**: Boolean field in the Google_Sheet indicating whether a Content_Row should appear on the public website
- **Content_Cache**: Temporary storage of validated content fetched from the Google_Sheet
- **Cache_Refresh_Interval**: Time period (5 minutes) between fetches of new content from the Google_Sheet
- **Primary_Red**: Brand color #f73c4a, used for primary actions and emphasis
- **Light_Neutral**: Brand color #f5f4f2, used for backgrounds and light surfaces
- **Dark_Gray**: Brand color #353533, used for text and dark surfaces
- **Yellow_Gold**: Brand color #efe10f, used for accents and highlights
- **Brand_Color_Palette**: The set of four defined brand colors (Primary_Red, Light_Neutral, Dark_Gray, Yellow_Gold)

## Requirements

### Requirement 1: Website Structure

**User Story:** As a visitor, I want to navigate between distinct website pages, so that I can find specific information easily.

#### Acceptance Criteria

1. THE Website SHALL provide exactly 6 pages: Home, About Us, Visit Us, Events & News, Ministries, and Contact
2. THE Website SHALL display a navigation menu that links to all 6 pages
3. WHEN a Visitor accesses any page, THE Website SHALL display consistent navigation across all pages
4. THE Website SHALL use Next.js for page routing and rendering

### Requirement 2: Responsive Design

**User Story:** As a visitor, I want the website to work seamlessly on my device, so that I can access church information whether I'm on my phone, tablet, or laptop.

#### Acceptance Criteria

1. THE Website SHALL render correctly on Mobile_Phone screen sizes (below 768px width) as the primary design target
2. THE Website SHALL render correctly on Tablet screen sizes (768px to 1023px width) including iPads
3. THE Website SHALL render correctly on Laptop screen sizes (1024px width and above)
4. WHEN screen size changes, THE Website SHALL adapt layout and navigation accordingly
5. THE Website SHALL use Tailwind CSS for responsive styling
6. THE Website SHALL prioritize Mobile_Phone optimization in design decisions when trade-offs must be made

### Requirement 3: Home Page Content

**User Story:** As a visitor, I want to see key church information on the home page, so that I can quickly understand what MTC AG offers.

#### Acceptance Criteria

1. THE Website SHALL display a home page as the root URL path
2. THE Website SHALL display the church name "More Than Conquerors Assemblies of God" on the home page
3. THE Website SHALL display a welcome message or hero section on the home page
4. THE Website SHALL display service information on the home page
5. THE Website SHALL display a call-to-action for visitors on the home page

### Requirement 4: About Us Page

**User Story:** As a visitor, I want to learn about the church's history and beliefs, so that I can understand what MTC AG stands for.

#### Acceptance Criteria

1. THE Website SHALL provide an About Us page
2. THE Website SHALL display church history content on the About Us page
3. THE Website SHALL display church beliefs or mission statement on the About Us page
4. THE Website SHALL display leadership information on the About Us page

### Requirement 5: Visit Us Page with Service Information

**User Story:** As a visitor, I want to see when and where services are held, so that I can plan to attend.

#### Acceptance Criteria

1. THE Website SHALL provide a Visit Us page
2. THE Website SHALL display service times on the Visit Us page
3. THE Website SHALL display the church address on the Visit Us page
4. THE Website SHALL display directions or parking information on the Visit Us page
5. THE Website SHALL display what to expect when visiting on the Visit Us page

### Requirement 6: Location Map Integration

**User Story:** As a visitor, I want to see a map of the church location, so that I can easily find the physical address.

#### Acceptance Criteria

1. THE Website SHALL embed an interactive location map on the Visit Us page
2. WHEN a Visitor views the Visit Us page, THE Website SHALL display the church location on the embedded map
3. THE Website SHALL use Google Maps or an equivalent mapping service for the embedded map
4. WHEN a Visitor interacts with the map, THE Website SHALL allow zooming and panning

### Requirement 7: Events and Announcements Display

**User Story:** As a visitor, I want to see upcoming events and church announcements, so that I can stay informed about what's happening.

#### Acceptance Criteria

1. THE Website SHALL provide an Events & News page
2. THE Website SHALL display a list of upcoming events on the Events & News page
3. THE Website SHALL display church announcements on the Events & News page
4. WHEN an event or announcement is displayed, THE Website SHALL show the title, date, and description
5. THE Website SHALL display events in chronological order with nearest events first

### Requirement 8: Ministries Page

**User Story:** As a visitor, I want to learn about different ministries, so that I can find ways to get involved.

#### Acceptance Criteria

1. THE Website SHALL provide a Ministries page
2. THE Website SHALL display a list of church ministries on the Ministries page
3. WHEN a Ministry is displayed, THE Website SHALL show the ministry name and description
4. THE Website SHALL organize ministries in a clear, browsable format

### Requirement 9: Contact Page

**User Story:** As a visitor, I want to find contact information, so that I can reach out to the church.

#### Acceptance Criteria

1. THE Website SHALL provide a Contact page
2. THE Website SHALL display the church phone number on the Contact page
3. THE Website SHALL display the church email address on the Contact page
4. THE Website SHALL display the church physical address on the Contact page
5. THE Website SHALL display church office hours on the Contact page

### Requirement 10: Facebook Integration

**User Story:** As a visitor, I want to see the church's Facebook posts, so that I can stay connected with the church community.

#### Acceptance Criteria

1. THE Website SHALL embed the church Facebook feed on at least one page
2. WHEN a Visitor views a page with the Facebook_Feed, THE Website SHALL display recent Facebook posts from the church's Facebook page
3. THE Website SHALL use Facebook's official embed mechanism for displaying the feed
4. IF the Facebook feed fails to load, THEN THE Website SHALL display a fallback message with a link to the Facebook page

### Requirement 11: Google Sheets Content Management

**User Story:** As a content editor, I want to edit website content through Google Sheets, so that I can use a familiar tool without learning new software.

#### Acceptance Criteria

1. THE Website SHALL integrate with Google_Sheet for content editing
2. THE Website SHALL allow authorized Content_Editors to modify content by editing the Google_Sheet
3. THE Website SHALL support at least 3 simultaneous Content_Editors accessing the Google_Sheet
4. WHEN a Content_Editor saves changes in the Google_Sheet, THE Website SHALL reflect those changes on the public site within the Cache_Refresh_Interval
5. THE Google_Sheet SHALL provide a familiar spreadsheet interface requiring no technical training

### Requirement 12: Content Types in Google Sheets

**User Story:** As a content editor, I want to manage different types of content in organized sheets, so that I can update events, ministries, and page content independently.

#### Acceptance Criteria

1. THE Google_Sheet SHALL contain separate sheets (tabs) for different content types
2. THE Google_Sheet SHALL include a sheet for Event records with columns for title, date, description, and Published_Flag
3. THE Google_Sheet SHALL include a sheet for Ministry records with columns for name, description, and Published_Flag
4. THE Google_Sheet SHALL include sheets for page content (Home, About Us, Visit Us, Contact) with appropriate content fields
5. WHEN a Content_Editor creates an Event row, THE Google_Sheet SHALL require title, date, and description columns
6. WHEN a Content_Editor creates a Ministry row, THE Google_Sheet SHALL require name and description columns

### Requirement 13: Visual Design System

**User Story:** As a visitor, I want a cohesive visual experience, so that the website feels professional and trustworthy.

#### Acceptance Criteria

1. THE Website SHALL use shadcn/ui components for UI elements
2. THE Website SHALL apply the Brand_Color_Palette consistently across all pages
3. THE Website SHALL use Primary_Red (#f73c4a) for primary call-to-action buttons and key emphasis elements
4. THE Website SHALL use Light_Neutral (#f5f4f2) for page backgrounds and light surface areas
5. THE Website SHALL use Dark_Gray (#353533) for body text and dark surface areas
6. THE Website SHALL use Yellow_Gold (#efe10f) for accent elements and highlights
7. THE Website SHALL implement bold, confident typography throughout the site
8. THE Website SHALL maintain generous whitespace in layouts following simple, uncluttered design principles
9. THE Website SHALL use high-quality hero imagery where appropriate
10. THE Website SHALL apply consistent typography, spacing, and layout patterns across all pages
11. THE Website SHALL follow a simple, modern aesthetic inspired by Elevation Church and Assemblies of God design approaches
12. THE Website SHALL maintain visual consistency between all 6 pages

### Requirement 14: Performance Standards

**User Story:** As a visitor, I want the website to load quickly, so that I can access information without delay.

#### Acceptance Criteria

1. THE Website SHALL achieve a Lighthouse performance score of 90 or above
2. WHEN a Visitor navigates to any page, THE Website SHALL display initial content within 2 seconds on a standard broadband connection
3. THE Website SHALL optimize images for web delivery
4. THE Website SHALL minimize JavaScript bundle size
5. THE Website SHALL use Next.js static generation or server-side rendering for optimal performance

### Requirement 15: Search Engine Optimization

**User Story:** As a potential visitor, I want to find the church website through search engines, so that I can discover MTC AG online.

#### Acceptance Criteria

1. THE Website SHALL include meta titles and descriptions for all 6 pages
2. THE Website SHALL generate a sitemap.xml file
3. THE Website SHALL include structured data markup for church information
4. THE Website SHALL use semantic HTML elements for content structure
5. THE Website SHALL achieve a Lighthouse SEO score of 90 or above

### Requirement 16: Accessibility Standards

**User Story:** As a visitor with disabilities, I want to access all website content, so that I can participate in church activities.

#### Acceptance Criteria

1. THE Website SHALL meet WCAG 2.1 Level AA accessibility standards
2. THE Website SHALL provide text alternatives for all images
3. THE Website SHALL support keyboard navigation for all interactive elements
4. THE Website SHALL maintain sufficient color contrast ratios for text
5. THE Website SHALL achieve a Lighthouse accessibility score of 90 or above
6. THE Website SHALL use semantic HTML and ARIA labels where appropriate

### Requirement 17: TypeScript Type Safety with Zod Validation

**User Story:** As a developer, I want type-safe code with runtime validation, so that I can catch errors during development and prevent invalid content from appearing on the website.

#### Acceptance Criteria

1. THE Website SHALL use TypeScript for all application code
2. THE Website SHALL define Zod Content_Schema for all content models (Events, Ministries, Page content)
3. THE Website SHALL define TypeScript types derived from Zod schemas for type safety
4. WHEN TypeScript compilation occurs, THE Website SHALL produce no type errors
5. THE Website SHALL use strict TypeScript compiler options
6. THE Website SHALL validate all content fetched from the Google_Sheet against the corresponding Content_Schema
7. WHEN content validation succeeds, THE Website SHALL infer TypeScript types from the Zod schema

### Requirement 18: Deployment and Hosting

**User Story:** As a church administrator, I want the website to be reliably hosted, so that visitors can always access it.

#### Acceptance Criteria

1. THE Website SHALL be deployed on Vercel
2. WHEN code changes are pushed to the main branch, THE Website SHALL automatically deploy to production
3. THE Website SHALL use HTTPS for all connections
4. THE Website SHALL maintain at least 99.9% uptime
5. THE Website SHALL use Vercel's CDN for global content delivery

### Requirement 19: Browser Compatibility

**User Story:** As a visitor, I want the website to work in my browser, so that I can access it regardless of my browser choice.

#### Acceptance Criteria

1. THE Website SHALL function correctly in the latest version of Google Chrome
2. THE Website SHALL function correctly in the latest version of Mozilla Firefox
3. THE Website SHALL function correctly in the latest version of Safari
4. THE Website SHALL function correctly in the latest version of Microsoft Edge
5. THE Website SHALL display a graceful degradation message for unsupported browsers

### Requirement 20: Error Handling

**User Story:** As a visitor, I want helpful error messages when something goes wrong, so that I understand what happened.

#### Acceptance Criteria

1. IF a page fails to load, THEN THE Website SHALL display a user-friendly error page
2. IF the Google_Sheet connection fails, THEN THE Website SHALL display cached content or a maintenance message
3. IF an embedded component (map or Facebook feed) fails to load, THEN THE Website SHALL display a fallback message
4. THE Website SHALL log errors to a monitoring service for developer review
5. THE Website SHALL display a 404 page for non-existent URLs

### Requirement 21: Google Sheets API Integration

**User Story:** As a system administrator, I want secure access to the Google Sheet, so that content can be fetched without exposing credentials.

#### Acceptance Criteria

1. THE Website SHALL authenticate with the Sheets_API using a service account
2. THE Website SHALL fetch content from the Google_Sheet using the Sheets_API
3. THE Website SHALL store API credentials securely as environment variables
4. THE Website SHALL request read-only access to the Google_Sheet
5. IF the Sheets_API request fails, THEN THE Website SHALL retry up to 3 times with exponential backoff
6. IF all retry attempts fail, THEN THE Website SHALL serve content from the Content_Cache
7. THE Website SHALL log API errors for monitoring and debugging

### Requirement 22: Content Validation with Zod

**User Story:** As a developer, I want to validate content structure at runtime, so that invalid data never reaches the public website.

#### Acceptance Criteria

1. THE Website SHALL define a Content_Schema for each content type using Zod
2. WHEN content is fetched from the Google_Sheet, THE Website SHALL validate each Content_Row against its Content_Schema
3. IF a Content_Row fails validation, THEN THE Website SHALL log the validation error and exclude that row from the public site
4. IF a Content_Row passes validation, THEN THE Website SHALL include it in the Content_Cache
5. THE Website SHALL validate data types (string, number, date) according to the Content_Schema
6. THE Website SHALL validate required fields according to the Content_Schema
7. WHEN validation fails, THE Website SHALL generate a descriptive error message indicating which field failed and why

### Requirement 23: Content Caching and Refresh Strategy

**User Story:** As a system administrator, I want efficient content delivery, so that the website performs well without excessive API calls.

#### Acceptance Criteria

1. THE Website SHALL maintain a Content_Cache for validated content
2. THE Website SHALL refresh the Content_Cache every 5 minutes (Cache_Refresh_Interval)
3. WHEN the Cache_Refresh_Interval elapses, THE Website SHALL fetch new content from the Google_Sheet
4. THE Website SHALL serve all public requests from the Content_Cache without making API calls per request
5. IF the cache refresh fails, THEN THE Website SHALL continue serving the existing Content_Cache
6. THE Website SHALL log cache refresh operations for monitoring
7. WHEN the Website restarts, THE Website SHALL immediately fetch content to populate the Content_Cache

### Requirement 24: Content Publishing Workflow

**User Story:** As a content editor, I want to control when content goes live, so that I can prepare content in advance and publish when ready.

#### Acceptance Criteria

1. THE Google_Sheet SHALL include a Published_Flag column for each content type
2. THE Website SHALL only display Content_Rows where the Published_Flag is TRUE
3. WHEN a Content_Editor sets the Published_Flag to FALSE, THE Website SHALL exclude that Content_Row from the public site after the next cache refresh
4. WHEN a Content_Editor sets the Published_Flag to TRUE, THE Website SHALL include that Content_Row on the public site after the next cache refresh (if validation passes)
5. THE Website SHALL treat missing or invalid Published_Flag values as FALSE
6. THE Website SHALL allow Content_Editors to prepare unpublished content without affecting the live site

### Requirement 25: Code Modularity and Component Reusability

**User Story:** As a developer, I want a modular codebase with reusable components, so that I can maintain and extend the website efficiently as the church's needs evolve.

#### Acceptance Criteria

1. THE Website SHALL implement all repeated UI elements as Reusable_Components
2. WHEN a UI element appears in multiple locations, THE Website SHALL use a single Reusable_Component implementation for all instances
3. THE Website SHALL follow the DRY_Principle such that modifying a visual or functional element requires changes in only one location
4. THE Website SHALL organize code into reasonably-sized modules with each module focused on a single responsibility
5. THE Website SHALL ensure no individual module exceeds 500 lines of code unless justified by architectural necessity
6. WHEN a visual element needs to change, THE Website SHALL require modification in only one component file
7. THE Website SHALL use component composition to build complex UIs from simpler Reusable_Components