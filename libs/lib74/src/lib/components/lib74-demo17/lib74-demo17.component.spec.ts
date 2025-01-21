import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo17Component } from './lib74-demo17.component';

describe('Lib74Demo17Component', () => {
  let component: Lib74Demo17Component;
  let fixture: ComponentFixture<Lib74Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
