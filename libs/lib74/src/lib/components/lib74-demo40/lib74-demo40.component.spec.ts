import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo40Component } from './lib74-demo40.component';

describe('Lib74Demo40Component', () => {
  let component: Lib74Demo40Component;
  let fixture: ComponentFixture<Lib74Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
