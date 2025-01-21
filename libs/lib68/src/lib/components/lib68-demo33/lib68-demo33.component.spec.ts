import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo33Component } from './lib68-demo33.component';

describe('Lib68Demo33Component', () => {
  let component: Lib68Demo33Component;
  let fixture: ComponentFixture<Lib68Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
