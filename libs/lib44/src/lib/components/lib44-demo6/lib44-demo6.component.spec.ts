import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo6Component } from './lib44-demo6.component';

describe('Lib44Demo6Component', () => {
  let component: Lib44Demo6Component;
  let fixture: ComponentFixture<Lib44Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
