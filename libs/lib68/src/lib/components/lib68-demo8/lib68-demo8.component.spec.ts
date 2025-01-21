import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo8Component } from './lib68-demo8.component';

describe('Lib68Demo8Component', () => {
  let component: Lib68Demo8Component;
  let fixture: ComponentFixture<Lib68Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
