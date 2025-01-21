import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo6Component } from './lib28-demo6.component';

describe('Lib28Demo6Component', () => {
  let component: Lib28Demo6Component;
  let fixture: ComponentFixture<Lib28Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
