import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo6Component } from './lib55-demo6.component';

describe('Lib55Demo6Component', () => {
  let component: Lib55Demo6Component;
  let fixture: ComponentFixture<Lib55Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
