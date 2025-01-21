import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo30Component } from './lib18-demo30.component';

describe('Lib18Demo30Component', () => {
  let component: Lib18Demo30Component;
  let fixture: ComponentFixture<Lib18Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
