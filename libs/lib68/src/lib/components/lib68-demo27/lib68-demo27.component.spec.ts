import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo27Component } from './lib68-demo27.component';

describe('Lib68Demo27Component', () => {
  let component: Lib68Demo27Component;
  let fixture: ComponentFixture<Lib68Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
