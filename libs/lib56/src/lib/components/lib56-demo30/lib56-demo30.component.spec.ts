import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo30Component } from './lib56-demo30.component';

describe('Lib56Demo30Component', () => {
  let component: Lib56Demo30Component;
  let fixture: ComponentFixture<Lib56Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
