import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo14Component } from './lib61-demo14.component';

describe('Lib61Demo14Component', () => {
  let component: Lib61Demo14Component;
  let fixture: ComponentFixture<Lib61Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
