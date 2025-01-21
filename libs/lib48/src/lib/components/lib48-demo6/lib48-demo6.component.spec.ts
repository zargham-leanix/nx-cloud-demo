import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo6Component } from './lib48-demo6.component';

describe('Lib48Demo6Component', () => {
  let component: Lib48Demo6Component;
  let fixture: ComponentFixture<Lib48Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
