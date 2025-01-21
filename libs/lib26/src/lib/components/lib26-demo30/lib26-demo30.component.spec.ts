import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo30Component } from './lib26-demo30.component';

describe('Lib26Demo30Component', () => {
  let component: Lib26Demo30Component;
  let fixture: ComponentFixture<Lib26Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
