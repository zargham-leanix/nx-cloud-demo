import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo26Component } from './lib56-demo26.component';

describe('Lib56Demo26Component', () => {
  let component: Lib56Demo26Component;
  let fixture: ComponentFixture<Lib56Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
