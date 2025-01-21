import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo25Component } from './lib56-demo25.component';

describe('Lib56Demo25Component', () => {
  let component: Lib56Demo25Component;
  let fixture: ComponentFixture<Lib56Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
