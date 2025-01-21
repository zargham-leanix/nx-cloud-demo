import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo30Component } from './lib4-demo30.component';

describe('Lib4Demo30Component', () => {
  let component: Lib4Demo30Component;
  let fixture: ComponentFixture<Lib4Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
