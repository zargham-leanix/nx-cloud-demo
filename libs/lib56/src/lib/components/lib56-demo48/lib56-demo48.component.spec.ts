import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo48Component } from './lib56-demo48.component';

describe('Lib56Demo48Component', () => {
  let component: Lib56Demo48Component;
  let fixture: ComponentFixture<Lib56Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
