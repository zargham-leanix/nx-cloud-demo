import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo13Component } from './lib56-demo13.component';

describe('Lib56Demo13Component', () => {
  let component: Lib56Demo13Component;
  let fixture: ComponentFixture<Lib56Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
