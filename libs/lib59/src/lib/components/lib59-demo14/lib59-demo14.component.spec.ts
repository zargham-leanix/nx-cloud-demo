import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo14Component } from './lib59-demo14.component';

describe('Lib59Demo14Component', () => {
  let component: Lib59Demo14Component;
  let fixture: ComponentFixture<Lib59Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
