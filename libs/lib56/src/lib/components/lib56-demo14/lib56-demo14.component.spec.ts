import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo14Component } from './lib56-demo14.component';

describe('Lib56Demo14Component', () => {
  let component: Lib56Demo14Component;
  let fixture: ComponentFixture<Lib56Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
