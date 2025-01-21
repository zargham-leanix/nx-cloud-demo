import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo6Component } from './lib80-demo6.component';

describe('Lib80Demo6Component', () => {
  let component: Lib80Demo6Component;
  let fixture: ComponentFixture<Lib80Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
