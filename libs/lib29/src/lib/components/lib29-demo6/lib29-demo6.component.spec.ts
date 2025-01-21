import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo6Component } from './lib29-demo6.component';

describe('Lib29Demo6Component', () => {
  let component: Lib29Demo6Component;
  let fixture: ComponentFixture<Lib29Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
