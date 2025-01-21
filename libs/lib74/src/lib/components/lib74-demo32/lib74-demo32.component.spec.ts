import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo32Component } from './lib74-demo32.component';

describe('Lib74Demo32Component', () => {
  let component: Lib74Demo32Component;
  let fixture: ComponentFixture<Lib74Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
