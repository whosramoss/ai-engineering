# .NET AI Agents - Backend

> Specialized AI agents for .NET backend development, organized by domain expertise.

##  Agent Organization

All agents are organized into specialized categories for easy discovery and use:

```
backend/
├── architecture/       # Solution design and architectural decisions
├── development/        # Code implementation and problem-solving
├── optimization/       # Performance and database optimization
├── documentation/      # Technical documentation and XML docs
└── security/          # Security auditing and implementation
```

## ️ Architecture Agents

Agents focused on high-level design, solution structure, and API design.

### [dotnet-solution-architect](architecture/dotnet-solution-architect.md)
**Expert .NET solution architect** for designing solution structures, project organization, dependency management, and architectural patterns.

**Use when you need to:**
- Create or reorganize .NET solutions
- Plan project structures
- Make architectural decisions
- Design dependency management strategies

---

### [dotnet-api-designer](architecture/dotnet-api-designer.md)
**Expert ASP.NET Core API architect** for designing RESTful endpoints, API contracts, DTOs, and OpenAPI documentation.

**Use when you need to:**
- Design or refactor API endpoints
- Create request/response models
- Plan API versioning strategies
- Design OpenAPI documentation

---

### [dotnet-data-architect](architecture/dotnet-data-architect.md)
**Expert Entity Framework data architect** for designing domain entities, database schemas, EF Core configurations, and data relationships.

**Use when you need to:**
- Design data models
- Plan database schemas
- Configure entity relationships
- Create migrations

---

##  Development Agents

Agents focused on code implementation, debugging, and problem-solving.

### [dotnet-code-implementer](development/dotnet-code-implementer.md)
**Expert .NET developer** for implementing C# code, business logic, service classes, and SOLID principles.

**Use when you need to:**
- Write or refactor C# code
- Implement business logic
- Follow modern conventions
- Apply design patterns

---

### [dotnet-debugger](development/dotnet-debugger.md)
**Expert C# debugging specialist** for identifying and fixing bugs, analyzing stack traces, debugging async issues, and solving runtime problems.

**Use when you need to:**
- Investigate errors or exceptions
- Debug unexpected behavior
- Analyze stack traces
- Fix async/await issues

---

### [dotnet-problem-analyst](development/dotnet-problem-analyst.md)
**Expert problem-solving analyst** for decomposing complex technical challenges, generating multiple solution approaches, and analyzing trade-offs.

**Use when you need to:**
- Analyze complex problems
- Evaluate different solutions
- Make technical decisions
- Assess trade-offs

---

##  Optimization Agents

Agents focused on performance improvement and database optimization.

### [dotnet-performance-optimizer](optimization/dotnet-performance-optimizer.md)
**C# performance optimization specialist** for improving code performance, reducing memory allocations, optimizing LINQ queries, and profiling bottlenecks.

**Use when you need to:**
- Improve performance
- Reduce memory usage
- Optimize hot paths
- Profile bottlenecks

---

### [dotnet-ef-specialist](optimization/dotnet-ef-specialist.md)
**Entity Framework specialist** for implementing EF Core operations, managing migrations, optimizing LINQ queries, and configuring DbContext.

**Use when you need to:**
- Work with EF Core migrations
- Implement data access patterns
- Optimize database queries
- Configure DbContext

---

##  Documentation Agents

Agents focused on creating comprehensive technical documentation.

### [dotnet-documentation-writer](documentation/dotnet-documentation-writer.md)
**.NET Documentation Specialist** for creating XML documentation, API docs, README files, and technical documentation.

**Use when you need to:**
- Write or improve documentation
- Add XML comments
- Create project documentation
- Document APIs

---

##  Security Agents

Agents focused on security auditing and secure code implementation.

### [dotnet-security-auditor](security/dotnet-security-auditor.md)
**Expert security auditor** specializing in DevSecOps, comprehensive cybersecurity, and compliance frameworks. Masters vulnerability assessment, threat modeling, secure authentication (OAuth2/OIDC), OWASP standards, cloud security, and security automation.

**Use PROACTIVELY for:**
- Security audits
- DevSecOps integration
- Compliance implementation
- Threat modeling
- Security architecture reviews

---

### [dotnet-security-implementer](security/dotnet-security-implementer.md)
**Expert in secure backend coding practices** specializing in input validation, authentication, and API security.

**Use PROACTIVELY for:**
- Backend security implementations
- Security code reviews
- Authentication system coding
- API security implementation
- Vulnerability fixes

---

##  Quick Reference

### When to Use Each Agent

| Task | Agent |
|------|-------|
| Design new solution structure | [dotnet-solution-architect](architecture/dotnet-solution-architect.md) |
| Design REST API endpoints | [dotnet-api-designer](architecture/dotnet-api-designer.md) |
| Design database schema | [dotnet-data-architect](architecture/dotnet-data-architect.md) |
| Implement C# code | [dotnet-code-implementer](development/dotnet-code-implementer.md) |
| Debug runtime issues | [dotnet-debugger](development/dotnet-debugger.md) |
| Analyze complex problems | [dotnet-problem-analyst](development/dotnet-problem-analyst.md) |
| Optimize performance | [dotnet-performance-optimizer](optimization/dotnet-performance-optimizer.md) |
| Work with EF Core | [dotnet-ef-specialist](optimization/dotnet-ef-specialist.md) |
| Write documentation | [dotnet-documentation-writer](documentation/dotnet-documentation-writer.md) |
| Security audit | [dotnet-security-auditor](security/dotnet-security-auditor.md) |
| Implement secure code | [dotnet-security-implementer](security/dotnet-security-implementer.md) |

---

##  Getting Started

1. **Identify your task** - What do you need to accomplish?
2. **Find the right agent** - Use the table above or browse by category
3. **Invoke the agent** - Use the agent name in your AI assistant
4. **Get expert help** - Receive specialized guidance for your task

---

##  Best Practices

### Use Multiple Agents
For complex projects, use multiple agents in sequence:
1. **Architecture agents** for design
2. **Development agents** for implementation
3. **Optimization agents** for performance
4. **Documentation agents** for docs
5. **Security agents** for security review

### Proactive Security
Always use security agents proactively:
- **Before deployment**: Run [dotnet-security-auditor](security/dotnet-security-auditor.md)
- **During development**: Use [dotnet-security-implementer](security/dotnet-security-implementer.md)
- **Regular reviews**: Schedule periodic security audits

### Consistent Architecture
Start every project with architecture agents:
- Define solution structure
- Design API contracts
- Plan data models

---

##  Additional Resources

- [.NET Documentation](https://docs.microsoft.com/dotnet/)
- [ASP.NET Core Documentation](https://docs.microsoft.com/aspnet/core/)
- [Entity Framework Core Documentation](https://docs.microsoft.com/ef/core/)
- [OWASP Guidelines](https://owasp.org/)

---

##  Contributing

To add new agents or improve existing ones:
1. Follow the established markdown structure
2. Include frontmatter with name, description, and model
3. Organize content with clear sections
4. Provide examples and use cases
5. Update this README

---

##  Author

**Gabriel Rocha**
- Email: gscrweb@gmail.com
- GitHub: [@gabrielscr](https://github.com/gabrielscr)

---

##  License

MIT License - Copyright (c) 2025 Gabriel Rocha

See the [LICENSE](../../LICENSE) file for details.

---

**Model**: Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)

**Last Updated**: October 2025


