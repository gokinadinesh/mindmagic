# Student Mental Health Early Warning System (SMHEWS)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## 🎯 Overview

A **privacy-first** web application designed to monitor, analyze, and support student mental health in educational institutions. The system employs anonymous tracking, real-time risk assessment, and counselor intervention capabilities to provide early warnings for students at risk.

## ✨ Key Features

### 🔒 **Privacy & Security**
- **Anonymous Student Monitoring**: Real IDs converted to anonymous identifiers
- **Local Data Storage**: IndexedDB-based offline-first architecture
- **GDPR/FERPA Compliant**: Built with privacy-by-design principles
- **End-to-End Encryption Ready**: Architecture supports full encryption

### 📊 **Risk Detection**
- **AI-Driven Risk Assessment**: Multi-factor algorithm analyzing attendance, activity, and mood patterns
- **Real-time Alert System**: Automatic notifications for high/medium risk students
- **Pattern Recognition**: Identifies consecutive negative moods and behavioral changes
- **Customizable Thresholds**: Adjustable risk parameters for different institutions

### 👥 **Multi-Role System**
- **Student Portal**: Anonymous daily mood check-ins
- **Counselor Dashboard**: Professional interface for intervention management
- **Administrator Panel**: System configuration and analytics
- **Role-Based Access**: Secure permission system

### 📈 **Data Visualization**
- **Interactive Dashboard**: Real-time statistics and charts
- **Pie Charts & Progress Rings**: Visual representation of mental health trends
- **Risk Distribution Graphs**: Campus-wide overview of student well-being
- **Export-Ready Reports**: Data available for institutional analysis

## 🚀 Quick Start

### Prerequisites
- **Node.js** >= 16.0.0
- **Modern web browser** (Chrome 88+, Firefox 85+, Safari 14+)
- **Internet connection** (for initial setup)

### Installation

```bash
# 1. Clone or extract the project files
git clone https://github.com/yourusername/mental-health-system.git

# 2. Navigate to project directory
cd mental-health-system

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Open your browser and navigate to:
# http://localhost:3000
```

### Default Login Credentials

| Role | Email | Password |
|------|-------|----------|
| Student | `student@college.edu` | `password123` |
| Counselor | `counselor@college.edu` | `password123` |
| Administrator | `admin@college.edu` | `password123` |

## 📖 User Guides

### For Students
1. **Daily Check-in**: Submit anonymous mood reports
2. **Privacy Assurance**: Your identity is protected with anonymous IDs
3. **Optional Notes**: Share additional context if comfortable
4. **Stress Tracking**: Monitor your well-being over time

### For Counselors
1. **Dashboard Overview**: View campus-wide mental health statistics
2. **Risk Alerts**: Identify students needing immediate attention
3. **Pattern Analysis**: View individual student behavioral patterns
4. **Intervention Planning**: Track and manage student support cases

### For Administrators
1. **System Configuration**: Adjust risk thresholds and alert settings
2. **User Management**: Add/remove students and counselors
3. **Analytics**: Generate reports on campus mental health trends
4. **System Monitoring**: Track usage and system performance

## 🏗️ System Architecture

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js with Express.js
- **Database**: IndexedDB (client-side), MongoDB-ready architecture
- **Styling**: CSS Grid, Flexbox, CSS Custom Properties

### Data Flow
```
Student Check-in → Local Storage → Risk Algorithm → Alert Generation → Counselor Dashboard
```

### Database Schema
- **Students Store**: Anonymous profiles with risk assessments
- **Mood Check-ins**: Daily emotional state recordings
- **Alerts Store**: Risk notifications for counselors
- **Counselors Store**: Mental health professional directory
- **Settings Store**: System configuration

## 🧠 Risk Assessment Algorithm

The system evaluates student risk based on multiple factors:

| Factor | Weight | Risk Indicators |
|--------|--------|-----------------|
| **Attendance** | 40 points | <60%: Critical, 60-69%: High, 70-75%: Moderate |
| **Activity Participation** | 35 points | <50%: Very Low, 51-69%: Declining, 70-74%: Low |
| **Consecutive Negative Moods** | 30 points | ≥3: High Risk, 2: Moderate Risk |

### Risk Classification
- **High Risk** (≥70 points): Immediate intervention required
- **Medium Risk** (40-69 points): Monitor closely
- **Low Risk** (<40 points): Regular check-ins sufficient

## 🔧 Configuration & Customization

### Alert Thresholds
Adjust in Settings → Alert Thresholds:
- Consecutive negative check-ins (default: 3)
- Attendance drop threshold (default: 20%)
- Activity withdrawal period (default: 3 days)

### Notification Settings
- Email alerts for high-risk students
- Daily summary reports
- SMS alerts for critical cases (optional)

