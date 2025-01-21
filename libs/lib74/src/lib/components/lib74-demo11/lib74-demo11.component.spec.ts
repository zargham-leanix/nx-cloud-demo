import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo11Component } from './lib74-demo11.component';

describe('Lib74Demo11Component', () => {
  let component: Lib74Demo11Component;
  let fixture: ComponentFixture<Lib74Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
