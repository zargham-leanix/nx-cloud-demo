import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo14Component } from './lib25-demo14.component';

describe('Lib25Demo14Component', () => {
  let component: Lib25Demo14Component;
  let fixture: ComponentFixture<Lib25Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
