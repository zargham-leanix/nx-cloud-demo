import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo25Component } from './lib68-demo25.component';

describe('Lib68Demo25Component', () => {
  let component: Lib68Demo25Component;
  let fixture: ComponentFixture<Lib68Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
