import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo40Component } from './lib68-demo40.component';

describe('Lib68Demo40Component', () => {
  let component: Lib68Demo40Component;
  let fixture: ComponentFixture<Lib68Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
