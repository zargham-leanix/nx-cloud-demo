import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo30Component } from './lib87-demo30.component';

describe('Lib87Demo30Component', () => {
  let component: Lib87Demo30Component;
  let fixture: ComponentFixture<Lib87Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
