import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo11Component } from './lib56-demo11.component';

describe('Lib56Demo11Component', () => {
  let component: Lib56Demo11Component;
  let fixture: ComponentFixture<Lib56Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
