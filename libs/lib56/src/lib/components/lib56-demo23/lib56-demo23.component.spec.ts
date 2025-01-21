import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo23Component } from './lib56-demo23.component';

describe('Lib56Demo23Component', () => {
  let component: Lib56Demo23Component;
  let fixture: ComponentFixture<Lib56Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
