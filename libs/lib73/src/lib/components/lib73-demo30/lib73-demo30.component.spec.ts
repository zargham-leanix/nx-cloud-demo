import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo30Component } from './lib73-demo30.component';

describe('Lib73Demo30Component', () => {
  let component: Lib73Demo30Component;
  let fixture: ComponentFixture<Lib73Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
