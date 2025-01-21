import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo6Component } from './lib47-demo6.component';

describe('Lib47Demo6Component', () => {
  let component: Lib47Demo6Component;
  let fixture: ComponentFixture<Lib47Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
