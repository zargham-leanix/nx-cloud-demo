import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo37Component } from './lib68-demo37.component';

describe('Lib68Demo37Component', () => {
  let component: Lib68Demo37Component;
  let fixture: ComponentFixture<Lib68Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
