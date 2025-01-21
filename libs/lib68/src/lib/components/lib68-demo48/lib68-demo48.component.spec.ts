import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo48Component } from './lib68-demo48.component';

describe('Lib68Demo48Component', () => {
  let component: Lib68Demo48Component;
  let fixture: ComponentFixture<Lib68Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
