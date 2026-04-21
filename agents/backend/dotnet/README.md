#  .NET AI Agents - Professional Backend Development

A curated collection of specialized AI agents for .NET backend development, featuring expert-level knowledge in C#, ASP.NET Core, Entity Framework, and security best practices.

##  Overview

This repository contains 11 production-ready AI agents designed to assist with enterprise-grade .NET backend development. Each agent is carefully crafted with deep domain expertise, modern best practices, and professional standards for C# and ASP.NET Core development.

## ️ Agent Categories

###  Backend Development (9 Agents)

#### 1. API Designer
**Expert ASP.NET Core API architect for RESTful design**

- **File**: `backend/development/api-designer.md`
- **Model**: Claude Sonnet 4.5
- **Expertise**: REST API design, DTOs, OpenAPI/Swagger documentation, API versioning
- **Use Cases**: Design endpoints, create API contracts, plan integrations, define response models

#### 2. Solution Architect
**Expert .NET solution architect for project structure and organization**

- **File**: `backend/development/architect.md`
- **Model**: Claude Sonnet 4.5
- **Expertise**: Solution design, dependency management, architectural patterns, project organization
- **Use Cases**: Create solutions, organize projects, design architecture, plan technology stack

#### 3. Bug Hunter
**Expert C# debugging specialist**

- **File**: `backend/development/bug-hunter.md`
- **Model**: Claude Sonnet 4.5
- **Expertise**: Stack trace analysis, async debugging, memory issues, threading problems
- **Use Cases**: Debug errors, analyze exceptions, solve runtime problems, fix deadlocks

#### 4. Code Optimizer
**C# performance optimization specialist**

- **File**: `backend/development/code-optimizer.md`
- **Model**: Claude Sonnet 4.5
- **Expertise**: LINQ optimization, memory allocation reduction, async performance, profiling
- **Use Cases**: Improve performance, reduce memory usage, optimize hot paths, profile bottlenecks

#### 5. Data Modeler
**Expert Entity Framework data architect**

- **File**: `backend/development/data-modeler.md`
- **Model**: Claude Sonnet 4.5
- **Expertise**: Domain modeling, EF Core configuration, database design, relationships
- **Use Cases**: Design entities, configure relationships, create migrations, plan schemas

#### 6. .NET Developer
**Expert .NET developer for implementing C# code**

- **File**: `backend/development/developer.md`
- **Model**: Claude Sonnet 4.5
- **Expertise**: Modern C# (12+), SOLID principles, design patterns, async/await
- **Use Cases**: Write clean code, implement business logic, follow best practices, refactor

#### 7. Documentation Writer
**.NET documentation specialist**

- **File**: `backend/development/documentation-writter.md`
- **Model**: Claude Sonnet 4.5
- **Expertise**: XML documentation, API docs, README files, technical writing
- **Use Cases**: Create documentation, write XML comments, maintain project docs

#### 8. EF Core Expert
**Entity Framework specialist for data access**

- **File**: `backend/development/ef-core-expert.md`
- **Model**: Claude Sonnet 4.5
- **Expertise**: EF migrations, LINQ queries, DbContext configuration, code-first approach
- **Use Cases**: Manage migrations, optimize queries, configure entities, handle relationships

#### 9. Problem Solver
**Expert problem-solving analyst for complex technical challenges**

- **File**: `backend/development/problem-solver.md`
- **Model**: Claude Sonnet 4.5
- **Expertise**: Problem decomposition, solution generation, trade-off analysis, decision-making
- **Use Cases**: Analyze complex problems, evaluate solutions, make technical decisions

###  Security (2 Agents)

#### 1. Backend Security Coder
**Expert in secure backend coding practices**

- **File**: `backend/security/backend-security-coder.md`
- **Model**: Claude Sonnet 4.5
- **Expertise**: Input validation, authentication, API security, CSRF protection, SQL injection prevention
- **Use Cases**: Implement secure code, fix vulnerabilities, secure APIs, validate inputs
- **Proactive**: Use automatically for security implementations and code reviews

#### 2. Security Auditor
**Expert security auditor for DevSecOps and compliance**

- **File**: `backend/security/security-auditor.md`
- **Model**: Claude Sonnet 4.5
- **Expertise**: Security audits, OWASP, compliance (GDPR/HIPAA/SOC2), threat modeling, DevSecOps
- **Use Cases**: Conduct audits, implement DevSecOps pipelines, ensure compliance, threat analysis
- **Proactive**: Use automatically for security audits and compliance reviews

##  Quick Start

### Using Agents with Claude

1. **Select the appropriate agent** based on your development task
2. **Load the agent markdown file** into your Claude conversation
3. **Provide clear context** about your project, requirements, and constraints
4. **Follow the agent's methodology** and structured approach
5. **Apply the recommendations** with provided code examples

### Agent Selection Guide

| Development Task | Recommended Agent |
|------------------|-------------------|
| Designing REST APIs | API Designer |
| Creating new .NET solution | Solution Architect |
| Debugging C# issues | Bug Hunter |
| Performance optimization | Code Optimizer |
| Database design & modeling | Data Modeler |
| Writing C# business logic | .NET Developer |
| Creating documentation | Documentation Writer |
| EF Core & migrations | EF Core Expert |
| Complex problem analysis | Problem Solver |
| Secure code implementation | Backend Security Coder |
| Security audits & compliance | Security Auditor |

