import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo6Component } from './lib63-demo6.component';

describe('Lib63Demo6Component', () => {
  let component: Lib63Demo6Component;
  let fixture: ComponentFixture<Lib63Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
