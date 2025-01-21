import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo6Component } from './lib74-demo6.component';

describe('Lib74Demo6Component', () => {
  let component: Lib74Demo6Component;
  let fixture: ComponentFixture<Lib74Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