##  Agent Capabilities

All agents provide:

-  **Expert-level knowledge** in .NET and C# ecosystem
-  **Best practices** following Microsoft recommended patterns
-  **Actionable guidance** with complete code examples
-  **Clear methodology** and structured implementation approach
-  **Quality assurance** focus with validation strategies
-  **Production-ready** recommendations for enterprise applications

##  Development Standards

### Code Quality
- Clean, maintainable code following SOLID principles
- Comprehensive error handling and structured logging
- Proper dependency injection with appropriate service lifetimes
- Modern C# features (records, pattern matching, nullable reference types)
- Zero tolerance for compiler warnings and code analyzer issues

### Architecture
- Clean Architecture or layered architecture patterns
- Clear separation of concerns across layers
- Testable code design with mockable dependencies
- Performance considerations in critical paths
- Security-first approach in all implementations

### Testing
- Unit tests for business logic and services
- Integration tests for data access and APIs
- Proper test isolation with mocking frameworks
- Comprehensive test coverage for critical paths

### Documentation
- XML documentation for all public APIs
- Clear README files with setup instructions
- Code examples and common usage scenarios
- Architecture decision records (ADRs) for key decisions

## ️ Technology Stack

### .NET Ecosystem
- **Language**: C# 12+
- **Framework**: .NET 8/9
- **Web**: ASP.NET Core (Minimal APIs or Controllers)
- **Data Access**: Entity Framework Core
- **Testing**: xUnit, NUnit, MSTest, Moq, NSubstitute
- **Logging**: Serilog, NLog, Microsoft.Extensions.Logging

### Architecture Patterns
- Clean Architecture
- Repository Pattern
- Unit of Work Pattern
- CQRS (when appropriate)
- Mediator Pattern (MediatR)
- Dependency Injection

### Security
- OWASP Top 10 compliance
- OAuth 2.0/2.1, OpenID Connect
- JWT authentication and authorization
- Input validation and sanitization
- CSRF and XSS protection
- SQL injection prevention

##  Best Practices

### When Using Agents

1. **Be specific** about requirements, constraints, and existing architecture
2. **Provide context** about your codebase, team size, and deployment environment
3. **Ask for clarification** when recommendations seem unclear or incomplete
4. **Validate suggestions** against your specific project needs and standards
5. **Test implementations** thoroughly before deploying to production
6. **Review security** implications of all changes

### Agent Combinations

Some tasks benefit from multiple agents working together:

- **API Development**: API Designer → .NET Developer → Backend Security Coder
- **New Project Setup**: Solution Architect → Data Modeler → .NET Developer
- **Bug Investigation**: Bug Hunter → Code Optimizer → .NET Developer
- **Security Implementation**: Security Auditor → Backend Security Coder → Documentation Writer
- **Performance Tuning**: Code Optimizer → EF Core Expert → .NET Developer
- **Data Layer**: Data Modeler → EF Core Expert → .NET Developer

##  Common Workflows

### Creating a New Microservice
```
1. Solution Architect → Define project structure
2. API Designer → Design API contracts and endpoints
3. Data Modeler → Design domain entities and database schema
4. .NET Developer → Implement business logic and services
5. EF Core Expert → Configure EF Core and migrations
6. Backend Security Coder → Add authentication and validation
7. Documentation Writer → Create API documentation
8. Security Auditor → Review security implementation
```

### Debugging Production Issue
```
1. Bug Hunter → Analyze error logs and stack traces
2. Problem Solver → Identify root cause and potential solutions
3. .NET Developer → Implement fix following best practices
4. Code Optimizer → Verify performance impact
5. Documentation Writer → Document issue and resolution
```

### Performance Optimization
```
1. Code Optimizer → Profile and identify bottlenecks
2. EF Core Expert → Optimize database queries
3. .NET Developer → Refactor code for efficiency
4. Bug Hunter → Verify no regressions introduced
```

##  Contributing

This is a professionally curated collection maintained with:

- Up-to-date .NET and C# best practices
- Latest framework versions and features
- Industry standards compliance
- Real-world enterprise applicability
- Community feedback integration

##  License

MIT License - See [LICENSE](LICENSE) file for details

##  Related Resources

### Official Documentation
- [ASP.NET Core Documentation](https://docs.microsoft.com/aspnet/core)
- [Entity Framework Core Documentation](https://docs.microsoft.com/ef/core)
- [C# Language Documentation](https://docs.microsoft.com/dotnet/csharp)
- [.NET API Browser](https://docs.microsoft.com/dotnet/api)

### Learning Resources
- [Microsoft Learn - .NET](https://learn.microsoft.com/dotnet)
- [Clean Architecture by Uncle Bob](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [OWASP Guidelines](https://owasp.org)

### Tools
- [Visual Studio](https://visualstudio.microsoft.com)
- [Visual Studio Code](https://code.visualstudio.com)
- [JetBrains Rider](https://www.jetbrains.com/rider)
- [dotnet CLI](https://docs.microsoft.com/dotnet/core/tools)

##  Key Features

- **11 Specialized Agents** covering all aspects of .NET backend development
- **Production-Ready** guidance for enterprise applications
- **Security-First** approach with dedicated security agents
- **Best Practices** following Microsoft recommended patterns
- **Modern C#** leveraging latest language features
- **Comprehensive Coverage** from architecture to deployment

---

**Made with expertise for professional .NET backend development** 

**Model**: Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)
