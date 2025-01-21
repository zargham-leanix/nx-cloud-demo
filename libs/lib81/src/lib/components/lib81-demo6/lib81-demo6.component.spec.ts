import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo6Component } from './lib81-demo6.component';

describe('Lib81Demo6Component', () => {
  let component: Lib81Demo6Component;
  let fixture: ComponentFixture<Lib81Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
