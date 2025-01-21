import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo30Component } from './lib13-demo30.component';

describe('Lib13Demo30Component', () => {
  let component: Lib13Demo30Component;
  let fixture: ComponentFixture<Lib13Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
