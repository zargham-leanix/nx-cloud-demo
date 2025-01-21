import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo30Component } from './lib20-demo30.component';

describe('Lib20Demo30Component', () => {
  let component: Lib20Demo30Component;
  let fixture: ComponentFixture<Lib20Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
