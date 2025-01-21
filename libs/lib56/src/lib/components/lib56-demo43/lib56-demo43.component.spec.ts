import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo43Component } from './lib56-demo43.component';

describe('Lib56Demo43Component', () => {
  let component: Lib56Demo43Component;
  let fixture: ComponentFixture<Lib56Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
