import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo29Component } from './lib56-demo29.component';

describe('Lib56Demo29Component', () => {
  let component: Lib56Demo29Component;
  let fixture: ComponentFixture<Lib56Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
