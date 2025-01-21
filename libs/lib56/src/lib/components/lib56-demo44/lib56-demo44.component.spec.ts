import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo44Component } from './lib56-demo44.component';

describe('Lib56Demo44Component', () => {
  let component: Lib56Demo44Component;
  let fixture: ComponentFixture<Lib56Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