## 📱 Responsive Design

The system is fully responsive and works on:
- **Desktop**: Optimal dashboard experience
- **Tablet**: Adapted layout for medium screens
- **Mobile**: Simplified interface for on-the-go access

## 🚨 Emergency Features

### Immediate Actions
1. **High Priority Alerts**: Red-flagged in counselor dashboard
2. **Student Pattern View**: Quick access to behavioral history
3. **Counselor Directory**: Contact information for immediate support
4. **Anonymous Reporting**: Students can report concerns without identification

### Crisis Resources
- Built-in counselor contact system
- Emergency contact information
- Anonymous reporting channels
- Quick access to campus mental health services

## 📊 Analytics & Reporting

### Available Metrics
- **Mood Distribution**: Campus-wide emotional state analysis
- **Attendance Trends**: Weekly/monthly patterns
- **Activity Participation**: Engagement levels across campus
- **Risk Distribution**: High/medium/low risk student counts

### Export Options
- **Dashboard Data**: Real-time statistics export
- **Student Reports**: Anonymous aggregate data
- **Counselor Activity**: Intervention tracking
- **System Logs**: Audit trails for compliance

## 🔒 Privacy & Compliance

### Data Protection
- **Anonymous IDs**: Real student identities never exposed
- **Local Storage**: Data remains on user's device
- **Encryption Ready**: Architecture supports full encryption
- **Automatic Cleanup**: Old data automatically purged

### Compliance Standards
- **FERPA**: Educational records protection
- **GDPR**: European data protection standards
- **HIPAA**: Health information privacy considerations
- **Institutional Policies**: Customizable to local requirements

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on:
- Code standards and conventions
- Pull request process
- Testing requirements
- Documentation updates

### Development Setup
```bash
# Install development dependencies
npm install

# Run in development mode with auto-reload
npm run dev

# Run tests (when available)
npm test
```

## 🐛 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| **Server not starting** | Check if port 3000 is available |
| **Database errors** | Clear browser IndexedDB storage |
| **Login failures** | Verify credentials or reset mock users |
| **Chart display issues** | Update browser or disable extensions |

### Debug Mode
Enable console logging by setting:
```javascript
localStorage.setItem('debugMode', 'true');
```

## 📞 Support & Resources

### Immediate Help
- **Campus Counseling Services**: [Your Campus Contact]
- **Crisis Hotline**: 988 (National Suicide Prevention Lifeline)
- **Emergency Services**: 911

### Technical Support
- **Issue Tracker**: [GitHub Issues](https://github.com/gokinadinesh/mental-health-system)
- **Documentation**: [Full Documentation](https://docs.google.com/document/d/1M-EzEbLbKl4TnYzpfQCoF5hqVPKiUy0-r0bPg7gsPU0/edit?tab=t.0)
- **Email Support**: support@college.edu
- **Training Materials**: Available for counselors and administrators

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### Third-Party Dependencies
- **Express.js**: Web application framework
- **Mongoose**: MongoDB object modeling
- **bcryptjs**: Password hashing
- **jsonwebtoken**: Authentication tokens
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## 🙏 Acknowledgments

### Development Team
- Frontend Development: UI/UX implementation
- Backend Architecture: Server and database design
- Algorithm Design: Risk assessment logic
- Security Implementation: Privacy protection features

### Professional Input
- Mental Health Professionals: Clinical validation
- Educational Psychologists: Behavioral pattern analysis
- Privacy Experts: Compliance guidance
- Student Representatives: User experience feedback

### Ethical Framework
- **Student Welfare First**: Prioritized over data collection
- **Transparent Operations**: Clear communication of system functions
- **Regular Ethical Reviews**: Quarterly assessment of system impact
- **Continuous Improvement**: Ongoing enhancement based on feedback

## 📈 Future Roadmap

### Planned Enhancements
- **Mobile Application**: React Native/Flutter implementation
- **Machine Learning**: Advanced prediction models
- **API Integration**: Connect with student information systems
- **Group Analytics**: Department/faculty-level insights
- **Multilingual Support**: Expand accessibility
- **Offline Mode**: Enhanced functionality without internet

### Research & Development
- Longitudinal studies on intervention effectiveness
- Peer-reviewed algorithm validation
- Cross-institutional data sharing (anonymous)
- Integration with academic performance metrics

---

## 🎯 Mission Statement

*"Empowering educational institutions to support student mental health through compassionate technology that respects privacy, provides timely interventions, and fosters well-being across campus communities."*

---

**System Version**: 1.0  
**Last Updated**: 2026  
**Documentation Status**: Active  
**Support Level**: Production Ready  

*For the latest updates, visit our [GitHub repository](https://github.com/gokinadinesh/mental-health-system)*
