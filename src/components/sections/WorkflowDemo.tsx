import { ArrowRight, Copy, AlertTriangle, CheckCircle, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const WorkflowDemo = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See the <span className="text-gradient">Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how OpsFoundry turns hours of manual work into seconds of automation
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Before/After Container */}
          <div className="workflow-container relative">
            {/* Before State */}
            <div className="workflow-before absolute inset-0 z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <AlertTriangle className="h-8 w-8 text-destructive mr-3" />
                    <h3 className="text-2xl font-bold text-destructive">Before OpsFoundry</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <Card className="p-4 border-destructive/20 bg-destructive/5">
                      <div className="flex items-center space-x-3">
                        <Copy className="h-5 w-5 text-destructive" />
                        <span className="text-sm">Copy data from Google Analytics</span>
                      </div>
                    </Card>
                    <div className="flex justify-center">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <Card className="p-4 border-destructive/20 bg-destructive/5">
                      <div className="flex items-center space-x-3">
                        <Copy className="h-5 w-5 text-destructive" />
                        <span className="text-sm">Paste into spreadsheet</span>
                      </div>
                    </Card>
                    <div className="flex justify-center">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <Card className="p-4 border-destructive/20 bg-destructive/5">
                      <div className="flex items-center space-x-3">
                        <Copy className="h-5 w-5 text-destructive" />
                        <span className="text-sm">Format for presentation</span>
                      </div>
                    </Card>
                    <div className="flex justify-center">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <Card className="p-4 border-destructive/20 bg-destructive/5">
                      <div className="flex items-center space-x-3">
                        <Copy className="h-5 w-5 text-destructive" />
                        <span className="text-sm">Send via Slack</span>
                      </div>
                    </Card>
                  </div>
                  
                  <div className="mt-6 p-4 bg-destructive/10 rounded-lg">
                    <p className="text-sm text-destructive font-medium">⏱️ Time spent: 45 minutes every week</p>
                    <p className="text-xs text-destructive/80 mt-1">Prone to errors, manual labor, frustrating</p>
                  </div>
                </div>
                
                <div className="hidden md:block">
                  <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-2xl p-8 border border-destructive/20">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle className="h-12 w-12 text-destructive" />
                      </div>
                      <h4 className="text-lg font-semibold text-destructive mb-2">Manual Process</h4>
                      <p className="text-sm text-destructive/80">Repetitive, error-prone, time-consuming</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* After State */}
            <div className="workflow-after">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <CheckCircle className="h-8 w-8 text-success mr-3" />
                    <h3 className="text-2xl font-bold text-success">After OpsFoundry</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <Card className="p-6 border-success/20 bg-success/5">
                      <div className="flex items-center space-x-3">
                        <Zap className="h-6 w-6 text-success" />
                        <div>
                          <div className="font-semibold text-success">Analytics Report Recipe</div>
                          <div className="text-sm text-success/80">Automated weekly dashboard</div>
                        </div>
                      </div>
                    </Card>
                    
                    <div className="text-center py-4">
                      <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm font-medium text-success">Fully Automated</span>
                      </div>
                    </div>
                    
                    <Card className="p-4 border-success/20 bg-success/5">
                      <p className="text-sm text-success text-center">✨ Data automatically pulled, formatted, and delivered to Slack every Monday at 9 AM</p>
                    </Card>
                  </div>
                  
                  <div className="mt-6 p-4 bg-success/10 rounded-lg">
                    <p className="text-sm text-success font-medium">🚀 Time spent: 30 seconds to set up once</p>
                    <p className="text-xs text-success/80 mt-1">Reliable, consistent, delightful</p>
                  </div>
                </div>
                
                <div className="hidden md:block">
                  <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-2xl p-8 border border-success/20">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="h-12 w-12 text-success" />
                      </div>
                      <h4 className="text-lg font-semibold text-success mb-2">OpsFoundry Recipe</h4>
                      <p className="text-sm text-success/80">Automated, reliable, scalable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hover instruction */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              <span className="hidden md:inline">Hover above to see the transformation</span>
              <span className="md:hidden">Tap above to see the transformation</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowDemo;