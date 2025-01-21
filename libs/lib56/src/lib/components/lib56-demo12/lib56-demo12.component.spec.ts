import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo12Component } from './lib56-demo12.component';

describe('Lib56Demo12Component', () => {
  let component: Lib56Demo12Component;
  let fixture: ComponentFixture<Lib56Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
