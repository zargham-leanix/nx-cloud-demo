import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo6Component } from './lib58-demo6.component';

describe('Lib58Demo6Component', () => {
  let component: Lib58Demo6Component;
  let fixture: ComponentFixture<Lib58Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
