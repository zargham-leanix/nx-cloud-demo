import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo2Component } from './lib74-demo2.component';

describe('Lib74Demo2Component', () => {
  let component: Lib74Demo2Component;
  let fixture: ComponentFixture<Lib74Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
