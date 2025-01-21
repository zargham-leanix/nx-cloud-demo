import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo6Component } from './lib57-demo6.component';

describe('Lib57Demo6Component', () => {
  let component: Lib57Demo6Component;
  let fixture: ComponentFixture<Lib57Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
