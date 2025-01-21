import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo14Component } from './lib74-demo14.component';

describe('Lib74Demo14Component', () => {
  let component: Lib74Demo14Component;
  let fixture: ComponentFixture<Lib74Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
