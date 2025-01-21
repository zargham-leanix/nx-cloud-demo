import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo6Component } from './lib75-demo6.component';

describe('Lib75Demo6Component', () => {
  let component: Lib75Demo6Component;
  let fixture: ComponentFixture<Lib75Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
