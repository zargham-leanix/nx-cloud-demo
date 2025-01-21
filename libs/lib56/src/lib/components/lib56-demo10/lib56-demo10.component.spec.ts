import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo10Component } from './lib56-demo10.component';

describe('Lib56Demo10Component', () => {
  let component: Lib56Demo10Component;
  let fixture: ComponentFixture<Lib56Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
