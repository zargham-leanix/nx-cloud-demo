import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo11Component } from './lib68-demo11.component';

describe('Lib68Demo11Component', () => {
  let component: Lib68Demo11Component;
  let fixture: ComponentFixture<Lib68Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
