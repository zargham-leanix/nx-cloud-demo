import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo6Component } from './lib41-demo6.component';

describe('Lib41Demo6Component', () => {
  let component: Lib41Demo6Component;
  let fixture: ComponentFixture<Lib41Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
