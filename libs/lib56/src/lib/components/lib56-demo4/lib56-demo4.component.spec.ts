import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo4Component } from './lib56-demo4.component';

describe('Lib56Demo4Component', () => {
  let component: Lib56Demo4Component;
  let fixture: ComponentFixture<Lib56Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
