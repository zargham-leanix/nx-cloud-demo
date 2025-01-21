import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo27Component } from './lib56-demo27.component';

describe('Lib56Demo27Component', () => {
  let component: Lib56Demo27Component;
  let fixture: ComponentFixture<Lib56Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
