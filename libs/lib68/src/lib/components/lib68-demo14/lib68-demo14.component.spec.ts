import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo14Component } from './lib68-demo14.component';

describe('Lib68Demo14Component', () => {
  let component: Lib68Demo14Component;
  let fixture: ComponentFixture<Lib68Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
