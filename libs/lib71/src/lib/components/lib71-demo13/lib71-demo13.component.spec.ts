import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo13Component } from './lib71-demo13.component';

describe('Lib71Demo13Component', () => {
  let component: Lib71Demo13Component;
  let fixture: ComponentFixture<Lib71Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
