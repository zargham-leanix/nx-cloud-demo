import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo46Component } from './lib68-demo46.component';

describe('Lib68Demo46Component', () => {
  let component: Lib68Demo46Component;
  let fixture: ComponentFixture<Lib68Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
