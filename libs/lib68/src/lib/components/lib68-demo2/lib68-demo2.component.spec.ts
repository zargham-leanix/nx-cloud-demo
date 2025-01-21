import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo2Component } from './lib68-demo2.component';

describe('Lib68Demo2Component', () => {
  let component: Lib68Demo2Component;
  let fixture: ComponentFixture<Lib68Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
