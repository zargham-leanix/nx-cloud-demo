import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo32Component } from './lib68-demo32.component';

describe('Lib68Demo32Component', () => {
  let component: Lib68Demo32Component;
  let fixture: ComponentFixture<Lib68Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
