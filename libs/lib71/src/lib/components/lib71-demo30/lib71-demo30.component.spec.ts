import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo30Component } from './lib71-demo30.component';

describe('Lib71Demo30Component', () => {
  let component: Lib71Demo30Component;
  let fixture: ComponentFixture<Lib71Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
