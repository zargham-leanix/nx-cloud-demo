import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo14Component } from './lib85-demo14.component';

describe('Lib85Demo14Component', () => {
  let component: Lib85Demo14Component;
  let fixture: ComponentFixture<Lib85Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
