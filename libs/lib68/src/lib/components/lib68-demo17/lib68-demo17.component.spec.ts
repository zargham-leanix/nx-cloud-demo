import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo17Component } from './lib68-demo17.component';

describe('Lib68Demo17Component', () => {
  let component: Lib68Demo17Component;
  let fixture: ComponentFixture<Lib68Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
